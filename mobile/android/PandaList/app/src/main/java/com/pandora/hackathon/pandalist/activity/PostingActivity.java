package com.pandora.hackathon.pandalist.activity;

import android.app.Activity;
import android.app.FragmentManager;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;

import com.pandora.hackathon.pandalist.R;
import com.pandora.hackathon.pandalist.aws.AWSUtils;
import com.pandora.hackathon.pandalist.aws.TransferController;
import com.pandora.hackathon.pandalist.fragment.PostingFragment;

/**
 *
 */
public class PostingActivity extends BaseActivity {

    public static final int REQUEST_IMAGE_CAPTURE = 1001;
    public static final int REQUEST_IMAGE_FROM_GALLERY = 1002;
    private Uri mImageUri;

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
    protected void onActivityResult(int requestCode, int resultCode, android.content.Intent data) {
        super.onActivityResult(requestCode, resultCode, data);


        switch (requestCode) {
            case REQUEST_IMAGE_CAPTURE:
                if (resultCode == RESULT_OK) {
                    Bundle extras = data.getExtras();
                    Bitmap imageBitmap = (Bitmap) extras.get("data");

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

}
