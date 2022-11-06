package com.econews.econewsjunction2022.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.econews.econewsjunction2022.bl.BasicCategories;
import com.econews.econewsjunction2022.entity.Categories;

@RestController
@RequestMapping(value= "/categories")
public class CategoriesController {
	@Autowired
	BasicCategories categBL;

	@RequestMapping(value = "/allcategories", method = RequestMethod.GET)
	public ResponseEntity<List<Categories>> getAllCategories() {
		return new ResponseEntity<List<Categories>>(categBL.findAll(), HttpStatus.OK);
	}
}
