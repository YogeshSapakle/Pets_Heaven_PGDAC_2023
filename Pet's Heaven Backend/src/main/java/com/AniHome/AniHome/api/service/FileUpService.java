package com.AniHome.AniHome.api.service;


import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public interface FileUpService {
	void uploadImg(String path, MultipartFile img, String name);
}
