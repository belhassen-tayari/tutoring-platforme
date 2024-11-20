package com.example.tutoring.model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "Teachers")
public class Teacher extends Student{
    private String aboutMe;
    private List<String> skills;
    private double pricePerHour;
    private float rate;
    private List<Review> reviews;


    public Teacher() {
    }

    public Teacher(String id, String email, String password, String fullName, String phoneNumber, String imageUrl, Address address, String collegeName, Address collegeAddress, String degree, String level, String aboutMe, List<String> skills, double pricePerHour, float rate, List<Review> reviews) {
        super(id, email, password, fullName, phoneNumber, imageUrl, address, collegeName, collegeAddress, degree, level);
        this.setRole("teacher");
        this.aboutMe = aboutMe;
        this.skills = skills;
        this.pricePerHour = pricePerHour;
        this.rate = rate;
        this.reviews = reviews;
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

    @Override
    public String getRole(){return "teacher";}


}
