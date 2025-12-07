package com.example.evcharging.controller;

import com.example.evcharging.entity.SavedStation;
import com.example.evcharging.service.SavedStationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/savedStations")
@CrossOrigin(origins = "http://localhost:5173")
public class SavedStationController {

    private final SavedStationService savedStationService;

    public SavedStationController(SavedStationService savedStationService) {
        this.savedStationService = savedStationService;
    }

    @GetMapping("/{userId}")
    public List<SavedStation> getSavedStations(@PathVariable Long userId) {
        return savedStationService.getSavedStations(userId);
    }

    @PostMapping("/{userId}")
    public SavedStation saveStation(@PathVariable Long userId, @RequestBody SavedStation station) {
        return savedStationService.saveStation(userId, station);
    }

    @DeleteMapping("/{id}")
    public String deleteSavedStation(@PathVariable Long id) {
        savedStationService.deleteSavedStation(id);
        return "Saved station removed";
    }
}
