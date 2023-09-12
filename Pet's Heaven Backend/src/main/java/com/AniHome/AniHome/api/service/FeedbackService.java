package com.AniHome.AniHome.api.service;

import java.util.List;
import com.AniHome.AniHome.api.entity.Feedback;


public interface FeedbackService {
	public List<Feedback> fbGetAll();
	
	public void fbAdd(Feedback feedback);
	
	public void fbDelete(int id);
	
	public Feedback fbUpdate(Feedback feedback);
}