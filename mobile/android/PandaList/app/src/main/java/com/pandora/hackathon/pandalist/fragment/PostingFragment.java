package com.pandora.hackathon.pandalist.fragment;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.text.TextUtils;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.keysolutions.ddpclient.DDPListener;
import com.pandora.hackathon.pandalist.PandaListApplication;
import com.pandora.hackathon.pandalist.R;
import com.pandora.hackathon.pandalist.activity.PostingActivity;
import com.pandora.hackathon.pandalist.aws.TransferController;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by jmendez on 11/5/14.
 */
public class PostingFragment extends BaseFragment implements View.OnClickListener {

    public PostingFragment() {}


    private Spinner mPostTypeSpinner;
    private AdapterView.OnItemSelectedListener mPostTypeItemSelectedListener;

    private Spinner mCategorySpinner;
    private Spinner mSubCategorySpinner;
    private View mPhotoView;
    private Spinner mLocationName;
    private View mCameraView;
    private View mLocationOfficesView;
    private View mCreatePostView;
    private EditText mTitle;
    private EditText mPrice;
    private EditText mDescription;
    private Spinner mDeliverySpinner;

    public static PostingFragment newInstance() {
        PostingFragment fragment = new PostingFragment();
        return fragment;
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View mainView =  inflater.inflate(R.layout.fragment_postings, container, false);
        mainView.setOnClickListener(this);

        createPostTypeAdapter(mainView);

        mCategorySpinner = (Spinner)mainView.findViewById(R.id.category);
        mSubCategorySpinner = (Spinner)mainView.findViewById(R.id.subcategory);
        mLocationName = (Spinner)mainView.findViewById(R.id.location_name);
        mDeliverySpinner = (Spinner)mainView.findViewById(R.id.delivery_spinner);

        mPhotoView = mainView.findViewById(R.id.photo_gallery);
        mPhotoView.setOnClickListener(this);

        mCameraView = mainView.findViewById(R.id.photo_camera);
        mCameraView.setOnClickListener(this);

        mLocationOfficesView = mainView.findViewById(R.id.location_office);
        mLocationOfficesView.setOnClickListener(this);

        mCreatePostView = mainView.findViewById(R.id.send_post);
        mCreatePostView.setOnClickListener(this);


        mTitle = (EditText)mainView.findViewById(R.id.title);
        mPrice = (EditText)mainView.findViewById(R.id.price);
        mDescription = (EditText)mainView.findViewById(R.id.description);

        return mainView;
    }

    private void createPostTypeAdapter(View mainView) {
        mPostTypeSpinner = (Spinner) mainView.findViewById(R.id.post_type);
        mPostTypeItemSelectedListener = new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                //TODO handle showing/hiding date picker, time picker
            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {

            }
        };
        mPostTypeSpinner.setOnItemSelectedListener(mPostTypeItemSelectedListener);
    }

    @Override
    public void onClick(View v) {
        int id = v.getId();
        if (id == R.id.main_view) {

        } else if (id == R.id.photo_gallery) {

            Intent photoPickerIntent = new Intent(Intent.ACTION_PICK);
            photoPickerIntent.setType("image/*");
            getActivity().startActivityForResult(photoPickerIntent, PostingActivity.REQUEST_IMAGE_FROM_GALLERY);

        }  else if (id == R.id.photo_camera) {
            dispatchTakePictureIntent();

        } else if (id == R.id.send_post) {
            if(validateFields()) {
                Object[] params = new Object[1];
                Map<String,Object> options = new HashMap<String,Object>();
                params[0] = options;
                options.put("category", mCategorySpinner.getSelectedItem().toString());
                options.put("subcategory", mSubCategorySpinner.getSelectedItem().toString());
                options.put("location", mLocationName.getSelectedItem().toString());
                options.put("title", mTitle.getText().toString());
                options.put("price", mPrice.getText().toString());
                options.put("description", mDescription.getText().toString());
                options.put("delivery_method", mDeliverySpinner.getSelectedItem().toString());

                PandaListApplication.getDDP().call("/posts/insert", params, new DDPListener() {
                    @Override
                    public void onResult(Map<String, Object> jsonFields) {
                        handlePostCreate(jsonFields);
                    }
                    @Override
                    public void onNoSub(String callId, Map<String, Object> errorFields) {
                        Toast.makeText(getActivity(), "Unable to create post :(", Toast.LENGTH_SHORT).show();
                    }

                });
            }
        }
    }

    private boolean validateFields() {
        boolean valid = true;

        mTitle.setError(null);
        mPrice.setError(null);
        mDescription.setError(null);

        View focusView = null;
        // Check for a valid description.
        if (TextUtils.isEmpty(mDescription.getText().toString())) {
            mDescription.setError(getString(R.string.error_field_required));
            focusView = mDescription;
        }
        // Check for a valid price.
        if (TextUtils.isEmpty(mPrice.getText().toString())) {
            mPrice.setError(getString(R.string.error_field_required));
            focusView = mPrice;
        }
        // Check for a valid title.
        if (TextUtils.isEmpty(mTitle.getText().toString())) {
            mTitle.setError(getString(R.string.error_field_required));
            focusView = mTitle;
        }
        if (focusView != null) {
            // There was an error; focus the first form field with an error.
            focusView.requestFocus();
            valid = false;
        }

        return valid;
    }

    private void handlePostCreate(Map<String, Object> jsonFields) {
        Toast.makeText(getActivity(), "Create Post yay!!", Toast.LENGTH_SHORT).show();
    }

    private void dispatchTakePictureIntent() {
        Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        if (takePictureIntent.resolveActivity(getActivity().getPackageManager()) != null) {
            getActivity().startActivityForResult(takePictureIntent, PostingActivity.REQUEST_IMAGE_CAPTURE);
        }
    }
}


