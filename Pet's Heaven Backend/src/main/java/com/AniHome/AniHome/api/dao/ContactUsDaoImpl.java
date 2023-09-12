package com.AniHome.AniHome.api.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.AniHome.AniHome.api.entity.ContactUs;

@Repository
public class ContactUsDaoImpl implements ContactUsDao  {
// Dependency injection
	private EntityManager entityManager;
	
	@Autowired
	public ContactUsDaoImpl(EntityManager eManager) {
	entityManager = eManager;
	}
	// Dependency injection end
	
	@Override
	public List<ContactUs> getContacts() {
	Session s = entityManager.unwrap(Session.class);
	Query<ContactUs> q = s.createQuery("from ContactUs", ContactUs.class);
	List<ContactUs> cu = q.getResultList();
	return cu;
		
	}

	@Override
	public void deleteContact(int contactid) {
	Session s = entityManager.unwrap(Session.class);
	Query q = s.createQuery("delete from ContactUs where id = :cuid");
	q.setParameter("cuid", contactid);
	q.executeUpdate();
	}

	@Override
	public void addContact(ContactUs contactUs) {
	Session s = entityManager.unwrap(Session.class);	
	s.saveOrUpdate(contactUs );
	}
	

}
