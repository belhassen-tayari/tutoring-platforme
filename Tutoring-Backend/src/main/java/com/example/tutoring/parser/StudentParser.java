package com.example.tutoring.parser;

import com.example.tutoring.dto.StudentDTO;
import com.example.tutoring.model.Student;
import org.springframework.stereotype.Component;

@Component
public class StudentParser {
    public StudentDTO toDto(Student student){
        StudentDTO studentDTO = new StudentDTO();
        studentDTO.setId(student.getId());
        studentDTO.setEmail(student.getEmail());
        studentDTO.setAddress(student.getAddress());
        studentDTO.setDegree(student.getDegree());
        studentDTO.setLevel(student.getLevel());
        studentDTO.setCollegeAddress(student.getCollegeAddress());
        studentDTO.setCollegeAddress(student.getCollegeAddress());
        studentDTO.setFullName(student.getFullName());
        studentDTO.setPhoneNumber(student.getPhoneNumber());
        studentDTO.setImageUrl(student.getImageUrl());
        studentDTO.setRole(student.getRole());
        return studentDTO;
    }

    public Student fromDto(StudentDTO studentDTO) {
        Student student = new Student();
        student.setEmail(studentDTO.getEmail());
        student.setAddress(studentDTO.getAddress());
        student.setDegree(studentDTO.getDegree());
        student.setLevel(studentDTO.getLevel());
        student.setCollegeAddress(studentDTO.getCollegeAddress());
        student.setFullName(studentDTO.getFullName());
        student.setPhoneNumber(studentDTO.getPhoneNumber());
        student.setImageUrl(studentDTO.getImageUrl());
        student.setRole(studentDTO.getRole());
        return student;
    }
}
