package com.example.evcharging.service;

import com.example.evcharging.entity.Station;
import com.example.evcharging.repository.StationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StationService {

    private final StationRepository stationRepository;

    public StationService(StationRepository stationRepository) {
        this.stationRepository = stationRepository;
    }

    public List<Station> getAllStations() {
        return stationRepository.findAll();
    }

    public Station addStation(Station station) {
        return stationRepository.save(station);
    }

    public Station getStationById(Long id) {
        return stationRepository.findById(id).orElse(null);
    }

    public void deleteStation(Long id) {
        stationRepository.deleteById(id);
    }
}
