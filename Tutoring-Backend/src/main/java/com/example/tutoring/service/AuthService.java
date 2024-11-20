package com.example.tutoring.service;

import com.example.tutoring.dto.*;
import com.example.tutoring.exception.GenericHttpException;
import com.example.tutoring.model.Student;
import com.example.tutoring.model.Teacher;
import com.example.tutoring.parser.StudentParser;
import com.example.tutoring.parser.TeacherParser;
import com.example.tutoring.repository.StudentRepository;
import com.example.tutoring.repository.TeacherRepository;
import com.example.tutoring.utils.JwtProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class AuthService {
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private StudentParser studentParser;

    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    private TeacherParser teacherParser;

    @Autowired
    private PasswordEncoder passwordEncoder;


    private final JwtProvider jwtProvider;

    public AuthService(JwtProvider jwtProvider) {
        this.jwtProvider = jwtProvider;
    }

    public ResponseEntity<?> login(LoginDTO loginDTO) {

        Student student = studentRepository.findByEmail(loginDTO.getEmail());
        if (student != null && passwordEncoder.matches(loginDTO.getPassword(), student.getPassword())) {
            String accessToken = jwtProvider.generateToken(student.getId() , Collections.singletonList("ROLE_STUDENT"));

            StudentLoginResponse studentLoginResponse = new StudentLoginResponse();
            studentLoginResponse.setStudent(studentParser.toDto(student));
            studentLoginResponse.setAccessToken(accessToken);

            return new ResponseEntity<StudentLoginResponse>(studentLoginResponse, HttpStatus.OK);
        }

        Teacher teacher = teacherRepository.findByEmail(loginDTO.getEmail());
        if (teacher != null && passwordEncoder.matches(loginDTO.getPassword(), teacher.getPassword())) {

            String accessToken = jwtProvider.generateToken(teacher.getId() , Collections.singletonList("ROLE_TEACHER"));

            TeacherLoginResponse teacherLoginResponse = new TeacherLoginResponse();
            teacherLoginResponse.setTeacher(teacherParser.toDto(teacher));
            teacherLoginResponse.setAccessToken(accessToken);
            return new ResponseEntity<TeacherLoginResponse>(teacherLoginResponse, HttpStatus.OK);
        }

        throw new GenericHttpException(HttpStatus.UNAUTHORIZED,  "Invalid email or password");
    }

    public ResponseEntity<StudentDTO> registerStudent(Student student){
        Student existingStudent = studentRepository.findByEmail(student.getEmail());
        if(existingStudent != null){
            throw new GenericHttpException(HttpStatus.CONFLICT, "A Student with this email already exists");
        }

        student.setPassword(passwordEncoder.encode(student.getPassword()));
        Student savedStudent = studentRepository.save(student);
        return new ResponseEntity<StudentDTO>(studentParser.toDto(savedStudent), HttpStatus.CREATED);
    }

    public ResponseEntity<TeacherDTO> registerTeacher(Teacher teacher){
        Teacher existingTeacher = teacherRepository.findByEmail(teacher.getEmail());
        if(existingTeacher != null){
            throw new GenericHttpException(HttpStatus.CONFLICT, "A Teacher with this email already exists");
        }
        teacher.setPassword(passwordEncoder.encode(teacher.getPassword()));
        Teacher savedTeacher = teacherRepository.save(teacher);
        return new ResponseEntity<TeacherDTO>(teacherParser.toDto(savedTeacher), HttpStatus.CREATED);
    }

    public ResponseEntity<TeacherDTO> checkEmail(EmailRequest emailRequest){

        Teacher teacher = teacherRepository.findByEmail(emailRequest.getEmail());
        Student student = studentRepository.findByEmail(emailRequest.getEmail());

        if(student == null &&  teacher == null){
            throw new GenericHttpException(HttpStatus.NOT_FOUND, "User with this email not found");
        }

        return new ResponseEntity<>(HttpStatus.OK);

    }
}


