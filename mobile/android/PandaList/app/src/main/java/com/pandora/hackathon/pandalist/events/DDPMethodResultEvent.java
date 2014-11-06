package com.pandora.hackathon.pandalist.events;

import java.util.Map;

/**
 * Created by dsantiagorivera on 11/6/14.
 */
public class DDPMethodResultEvent {
    public static String CATEGORIES = "getCategories";

    public final String methodName;
    public final Map<String, Object> data;

    public DDPMethodResultEvent(String methodName, Map<String, Object> data) {
        this.methodName = methodName;
        this.data = data;
    }
}
