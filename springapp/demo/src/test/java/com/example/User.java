package com.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class User {
    
    @GetMapping("/welcome")
    public String getMessage(){
        return "Welcome to the class";
    }
}
