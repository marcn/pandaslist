package com.pandora.hackathon.pandalist.data;

import java.util.Map;

/**
 * Created by psingh on 11/6/14.
 */
public class Post {

    public static final String COLLECTION_NAME = "posts";

    private static final String TAG_TITLE = "name";
    private static final String TAG_DESCRIPTION = "description";
    private static final String TAG_CATEGORY_NAME = "categoryName";

    private String title;
    private String description;
    private String categoryName;

    public Post(String title, String description, String categoryName) {
        this.title = title;
        this.description = description;
        this.categoryName = categoryName;
    }

    public static Post parsePost(Map<String, Object> postData) {
        String title = ParserHelper.parseString(postData, TAG_TITLE);
        String description = ParserHelper.parseString(postData, TAG_DESCRIPTION);
        String categoryName = ParserHelper.parseString(postData, TAG_CATEGORY_NAME);
        return new Post(title, description, categoryName);
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
