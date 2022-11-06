package com.econews.econewsjunction2022.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.econews.econewsjunction2022.bl.BasicUsers;
import com.econews.econewsjunction2022.entity.Users;

@RestController
@RequestMapping(value= "/users")
public class UsersController {

	@Autowired
	BasicUsers userBL;
	
	@RequestMapping(value = "/allusers", method = RequestMethod.GET)
	public ResponseEntity<List<Users>> getAllUser() {
		return new ResponseEntity<List<Users>>(userBL.findAll(), HttpStatus.OK);
	}
}
