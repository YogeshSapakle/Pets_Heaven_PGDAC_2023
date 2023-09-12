package com.AniHome.AniHome.api.entity;

import javax.persistence.*;

@Entity
@Table(name = "appointment")
public class Appointment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	@Column(name = "date")
	private String date;
	
	@Column(name = "time")
	private String time;
	
	@Column(name = "username")
	private String username;
	
	@Column(name = "complaintby")
	private String complaintBy;
	
	@Column(name = "complaintid")
	private int complaintId;
	
	

	public Appointment() {
		
	}

	public Appointment(String date, String time, String username, int complaintId, String complaintBy) {
		this.date = date;
		this.time = time;
		this.username = username;
		this.complaintId = complaintId;
		this.complaintBy = complaintBy;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getComplaintId() {
		return complaintId;
	}

	public void setComplaintId(int complaintId) {
		this.complaintId = complaintId;
	}
	
	public String getComplaintBy() {
		return complaintBy;
	}

	public void setComplaintBy(String complaintBy) {
		this.complaintBy = complaintBy;
	}

	@Override
	public String toString() {
		return "Appointment [id=" + id + ", date=" + date + ", time=" + time + ", username=" + username
				+ ", complaintId=" + complaintId + "]";
	}
}