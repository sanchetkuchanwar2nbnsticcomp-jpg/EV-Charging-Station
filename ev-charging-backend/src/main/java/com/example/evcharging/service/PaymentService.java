package com.example.evcharging.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.evcharging.entity.Payment;
import com.example.evcharging.entity.Booking;
import com.example.evcharging.repository.PaymentRepository;
import com.example.evcharging.repository.BookingRepository;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private BookingRepository bookingRepository;

    public Payment createPayment(Payment payment) {
        Long bookingId = payment.getBooking().getId();

        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found with id " + bookingId));

        payment.setBooking(booking);
        return paymentRepository.save(payment);
    }
}
