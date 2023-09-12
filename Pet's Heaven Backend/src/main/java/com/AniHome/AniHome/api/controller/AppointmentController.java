package com.AniHome.AniHome.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.AniHome.AniHome.api.entity.Appointment;
import com.AniHome.AniHome.api.service.AppointmentService;

@RestController
@RequestMapping("/auth")
public class AppointmentController {
	AppointmentService appointmentService;
	
	@Autowired
	public AppointmentController(AppointmentService aptServ) {
		appointmentService = aptServ;
	}
	
	@PostMapping("/appointment")
	@PreAuthorize("hasRole('Rescuer')")
	public Appointment createApt(@RequestBody Appointment apt) {
		apt.setId(0);
		appointmentService.createApt(apt);
		return apt;
	}
	
	@PutMapping("/appointment")
	@PreAuthorize("hasRole('Rescuer')")
	public Appointment updateApt(@RequestBody Appointment apt) {
		appointmentService.updateApt(apt);
		return apt;
	}
	
	@DeleteMapping("/appointment/{aptId}")
	@PreAuthorize("hasRole('Rescuer')")
	public String deleteApt(@PathVariable int aptId) {
		Appointment apt = appointmentService.getAptById(aptId);
		appointmentService.deleteApt(aptId);
		return apt.getUsername() + " appointment is deleted.";
	}
	
	@GetMapping("/aptid/{aptId}")
	public Appointment getAptById(@PathVariable int aptId) {
		Appointment apt = appointmentService.getAptById(aptId);
		if (apt == null) {
			throw new RuntimeException("Appointment Id not found");
		}
		return apt;
	}
	
	@GetMapping("/appointment")
	public List<Appointment> getComplaints() {
		return appointmentService.getApt();
	}
	
	@GetMapping("/appointresc/{userName}")
	@PreAuthorize("hasRole('Rescuer')")
	public List<Appointment> getAllComplaintsByRescuer(@PathVariable String userName) {
		return appointmentService.getAptbyResc(userName);
	}
	
	@GetMapping("/appointuser/{userName}")
	@PreAuthorize("hasRole('User')")
	public List<Appointment> getAllComplaintsByUser(@PathVariable String userName) {
		return appointmentService.getAptbyUser(userName);
	}
}
