package com.econews.econewsjunction2022.bl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.econews.econewsjunction2022.entity.Categories;
import com.econews.econewsjunction2022.repository.CategoriesRepository;

@Service
public class BasicCategories {
	@Autowired
	private CategoriesRepository repo;
	
	public List<Categories> findAll() {
		List<Categories> allCategories = new ArrayList<Categories>();
		
		for (Categories c: repo.findAll()) {
			allCategories.add(c);
		}
		return allCategories;
		
	}
}
