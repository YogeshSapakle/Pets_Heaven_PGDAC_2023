package com.AniHome.AniHome.api.dao;

import java.util.List;

import com.AniHome.AniHome.api.entity.Complaints;

public interface ComplaintsDao {
	
	public void createComplaint(Complaints complaint);
	
	public Complaints updateComplaint(Complaints complaint);
	
	public void deleteComplaint(int id);
	
	public Complaints getComplaintsById(int id);
	
	public List<Complaints> getComplaintsByUser(String username);
	
	public List<Complaints> getComplaints();
	
	public List<Complaints> getComplaintsByCity(String city);
}