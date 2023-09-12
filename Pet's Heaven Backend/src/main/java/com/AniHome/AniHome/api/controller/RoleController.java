package com.AniHome.AniHome.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.AniHome.AniHome.api.entity.Role;
import com.AniHome.AniHome.api.service.RoleService;

@RestController
@RequestMapping("/api/role")
public class RoleController {
	@Autowired
    private RoleService roleService;

    @PostMapping("/create")
    public Role createNewRole(@RequestBody Role role) {
        return roleService.createNewRole(role);
    }
}
