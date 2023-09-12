package com.AniHome.AniHome.api.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.AniHome.AniHome.api.entity.Animal;
import com.AniHome.AniHome.api.entity.Complaints;

@Repository
public class AnimalDaoImpl implements AnimalDao {
	private EntityManager entityManager;
	
	@Autowired
	public AnimalDaoImpl(EntityManager eManager) {
		entityManager = eManager;
	}
	
	@Override
	public void createAnimal(Animal animal) {
		Session s = entityManager.unwrap(Session.class);
		s.saveOrUpdate(animal);
	}

	@Override
	public Animal updateAnimal(Animal animal) {
		Session s = entityManager.unwrap(Session.class);
		s.saveOrUpdate(animal);
		return animal;
	}

	@Override
	public void deleteAnimal(int id) {
		Session s = entityManager.unwrap(Session.class);
		Query q = s.createQuery("delete from Animal where id = :aniid");
		q.setParameter("aniid", id);
		q.executeUpdate();
	}

	@Override
	public Animal getAnimalById(int id) {
		Session s = entityManager.unwrap(Session.class);
		Animal animal = s.get(Animal.class, id);
		return animal;
	}

	@Override
	public List<Animal> getAnimal() {
		Session s = entityManager.unwrap(Session.class);
		Query<Animal> q = s.createQuery("from Animal", Animal.class);
		List<Animal> ani = q.getResultList();
		return ani;
	}

	@Override
	public List<Animal> getAnimalByCity(String city) {
		Session s = entityManager.unwrap(Session.class);
		Query<Animal> q = s.createQuery("from Animal where city = :city", Animal.class);
		q.setParameter("city", city);
		List<Animal> animals = q.getResultList();
		return animals;
	}
}