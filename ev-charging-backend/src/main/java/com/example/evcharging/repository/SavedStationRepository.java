package com.example.evcharging.repository;

import com.example.evcharging.entity.SavedStation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SavedStationRepository extends JpaRepository<SavedStation, Long> {

    List<SavedStation> findByUserId(Long userId);
}
