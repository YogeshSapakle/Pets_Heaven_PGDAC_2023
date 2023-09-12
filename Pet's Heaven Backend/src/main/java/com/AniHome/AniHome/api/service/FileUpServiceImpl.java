package com.AniHome.AniHome.api.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileUpServiceImpl implements FileUpService{

	@Override
	public void uploadImg(String path, MultipartFile img, String name) {
		
//		String originalName = img.getOriginalFilename();
		
//		String fileName = name.concat(originalName.substring(originalName.lastIndexOf('.')));
		
		String filePath = path + File.separator + name;
		
//		System.out.println(filePath);
		
		
		// copy the file
		try {
			Files.copy(img.getInputStream(), Paths.get(filePath), StandardCopyOption.REPLACE_EXISTING);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}

}
