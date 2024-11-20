package com.example.tutoring.service;

import com.example.tutoring.dto.TeacherDTO;

import com.example.tutoring.exception.GenericHttpException;
import com.example.tutoring.model.Teacher;
import com.example.tutoring.parser.TeacherParser;
import com.example.tutoring.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherService {
    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    private TeacherParser teacherParser;

    public List<TeacherDTO> getAllTeachers(){
        List<Teacher> teachers = teacherRepository.findAll();
        List<TeacherDTO> teachersDTOs = teachers.stream().map(teacher -> teacherParser.toDto(teacher)).toList();
        return teachersDTOs;
    }

    public TeacherDTO getTeacherById(String id) {
        Optional<Teacher> teacher = teacherRepository.findById(id);
        if(!teacher.isPresent()){
            throw new GenericHttpException(HttpStatus.NOT_FOUND, "No teacher exists with this id");
        }

        TeacherDTO teacherDTO = teacherParser.toDto(teacher.get());
        return teacherDTO;
    }

    public TeacherDTO updateTeacher(String teacherId, TeacherDTO teacherDTO) {
        Optional<Teacher> fetchedTeacher = teacherRepository.findById(teacherId);
        if(fetchedTeacher.isPresent() == false){
            throw new GenericHttpException(HttpStatus.OK, "teacher not found");
        }

        Teacher teacher = fetchedTeacher.get();

        if (StringUtils.hasText(teacherDTO.getFullName())) {
            teacher.setFullName(teacherDTO.getFullName());
        }


        if (teacherDTO.getAddress() != null) {
            teacher.setAddress(teacherDTO.getAddress());
        }
        if (StringUtils.hasText(teacherDTO.getCollegeName())) {
            teacher.setCollegeName(teacherDTO.getCollegeName());
        }
        if (teacherDTO.getCollegeAddress() != null) {
            teacher.setCollegeAddress(teacherDTO.getCollegeAddress());
        }
        if (StringUtils.hasText(teacherDTO.getDegree())) {
            teacher.setDegree(teacherDTO.getDegree());
        }
        if (StringUtils.hasText(teacherDTO.getLevel())) {
            teacher.setLevel(teacherDTO.getLevel());
        }


        // Save the updated teacher entity
        Teacher updatedteacher = teacherRepository.save(teacher);

        // Convert the updated teacher entity back to a DTO
        return teacherParser.toDto(updatedteacher);
    }
}
