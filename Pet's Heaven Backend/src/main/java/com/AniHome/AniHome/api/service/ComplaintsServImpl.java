package com.AniHome.AniHome.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.AniHome.AniHome.api.dao.ComplaintsDao;
import com.AniHome.AniHome.api.entity.Complaints;


@Service
public class ComplaintsServImpl implements ComplaintsService {

	private ComplaintsDao complaintsDao;
	
	@Autowired
	public ComplaintsServImpl(ComplaintsDao cDao) {
		complaintsDao = cDao;
	}
	
	@Override
	@Transactional
	public void createComp(Complaints complaint) {
		complaintsDao.createComplaint(complaint);
	}

	@Override
	@Transactional
	public Complaints updateComp(Complaints complaint) {
		return complaintsDao.updateComplaint(complaint);
	}

	@Override
	@Transactional
	public void deleteComp(int id) {
		complaintsDao.deleteComplaint(id);
	}

	@Override
	@Transactional
	public Complaints getCompsById(int id) {
		return complaintsDao.getComplaintsById(id);
	}

	@Override
	@Transactional
	public List<Complaints> getCompsByUser(String username) {
		return complaintsDao.getComplaintsByUser(username);
	}

	@Override
	public List<Complaints> getComps() {
		return complaintsDao.getComplaints();
	}

	@Override
	public List<Complaints> getCompsByCity(String city) {;
		return complaintsDao.getComplaintsByCity(city);
	}
}