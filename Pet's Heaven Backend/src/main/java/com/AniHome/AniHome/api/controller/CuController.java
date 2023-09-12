package com.AniHome.AniHome.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.AniHome.AniHome.api.entity.ContactUs;
import com.AniHome.AniHome.api.service.ContactUsService;

@CrossOrigin
@RestController
@RequestMapping("/auth")
public class CuController {
	ContactUsService contactUsService;

	@Autowired
	public CuController(ContactUsService cuServ) {
		contactUsService = cuServ;
}
	@PostMapping("/contact")
	public ContactUs addContactUs(@RequestBody ContactUs cu) {
		cu.setId(0);
		contactUsService.saveContact(cu);
		return cu;
	
}
	@GetMapping("/contact")
	@PreAuthorize("hasRole('Admin')")
	public List<ContactUs>  allContact() {
		return contactUsService.getAllContact();
		
}
	@DeleteMapping("/contact/{contactUsId}")
	@PreAuthorize("hasRole('Admin')")
	public void deleteContactUs(@PathVariable int contactUsId ) {
		contactUsService.deleteContactById(contactUsId);

} 
}
