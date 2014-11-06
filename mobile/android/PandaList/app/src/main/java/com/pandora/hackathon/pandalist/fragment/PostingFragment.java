package com.pandora.hackathon.pandalist.fragment;

import android.content.Intent;
import android.os.Bundle;
import android.provider.MediaStore;
import android.text.SpannableString;
import android.text.Spanned;
import android.text.style.ClickableSpan;
import android.text.style.UnderlineSpan;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.PopupMenu;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.pandora.hackathon.pandalist.R;
import com.pandora.hackathon.pandalist.activity.PostingActivity;

/**
 * Created by jmendez on 11/5/14.
 */
public class PostingFragment extends BaseFragment implements View.OnClickListener {

    public PostingFragment() {}


    private Spinner mPostTypeSpinner;
    private Spinner mCategorySpinner;
    private Spinner mSubCategorySpinner;
    private View mPhotoView;
    private TextView mLocationName;
    private View mCameraView;
    private View mLocationOfficesView;
    private View mCreatePostView;

    public static PostingFragment newInstance() {
        PostingFragment fragment = new PostingFragment();
        return fragment;
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View mainView =  inflater.inflate(R.layout.fragment_postings, container, false);
        mainView.setOnClickListener(this);
        mPostTypeSpinner = (Spinner)mainView.findViewById(R.id.post_type);
        mCategorySpinner = (Spinner)mainView.findViewById(R.id.category);
        mSubCategorySpinner = (Spinner)mainView.findViewById(R.id.subcategory);

        mPhotoView = mainView.findViewById(R.id.photo_gallery);
        mPhotoView.setOnClickListener(this);

        mCameraView = mainView.findViewById(R.id.photo_camera);
        mCameraView.setOnClickListener(this);

        mLocationOfficesView = mainView.findViewById(R.id.location_office);
        mLocationOfficesView.setOnClickListener(this);

        mCreatePostView = mainView.findViewById(R.id.send_post);
        mCreatePostView.setOnClickListener(this);

        mLocationName = (TextView)mainView.findViewById(R.id.location_name);
        setLocationLinkSpan(mLocationName.getText().toString());
        mLocationName.setOnClickListener(this);
        return mainView;
    }

    private ClickableSpan mClickableSpan;

    private void setLocationLinkSpan(String locationText) {


        SpannableString text = new SpannableString(locationText);
        text.setSpan(new UnderlineSpan(), 0, mLocationName.length(), Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
        mLocationName.setText(text, TextView.BufferType.SPANNABLE);
        mLocationName.setTextColor(getResources().getColor(R.color.pandora_indigo));

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

        } else if(id == R.id.location_office || id == R.id.location_name) {
            PopupMenu menu = createLocationOfficesPopup(v);
            menu.show();
        } else if (id == R.id.send_post) {
            Toast.makeText(getActivity(), "Create Post yay!!", Toast.LENGTH_SHORT).show();
        }
    }

    private PopupMenu createLocationOfficesPopup(View anchor) {
        PopupMenu menu = new PopupMenu(getActivity(), anchor);
        menu.getMenu().add("Oakland");
        menu.getMenu().add("Hawaii");
        menu.getMenu().add("New York");

        return menu;
    }

    private void dispatchTakePictureIntent() {
        Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        if (takePictureIntent.resolveActivity(getActivity().getPackageManager()) != null) {
            getActivity().startActivityForResult(takePictureIntent, PostingActivity.REQUEST_IMAGE_CAPTURE);
        }
    }
}


