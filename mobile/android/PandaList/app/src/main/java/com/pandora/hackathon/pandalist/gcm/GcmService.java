package com.pandora.hackathon.pandalist.gcm;

import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.os.AsyncTask;
import android.text.TextUtils;
import android.util.Log;

import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.GooglePlayServicesUtil;
import com.google.android.gms.gcm.GoogleCloudMessaging;
import com.pandora.hackathon.pandalist.PandaListApplication;
import com.pandora.hackathon.pandalist.aws.Constants;
import com.pandora.hackathon.pandalist.events.DDPMethodResultEvent;
import com.pandora.hackathon.pandalist.events.DPPConnectEvent;
import com.squareup.otto.Subscribe;

import java.io.IOException;

/**
 * Created by ijohnson on 11/5/14.
 */
public class GcmService {

    private static final String TAG = "GcmManager";

    private static final String PROPERTY_REG_ID = "registration_id";
    private static final String PROPERTY_APP_VERSION = "appVersion";
    private final static int PLAY_SERVICES_RESOLUTION_REQUEST = 9000;

    private static String SENDER_ID;

    private static GcmService gcmService;
    private static GoogleCloudMessaging gcm;

    private static boolean mIsDDPConnected;
    private static String regid;

    private static Context context;

    private GcmService() {
        PandaListApplication.getBus().register(this);
    }

    public static synchronized GcmService getInstance() {
        if (gcmService == null) {
            gcmService = new GcmService();
        }
        return gcmService;
    }

    public final void init(Context _context, String _sender_id) {
        context = _context;
        SENDER_ID = _sender_id;
    }

    /**
     * Check the device to make sure it has the Google Play Services APK. If
     * it doesn't, display a dialog that allows users to download the APK from
     * the Google Play Store or enable it in the device's system settings.
     */
    private boolean checkPlayServices(Activity context) {
        int resultCode = GooglePlayServicesUtil.isGooglePlayServicesAvailable(context);
        if (resultCode != ConnectionResult.SUCCESS) {
            if (GooglePlayServicesUtil.isUserRecoverableError(resultCode)) {
                GooglePlayServicesUtil.getErrorDialog(resultCode, context, PLAY_SERVICES_RESOLUTION_REQUEST).show();
            } else {
                Log.i(TAG, "This device is not supported.");
            }
            return false;
        }

        return true;
    }

    public void register(Activity activity) {
        // Check device for Play Services APK. If check succeeds, proceed with
        //  GCM registration.
        if (checkPlayServices(activity)) {
            gcm = GoogleCloudMessaging.getInstance(context);
            regid = getRegistrationId(context);

            //if (regid.isEmpty()) {
                new RegisterAysnc().execute();
            //}
        } else {
            Log.i(TAG, "No valid Google Play Services APK found.");
        }
    }

    private String getRegistrationId(Context context) {
        final SharedPreferences prefs = getGCMPreferences(context);
        String registrationId = prefs.getString(PROPERTY_REG_ID, "");
        if (registrationId.isEmpty()) {
            Log.i(TAG, "Registration not found.");
            return "";
        }
        // Check if app was updated; if so, it must clear the registration ID
        // since the existing regID is not guaranteed to work with the new
        // app version.
        int registeredVersion = prefs.getInt(PROPERTY_APP_VERSION, Integer.MIN_VALUE);
        int currentVersion = getAppVersion(context);
        if (registeredVersion != currentVersion) {
            Log.i(TAG, "App version changed.");
            return "";
        }
        return registrationId;
    }

    /**
     * @return Application's {@code SharedPreferences}.
     */
    private static SharedPreferences getGCMPreferences(Context context) {
        return context.getSharedPreferences(TAG, Context.MODE_PRIVATE);
    }

