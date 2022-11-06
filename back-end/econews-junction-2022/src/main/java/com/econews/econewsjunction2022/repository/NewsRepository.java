package com.econews.econewsjunction2022.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.econews.econewsjunction2022.entity.News;

public interface NewsRepository extends JpaRepository<News, Integer> {

}
