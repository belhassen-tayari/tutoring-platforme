package com.example.tutoring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackages = "com.example.tutoring.repository")
public class TutoringApplication {

    public static void main(String[] args) {
        SpringApplication.run(TutoringApplication.class, args);
    }

}
