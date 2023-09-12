package com.AniHome.AniHome.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.AniHome.AniHome.api.dao.AppointmentDao;
import com.AniHome.AniHome.api.entity.Appointment;

@Service
public class AppointmentServImpl implements AppointmentService {

	private AppointmentDao appointmentDao;
	
	@Autowired
	public AppointmentServImpl(AppointmentDao aptDao) {
		appointmentDao = aptDao;
	}
	
	@Override
	@Transactional
	public void createApt(Appointment appointment) {
		appointmentDao.createAppointment(appointment);
	}

	@Override
	@Transactional
	public Appointment updateApt(Appointment appointment) {
		return appointmentDao.updateAppointment(appointment);
	}

	@Override
	@Transactional
	public void deleteApt(int id) {
		appointmentDao.deleteAppointment(id);
	}

	@Override
	@Transactional
	public Appointment getAptById(int id) {
		return appointmentDao.getAppointmentById(id);
	}

	@Override
	public List<Appointment> getApt() {
		return appointmentDao.getAppointment();
	}

	@Override
	public List<Appointment> getAptbyResc(String userName) {
		return appointmentDao.getAppointmentbyRescuer(userName);
	}

	@Override
	public List<Appointment> getAptbyUser(String userName) {
		return appointmentDao.getAppointmentbyUser(userName);
	}
}