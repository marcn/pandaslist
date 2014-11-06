package com.pandora.hackathon.pandalist.data;

/**
 * Created by psingh on 11/6/14.
 */
public class Post {

    private String title;
    private String description;
    private String categoryName;

    public Post(String title, String description, String categoryName) {
        this.title = title;
        this.description = description;
        this.categoryName = categoryName;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getCategory() {
        return categoryName;
    }
}
