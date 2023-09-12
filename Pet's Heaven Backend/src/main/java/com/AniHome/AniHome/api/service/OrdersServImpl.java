package com.AniHome.AniHome.api.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.AniHome.AniHome.api.dao.OrderDao;
import com.AniHome.AniHome.api.entity.Orders;

@Service
public class OrdersServImpl implements OrdersService {

	private OrderDao orderDao;
	
	@Autowired
	public OrdersServImpl(OrderDao theOrderDao) {
		orderDao =theOrderDao;
	}
	
	@Override
	@Transactional
	public List<Orders> findAll() {
		
		return orderDao.findAll() ;
	}

	@Override
	@Transactional
	public Orders findById(int SId) {
		
		return orderDao.findById(SId);
	}

	@Override
	@Transactional
	public List<Orders> findByCity(String SCity) {
		
		return orderDao.findByCity(SCity);
	}

	@Override
	@Transactional
	public Orders updateOrders(Orders Sorders) {

		return orderDao.updateOrders(Sorders) ;
	}

	@Override
	@Transactional
	public void save(Orders SOrders) {
		orderDao.save(SOrders);
		
	}

	@Override
	@Transactional
	public void deleteById(int SId) {
		orderDao.deleteById(SId);	
		
	}

	@Override
	@Transactional
	public List<Orders> findByUser(String userName) {
		
		return orderDao.findByUser(userName);
	}

}
