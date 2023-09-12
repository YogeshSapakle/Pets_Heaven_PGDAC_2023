package com.AniHome.AniHome.api.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.AniHome.AniHome.api.entity.Role;

@Repository
public interface RoleDao extends CrudRepository<Role, String> {

}
