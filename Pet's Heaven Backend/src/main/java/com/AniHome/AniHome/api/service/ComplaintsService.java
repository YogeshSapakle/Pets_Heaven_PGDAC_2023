package com.AniHome.AniHome.api.service;

import java.util.List;

import com.AniHome.AniHome.api.entity.Complaints;

public interface ComplaintsService {
	
	public void createComp(Complaints complaint);
	
	public Complaints updateComp(Complaints complaint);
	
	public void deleteComp(int id);
	
	public Complaints getCompsById(int id);
	
	public List<Complaints> getCompsByUser(String username);
	
	public List<Complaints> getComps();
	
	public List<Complaints> getCompsByCity(String city);
}