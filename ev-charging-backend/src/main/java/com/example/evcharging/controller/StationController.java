package com.example.evcharging.controller;

import com.example.evcharging.entity.Station;
import com.example.evcharging.repository.StationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stations")
public class StationController {

    @Autowired
    private StationRepository stationRepository;

    @PostMapping
    public Station addStation(@RequestBody Station station) {
        return stationRepository.save(station);
    }

    @GetMapping
    public List<Station> getAllStations() {
        return stationRepository.findAll();
    }

    @GetMapping("/{id}")
    public Station getStationById(@PathVariable Long id) {
        return stationRepository.findById(id).orElse(null);
    }
}
