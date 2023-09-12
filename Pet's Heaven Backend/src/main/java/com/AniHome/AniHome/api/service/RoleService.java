package com.AniHome.AniHome.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.AniHome.AniHome.api.dao.RoleDao;
import com.AniHome.AniHome.api.entity.Role;

@Service
public class RoleService {
	@Autowired
    private RoleDao roleDao;

    public Role createNewRole(Role role) {
        return roleDao.save(role);
    }
}
