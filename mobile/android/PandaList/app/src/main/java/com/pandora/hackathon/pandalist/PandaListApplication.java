package com.pandora.hackathon.pandalist;

import android.app.Application;
import android.content.Context;

import android.os.Handler;
import com.pandora.hackathon.pandalist.activity.PandaListActivity;
import com.pandora.hackathon.pandalist.data.DataManager;
import com.pandora.hackathon.pandalist.ddp.MyDDPState;
import com.pandora.hackathon.pandalist.gcm.GcmService;
import com.squareup.otto.Bus;

/**
 * Created by psingh on 11/5/14.
 */
public class PandaListApplication extends Application {

    private static Context sContext = null;
    private static Bus appBus = null;
    private static MyDDPState ddp = null;
    private static DataManager dataManager = null;

    @Override
    public void onCreate() {
        super.onCreate();

        PandaListApplication.sContext = getApplicationContext();
        PandaListApplication.appBus = new Bus();
        ddp = MyDDPState.setupInstance(sContext, new Handler());

        // Setup data manager
        dataManager = DataManager.setupInstance();

        // Perform init
        doInit();
    }

    private void doInit() {
        //Setup GCMSservice
        GcmService.getInstance().init(getApplicationContext(), getString(R.string.gcm_sender_id));
    }

    public static Context getAppContext() {
        return PandaListApplication.sContext;
    }

    public static Bus getBus() {
        return appBus;
    }

    public static MyDDPState getDDP() {
        return ddp;
    }

    public static DataManager getDataManager() {
        return dataManager;
    }
}
