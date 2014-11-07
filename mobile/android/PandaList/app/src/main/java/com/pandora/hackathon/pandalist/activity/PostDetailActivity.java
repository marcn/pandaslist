package com.pandora.hackathon.pandalist.activity;


import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.support.v7.graphics.Palette;
import android.support.v7.widget.Toolbar;
import android.text.format.DateUtils;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.pandora.hackathon.pandalist.PandaListApplication;
import com.pandora.hackathon.pandalist.PandasConstants;
import com.pandora.hackathon.pandalist.PostItemData;
import com.pandora.hackathon.pandalist.R;
import com.pandora.hackathon.pandalist.events.DataChangeEvent;
import com.squareup.otto.Subscribe;
import com.squareup.picasso.Picasso;
import com.squareup.picasso.Target;

import java.util.HashMap;
import java.util.Map;

public class PostDetailActivity extends ActionBarActivity {
    ViewGroup rootView = null;
    EditText commentsEditText;
    PostItemData postData;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_post_details);
        rootView = (ViewGroup) findViewById(R.id.post_details_rootview);

        final Toolbar toolbar = (Toolbar) findViewById(R.id.my_awesome_toolbar);
        setSupportActionBar(toolbar);

        setTitle(null);

        Intent intent = getIntent();
        Bundle extras = intent.getExtras();

        if (extras != null) {
            postData = (PostItemData) extras.get(PandasConstants.INTENT_DATA_POST_ITEM);

            if (postData != null) {
                setContentView(R.layout.activity_post_details);

                final ImageView imageView = (ImageView) findViewById(R.id.post_imageview);
                final RelativeLayout highlights = (RelativeLayout) findViewById(R.id.highlights);

                Picasso.with(this).cancelRequest(imageView);
                String url = postData.getImageUrl();
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
                title.setText(postData.getTitle());

                TextView price = (TextView) findViewById(R.id.post_price);
                price.setText(postData.getPrice());

                TextView location = (TextView) findViewById(R.id.post_location);
                location.setText(postData.getLocation());

                TextView desc = (TextView) findViewById(R.id.post_description);
                desc.setText(postData.getDescription());

                commentsEditText = (EditText) findViewById(R.id.post_comments_edittext);

                String category = postData.getCategory();
                if (category != null) {
                    final Button button = (Button) findViewById(R.id.post_button);
                    if (category.equals("Bid")) {
                        //TODO allow price
                    }

                    button.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View v) {
                            if(commentsEditText.getText().length() > 0) {
                                submitResponse();

                                Toast.makeText(PostDetailActivity.this, "Your response has been submitted!", Toast.LENGTH_LONG).show();

                                button.setVisibility(View.GONE);
                                commentsEditText.setVisibility(View.GONE);
                            }
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
                //TODO pass real comment

//                updateUI(null);
                //handle comments and add comment
            }
        }
    }

    private void submitResponse() {

        String text = commentsEditText.getText().toString();
        long time = System.currentTimeMillis();
        Object[] params = new Object[1];
        Map<String,Object> options = new HashMap<String,Object>();
        params[0] = options;
        options.put("text", text);
        options.put("sender", "1");
        options.put("post", postData.getId());
        options.put("creationDate", System.currentTimeMillis());
        options.put("isInterested", false);

        PandaListApplication.getDDP().call("/comments/insert", params);

        updateUI(text, time);
    }

    private String getRelativeTime(long timestamp) {
        long currentTime = System.currentTimeMillis();
        long duration = currentTime - timestamp;
        String timeString;

        if(duration > DateUtils.DAY_IN_MILLIS) {
            timeString = duration / DateUtils.DAY_IN_MILLIS + " days ago";
        } else if(duration > DateUtils.HOUR_IN_MILLIS) {
            timeString = duration / DateUtils.HOUR_IN_MILLIS + " hours ago";
        } else if(duration > DateUtils.MINUTE_IN_MILLIS) {
            timeString = duration / DateUtils.MINUTE_IN_MILLIS + " minutes ago";
        } else if(duration > DateUtils.SECOND_IN_MILLIS) {
            timeString = duration / DateUtils.SECOND_IN_MILLIS + " seconds ago";
        } else {
            timeString = "just now";
        }
        return timeString;
    }

    private void updateUI(String commentFromEvent, long time) {
        String actualComment = null;
        if (commentFromEvent != null && !commentFromEvent.equals("")) {
            actualComment = commentFromEvent;
        }

        if (rootView != null) {
            LayoutInflater inflater = getLayoutInflater();
            LinearLayout commentLayout = (LinearLayout) inflater.inflate(R.layout.activity_post_comment_layout, null);

            TextView timeStampView = (TextView) commentLayout.findViewById(R.id.post_comment_timestamp);
            timeStampView.setText(getRelativeTime(time));

            TextView commentTextView = (TextView) commentLayout.findViewById(R.id.post_comment_holder);

            CharSequence comment = commentsEditText.getText();
            if (comment != null && !comment.equals("")) {
                actualComment = comment.toString();
                commentTextView.setText(actualComment);
            }

            ViewGroup commentContainer = (ViewGroup) rootView.findViewById(R.id.post_detail_comments_container);
            commentContainer.addView(commentLayout);
            rootView.invalidate();
        }
    }
}