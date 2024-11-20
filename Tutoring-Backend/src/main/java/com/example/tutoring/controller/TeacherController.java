package com.example.tutoring.controller;

import com.example.tutoring.dto.StudentDTO;
import com.example.tutoring.dto.TeacherDTO;
import com.example.tutoring.parser.TeacherParser;
import com.example.tutoring.repository.TeacherRepository;
import com.example.tutoring.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/${api.endpoint.baseUrl}/teachers")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    @GetMapping
    public List<TeacherDTO> getAllTeachers(){
        return teacherService.getAllTeachers();
    }

    @GetMapping("/{userId}")
    public TeacherDTO getTeacherById(@PathVariable String userId){
        return teacherService.getTeacherById(userId);
    }

    @PutMapping("/{teacherId}")
    public TeacherDTO updateTeacher(@RequestBody TeacherDTO teacherDTO, @PathVariable String teacherId){
        return teacherService.updateTeacher(teacherId, teacherDTO);
    }
}
