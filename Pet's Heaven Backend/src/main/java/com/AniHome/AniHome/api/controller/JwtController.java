package com.AniHome.AniHome.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.AniHome.AniHome.api.entity.JwtRequest;
import com.AniHome.AniHome.api.entity.JwtResponse;
import com.AniHome.AniHome.api.service.JwtService;



@RestController
@CrossOrigin
@RequestMapping("/api/jwt")
public class JwtController {
	@Autowired
    private JwtService jwtService;

    @PostMapping("/login")
    public JwtResponse createJwtToken(@RequestBody JwtRequest jwtRequest) throws Exception {
    	System.out.println("IN LOGIN CIONTROLLERs");
       JwtResponse jwrt= jwtService.createJwtToken(jwtRequest);
       
       return jwrt;
    }
}
