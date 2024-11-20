package com.example.tutoring.repository;

import com.example.tutoring.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepository extends MongoRepository<Student, String> {
    public Student findByEmail(String email);
}
