package com.pandora.hackathon.pandalist.fragment;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Spinner;

import com.pandora.hackathon.pandalist.R;

/**
 * Created by jmendez on 11/5/14.
 */
public class PostingFragment extends BaseFragment {

    public PostingFragment() {}

    private Spinner mPostTypeSpinner;
    private Spinner mCategorySpinner;

    public static PostingFragment newInstance() {
        PostingFragment fragment = new PostingFragment();
        return fragment;
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View mainView =  inflater.inflate(R.layout.fragment_postings, container, false);

        mPostTypeSpinner = (Spinner)mainView.findViewById(R.id.post_type);
        mCategorySpinner = (Spinner)mainView.findViewById(R.id.category);

        return mainView;
    }

}
