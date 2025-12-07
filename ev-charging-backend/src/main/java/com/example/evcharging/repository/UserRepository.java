package com.example.evcharging.repository;

import com.example.evcharging.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // ✅ Find user by username
    User findByUsername(String username);

    // Optional: find by email if needed in future
    User findByEmail(String email);
}