    /**
     * @return Application's version code from the {@code PackageManager}.
     */
    private static int getAppVersion(Context context) {
        try {
            PackageInfo packageInfo = context.getPackageManager()
                    .getPackageInfo(context.getPackageName(), 0);
            return packageInfo.versionCode;
        } catch (PackageManager.NameNotFoundException e) {
            // should never happen
            throw new RuntimeException("Could not get package name: " + e);
        }
    }

    /**
     * Stores the registration ID and app versionCode in the application's
     * {@code SharedPreferences}.
     *
     * @param context application's context.
     * @param regId registration ID
     */
    private static void storeRegistrationId(Context context, String regId) {
        final SharedPreferences prefs = getGCMPreferences(context);
        int appVersion = getAppVersion(context);
        Log.i(TAG, "Saving regId on app version " + appVersion);
        SharedPreferences.Editor editor = prefs.edit();
        editor.putString(PROPERTY_REG_ID, regId);
        editor.putInt(PROPERTY_APP_VERSION, appVersion);
        editor.commit();
    }

    /**
     * Sends the registration ID to your server over HTTP, so it can use GCM/HTTP
     * or CCS to send messages to your app. Not needed for this demo since the
     * device sends upstream messages to a server that echoes back the message
     * using the 'from' address in the message.
     */
    private static void sendRegistrationIdToBackend(String regId) {
        String userId = Constants.getPandalistUserId();
        if (userId == null || TextUtils.isEmpty(regId)) {
            Log.e(TAG, "Invalid user id or reg id.");
            return;
        }
        while (!mIsDDPConnected) {
            Log.d(TAG, "storeRegistrationId -- Waiting for DDP connection...");
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        Log.d(TAG, "storeRegistrationId -- Sending reg id for user " + userId + ": " + regId);
        Object[] methodArgs = new Object[2];
        methodArgs[0] = userId;
        methodArgs[1] = regId;
        PandaListApplication.getDDP().call(DDPMethodResultEvent.REGISTRATION, methodArgs);
    }

    /**
     * Registers the application with GCM servers asynchronously.
     * <p>
     * Stores the registration ID and app versionCode in the application's
     * shared preferences.
     */
    private static class RegisterAysnc extends AsyncTask<Void, Void, Void> {
        private static final Object slock = new Object();

        private static boolean processing = false;

        @Override
        protected Void doInBackground(Void... params) {
            String msg;
            synchronized (slock) {
                 if(processing) return null;

                processing = true;
            }

            try {
                if (gcm == null) {
                    gcm = GoogleCloudMessaging.getInstance(context);
                }
                regid = gcm.register(SENDER_ID);
                msg = "Device registered, registration ID=" + regid;

                // You should send the registration ID to your server over HTTP,
                // so it can use GCM/HTTP or CCS to send messages to your app.
                // The request to your server should be authenticated if your app
                // is using accounts.
                sendRegistrationIdToBackend(regid);

                // For this demo: we don't need to send it because the device
                // will send upstream messages to a server that echo back the
                // message using the 'from' address in the message.

                // Persist the regID - no need to register again.
                storeRegistrationId(context, regid);
            } catch (IOException ex) {
                msg = "Error :" + ex.getMessage();
                // If there is an error, don't just keep trying to register.
                // Require the user to click a button again, or perform
                // exponential back-off.
            }

            synchronized (slock) {
                processing = false;
            }

            Log.i(TAG, msg);

            return null;
        }
    }

    @Subscribe
    public void onDDPConnectEVent(DPPConnectEvent event) {
        mIsDDPConnected = true;
    }

    @Subscribe
    public void onDDPMethodResultEvent(DDPMethodResultEvent event) {
        if (event.methodName.equalsIgnoreCase(DDPMethodResultEvent.REGISTRATION)) {
            if (event.data == null || event.data.size() == 0) {
                System.out.println("storeRegistrationId -- no result");
            }
            for (String key : event.data.keySet()) {
                System.out.println("storeRegistrationId -- " + key + ": " + event.data.get(key).toString());
            }
        }
    }
}
