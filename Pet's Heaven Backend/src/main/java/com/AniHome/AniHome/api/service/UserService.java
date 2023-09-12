package com.AniHome.AniHome.api.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.AniHome.AniHome.api.dao.RoleDao;
import com.AniHome.AniHome.api.dao.UserDao;
import com.AniHome.AniHome.api.entity.Role;
import com.AniHome.AniHome.api.entity.User;



@Service
public class UserService {
	@Autowired
    private UserDao userDao;

    @Autowired
    private RoleDao roleDao;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    
    public void initRoleAndUser() {

		/*
		 * Role adminRole = new Role(); adminRole.setRoleName("Admin");
		 * adminRole.setRoleDescription("Admin role"); roleDao.save(adminRole);
		 * 
		 * Role userRole = new Role(); userRole.setRoleName("User");
		 * userRole.setRoleDescription("User is Default role"); roleDao.save(userRole);
		 * 
		 * Role rescuerRole = new Role(); userRole.setRoleName("Rescuer");
		 * userRole.setRoleDescription("Rescuer role who will rescue the animal");
		 * roleDao.save(userRole);
		 * 
		 * User adminUser = new User(); adminUser.setUserName("adminyogesh");
		 * adminUser.setUserFirstName("yogesh"); adminUser.setUserLastName("sapkale");
		 * adminUser.setUserPassword(getEncodedPassword("admin1234"));
		 * adminUser.setUserEmail("admin@gmail.com");
		 * adminUser.setUserPhone("7057083109"); adminUser.setCity("jalgaon"); Set<Role>
		 * adminRoles = new HashSet<>(); adminRoles.add(adminRole);
		 * adminUser.setRole(adminRoles); userDao.save(adminUser);
		 */


    }

    public User registerNewUser(User user) {
    	Role role;
    	Set<Role> userRoles = new HashSet<>();
    	
//    	System.out.println(user.getUserRole().equals("rescuer"));
//    	role = roleDao.findById("Rescuer").get();
//        userRoles.add(role);
//        System.out.println(userRoles);
    	
    	Boolean u = userDao.findById(user.getUserName()).isPresent();
    	
    	if(u)
    	{
    		throw new DataIntegrityViolationException("Username Already Exist!");
    	}
    	
    	if(user.getUserRole().equals("rescuer"))
    	{
    		role = roleDao.findById("Rescuer").get();
            userRoles.add(role);
            
    	}
    	else
    	{
    		role = roleDao.findById("User").get();
            userRoles.add(role);
    	}
    	
        
    	user.setRole(userRoles);
    	
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));

        return userDao.save(user);
    	
//    	 return user;
    }
    
    public User updateUser(User user) {
     
    	User u = userDao.findById(user.getUserName()).get();
    	u.setUserName(user.getUserName());
    	u.setUserFirstName(user.getUserFirstName());
    	u.setUserLastName(user.getUserLastName());
    	u.setUserEmail(user.getUserEmail());
    	u.setUserPhone(user.getUserPhone());
    	u.setCity(user.getCity());
    	u.setRole(u.getRole());
    	
        return userDao.save(u);
    }

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }
}