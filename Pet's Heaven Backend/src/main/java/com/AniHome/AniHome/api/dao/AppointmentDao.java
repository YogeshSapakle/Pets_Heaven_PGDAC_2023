package com.AniHome.AniHome.api.dao;

import java.util.List;

import com.AniHome.AniHome.api.entity.Appointment;

public interface AppointmentDao {

	public void createAppointment(Appointment appointment);
	
	public Appointment updateAppointment(Appointment appointment);
	
	public void deleteAppointment(int id);
	
	public Appointment getAppointmentById(int id);
	
	public List<Appointment> getAppointment();
	public List<Appointment> getAppointmentbyRescuer(String userName);
	public List<Appointment> getAppointmentbyUser(String userName);
}