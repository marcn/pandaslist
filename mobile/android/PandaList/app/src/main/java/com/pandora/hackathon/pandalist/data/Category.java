package com.pandora.hackathon.pandalist.data;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by psingh on 11/6/14.
 */
public class Category {

    public static final String COLLECTION_NAME = "categories";
    public static final String TAG_NAME = "name";
    public static final String TAG_SUB_CATEGORY = "subCategories";

    private String name;

    private List<String> subcategories;

    public Category(String name, List<String> subcategories) {
        this.name = name;
        this.subcategories = subcategories;
    }

    public static Category ParseCategory(Map<String, Object> categoryData) {
        String name = categoryData.get(TAG_NAME).toString();
        ArrayList<String> subcategories = (ArrayList<String>)categoryData.get(TAG_SUB_CATEGORY);
        return new Category(name, subcategories);
    }

    public String getName() {
        return name;
    }

    public List<String> getSubcategories() {
        return subcategories;
    }
}
