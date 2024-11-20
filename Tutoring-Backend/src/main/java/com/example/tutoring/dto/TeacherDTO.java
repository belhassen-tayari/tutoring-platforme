package com.example.tutoring.dto;

import com.example.tutoring.model.Address;
import com.example.tutoring.model.Review;

import java.util.List;

public class TeacherDTO {
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
    private String aboutMe;
    private List<String> skills;
    private double pricePerHour;
    private float rate;
    private List<Review> reviews;
    private String role = "teacher";

    public TeacherDTO() {
    }

    public TeacherDTO(String email, String fullName, String phoneNumber, String imageUrl, Address address, String collegeName, Address collegeAddress, String degree, String level, String aboutMe, List<String> skills, double pricePerHour, float rate, List<Review> reviews, String role) {
        this.email = email;
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
        this.imageUrl = imageUrl;
        this.address = address;
        this.collegeName = collegeName;
        this.collegeAddress = collegeAddress;
        this.degree = degree;
        this.level = level;
        this.aboutMe = aboutMe;
        this.skills = skills;
        this.pricePerHour = pricePerHour;
        this.rate = rate;
        this.reviews = reviews;
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

    public String getAboutMe() {
        return aboutMe;
    }

    public void setAboutMe(String aboutMe) {
        this.aboutMe = aboutMe;
    }

    public List<String> getSkills() {
        return skills;
    }

    public void setSkills(List<String> skills) {
        this.skills = skills;
    }

    public double getPricePerHour() {
        return pricePerHour;
    }

    public void setPricePerHour(double pricePerHour) {
        this.pricePerHour = pricePerHour;
    }

    public float getRate() {
        return rate;
    }

    public void setRate(float rate) {
        this.rate = rate;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
