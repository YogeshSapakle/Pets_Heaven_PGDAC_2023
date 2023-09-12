package com.AniHome.AniHome.api.service;

import java.util.List;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.AniHome.AniHome.api.dao.ContactUsDao;
import com.AniHome.AniHome.api.entity.ContactUs;

@Service
public class ContactUsServImpl implements ContactUsService{

	private ContactUsDao contactUsDao;
	
	@Autowired
	public ContactUsServImpl(ContactUsDao cuDao) {
	contactUsDao = cuDao;
	}
	
	@Override
	@Transactional
	public List<ContactUs> getAllContact() {
		
	return contactUsDao.getContacts();
	}

	@Override
	@Transactional
	public void saveContact(ContactUs contactUs) {
	contactUsDao.addContact(contactUs);
		
	}

	@Override
	@Transactional
	public void deleteContactById(int contactid) {
	contactUsDao.deleteContact(contactid);
		
		
	}

	
	}


