package com.example.tutoring.controller;

import com.example.tutoring.dto.EmailRequest;
import com.example.tutoring.dto.LoginDTO;
import com.example.tutoring.dto.StudentDTO;
import com.example.tutoring.dto.TeacherDTO;
import com.example.tutoring.model.Student;
import com.example.tutoring.model.Teacher;
import com.example.tutoring.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("${api.endpoint.baseUrl}/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/checkEmail")
    public ResponseEntity<?> checkEmail(@RequestBody EmailRequest emailRequest){
        return authService.checkEmail(emailRequest);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO loginDTO){
        return authService.login(loginDTO);
    }

    @PostMapping("/student/signup")
    public ResponseEntity<StudentDTO> registerStudent(@RequestBody Student student){
        return authService.registerStudent(student);
    }
    @PostMapping("/teacher/signup")
    public ResponseEntity<TeacherDTO> registerTeacher(@RequestBody Teacher teacher){
        return authService.registerTeacher(teacher);
    }
}
