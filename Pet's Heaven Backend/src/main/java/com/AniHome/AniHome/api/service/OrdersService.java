package com.AniHome.AniHome.api.service;

import java.util.List;

import com.AniHome.AniHome.api.entity.Orders;

public interface OrdersService {
	public List<Orders> findAll();
	
	public Orders findById(int SId);
	public List<Orders> findByUser(String userName);
	public List<Orders> findByCity(String SCity);
	public Orders updateOrders(Orders Sorders);
	public void save(Orders SOrders);
	public void deleteById(int SId);
	
	
}
