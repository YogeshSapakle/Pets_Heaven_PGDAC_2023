package com.AniHome.AniHome.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.AniHome.AniHome.api.entity.Orders;
import com.AniHome.AniHome.api.service.OrdersService;

@RestController
@RequestMapping("/auth")
public class OrdersController {
	
	// Dependency injection start
	OrdersService orderService ;
	
	@Autowired
	public OrdersController(OrdersService ordServ) {
		orderService=ordServ;
	}
	// dependency injection end
	
	@PostMapping("/order")
	@PreAuthorize("hasRole('User')")
	public Orders addOrder(@RequestBody Orders order)
	{
		order.setId(0);
		orderService.save(order);
		return order;
		
	}
	
	@GetMapping("/orderid/{Id}")
	@PreAuthorize("hasRole('User')")
	public Orders getOrder(@PathVariable int Id) {
		Orders order=orderService.findById(Id);
		if(order == null){
			throw new RuntimeException("order not found");
			
		}
		return order;
	}
	
	@PutMapping("/order")
	@PreAuthorize("hasRole('User')")
	public Orders updateOrder(@RequestBody Orders or) {
		orderService.updateOrders(or);
		return or;
	}
	
	@DeleteMapping("/order/{id}")
	@PreAuthorize("hasRole('User')")
	public void deleteOrder(@PathVariable int id) {
		orderService.deleteById(id);
	}
	
	@GetMapping("/ordercity/{city}")
	public List<Orders> findByCity(@PathVariable String city){
		return orderService.findByCity(city);
	}
	@GetMapping("/orderuser/{user}")
	@PreAuthorize("hasRole('User')")
	public List<Orders> findByUser(@PathVariable String user){
		return orderService.findByUser(user);
	}
	
}
