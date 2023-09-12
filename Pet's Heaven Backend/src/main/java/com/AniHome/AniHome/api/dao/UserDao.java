package com.AniHome.AniHome.api.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.AniHome.AniHome.api.entity.User;

@Repository
public interface UserDao extends CrudRepository<User, String> {

}
