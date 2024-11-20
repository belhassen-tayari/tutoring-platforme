package com.example.tutoring.controller;

import com.example.tutoring.dto.StudentDTO;
import com.example.tutoring.model.Student;
import com.example.tutoring.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${api.endpoint.baseUrl}/students")
public class StudentController {
    @Autowired
    private StudentService studentService;



    @GetMapping
    public List<StudentDTO> getAllStudents(){
        return studentService.getAllStudents();
    }

    @GetMapping("/{id}")
    public StudentDTO getStudentById(@PathVariable String id){
        return studentService.getStudentById(id);
    }

    @PutMapping("/{userId}")
    public StudentDTO updateStudent(@RequestBody StudentDTO studentDTO, @PathVariable String userId){
        return studentService.updateStudent(userId, studentDTO);
    }

}
