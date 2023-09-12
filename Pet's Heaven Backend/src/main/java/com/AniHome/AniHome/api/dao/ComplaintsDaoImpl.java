package com.AniHome.AniHome.api.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.AniHome.AniHome.api.entity.Complaints;

@Repository
public class ComplaintsDaoImpl implements ComplaintsDao {
	private EntityManager entityManager;
	
	@Autowired
	public ComplaintsDaoImpl(EntityManager eManager) {
		entityManager = eManager;
	}

	@Override
	public void createComplaint(Complaints complaint) {
		Session s = entityManager.unwrap(Session.class);
		s.saveOrUpdate(complaint);
	}

	@Override
	public Complaints updateComplaint(Complaints complaint) {
		Session s = entityManager.unwrap(Session.class);
		s.saveOrUpdate(complaint);
		return complaint;
	}

	@Override
	public void deleteComplaint(int id) {
		Session s = entityManager.unwrap(Session.class);
		Query q = s.createQuery("delete from Complaints where id = :cid");
		q.setParameter("cid", id);
		q.executeUpdate();
	}

	@Override
	public Complaints getComplaintsById(int id) {
		Session s = entityManager.unwrap(Session.class);
		Complaints complaint = s.get(Complaints.class, id);
		return complaint;
	}

	@Override
	public List<Complaints> getComplaintsByUser(String username) {
		Session s = entityManager.unwrap(Session.class);
		Query<Complaints> q = s.createQuery("from Complaints where username = :userin", Complaints.class);
		q.setParameter("userin", username);
		List<Complaints> comp = q.getResultList();
		return comp;
	}

	@Override
	public List<Complaints> getComplaints() {
		Session s = entityManager.unwrap(Session.class);
		Query<Complaints> q = s.createQuery("from Complaints", Complaints.class);
		List<Complaints> comp = q.getResultList();
		return comp;
	}

	@Override
	public List<Complaints> getComplaintsByCity(String city) {
		Session s = entityManager.unwrap(Session.class);
		Query<Complaints> q = s.createQuery("from Complaints where city = :city", Complaints.class);
		q.setParameter("city", city);
		List<Complaints> comp = q.getResultList();
		return comp;
	}
}