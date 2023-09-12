package com.AniHome.AniHome.api.service;

import java.util.List;

import com.AniHome.AniHome.api.entity.ContactUs;

public interface ContactUsService {
	public List<ContactUs>getAllContact();
	
	public void saveContact(ContactUs contactUs);

	public void  deleteContactById(int contactid);
}
