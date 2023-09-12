package com.AniHome.AniHome.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.AniHome.AniHome.api.entity.User;
import com.AniHome.AniHome.api.service.FileUpService;
import com.AniHome.AniHome.api.service.UserService;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;

import javax.annotation.PostConstruct;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Value("${disk.upload.basepath}")
	private String Bsp;
	
	@Autowired
    private UserService userService;
	
	@Autowired
	private FileUpService fileUpService;

    @PostConstruct
    public void initRoleAndUser() {
        userService.initRoleAndUser();
    }

    @PostMapping("/register")
    public User registerNewUser(@RequestBody @Valid User user) {
        return userService.registerNewUser(user);
    }
    
    @PostMapping("/userPic")
    public void fileUpload(@RequestParam("image") MultipartFile image , @RequestParam("fileName") String fileName)
    {
    	this.fileUpService.uploadImg("images", image, fileName);
    }
    
    @GetMapping(value="{productImageName}",produces = "image/jpeg")
   	public void fetchPrductImage(@PathVariable("productImageName") String productImageName,HttpServletResponse res) throws IOException
   	{
   		System.out.println(productImageName);
   		File filepath=new File(Bsp,productImageName);
   		
   		Resource resource=new FileSystemResource(filepath);
   		if(resource!=null)
   		{
   			try(InputStream in=resource.getInputStream())
   			{
   				ServletOutputStream out=res.getOutputStream();
   				FileCopyUtils.copy(in, out);
   			}
   		}
   		System.out.println("Responce sent");
   		
   	}
    
    
    
}
