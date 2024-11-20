package com.example.tutoring.dto;

import com.example.tutoring.model.Address;

public class StudentDTO {
    private String id;
    private String email;
    private String fullName;
    private String phoneNumber;
    private String imageUrl;
    private Address address;
    private String collegeName;
    private Address collegeAddress;
    private String degree;
    private String level;
    private String role;


    public StudentDTO() {
    }

    public StudentDTO(String email, String fullName, String phoneNumber, String imageUrl, Address address, String collegeName, Address collegeAddress, String degree, String level, String role) {
        this.email = email;
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
        this.imageUrl = imageUrl;
        this.address = address;
        this.collegeName = collegeName;
        this.collegeAddress = collegeAddress;
        this.degree = degree;
        this.level = level;
        this.role = role;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }



    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public String getCollegeName() {
        return collegeName;
    }

    public void setCollegeName(String collegeName) {
        this.collegeName = collegeName;
    }

    public Address getCollegeAddress() {
        return collegeAddress;
    }

    public void setCollegeAddress(Address collegeAddress) {
        this.collegeAddress = collegeAddress;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
