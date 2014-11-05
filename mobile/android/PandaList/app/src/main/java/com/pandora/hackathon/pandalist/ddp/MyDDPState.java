package com.pandora.hackathon.pandalist.ddp;

import android.content.Context;

import com.keysolutions.ddpclient.android.DDPStateSingleton;

/**
 * Created by psingh on 11/5/14.
 */
public class MyDDPState extends DDPStateSingleton {

    private MyDDPState(Context context) {
        super(context);
    }

    public static void setupInstance(Context context) {
        if (mInstance == null) {
            mInstance = new MyDDPState(context);
        }
    }

    public static MyDDPState getInstance() {
        return (MyDDPState) mInstance;
    }
}
