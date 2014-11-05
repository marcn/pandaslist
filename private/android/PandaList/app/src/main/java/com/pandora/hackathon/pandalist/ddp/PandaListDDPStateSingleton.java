package com.pandora.hackathon.pandalist.ddp;

import android.content.Context;

import com.keysolutions.ddpclient.android.DDPStateSingleton;

/**
 * Created by psingh on 11/5/14.
 */
public class PandaListDDPStateSingleton extends DDPStateSingleton {

    private PandaListDDPStateSingleton(Context context) {
        super(context);
    }

    public static void setupInstance(Context context) {
        if (mInstance == null) {
            mInstance = new PandaListDDPStateSingleton(context);
        }
    }

    public static PandaListDDPStateSingleton getInstance() {
        return (PandaListDDPStateSingleton) mInstance;
    }
}
