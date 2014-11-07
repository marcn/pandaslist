package com.pandora.hackathon.pandalist;

import java.io.Serializable;


public class PostItemData implements Serializable {

    private String mId;
    private String mCategory;
    private String mSubcategory;
    private String mLocation;
    private String mTitle;
    private String mDescription;
    private String mDeliveryMethod;
    private String mImageUrl;
    private String mCreatedBy;
    private String mCreationDate;
    private boolean mIsPublished;
    private String mPrice;

    public void setId(String id) {
        this.mId = id;
    }

    public String getId() {
        return mId;
    }

    public void setDeliveryMethod(String method) {
        this.mDeliveryMethod = method;
    }

    public String getDeliveryMethod() {
        return mDeliveryMethod;
    }

    public void setImageUrl(String url) {
        mImageUrl = url;
    }

    public String getImageUrl() {
        return mImageUrl;
    }

    public void setCreatedBy(String createdBy) {
        this.mCreatedBy = createdBy;
    }

    public String getCreatedBy() {
        return mCreatedBy;
    }

    public void setCreationDate(String date) {
        this.mCreationDate = date;
    }

    public String getCreationDate() {
        return mCreationDate;
    }

    public void setIsPublished(boolean published) {
        this.mIsPublished = published;
    }

    public boolean getIsPublished() {
        return mIsPublished;
    }

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

    public String getPrice() {
        return mPrice;
    }

    public void setPrice(String mPrice) {
        this.mPrice = mPrice;
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
