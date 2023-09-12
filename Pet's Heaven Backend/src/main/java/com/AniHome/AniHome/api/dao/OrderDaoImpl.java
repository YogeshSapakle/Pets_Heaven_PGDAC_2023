package com.AniHome.AniHome.api.dao;
import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Repository;

import com.AniHome.AniHome.api.entity.Orders;

@Repository
public class OrderDaoImpl implements OrderDao{

	private EntityManager entityManager;
	
	@Autowired
	public OrderDaoImpl(EntityManager theEntityManager) {
		entityManager = theEntityManager;
	}
	
	
	@Override
	public List<Orders> findAll() {
		// TODO Auto-generated method stub
Session currentSession = entityManager.unwrap(Session.class);
		
		Query<Orders> theQuery =
				currentSession.createQuery("from Orders", Orders.class);
		
		List<Orders> ordres = theQuery.getResultList();
				
		return ordres;
	}

	@Override
	public List<Orders> findByUser(String userName) {

Session currentSession = entityManager.unwrap(Session.class);
		
Query<Orders> theQuery = 
currentSession.createQuery(
		"from Orders where userName=:userName", Orders.class);
theQuery.setParameter("userName", userName);

List<Orders> orders = theQuery.getResultList();
return orders;
	}

	@Override
	public Orders findById(int Id) {
Session currentSession = entityManager.unwrap(Session.class);
		
		Orders orders =
				currentSession.get(Orders.class, Id);
		
		return orders;
	}

	@Override
	public List<Orders> findByCity(String City) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		Query<Orders> theQuery = 
				currentSession.createQuery(
						"from Orders where orderCity=:orderCity", Orders.class);
				theQuery.setParameter("orderCity", City);

				List<Orders> orders = theQuery.getResultList();
			return orders;
	}

	@Override
	public void save(Orders theOrders) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		currentSession.saveOrUpdate(theOrders);
	}

	@Override
	public void deleteById(int Id) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		
		Query theQuery = 
				currentSession.createQuery(
						"delete from Orders where id=:bookingId");
		theQuery.setParameter("bookingId", Id);
		
		theQuery.executeUpdate();
	}
	@Override
	public Orders updateOrders(Orders orders) {
		Session s = entityManager.unwrap(Session.class);
		s.saveOrUpdate(orders);
		return orders;
	}
	
	
}
