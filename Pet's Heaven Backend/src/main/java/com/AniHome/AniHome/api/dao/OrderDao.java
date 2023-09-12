package com.AniHome.AniHome.api.dao;

import java.util.List;

import com.AniHome.AniHome.api.entity.Orders;

public interface OrderDao {
	public List<Orders> findAll();
	public List<Orders>findByUser(String userName);
	public Orders findById(int Id);
	public List<Orders> findByCity(String City);
	public Orders updateOrders(Orders orders);
	public void save(Orders theOrders);
	public void deleteById(int Id);
}
