package com.pandora.hackathon.pandalist;

import android.app.Application;
import android.content.Context;

import com.pandora.hackathon.pandalist.ddp.MyDDPState;

/**
 * Created by psingh on 11/5/14.
 */
public class PandaListApplication extends Application {

    private static Context sContext = null;

    @Override
    public void onCreate() {
        super.onCreate();

        PandaListApplication.sContext = getApplicationContext();

        // Perform init
        doInit();
    }

    public static Context getAppContext() {
        return PandaListApplication.sContext;
    }

    private void doInit() {
        // Setup DDM
        MyDDPState.setupInstance(sContext);
    }
}
