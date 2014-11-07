package com.pandora.hackathon.pandalist.activity;

import android.app.Activity;
import android.app.FragmentManager;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;

import android.util.Log;
import com.pandora.hackathon.pandalist.PandaListApplication;
import com.pandora.hackathon.pandalist.R;
import com.pandora.hackathon.pandalist.aws.AWSUtils;
import com.pandora.hackathon.pandalist.aws.TransferController;
import com.pandora.hackathon.pandalist.events.DDPMethodResultEvent;
import com.pandora.hackathon.pandalist.fragment.PostingFragment;
import com.squareup.otto.Subscribe;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 *
 */
public class PostingActivity extends BaseActivity {

    public static final int REQUEST_IMAGE_CAPTURE = 1001;
    public static final int REQUEST_IMAGE_FROM_GALLERY = 1002;
    private Uri mImageUri;
    private String mCurrentPhotoPath;
    private String mUploadedImageId;
    private String mUploadedImageUrl;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_postings);
        setTitle(null);

        FragmentManager fragmentManager = getFragmentManager();
        fragmentManager.beginTransaction()
                .replace(R.id.container, PostingFragment.newInstance())
                .commit();

    }

    @Override
    protected void onResume() {
        super.onResume();

        PandaListApplication.getBus().register(this);
    }

    @Override
    protected void onPause() {
        super.onPause();

        PandaListApplication.getBus().unregister(this);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, android.content.Intent data) {
        super.onActivityResult(requestCode, resultCode, data);


        switch (requestCode) {
            case REQUEST_IMAGE_CAPTURE:
                if (resultCode == RESULT_OK) {
                    Bundle extras = data.getExtras();
                    Bitmap imageBitmap = (Bitmap) extras.get("data");
                    try {
                        String mongoFileName = AWSUtils.getFileName();
                        File imageFile = createImageFile(mongoFileName);
                        FileOutputStream out = new FileOutputStream(imageFile);
                        imageBitmap.compress(Bitmap.CompressFormat.JPEG, 100, out);
                        TransferController.upload(this, imageFile.getAbsolutePath(), mongoFileName);
                    } catch (IOException e) {
                        e.printStackTrace();
                    }

                }
                break;
            case REQUEST_IMAGE_FROM_GALLERY:
                if(resultCode == RESULT_OK) {
                    Uri selectedImage = data.getData();
                    String[] filePathColumn = { MediaStore.Images.Media.DATA };

                    Cursor cursor = getContentResolver().query(selectedImage,
                            filePathColumn, null, null, null);
                    cursor.moveToFirst();

                    int columnIndex = cursor.getColumnIndex(filePathColumn[0]);
                    String picturePath = cursor.getString(columnIndex);

                    //BitmapFactory.decodeFile(picturePath);
                    cursor.close();

                    String filename = AWSUtils.getFileName();
                    TransferController.upload(this, selectedImage, filename);
                }
                break;
            default:
                break;
        }
    }

    @Override
    public void finish() {
        super.finish();
        overridePendingTransition(0, R.anim.activity_back_out);
    }

    private File createImageFile(String mongoFileName) throws IOException {
        // Create an image file name
        File storageDir = Environment.getExternalStoragePublicDirectory(
                Environment.DIRECTORY_PICTURES);
        File image = File.createTempFile(
                mongoFileName,  /* prefix */
                ".jpg",         /* suffix */
                storageDir      /* directory */
        );

        // Save a file: path for use with ACTION_VIEW intents
        mCurrentPhotoPath = "file:" + image.getAbsolutePath();
        return image;
    }

    @Subscribe
    public void onDDPMethodResultEvent(DDPMethodResultEvent event) {
        if (event.methodName.equals("uploadImage")) {
            mUploadedImageId = (String) event.data.get("id");
            mUploadedImageUrl = (String) event.data.get("url");
        }
    }

    public String getUploadedImageId() {
        return mUploadedImageId;
    }

    public String getUploadedImageUrl() {
        return mUploadedImageUrl;
    }

}
