package com.econews.econewsjunction2022.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.econews.econewsjunction2022.entity.Users;

public interface UsersRepo extends JpaRepository<Users, Integer> {

}
