package com.example.tutoring.parser;

import com.example.tutoring.dto.StudentDTO;
import com.example.tutoring.dto.TeacherDTO;
import com.example.tutoring.model.Teacher;
import org.springframework.stereotype.Component;

@Component
public class TeacherParser {
    public TeacherDTO toDto(Teacher teacher){
        TeacherDTO teacherDTO = new TeacherDTO();
        teacherDTO.setId(teacher.getId());
        teacherDTO.setEmail(teacher.getEmail());
        teacherDTO.setAddress(teacher.getAddress());
        teacherDTO.setDegree(teacher.getDegree());
        teacherDTO.setLevel(teacher.getLevel());
        teacherDTO.setCollegeAddress(teacher.getCollegeAddress());
        teacherDTO.setCollegeAddress(teacher.getCollegeAddress());
        teacherDTO.setFullName(teacher.getFullName());
        teacherDTO.setPhoneNumber(teacher.getPhoneNumber());
        teacherDTO.setImageUrl(teacher.getImageUrl());
        teacherDTO.setPricePerHour(teacher.getPricePerHour());
        teacherDTO.setRate(teacher.getRate());
        teacherDTO.setReviews(teacher.getReviews());
        teacherDTO.setSkills(teacher.getSkills());
        teacherDTO.setRole(teacher.getRole());
        return teacherDTO;
    }

    public Teacher fromDto(TeacherDTO teacherDTO) {
        Teacher teacher = new Teacher();
        teacher.setEmail(teacherDTO.getEmail());
        teacher.setAddress(teacherDTO.getAddress());
        teacher.setDegree(teacherDTO.getDegree());
        teacher.setLevel(teacherDTO.getLevel());
        teacher.setCollegeAddress(teacherDTO.getCollegeAddress());
        teacher.setFullName(teacherDTO.getFullName());
        teacher.setPhoneNumber(teacherDTO.getPhoneNumber());
        teacher.setImageUrl(teacherDTO.getImageUrl());
        teacher.setPricePerHour(teacherDTO.getPricePerHour());
        teacher.setRate(teacherDTO.getRate());
        teacher.setReviews(teacherDTO.getReviews());
        teacher.setSkills(teacherDTO.getSkills());
        teacher.setRole(teacherDTO.getRole());
        return teacher;
    }

}
