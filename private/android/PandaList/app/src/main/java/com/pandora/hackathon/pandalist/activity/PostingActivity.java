package com.pandora.hackathon.pandalist.activity;

import android.app.FragmentManager;
import android.os.Bundle;

import com.pandora.hackathon.pandalist.R;
import com.pandora.hackathon.pandalist.fragment.PostingFragment;

/**
 *
 */
public class PostingActivity extends BaseActivity {


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

}
