package com.pandora.hackathon.pandalist.activity;


import android.app.FragmentManager;
import android.os.Bundle;

import com.pandora.hackathon.pandalist.R;
import com.pandora.hackathon.pandalist.fragment.PostDetailFragment;

public class PostDetailActivity extends BaseActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_postings);
        setTitle(null);

        FragmentManager fragmentManager = getFragmentManager();
        fragmentManager.beginTransaction()
                .replace(R.id.container, PostDetailFragment.newInstance())
                .commit();

    }

}
