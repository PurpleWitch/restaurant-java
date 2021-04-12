package com.foodstore.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Document(collection = "restaurant")
public class Restaurant {
    
    @Id
    private int id;
    private String username;
    private String password;
    private String name;
    private String address;
    private String avatar;

}
