package com.pandora.hackathon.pandalist.ddp;

import android.content.Context;

/**
 * Created by psingh on 11/5/14.
 */
public class MyDDPState extends DDPStateSingleton {

    private MyDDPState(Context context) {
        super(context);
    }

    public static MyDDPState setupInstance(Context context) {
        if (mInstance == null) {
            mInstance = new MyDDPState(context);
        }

        return (MyDDPState) mInstance;
    }
}
