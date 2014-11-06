package com.pandora.hackathon.pandalist.data;

import android.support.annotation.NonNull;
import android.util.Log;

import com.pandora.hackathon.pandalist.PandaListApplication;
import com.pandora.hackathon.pandalist.ddp.MyDDPState;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;

/**
 * Created by psingh on 11/6/14.
 */
public class DataManager {

    private static DataManager _instance;

    public static DataManager getInstance() {
        if(_instance == null) {
            synchronized (DataManager.class) {
                if(_instance == null) {
                    _instance = new DataManager();
                }
            }
        }
        return _instance;
    }

    private DataManager() {

    }

    private ArrayList<Category> categories = new ArrayList<Category>();
    private ArrayList<Category> locations = new ArrayList<Category>();
    private ArrayList<Post> posts = new ArrayList<Post>();

    public ArrayList<Category> getCategories() {
        return getCategories(false);
    }

    private ArrayList<Category> getCategories(boolean fetchAll) {
       if(fetchAll || categories.size() == 0) {
           //TODO: Implement it
       }
        return categories;
    }

    public void addCategory(String subscriptionName, String docId) {
        MyDDPState ddp = PandaListApplication.getDDP();
        Map<String, Object> categoryData = ddp.getCollection(subscriptionName).get(docId);
        Category category = Category.ParseCategory(categoryData);
        if(category != null) {
            categories.add(category);
        }
    }
}
