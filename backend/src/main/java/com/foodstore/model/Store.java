package com.foodstore.model;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection = "store")
public class Store {
    
    @Id
    private int id;
    private String username;
    private String password;
    private String name;
    private String address;
    private String avatar;
    private String image;
    private ArrayList<ArrayList<String>> items;

}
