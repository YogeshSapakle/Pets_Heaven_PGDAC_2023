package com.AniHome.AniHome.api.entity;

import javax.persistence.*;

@Entity
@Table(name = "feedback")
public class Feedback {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int feedbackId;
	
	@Column(name = "f_sub")
	private String feedbackSubject;
	
	@Column(name = "f_body")
	private String feedbackBody;
	
	@Column(name = "username")
	private String username;

	public Feedback() {
		
	}

	public Feedback(String feedbackSubject, String feedbackBody, String username) {
		this.feedbackSubject = feedbackSubject;
		this.feedbackBody = feedbackBody;
		this.username = username;
	}

	public int getFeedbackId() {
		return feedbackId;
	}

	public void setFeedbackId(int feedbackId) {
		this.feedbackId = feedbackId;
	}

	public String getFeedbackSubject() {
		return feedbackSubject;
	}

	public void setFeedbackSubject(String feedbackSubject) {
		this.feedbackSubject = feedbackSubject;
	}

	public String getFeedbackBody() {
		return feedbackBody;
	}

	public void setFeedbackBody(String feedbackBody) {
		this.feedbackBody = feedbackBody;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Override
	public String toString() {
		return "Feedback [feedbackId=" + feedbackId + ", feedbackSubject=" + feedbackSubject + ", feedbackBody="
				+ feedbackBody + ", username=" + username + "]";
	}
	
	
	
}
