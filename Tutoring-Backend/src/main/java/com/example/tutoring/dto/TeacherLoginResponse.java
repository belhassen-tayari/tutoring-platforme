package com.example.tutoring.dto;

public class TeacherLoginResponse {
        private String accessToken;
        private TeacherDTO teacher;

        public TeacherLoginResponse() {
        }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public TeacherDTO getTeacher() {
        return teacher;
    }

    public void setTeacher(TeacherDTO teacher) {
        this.teacher = teacher;
    }
}