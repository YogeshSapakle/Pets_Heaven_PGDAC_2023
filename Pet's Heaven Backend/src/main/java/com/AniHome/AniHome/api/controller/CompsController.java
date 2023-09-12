package com.AniHome.AniHome.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.AniHome.AniHome.api.entity.Complaints;
import com.AniHome.AniHome.api.service.ComplaintsService;

@RestController
@RequestMapping("/auth")
public class CompsController {
	ComplaintsService complaintsService;
	
	@Autowired
	public CompsController(ComplaintsService compServ) {
		complaintsService = compServ;
	}
	
	@PostMapping("/complaints")
	@PreAuthorize("hasRole('User')")
	public Complaints createComp(@RequestBody Complaints c) {
		c.setId(0);
		complaintsService.createComp(c);
		return c;
	}
	
	@PutMapping("/complaints")
	@PreAuthorize("hasRole('User')")
	public Complaints updateFeedback(@RequestBody Complaints c) {
		complaintsService.updateComp(c);
		return c;
	}
	
	@DeleteMapping("/complaints/{compsId}")
	@PreAuthorize("hasRole('User')")
	public String deleteComplaint(@PathVariable int compsId) {
		Complaints c = complaintsService.getCompsById(compsId);
		complaintsService.deleteComp(compsId);
		return c.getUsername() + " is deleted.";
	}
	
	@GetMapping("/compid/{compId}")
	@PreAuthorize("hasRole('User')")
	public Complaints getCompById(@PathVariable int compId) {
		Complaints c = complaintsService.getCompsById(compId);
		if (c == null) {
			throw new RuntimeException("Complaint Id not found");
		}
		return c;
	}
	
	@GetMapping("/compuser/{user}")
	@PreAuthorize("hasRole('User')")
	public List<Complaints> getCompByUser(@PathVariable String user) {
		List<Complaints> c = complaintsService.getCompsByUser(user);
		if (c == null) {
			throw new RuntimeException("Complaint user not found");
		}
		return c;
	}
	
	@GetMapping("/complaints")
	@PreAuthorize("hasRole('User')")
	public List<Complaints> getComplaints() {
		return complaintsService.getComps();
	}
	
	@GetMapping("/compcity/{city}")
	@PreAuthorize("hasRole('Rescuer')")
	public List<Complaints> getAllComplaintsByCity(@PathVariable String city) {
		return complaintsService.getCompsByCity(city);
	}
}