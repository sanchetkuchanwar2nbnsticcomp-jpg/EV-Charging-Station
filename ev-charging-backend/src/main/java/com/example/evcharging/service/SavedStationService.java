package com.example.evcharging.service;

import com.example.evcharging.entity.SavedStation;
import com.example.evcharging.entity.User;
import com.example.evcharging.repository.SavedStationRepository;
import com.example.evcharging.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SavedStationService {

    private final SavedStationRepository savedStationRepository;
    private final UserRepository userRepository;

    public SavedStationService(SavedStationRepository savedStationRepository, UserRepository userRepository) {
        this.savedStationRepository = savedStationRepository;
        this.userRepository = userRepository;
    }

    public List<SavedStation> getSavedStations(Long userId) {
        return savedStationRepository.findByUserId(userId);
    }

    public SavedStation saveStation(Long userId, SavedStation station) {
        User user = userRepository.findById(userId).orElseThrow();

        station.setUser(user);
        return savedStationRepository.save(station);
    }

    public void deleteSavedStation(Long stationId) {
        savedStationRepository.deleteById(stationId);
    }
}
