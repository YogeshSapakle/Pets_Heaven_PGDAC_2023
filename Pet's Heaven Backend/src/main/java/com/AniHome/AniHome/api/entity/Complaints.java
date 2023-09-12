package com.AniHome.AniHome.api.entity;

import javax.persistence.*;

@Entity
@Table(name = "complaints")
public class Complaints {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	@Column(name = "subject")
	private String subject;
	@Column(name = "body")
	private String body;
	@Column(name = "city")
	private String city;
	@Column(name = "address")
	private String address;
	@Column(name = "phone")
	private String phone;
	@Column(name = "username")
	private String username;
	
	public Complaints() {
		
	}

	public Complaints(String subject, String body, String city, String address, String phone, String username) {
		this.subject = subject;
		this.body = body;
		this.city = city;
		this.address = address;
		this.phone = phone;
		this.username = username;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Override
	public String toString() {
		return "Complaints [id=" + id + ", subject=" + subject + ", body=" + body + ", city=" + city + ", address="
				+ address + ", phone=" + phone + ", username=" + username + "]";
	}
}