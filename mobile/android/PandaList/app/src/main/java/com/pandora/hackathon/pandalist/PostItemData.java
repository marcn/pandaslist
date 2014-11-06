package com.pandora.hackathon.pandalist;

import java.io.Serializable;


public class PostItemData implements Serializable {

    private String mTitle;
    private String mDescription;
    private String mLocation;
    private float mPrice;
    private String[] mBitmapUrl;


    public String getTitle() {
        return mTitle;
    }

    public void setTitle(String mTitle) {
        this.mTitle = mTitle;
    }

    public String getDescription() {
        return mDescription;
    }

    public void setDescription(String mDescription) {
        this.mDescription = mDescription;
    }

    public String getLocation() {
        return mLocation;
    }

    public void setLocation(String mLocation) {
        this.mLocation = mLocation;
    }

    public float getPrice() {
        return mPrice;
    }

    public void setPrice(float mPrice) {
        this.mPrice = mPrice;
    }

    public String[] getBitmapUrl() {
        return mBitmapUrl;
    }

    public void setBitmapUrl(String[] mBitmapUrl) {
        this.mBitmapUrl = mBitmapUrl;
    }
}
