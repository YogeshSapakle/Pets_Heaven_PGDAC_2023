package com.AniHome.AniHome.api.dao;

import java.util.List;

import com.AniHome.AniHome.api.entity.Animal;

public interface AnimalDao {
	
	public void createAnimal(Animal animal);
	
	public Animal updateAnimal(Animal animal);
	
	public void deleteAnimal(int id);
	
	public Animal getAnimalById(int id);
	
	public List<Animal> getAnimal();
	
	public List<Animal> getAnimalByCity(String city);
}