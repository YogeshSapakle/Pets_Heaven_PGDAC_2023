package com.AniHome.AniHome.api.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.AniHome.AniHome.api.entity.Feedback;

@Repository
public class FeedbackDaoImpl implements FeedbackDao {
	private EntityManager entityManager;
	
	@Autowired
	public FeedbackDaoImpl(EntityManager eManager) {
		entityManager = eManager;
	}

	@Override
	public List<Feedback> getFeedbacks() {
		Session s = entityManager.unwrap(Session.class);
		Query<Feedback> q = s.createQuery("from Feedback", Feedback.class);
		List<Feedback> fb = q.getResultList();
		return fb;
	}

	@Override
	public void createFeedback(Feedback feedback) {
		Session s = entityManager.unwrap(Session.class);
		s.saveOrUpdate(feedback);
	}

	@Override
	public void deleteFeedback(int feedbackId) {
		Session s = entityManager.unwrap(Session.class);
		Query q = s.createQuery("delete from Feedback where id = :fbid");
		q.setParameter("fbid", feedbackId);
		q.executeUpdate();
	}
	
	@Override
	public Feedback feedbackUpdate(Feedback feedback) {
		Session s = entityManager.unwrap(Session.class);
		s.saveOrUpdate(feedback);
		return feedback;
	}
}