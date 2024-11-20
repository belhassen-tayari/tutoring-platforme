package com.example.tutoring.service;

import com.example.tutoring.dto.StudentDTO;
import com.example.tutoring.exception.GenericHttpException;
import com.example.tutoring.model.Student;
import com.example.tutoring.parser.StudentParser;
import com.example.tutoring.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;


    @Autowired
    private StudentParser studentParser;

    public List<StudentDTO> getAllStudents() {
        List<Student> students = studentRepository.findAll();
        List<StudentDTO> studentDTOS = students.stream().map(student -> studentParser.toDto(student)).toList();
        return studentDTOS;

    }

    public StudentDTO getStudentById(String id) {
        Optional<Student> student = studentRepository.findById(id);
        if(!student.isPresent()){
            throw new GenericHttpException(HttpStatus.NOT_FOUND, "No student exists with this id");
        }

        StudentDTO studentDTO = studentParser.toDto(student.get());
        return studentDTO;
    }

    public StudentDTO updateStudent(String userId, StudentDTO studentDTO){
        Optional<Student> fetchedStudent = studentRepository.findById(userId);
        if(!fetchedStudent.isPresent()){
            throw new GenericHttpException(HttpStatus.OK, "Student not found");
        }

        Student student = fetchedStudent.get();

        if (StringUtils.hasText(studentDTO.getFullName())) {
            student.setFullName(studentDTO.getFullName());
        }


        if (studentDTO.getAddress() != null) {
            student.setAddress(studentDTO.getAddress());
        }
        if (StringUtils.hasText(studentDTO.getCollegeName())) {
            student.setCollegeName(studentDTO.getCollegeName());
        }
        if (studentDTO.getCollegeAddress() != null) {
            student.setCollegeAddress(studentDTO.getCollegeAddress());
        }
        if (StringUtils.hasText(studentDTO.getDegree())) {
            student.setDegree(studentDTO.getDegree());
        }
        if (StringUtils.hasText(studentDTO.getLevel())) {
            student.setLevel(studentDTO.getLevel());
        }


        // Save the updated student entity
        Student updatedStudent = studentRepository.save(student);

        // Convert the updated student entity back to a DTO
        return studentParser.toDto(updatedStudent);

    }
}
