package com.demo.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

	//@RequestMapping(method=RequestMethod.GET , path="/hello-world")
	@GetMapping(path= "/hello-world")
	public String HelloWorld() {
		return "Hello World";
	}
	
	@GetMapping(path= "/hello-world-bean")
	public HelloWorldBean helloworldBean() {
		return new HelloWorldBean("Hello World");
	}
		
		
		
		
		@GetMapping(path= "/hello-world-bean/path-variable/{name}")
		public HelloWorldBean helloworldPathvariable(@Pathvariable String name) {
			return new HelloWorldBean(String.format("Hello World, %s" , name));
}
	
}