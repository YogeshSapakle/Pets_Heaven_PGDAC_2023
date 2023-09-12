package com.AniHome.AniHome.api.service;

import java.util.List;

import com.AniHome.AniHome.api.entity.Animal;

public interface AnimalService {
	
	public void createAni(Animal animal);
	
	public Animal updateAni(Animal animal);
	
	public void deleteAni(int id);
	
	public Animal getAniById(int id);
	
	public List<Animal> getAni();
	
	public List<Animal> getAniByCity(String city);
}