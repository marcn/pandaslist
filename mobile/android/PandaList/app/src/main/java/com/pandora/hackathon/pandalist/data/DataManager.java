package com.pandora.hackathon.pandalist.data;

import android.support.annotation.NonNull;
import android.util.Log;

import com.pandora.hackathon.pandalist.PandaListApplication;
import com.pandora.hackathon.pandalist.ddp.DDPBroadcastReceiver;
import com.pandora.hackathon.pandalist.ddp.DDPStateSingleton;
import com.pandora.hackathon.pandalist.ddp.MyDDPState;
import com.pandora.hackathon.pandalist.events.DDPMethodResultEvent;
import com.pandora.hackathon.pandalist.events.DPPConnectEvent;
import com.pandora.hackathon.pandalist.events.DataChangeEvent;
import com.squareup.otto.Subscribe;

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

    public static final String TAG = "DataManager";

    private static DataManager _instance;

    /**
     * Should be called from the Application
     *
     * @return
     */
    public static DataManager setupInstance() {
        if (_instance == null) {
            _instance = new DataManager();

            // Setup Otto bus for events
            PandaListApplication.getBus().register(_instance);
        } else {
            throw new RuntimeException("DataManager already setup");
        }
        return _instance;
    }

    private DataManager() {

    }

    private DDPBroadcastReceiver mReceiver;

    private ArrayList<Category> categories = new ArrayList<Category>();
    private ArrayList<Category> locations = new ArrayList<Category>();
    private ArrayList<Post> posts = new ArrayList<Post>();

    public ArrayList<Category> getCategories() {
        return categories;
    }

    public void addCategory(String subscriptionName, String docId) {
        MyDDPState ddp = PandaListApplication.getDDP();
        Map<String, Object> categoryData = ddp.getCollection(subscriptionName).get(docId);
        Category category = Category.parseCategory(categoryData);
        if (category != null) {
            categories.add(category);
        }
    }

    @Subscribe
    public void onDPPConnect(DPPConnectEvent event) {
        // DDP Connected try to fetch categories
        if (categories.size() == 0) {
            PandaListApplication.getDDP().call(DDPMethodResultEvent.CATEGORIES);
        }
    }

    @Subscribe
    public void onDDPMethodResultEvent(DDPMethodResultEvent event) {
        Log.i(TAG, "Got ddp result" + event.methodName);

        if (DDPMethodResultEvent.CATEGORIES.equals(event.methodName)) {

            ArrayList<Category> newCategories = new ArrayList<Category>();
            Map<String, Object> data = event.data;
            ArrayList<Map<String, Object>> value = (ArrayList<Map<String, Object>>) data.get("categories");
            for (Map obj : value) {
                Category category = Category.parseCategory(obj);
                if (category != null) {
                    newCategories.add(category);
                }
            }

            if (newCategories.size() > 0) {
                // Clear existing categories
                categories.clear();
                // Add new categories
                categories.addAll(newCategories);
            }
            //Fire an event if required at this point to notify UI
        }
    }
}
