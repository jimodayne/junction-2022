package com.econews.econewsjunction2022.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.econews.econewsjunction2022.bl.BasicNews;
import com.econews.econewsjunction2022.entity.News;

@RestController
@RequestMapping(value= "/news")
public class NewsController {
	@Autowired
	BasicNews newsgBL;

	@RequestMapping(value = "/allcategories", method = RequestMethod.GET)
	public ResponseEntity<List<News>> getAllNews() {
		return new ResponseEntity<List<News>>(newsgBL.findAll(), HttpStatus.OK);
	}
}
