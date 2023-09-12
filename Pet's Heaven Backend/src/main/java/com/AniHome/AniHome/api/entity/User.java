package com.AniHome.AniHome.api.entity;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;

import java.util.Set;

@Entity
public class User {
	@Id
	@Pattern(regexp = "^[a-zA-Z]{3,}$", message = "User Name must be 3 letter long")
    private String userName;
	
	@Pattern(regexp = "^[a-zA-Z]{3,}$", message = "First Name must be 3 letter long")
	private String userFirstName;
	
	private String userLastName;
	
	@Email(message = "Provide valid email")
    private String userEmail;
	
	@Pattern(regexp = "^[6-9]\\d{9}$", message = "Provide Indian phone number")
    private String userPhone;
	
	private String city;

	private String userPassword;
    
    @Transient
    private String userRole;
    
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "USER_ROLE",
            joinColumns = {
                    @JoinColumn(name = "USER_ID")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "ROLE_ID")
            }
    )
	private Set<Role> role;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
    
    public String getUserFirstName() {
		return userFirstName;
	}

	public void setUserFirstName(String userFirstName) {
		this.userFirstName = userFirstName;
	}

	public String getUserLastName() {
		return userLastName;
	}

	public void setUserLastName(String userLastName) {
		this.userLastName = userLastName;
	}

  

    public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserPhone() {
		return userPhone;
	}

	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}

	public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }
    
    public String getUserRole() {
		return userRole;
	}

    public Set<Role> getRole() {
        return role;
    }

    public void setRole(Set<Role> role) {
        this.role = role;
    }
    
    public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}
    
}
