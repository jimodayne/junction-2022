package com.econews.econewsjunction2022.bl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.econews.econewsjunction2022.repository.UsersRepo;
import com.econews.econewsjunction2022.entity.Users;

@Service
public class BasicUsers {
	@Autowired
	private UsersRepo repo;
	
	public List<Users> findAll() {
		List<Users> allUsers = new ArrayList<Users>();
		
		for (Users u: repo.findAll()) {
			allUsers.add(u);
		}
		return allUsers;
		
	}
}
