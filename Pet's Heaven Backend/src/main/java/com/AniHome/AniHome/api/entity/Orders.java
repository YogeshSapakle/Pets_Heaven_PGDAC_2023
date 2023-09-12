package com.AniHome.AniHome.api.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="orders")
public class Orders {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="orderName")
	private String orderName;
	
	@Column(name="orderCity")
	private String orderCity;
	
	@Column(name="orderAddress")
	private String orderAddress;
	
	@Column(name="orderDate")
	private String orderDate;
	
	@Column(name="orderPhone")
	private String orderPhone;
	
	@Column(name="orderEmail")
	private String orderEmail;
	
	@Column(name="userName")
	private String userName;
	
	@Column(name="animalId")
	private int animalId;
	
	@Column(name="postedBy")
	private String postedBy;
	
	

	public Orders() {
		
	}

	public Orders(String orderName, String orderCity, String orderAddress, String orderDate, String orderPhone,
			String orderEmail, String userName, int animalId, String postedBy) {
		
		this.orderName = orderName;
		this.orderCity = orderCity;
		this.orderAddress = orderAddress;
		this.orderDate = orderDate;
		this.orderPhone = orderPhone;
		this.orderEmail = orderEmail;
		this.userName = userName;
		this.animalId = animalId;
		this.postedBy = postedBy;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getOrderName() {
		return orderName;
	}

	public void setOrderName(String orderName) {
		this.orderName = orderName;
	}

	public String getOrderCity() {
		return orderCity;
	}

	public void setOrderCity(String orderCity) {
		this.orderCity = orderCity;
	}

	public String getOrderAddress() {
		return orderAddress;
	}

	public void setOrderAddress(String orderAddress) {
		this.orderAddress = orderAddress;
	}

	public String getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}

	public String getOrderPhone() {
		return orderPhone;
	}

	public void setOrderPhone(String orderPhone) {
		this.orderPhone = orderPhone;
	}

	public String getOrderEmail() {
		return orderEmail;
	}

	public void setOrderEmail(String orderEmail) {
		this.orderEmail = orderEmail;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public int getAnimalId() {
		return animalId;
	}

	public void setAnimalId(int animalId) {
		this.animalId = animalId;
	}
	
	public String getPostedBy() {
		return postedBy;
	}

	public void setPostedBy(String postedBy) {
		this.postedBy = postedBy;
	}
	
}
