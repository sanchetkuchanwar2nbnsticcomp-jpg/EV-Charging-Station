package com.example.evcharging.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;
    private String password;

    // ✅ Added missing username field
    @Column(nullable = false, unique = true)
    private String username;

    private String membership;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Booking> bookings;

    public User() {}

    public User(String name, String email, String phone, String password, String username) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.username = username;
    }

    // ----------- GETTERS & SETTERS -------------

    public Long getId() { 
        return id; 
    }
    public void setId(Long id) { 
        this.id = id; 
    }

    public String getName() { 
        return name; 
    }
    public void setName(String name) { 
        this.name = name; 
    }

    public String getEmail() { 
        return email; 
    }
    public void setEmail(String email) { 
        this.email = email; 
    }

    public String getPhone() { 
        return phone; 
    }
    public void setPhone(String phone) { 
        this.phone = phone; 
    }

    public String getPassword() { 
        return password; 
    }
    public void setPassword(String password) { 
        this.password = password; 
    }

    public String getUsername() { 
        return username; 
    }
    public void setUsername(String username) { 
        this.username = username; 
    }

    public String getMembership() { 
        return membership; 
    }
    public void setMembership(String membership) { 
        this.membership = membership; 
    }

    public List<Booking> getBookings() { 
        return bookings; 
    }
    public void setBookings(List<Booking> bookings) { 
        this.bookings = bookings; 
    }
}
