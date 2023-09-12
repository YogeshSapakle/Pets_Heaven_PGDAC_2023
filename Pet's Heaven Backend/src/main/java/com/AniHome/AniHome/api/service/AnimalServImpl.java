package com.AniHome.AniHome.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.AniHome.AniHome.api.dao.AnimalDao;
import com.AniHome.AniHome.api.entity.Animal;

@Service
public class AnimalServImpl implements AnimalService {

	private AnimalDao animalDao;
	
	@Autowired
	public AnimalServImpl(AnimalDao aniDao) {
		animalDao = aniDao;
	}
	
	@Override
	@Transactional
	public void createAni(Animal animal) {
		animalDao.createAnimal(animal);
	}

	@Override
	@Transactional
	public Animal updateAni(Animal animal) {
		return animalDao.updateAnimal(animal);
	}

	@Override
	@Transactional
	public void deleteAni(int id) {
		animalDao.deleteAnimal(id);
	}

	@Override
	@Transactional
	public Animal getAniById(int id) {
		return animalDao.getAnimalById(id);
	}

	@Override
	public List<Animal> getAni() {
		
		List<Animal> anml= animalDao.getAnimal();
		System.out.println(anml);
		return anml;
	}

	@Override
	public List<Animal> getAniByCity(String city) {
		return animalDao.getAnimalByCity(city);
	}
}