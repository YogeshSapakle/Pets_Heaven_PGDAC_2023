package com.AniHome.AniHome.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.AniHome.AniHome.api.dao.FeedbackDao;
import com.AniHome.AniHome.api.entity.Feedback;

@Service
public class FeedbackServImpl implements FeedbackService {

	private FeedbackDao feedbackDao;
	
	@Autowired
	public FeedbackServImpl(FeedbackDao fbDao) {
		feedbackDao = fbDao;
	}
	
	@Override
	public List<Feedback> fbGetAll() {
		return feedbackDao.getFeedbacks();
	}

	@Override
	@Transactional
	public void fbAdd(Feedback feedback) {
		feedbackDao.createFeedback(feedback);
	}

	@Override
	@Transactional
	public void fbDelete(int id) {
		feedbackDao.deleteFeedback(id);
	}
	
	@Override
	@Transactional
	public Feedback fbUpdate(Feedback feedback) {
		return feedbackDao.feedbackUpdate(feedback);
	}
}