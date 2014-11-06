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
        String name = ParserHelper.parseString(categoryData, TAG_NAME);
        ArrayList<String> subcategories = ParserHelper.parseStringArrayList(categoryData, TAG_SUB_CATEGORY);
        return new Category(name, subcategories);
    }

    public String getName() {
        return name;
    }

    public List<String> getSubcategories() {
        return subcategories;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Category that = (Category) o;

        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (subcategories != null ? !subcategories.equals(that.subcategories) : that.subcategories != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = name != null ? name.hashCode() : 0;
        result = 31 * result + (subcategories != null ? subcategories.hashCode() : 0);

        return result;
    }
}
