package com.pandora.hackathon.pandalist.aws;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;

/**
 * Created by dsantiagorivera on 11/6/14.
 */
public class TransferController {
    public static void abort(Context context, TransferModel model) {
        Intent intent = makeIdIntent(context, model.getId());
        intent.setAction(NetworkService.ACTION_ABORT);
        context.startService(intent);
    }

    public static void upload(Context context, Uri uri, String filename) {
        Intent intent = new Intent(context, NetworkService.class);
        intent.setAction(Intent.ACTION_SEND);
        intent.setData(uri);
        intent.putExtra("filename", filename);
        context.startService(intent);
    }

    public static void download(Context context, String[] keys) {
        Intent intent = new Intent(context, NetworkService.class);
        intent.setAction(Intent.ACTION_GET_CONTENT);
        intent.putExtra(NetworkService.S3_KEYS_EXTRA, keys);
        context.startService(intent);
    }

    public static void pause(Context context, TransferModel model) {
        Intent intent = makeIdIntent(context, model.getId());
        intent.setAction(NetworkService.ACTION_PAUSE);
        context.startService(intent);
    }

    public static void resume(Context context, TransferModel model) {
        Intent intent = makeIdIntent(context, model.getId());
        intent.setAction(NetworkService.ACTION_RESUME);
        context.startService(intent);
    }

    private static Intent makeIdIntent(Context context, int id) {
        Intent intent = new Intent(context, NetworkService.class);
        intent.putExtra(NetworkService.NOTIF_ID_EXTRA, id);
        return intent;
    }
}
