package com.AniHome.AniHome.api.service;

import java.util.List;

import com.AniHome.AniHome.api.entity.Appointment;

public interface AppointmentService {

	public void createApt(Appointment appointment);
	
	public Appointment updateApt(Appointment appointment);
	
	public void deleteApt(int id);
	
	public Appointment getAptById(int id);
	
	public List<Appointment> getApt();
	
	public List<Appointment> getAptbyResc(String userName);
	
	public List<Appointment> getAptbyUser(String userName);
}