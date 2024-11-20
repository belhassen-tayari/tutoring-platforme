package com.example.tutoring;

import com.example.tutoring.dto.*;
import com.example.tutoring.exception.GenericHttpException;
import com.example.tutoring.model.Student;
import com.example.tutoring.model.Teacher;
import com.example.tutoring.parser.StudentParser;
import com.example.tutoring.parser.TeacherParser;
import com.example.tutoring.repository.StudentRepository;
import com.example.tutoring.repository.TeacherRepository;
import com.example.tutoring.service.AuthService;
import com.example.tutoring.utils.JwtProvider;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Collections;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AuthServiceTest {

    @Mock
    private StudentRepository studentRepository;

    @Mock
    private StudentParser studentParser;

    @Mock
    private TeacherRepository teacherRepository;

    @Mock
    private TeacherParser teacherParser;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private JwtProvider jwtProvider;

    @InjectMocks
    private AuthService authService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testLoginAsStudent_Success() {
        LoginDTO loginDTO = new LoginDTO("example@examplee.com", "password123");
        Student student = new Student();
        student.setEmail("example@examplee.com");
        student.setPassword("$2a$12$85p8d6x/12V5/OGMkGPqvuZrVxF0qJbyMU4EEG9Ygr5ysZ8WsB44a");

        when(studentRepository.findByEmail(loginDTO.getEmail())).thenReturn(student);
        when(passwordEncoder.matches(loginDTO.getPassword(), student.getPassword())).thenReturn(true);
        when(jwtProvider.generateToken(student.getId(), Collections.singletonList("ROLE_STUDENT"))).thenReturn("token");
        StudentDTO studentDTO = new StudentDTO();
        when(studentParser.toDto(student)).thenReturn(studentDTO);

        ResponseEntity<?> response = authService.login(loginDTO);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        StudentLoginResponse responseBody = (StudentLoginResponse) response.getBody();
        assertNotNull(responseBody);
        assertEquals("token", responseBody.getAccessToken());
        assertEquals(studentDTO, responseBody.getStudent());
    }

    @Test
    void testLoginAsTeacher_Success() {
        LoginDTO loginDTO = new LoginDTO("teaacheerr@exampyle.com", "example123");
        Teacher teacher = new Teacher();
        teacher.setEmail("teaacheerr@exampyle.com");
        teacher.setPassword("$2a$12$jEJdzQnfdLyrmDP7LYd2g.1g695J.pMwVW44B9dJ9QlogXDN6emqW");

        when(teacherRepository.findByEmail(loginDTO.getEmail())).thenReturn(teacher);
        when(passwordEncoder.matches(loginDTO.getPassword(), teacher.getPassword())).thenReturn(true);
        when(jwtProvider.generateToken(teacher.getId(), Collections.singletonList("ROLE_TEACHER"))).thenReturn("token");
        TeacherDTO teacherDTO = new TeacherDTO();
        when(teacherParser.toDto(teacher)).thenReturn(teacherDTO);

        ResponseEntity<?> response = authService.login(loginDTO);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        TeacherLoginResponse responseBody = (TeacherLoginResponse) response.getBody();
        assertNotNull(responseBody);
        assertEquals("token", responseBody.getAccessToken());
        assertEquals(teacherDTO, responseBody.getTeacher());
    }

    @Test
    void testLogin_InvalidCredentials() {
        LoginDTO loginDTO = new LoginDTO("invalid@example.com", "password");

        when(studentRepository.findByEmail(loginDTO.getEmail())).thenReturn(null);
        when(teacherRepository.findByEmail(loginDTO.getEmail())).thenReturn(null);

        GenericHttpException exception = assertThrows(GenericHttpException.class, () -> authService.login(loginDTO));

        assertEquals(HttpStatus.UNAUTHORIZED, exception.getStatus());
        assertEquals("Invalid email or password", exception.getMessage());
    }

    @Test
    void testRegisterStudent_Success() {
        Student student = new Student();
        student.setEmail("newstudent@example.com");
        student.setPassword("password");

        when(studentRepository.findByEmail(student.getEmail())).thenReturn(null);
        when(passwordEncoder.encode(student.getPassword())).thenReturn("encodedPassword");
        when(studentRepository.save(student)).thenReturn(student);
        StudentDTO studentDTO = new StudentDTO();
        when(studentParser.toDto(student)).thenReturn(studentDTO);

        ResponseEntity<StudentDTO> response = authService.registerStudent(student);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(studentDTO, response.getBody());
        verify(studentRepository, times(1)).save(student);
    }

    @Test
    void testRegisterStudent_EmailAlreadyExists() {
        Student student = new Student();
        student.setEmail("existingstudent@example.com");

        when(studentRepository.findByEmail(student.getEmail())).thenReturn(student);

        GenericHttpException exception = assertThrows(GenericHttpException.class, () -> authService.registerStudent(student));

        assertEquals(HttpStatus.CONFLICT, exception.getStatus());
        assertEquals("A Student with this email already exists", exception.getMessage());
    }

    @Test
    void testRegisterTeacher_Success() {
        Teacher teacher = new Teacher();
        teacher.setEmail("newteacher@example.com");
        teacher.setPassword("password");

        when(teacherRepository.findByEmail(teacher.getEmail())).thenReturn(null);
        when(passwordEncoder.encode(teacher.getPassword())).thenReturn("encodedPassword");
        when(teacherRepository.save(teacher)).thenReturn(teacher);
        TeacherDTO teacherDTO = new TeacherDTO();
        when(teacherParser.toDto(teacher)).thenReturn(teacherDTO);

        ResponseEntity<TeacherDTO> response = authService.registerTeacher(teacher);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(teacherDTO, response.getBody());
        verify(teacherRepository, times(1)).save(teacher);
    }

    @Test
    void testRegisterTeacher_EmailAlreadyExists() {
        Teacher teacher = new Teacher();
        teacher.setEmail("existingteacher@example.com");

        when(teacherRepository.findByEmail(teacher.getEmail())).thenReturn(teacher);

        GenericHttpException exception = assertThrows(GenericHttpException.class, () -> authService.registerTeacher(teacher));

        assertEquals(HttpStatus.CONFLICT, exception.getStatus());
        assertEquals("A Teacher with this email already exists", exception.getMessage());
    }
}
