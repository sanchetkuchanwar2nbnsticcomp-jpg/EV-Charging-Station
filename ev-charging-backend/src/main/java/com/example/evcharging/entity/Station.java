package com.example.evcharging.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "stations")
public class Station {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String location;
    private int totalPorts;
    private int availablePorts;
    private int availableChargers; // 👈 add this line

    @OneToMany(mappedBy = "station", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Booking> bookings;

    public Station() {}

    public Station(String name, String location, int totalPorts, int availablePorts, int availableChargers) {
        this.name = name;
        this.location = location;
        this.totalPorts = totalPorts;
        this.availablePorts = availablePorts;
        this.availableChargers = availableChargers;
    }

    // getters & setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public int getTotalPorts() { return totalPorts; }
    public void setTotalPorts(int totalPorts) { this.totalPorts = totalPorts; }

    public int getAvailablePorts() { return availablePorts; }
    public void setAvailablePorts(int availablePorts) { this.availablePorts = availablePorts; }

    public int getAvailableChargers() { return availableChargers; }
    public void setAvailableChargers(int availableChargers) { this.availableChargers = availableChargers; }

    public List<Booking> getBookings() { return bookings; }
    public void setBookings(List<Booking> bookings) { this.bookings = bookings; }
}
