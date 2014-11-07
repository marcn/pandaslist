package com.pandora.hackathon.pandalist.activity;


import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.support.v7.graphics.Palette;
import android.support.v7.widget.Toolbar;
import android.text.Editable;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.Toast;

import com.pandora.hackathon.pandalist.PandasConstants;
import com.pandora.hackathon.pandalist.PostItemData;
import com.pandora.hackathon.pandalist.R;
import com.pandora.hackathon.pandalist.events.DataChangeEvent;
import com.squareup.otto.Subscribe;
import com.squareup.picasso.Picasso;
import com.squareup.picasso.Target;

public class PostDetailActivity extends ActionBarActivity {
    ViewGroup rootView = null;
    EditText commentsEditText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        rootView = (ViewGroup) findViewById(R.id.post_details_rootview);
        setContentView(R.layout.activity_post_details);

        final Toolbar toolbar = (Toolbar) findViewById(R.id.my_awesome_toolbar);
        setSupportActionBar(toolbar);

        setTitle(null);

        Intent intent = getIntent();
        Bundle extras = intent.getExtras();

        if (extras != null) {
            PostItemData item = (PostItemData) extras.get(PandasConstants.INTENT_DATA_POST_ITEM);

            if (item != null) {
                setContentView(R.layout.activity_post_details);

                final ImageView imageView = (ImageView) findViewById(R.id.post_imageview);
                final RelativeLayout highlights = (RelativeLayout) findViewById(R.id.highlights);

                Picasso.with(this).cancelRequest(imageView);
                String url = item.getImageUrl();
                if (url != null && url != "") {

                    try {
                        Picasso.with(this).load(url).into(new Target() {
                            @Override
                            public void onBitmapLoaded(final Bitmap bitmap, Picasso.LoadedFrom from) {
                                Palette.generateAsync(bitmap, new Palette.PaletteAsyncListener() {
                                    @Override
                                    public void onGenerated(Palette palette) {

                                        int color = palette.getLightMutedColor(Color.parseColor("#22915a7a"));
                                        int colorAlpha = Color.argb(200, Color.red(color), Color.green(color), Color.blue(color));
                                        imageView.setImageBitmap(bitmap);
                                        highlights.setBackgroundColor(colorAlpha);
                                        toolbar.setBackgroundColor(colorAlpha);
                                    }
                                });
                            }

                            @Override
                            public void onBitmapFailed(Drawable errorDrawable) {

                            }

                            @Override
                            public void onPrepareLoad(Drawable placeHolderDrawable) {

                            }
                        });
                    } catch (Exception ane) {
                        Drawable d = getResources().getDrawable(R.drawable.default_albumart);
                        final Bitmap bitmap = Bitmap.createBitmap(d.getIntrinsicWidth(), d.getIntrinsicHeight(), Bitmap.Config.RGB_565);

                        Palette.generateAsync(bitmap, new Palette.PaletteAsyncListener() {
                            @Override
                            public void onGenerated(Palette palette) {

                                int color = palette.getLightMutedColor(Color.parseColor("#22e0e0e0"));
                                int colorAlpha = Color.argb(200, Color.red(color), Color.green(color), Color.blue(color));
                                highlights.setBackgroundColor(colorAlpha);
                            }
                        });

                    }
                }

                TextView title = (TextView) findViewById(R.id.post_title);
                title.setText(item.getTitle());

                TextView price = (TextView) findViewById(R.id.post_price);
                price.setText(item.getPrice());

                TextView location = (TextView) findViewById(R.id.post_location);
                location.setText(item.getLocation());

                TextView desc = (TextView) findViewById(R.id.post_description);
                desc.setText(item.getDescription());

                commentsEditText = (EditText) findViewById(R.id.post_comments_edittext);

                String category = item.getCategory();
                if (category != null) {
                    final Button button = (Button) findViewById(R.id.post_button);
                    if (category.equals("Bid")) {
                        //TODO allow price
                    }

                    button.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View v) {
                            submitResponse();

                            Toast.makeText(PostDetailActivity.this, "Your response has been submitted!", Toast.LENGTH_LONG).show();

                            button.setVisibility(View.GONE);
                            commentsEditText.setVisibility(View.GONE);
                        }
                    });
                }
            } else {
                setContentView(R.layout.error);
            }
        }
    }

    @Subscribe
    public void onDataChangeEvent(DataChangeEvent event) {
        if (event != null) {
            if (event.subscriptionName.equals("comments")) {
                //TODO

                //handle comments and add comment
            }
        }
    }

    private void submitResponse() {
        submitResponse(null);
    }

    private void submitResponse(String commentFromEvent) {
        String actualComment = null;
        if (commentFromEvent != null && !commentFromEvent.equals("")) {
            actualComment = commentFromEvent;
        }

        if (rootView != null) {
            LayoutInflater inflater = getLayoutInflater();
            LinearLayout commentLayout = (LinearLayout) inflater.inflate(R.layout.activity_post_comment_layout, null);

            //TODO use real data
            TextView timeStampView = (TextView) commentLayout.findViewById(R.id.post_comment_timestamp);
            timeStampView.setText("2 hours ago");

            TextView commentTextView = (TextView) commentLayout.findViewById(R.id.post_comment_holder);

            CharSequence comment = commentsEditText.getText();
            if (comment != null && !comment.equals("")) {
                actualComment = comment.toString();
                commentTextView.setText(actualComment);
            }

            ViewGroup commentContainer = (ViewGroup) rootView.findViewById(R.id.post_detail_comments_container);
            commentContainer.addView(commentLayout);
        }
    }
}