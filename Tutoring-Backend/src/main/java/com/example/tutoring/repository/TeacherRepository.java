package com.example.tutoring.repository;

import com.example.tutoring.model.Teacher;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TeacherRepository extends MongoRepository<Teacher, String> {
    public Teacher findByEmail(String email);
}
