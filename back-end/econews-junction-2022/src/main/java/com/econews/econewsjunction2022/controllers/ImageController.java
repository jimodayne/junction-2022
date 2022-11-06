package com.econews.econewsjunction2022.controllers;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tinify.Source;
import com.tinify.Tinify;


@RestController
@RequestMapping("/image")
public class ImageController {
	
	@RequestMapping(path = "/upload/image", method = RequestMethod.POST)
	public String upload(@RequestParam(name = "fileName") String fileUrl, HttpServletRequest request) throws IOException {
	    Tinify.setKey("HvsDHFLqJCH4LhKWXlCjnpN5RHzGJ7B8");
	   
	    Source source = Tinify.fromUrl(fileUrl);
	    source.toFile("compressed"+fileUrl);
		return fileUrl;
	}

}
