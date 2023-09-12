package com.AniHome.AniHome.api.dao;

import java.util.List;

import com.AniHome.AniHome.api.entity.Feedback;

public interface FeedbackDao {
	public List<Feedback> getFeedbacks();
	
	public void createFeedback(Feedback feedback);
	
	public void deleteFeedback(int feedbackId);
	
	public Feedback feedbackUpdate(Feedback feedback);
}
