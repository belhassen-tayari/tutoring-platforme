package com.example.tutoring.utils;

import com.example.tutoring.exception.GenericHttpException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.SignatureException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private static final String SECRET_KEY = Base64.getEncoder().encodeToString("eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxNzg2NTU4MiwiaWF0IjoxNzE3ODY1NTgyfQ.YZnDNO_KcvvaKxLa-J5X7cWqnBU3IzCZSZrQQswS_5c".getBytes());

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {


        String jwt = getJwtFromRequest(request);

        try {
            if (StringUtils.hasText(jwt) && validateToken(jwt)) {
                Claims claims = getClaimsFromJWT(jwt);
                String userId = claims.getSubject();
                List<String> roles = claims.get("roles", List.class);

                if (userId != null) {
                    List<SimpleGrantedAuthority> authorities = roles.stream()
                            .map(role -> new SimpleGrantedAuthority(role.startsWith("ROLE_") ? role : "ROLE_" + role))
                            .collect(Collectors.toList());

                    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                            userId, null, authorities);

                    authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }
            }
        }  catch (ExpiredJwtException ex) {
            throw new GenericHttpException(HttpStatus.UNAUTHORIZED, "Token Expired");
        } catch (SignatureException ex) {
            throw new GenericHttpException(HttpStatus.UNAUTHORIZED, "Invalid token signature");
        } catch (JwtException ex) {
            throw new GenericHttpException(HttpStatus.UNAUTHORIZED, "Token validation failed");
        }

        filterChain.doFilter(request, response);
    }

    private String getJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }

    private boolean validateToken(String authToken) {
        Jwts.parserBuilder().setSigningKey(SECRET_KEY).build().parseClaimsJws(authToken);
        return true;
    }

    private Claims getClaimsFromJWT(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(SECRET_KEY)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}