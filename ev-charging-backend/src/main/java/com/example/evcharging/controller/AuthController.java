package com.example.evcharging.controller;

import com.example.evcharging.dto.LoginRequest;
import com.example.evcharging.dto.LoginResponse;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")  // React dev port
@RestController
@RequestMapping("/api")
public class AuthController {

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {

        // Simple login for testing
        if ("admin".equals(request.getUsername()) && 
            "admin".equals(request.getPassword())) {

            return new LoginResponse(true, "Login successful");
        }

        return new LoginResponse(false, "Invalid username or password");
    }
}
