package com.example.tutoring.dto;

public class StudentLoginResponse {
        private String accessToken;
        private StudentDTO student;

        public StudentLoginResponse() {
        }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public StudentDTO getStudent() {
        return student;
    }

    public void setStudent(StudentDTO student) {
        this.student = student;
    }
}