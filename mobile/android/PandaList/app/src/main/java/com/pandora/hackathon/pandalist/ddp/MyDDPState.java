package com.pandora.hackathon.pandalist.ddp;

import android.content.Context;
import android.os.Handler;

/**
 * Created by psingh on 11/5/14.
 */
public class MyDDPState extends DDPStateSingleton {

    private MyDDPState(Context context, Handler handler) {
        super(context, handler);
    }

    public static MyDDPState setupInstance(Context context, Handler handler) {
        if (mInstance == null) {
            mInstance = new MyDDPState(context, handler);
        }

        return (MyDDPState) mInstance;
    }
}
