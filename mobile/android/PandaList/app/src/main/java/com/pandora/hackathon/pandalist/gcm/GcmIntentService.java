package com.pandora.hackathon.pandalist.gcm;

import android.app.IntentService;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.NotificationCompat;
import android.util.Log;

import com.google.android.gms.gcm.GoogleCloudMessaging;
import com.pandora.hackathon.pandalist.R;
import com.pandora.hackathon.pandalist.activity.PandaListActivity;

import org.json.JSONObject;

/**
 * Created by ijohnson on 11/5/14.
 */
public class GcmIntentService extends IntentService {
    private static final String TAG = "GcmIntentService";

    public static final int NOTIFICATION_ID = 1;
    private NotificationManager mNotificationManager;

    public GcmIntentService() {
        super(TAG);
    }

    @Override
    protected void onHandleIntent(Intent intent) {
        Bundle extras = intent.getExtras();
        GoogleCloudMessaging gcm = GoogleCloudMessaging.getInstance(this);

        String messageType = gcm.getMessageType(intent);

        if (!extras.isEmpty()) {  // has effect of unparcelling Bundle
            JSONObject payload = null;
            try {
                payload = new JSONObject(intent.getStringExtra("data"));
            } catch (Exception ie){
               Log.d(TAG, "There was an error", ie);
            }

            if (GoogleCloudMessaging.MESSAGE_TYPE_MESSAGE.equals(messageType) && payload !=null) {
                String title = payload.optString("title", getString(R.string.app_name));
                String msg = payload.optString("body", null);
                sendNotification(null, title, msg);
            } else {

                Log.i(TAG, "Received: " + extras.toString());
            }
        }

        // Release the wake lock provided by the WakefulBroadcastReceiver.
        GcmBroadcastReceiver.completeWakefulIntent(intent);
    }

    // Put the message into a notification and post it.
    // This is just one simple example of what you might choose to do with
    // a GCM message.
    private void sendNotification(String icon_url, String title, String msg) {
        mNotificationManager = (NotificationManager)
                this.getSystemService(Context.NOTIFICATION_SERVICE);

        PendingIntent contentIntent = PendingIntent.getActivity(this, 0, new Intent(this, PandaListActivity.class), 0);

        NotificationCompat.Builder mBuilder = new NotificationCompat.Builder(this)
                        .setContentTitle(title)
                        .setStyle(new NotificationCompat.BigTextStyle().bigText(msg))
                        .setContentText(msg);
//                        .setSmallIcon(R.drawable.i);

        mBuilder.setContentIntent(contentIntent);
        mNotificationManager.notify(NOTIFICATION_ID, mBuilder.build());
    }
}
