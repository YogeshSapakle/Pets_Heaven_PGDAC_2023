package com.AniHome.AniHome.api.dao;

import java.util.List;

import com.AniHome.AniHome.api.entity.ContactUs;

public interface ContactUsDao {
	public List<ContactUs> getContacts();
	
	public void addContact(ContactUs contactUs);
	
	public void  deleteContact(int contactid);
	

}
