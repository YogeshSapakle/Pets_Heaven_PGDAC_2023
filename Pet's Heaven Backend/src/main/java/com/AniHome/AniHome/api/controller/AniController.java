package com.AniHome.AniHome.api.controller;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Random;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.AniHome.AniHome.api.entity.Animal;
import com.AniHome.AniHome.api.service.AnimalService;
import com.AniHome.AniHome.api.service.FileUpService;

@RestController
@RequestMapping("/auth")

public class AniController {
	AnimalService animalService;
	FileUpService fileUpService;
	
	
	
	@Autowired
	public AniController(AnimalService aniServ, FileUpService fileServ) {
		animalService = aniServ;
		fileUpService = fileServ;
	}
	
	
	
	@PostMapping("/animal")
	public Animal createAni(@RequestParam("file") MultipartFile image, @RequestParam("animalName") String animalName, @RequestParam("animalDescription") String animalDescription, @RequestParam("animalCity") String animalCity, @RequestParam("userName") String userName) {
		
//		Generate random string
		int leftLimit = 97; // letter 'a'
	    int rightLimit = 122; // letter 'z'
	    int targetStringLength = 10;
	    Random random = new Random();

	    String generatedString = random.ints(leftLimit, rightLimit + 1)
	      .limit(targetStringLength)
	      .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
	      .toString();
	    
	    String originalName = image.getOriginalFilename();
	    
	    String fileName = generatedString.concat(originalName.substring(originalName.lastIndexOf('.')));
	    
	    fileName = userName + animalName + fileName;
	    
	    String path = "aniImages/";
	    
	    // make a directory
	 		File file = new File(path);
	 		if(!file.exists())
	 		{
	 			file.mkdir();
	 		}
	 		
	 		String fileServer = "http://127.0.0.1:8080/"; 
//	 		String fileServer = "http://127.0.0.1:8887/";
	 		String filePath = fileServer + fileName;
//	 		System.out.println(absolutePath);
	 		
	 		
		
		Animal ani = new Animal();
		ani.setName(animalName);
		ani.setCity(animalCity);
		ani.setDescription(animalDescription);
		ani.setUsername(userName);
		ani.setPhoto(filePath);
		
		fileUpService.uploadImg(path, image, fileName);
		
		
		ani.setId(0);
		animalService.createAni(ani);
		return ani;
	}
	
	@PutMapping("/animal")
	public Animal updateAni(@RequestBody Animal ani) {
		animalService.updateAni(ani);
		return ani;
	}
	
	@DeleteMapping("/animal/{aniId}")
	public String deleteAni(@PathVariable int aniId) {
		Animal ani = animalService.getAniById(aniId);
		animalService.deleteAni(aniId);
		return ani.getName() + " is deleted.";
	}
	
	@GetMapping("/aniid/{aniId}")
	public Animal getAniById(@PathVariable int aniId) {
		Animal c = animalService.getAniById(aniId);
		if (c == null) {
			throw new RuntimeException("Animal Id not found");
		}
		return c;
	}
	
	@GetMapping("/animal")
	public List<Animal> getAnimals() {
		return animalService.getAni();
	}
	
	@GetMapping("/anicity/{city}")
	public List<Animal> getAllAnimalsByCity(@PathVariable String city) {
		return animalService.getAniByCity(city);
	}
	
	
	
}