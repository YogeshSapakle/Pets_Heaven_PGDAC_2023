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

import com.AniHome.AniHome.api.entity.Feedback;
import com.AniHome.AniHome.api.service.FeedbackService;

@RestController
@RequestMapping("/auth")
public class FbController {
	FeedbackService feedbackService;
	
	@Autowired
	public FbController(FeedbackService fbServ) {
		feedbackService = fbServ;
	}
	
	@GetMapping("/feedback")
	public List<Feedback> getFeedbackAll() {
		return feedbackService.fbGetAll();
	}
	
	@PostMapping("/feedback")
	@PreAuthorize("hasRole('User')")
	public Feedback addFeedback(@RequestBody Feedback fb) {
		fb.setFeedbackId(0);
		feedbackService.fbAdd(fb);
		return fb;
	}
	
	@DeleteMapping("/feedback/{feedbackId}")
	@PreAuthorize("hasRole('Admin')")
	public void deleteFeedback(@PathVariable int feedbackId) {
		feedbackService.fbDelete(feedbackId);
	}
	
	@PutMapping("/feedback")
	@PreAuthorize("hasRole('User')")
	public Feedback updateFeedback(@RequestBody Feedback fb) {
		feedbackService.fbUpdate(fb);
		return fb;
	}
}