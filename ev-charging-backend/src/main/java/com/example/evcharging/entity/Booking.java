package com.example.evcharging.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime bookingTime;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private double totalCost;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore   // 🔥 prevents infinite recursion
    private User user;

    @ManyToOne
    @JoinColumn(name = "station_id", nullable = false)
    @JsonIgnore  // optional but recommended
    private Station station;

    // Constructors
    public Booking() {}

    public Booking(LocalDateTime bookingTime, LocalDateTime startTime, LocalDateTime endTime, double totalCost, User user, Station station) {
        this.bookingTime = bookingTime;
        this.startTime = startTime;
        this.endTime = endTime;
        this.totalCost = totalCost;
        this.user = user;
        this.station = station;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getBookingTime() {
        return bookingTime;
    }

    public void setBookingTime(LocalDateTime bookingTime) {
        this.bookingTime = bookingTime;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(double totalCost) {
        this.totalCost = totalCost;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Station getStation() {
        return station;
    }

    public void setStation(Station station) {
        this.station = station;
    }
}
