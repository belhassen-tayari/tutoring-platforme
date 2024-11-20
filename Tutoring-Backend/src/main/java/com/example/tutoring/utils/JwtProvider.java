package com.example.tutoring.utils;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Base64;
import java.util.Date;
import java.util.List;
import io.jsonwebtoken.*;

import javax.crypto.SecretKey;
import java.util.Base64;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
@Component
public class JwtProvider {

    private static final String SECRET_KEY = Base64.getEncoder().encodeToString("eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxNzg2NTU4MiwiaWF0IjoxNzE3ODY1NTgyfQ.YZnDNO_KcvvaKxLa-J5X7cWqnBU3IzCZSZrQQswS_5c".getBytes());

    private static final long EXPIRATION_TIME = 86400000; // 1 day

    public String generateToken(String userId, List<String> roles) {
        return Jwts.builder()
                .setSubject(userId)
                .claim("roles", roles)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }
}