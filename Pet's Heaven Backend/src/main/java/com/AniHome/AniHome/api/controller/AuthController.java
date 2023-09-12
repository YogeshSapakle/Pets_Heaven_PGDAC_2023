package com.AniHome.AniHome.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.AniHome.AniHome.api.entity.JwtResponse;
import com.AniHome.AniHome.api.entity.User;
import com.AniHome.AniHome.api.service.UserService;

import javax.annotation.PostConstruct;
import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthController {
	@Autowired
    private UserService userService;

    @PostConstruct
    public void initRoleAndUser() {
        userService.initRoleAndUser();
    }
    
    @GetMapping("/forAdmin")
    @PreAuthorize("hasRole('Admin')")
    public String forAdmin(){
        return "This URL is only accessible to the admin";
    }

    @GetMapping("/forUser")
    @PreAuthorize("hasRole('User')")
    public String forUser(){
        return "This URL is only accessible to the user";
    }
    
    @PutMapping("/updateUser")
    @PreAuthorize("hasAnyRole('User', 'Rescuer')")
    public JwtResponse updateUser(@RequestBody @Valid User user) {
        User u = userService.updateUser(user);
        return new JwtResponse(user, "");
    }

}
