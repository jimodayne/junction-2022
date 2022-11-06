/*
 * Copyright 2020-2020 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.econews;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.function.Consumer;
import java.util.function.Function;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.econews.entity.JSONMessage;
import com.tinify.Source;
import com.tinify.Tinify;

@SpringBootApplication
public class EconewsApplication {

	public static void main(String[] args) {
		SpringApplication.run(EconewsApplication.class, args);
	}

	@Bean
	public Function<String, String> imageConvert() throws IOException {		
		return message -> {
			try {
				return compressedImage(message);
			} catch (IOException e) {
				e.printStackTrace();
			}
			return null;
		};
	}
	
	private String compressedImage(String imageUrl) throws IOException {
	    Tinify.setKey("%API_KEY%");
	    
	    Source source = Tinify.fromUrl(imageUrl);
	    source.toFile("compressed" + imageUrl);
	    
	    return imageUrl;
	}
}
