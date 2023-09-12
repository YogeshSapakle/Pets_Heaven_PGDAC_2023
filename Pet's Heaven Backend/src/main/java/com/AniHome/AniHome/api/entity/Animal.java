package com.AniHome.AniHome.api.entity;

import javax.persistence.*;

@Entity
@Table(name = "animal")
public class Animal {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "city")
	private String city;
	
	@Column(name = "photo")
	private String photo;
	
	@Column(name = "username")
	private String username;

	public Animal() {
		
	}

	public Animal(String name, String description, String city, String photo, String username) {
		this.name = name;
		this.description = description;
		this.city = city;
		this.photo = photo;
		this.username = username;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Override
	public String toString() {
		return "Animal [id=" + id + ", name=" + name + ", description=" + description + ", city=" + city + ", photo="
				+ photo + ", username=" + username + "]";
	}
}