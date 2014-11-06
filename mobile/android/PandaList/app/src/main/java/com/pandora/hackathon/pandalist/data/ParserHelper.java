package com.pandora.hackathon.pandalist.data;

import java.util.ArrayList;
import java.util.Map;

/**
 * Created by psingh on 11/6/14.
 */
public class ParserHelper {

    public static String parseString(Map<String, Object> data, String name) {
        if(data == null) {
            return "";
        }
        Object value = data.get(name);
        return value != null ? value.toString() : "";
    }

    public static ArrayList<String> parseStringArrayList(Map<String, Object> data, String name) {
        if(data == null) {
            return null;
        }
        try {
            Object value = data.get(name);
            return value != null ? (ArrayList<String>)value : null;

        } catch (Exception ex) {
            return null;
        }
    }
}
