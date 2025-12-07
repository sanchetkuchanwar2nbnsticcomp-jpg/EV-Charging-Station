package com.example.evcharging.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "saved_stations")
public class SavedStation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String stationName;
    private String location;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public SavedStation() {}

    public SavedStation(String stationName, String location, User user) {
        this.stationName = stationName;
        this.location = location;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public String getStationName() {
        return stationName;
    }

    public void setStationName(String stationName) {
        this.stationName = stationName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
