package com.AniHome.AniHome.api.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.AniHome.AniHome.api.entity.Appointment;
import com.AniHome.AniHome.api.entity.Complaints;
import com.AniHome.AniHome.api.entity.Orders;

@Repository
public class AppointmentDaoImpl implements AppointmentDao {
	private EntityManager entityManager;
	
	@Autowired
	public AppointmentDaoImpl(EntityManager eManager) {
		entityManager = eManager;
	}

	@Override
	public void createAppointment(Appointment appointment) {
		Session s = entityManager.unwrap(Session.class);
		s.saveOrUpdate(appointment);
	}

	@Override
	public Appointment updateAppointment(Appointment appointment) {
		Session s = entityManager.unwrap(Session.class);
		s.saveOrUpdate(appointment);
		return appointment;
	}

	@Override
	public void deleteAppointment(int id) {
		Session s = entityManager.unwrap(Session.class);
		Query q = s.createQuery("delete from Appointment where id = :aptid");
		q.setParameter("aptid", id);
		q.executeUpdate();
	}

	@Override
	public Appointment getAppointmentById(int id) {
		Session s = entityManager.unwrap(Session.class);
		Appointment appointment = s.get(Appointment.class, id);
		return appointment;
	}

	@Override
	public List<Appointment> getAppointment() {
		Session s = entityManager.unwrap(Session.class);
		Query<Appointment> q = s.createQuery("from Appointment", Appointment.class);
		List<Appointment> apt = q.getResultList();
		return apt;
	}

	@Override
	public List<Appointment> getAppointmentbyRescuer(String userName) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		Query<Appointment> theQuery = 
		currentSession.createQuery(
				"from Appointment where userName=:userName", Appointment.class);
		theQuery.setParameter("userName", userName);

		List<Appointment> comps = theQuery.getResultList();
		return comps;
	}

	@Override
	public List<Appointment> getAppointmentbyUser(String userName) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		Query<Appointment> theQuery = 
		currentSession.createQuery(
				"from Appointment where complaintBy=:userName", Appointment.class);
		theQuery.setParameter("userName", userName);

		List<Appointment> comps = theQuery.getResultList();
		return comps;
	}
}