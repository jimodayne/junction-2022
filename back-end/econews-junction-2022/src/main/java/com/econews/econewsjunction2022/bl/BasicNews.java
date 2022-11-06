package com.econews.econewsjunction2022.bl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.econews.econewsjunction2022.entity.News;
import com.econews.econewsjunction2022.repository.NewsRepository;

@Service
public class BasicNews {
	@Autowired
	private NewsRepository repo;
	
	public List<News> findAll() {
		List<News> allNews = new ArrayList<News>();
		
		for (News c: repo.findAll()) {
			allNews.add(c);
		}
		return allNews;
		
	}
}
