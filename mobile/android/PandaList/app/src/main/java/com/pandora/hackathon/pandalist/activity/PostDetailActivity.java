package com.pandora.hackathon.pandalist.activity;


import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.support.v7.graphics.Palette;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.ScrollView;
import android.widget.TextView;

import com.pandora.hackathon.pandalist.PandasConstants;
import com.pandora.hackathon.pandalist.PostItemData;
import com.pandora.hackathon.pandalist.R;
import com.squareup.picasso.Picasso;
import com.squareup.picasso.Target;

public class PostDetailActivity extends ActionBarActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_post_details);

        Toolbar toolbar = (Toolbar) findViewById(R.id.my_awesome_toolbar);
        setSupportActionBar(toolbar);

        setTitle(null);

        Intent intent = getIntent();
        Bundle extras = intent.getExtras();

        if (extras != null) {
            PostItemData item = (PostItemData) extras.get(PandasConstants.INTENT_DATA_POST_ITEM);

            if (item != null) {
                setContentView(R.layout.activity_post_details);

                final ImageView imageView = (ImageView) findViewById(R.id.post_imageview);
                TextView title = (TextView) findViewById(R.id.post_title);
                title.setText(item.getTitle());

                TextView price = (TextView) findViewById(R.id.post_price);
                price.setText(item.getPrice());

                TextView location = (TextView) findViewById(R.id.post_location);
                location.setText(item.getLocation());

                TextView desc = (TextView) findViewById(R.id.post_description);
                desc.setText(item.getDescription());

                String category = item.getCategory();
                if (category != null) {
                    Button button = (Button) findViewById(R.id.post_button);
                    if (category.equals("Contest")) {
                        button.setText("I am Interested");
                    } else if (category.equals("Bid")) {
                        button.setText("I am Interested");
                        //TODO allow price
                    }
                }
           } else {
                setContentView(R.layout.error);
            }
        }
    }

}
