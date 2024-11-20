package com.example.tutoring.model;

public class Review {
    private Student reviewer;
    private Student reviewee;
    private double rate;
    private String text;

    public Review(Student reviewer, Student reviewee, double rate, String text) {
        this.reviewer = reviewer;
        this.reviewee = reviewee;
        this.rate = rate;
        this.text = text;
    }


    public Student getReviewer() {
        return reviewer;
    }

    public void setReviewer(Student reviewer) {
        this.reviewer = reviewer;
    }

    public Student getReviewee() {
        return reviewee;
    }

    public void setReviewee(Student reviewee) {
        this.reviewee = reviewee;
    }

    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
