package com.pandora.hackathon.pandalist.events;

/**
 * Created by dsantiagorivera on 11/5/14.
 */
public class DataChangeEvent {

    public String subscriptionName;
    public String changeType;
    public String docId;

    public DataChangeEvent(String subscriptionName, String changetype, String docId) {
        this.subscriptionName = subscriptionName;
        this.changeType = changetype;
        this.docId = docId;
    }
}
