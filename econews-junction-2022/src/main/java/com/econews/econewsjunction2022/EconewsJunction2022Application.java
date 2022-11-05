package com.econews.econewsjunction2022;

import java.util.function.Function;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class EconewsJunction2022Application {

	public static void main(String[] args) {
		SpringApplication.run(EconewsJunction2022Application.class, args);
	}

	@Bean
	public Function<String, String> uppercase() {
		return value -> value.toUpperCase();
	}
}
