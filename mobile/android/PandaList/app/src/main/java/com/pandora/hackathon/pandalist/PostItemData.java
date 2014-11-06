package com.pandora.hackathon.pandalist;

import java.io.Serializable;


public class PostItemData implements Serializable {

    private String mTitle;
    private String mDescription;
    private String mLocation;
    private double mPrice;
    private String mBitmapId;
    private long mBitmapResId;
    private String mCategory;
    private String mSubcategory;


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

    public double getPrice() {
        return mPrice;
    }

    public void setPrice(double mPrice) {
        this.mPrice = mPrice;
    }

    public String getBitmapUrl() {
        return mBitmapId;
    }

    public void setBitmapUrl(String mBitmapUrl) {
        this.mBitmapId = mBitmapUrl;
    }

    public long getBitmapResId() {
        return mBitmapResId;
    }

    public void setBitmapResId(long mBitmapResId) {
        this.mBitmapResId = mBitmapResId;
    }

    public String getCategory() {
        return mCategory;
    }

    public void setCategory(String mCategory) {
        this.mCategory = mCategory;
    }

    public String getSubcategory() {
        return mSubcategory;
    }

    public void setSubcategory(String mSubcategory) {
        this.mSubcategory = mSubcategory;
    }
}
