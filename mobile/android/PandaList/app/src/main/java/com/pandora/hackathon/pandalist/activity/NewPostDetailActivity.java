package com.pandora.hackathon.pandalist.activity;

import android.net.Uri;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewTreeObserver;
import android.view.WindowManager;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.google.android.gms.common.images.ImageManager;
import com.google.android.gms.plus.PlusOneButton;
import com.pandora.hackathon.pandalist.R;
import com.pandora.hackathon.pandalist.ui.CheckableFrameLayout;
import com.pandora.hackathon.pandalist.ui.ObservableScrollView;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

/**
 * Created by rdixit on 11/6/14.
 */
public class NewPostDetailActivity extends BaseActivity implements ObservableScrollView.Callbacks {
    private static final String[] SECTION_HEADER_RES_IDS = {
            "session_header",
            "speakers_header",
            "ses-req-header",
            "related_videos_header",
    };
    private static final float PHOTO_ASPECT_RATIO = 1.7777777f;

    public static final String TRANSITION_NAME_PHOTO = "photo";

    private android.os.Handler mHandler = new android.os.Handler();
    private static final int TIME_HINT_UPDATE_INTERVAL = 10000; // 10 sec

//    private TagMetadata mTagMetadata;

    private String mSessionId;
    private Uri mSessionUri;

    private long mSessionStart;
    private long mSessionEnd;
    private String mTitleString;
    private String mHashTag;
    private String mUrl;
    private String mRoomId;
    private String mRoomName;
    private String mTagsString;

    // A comma-separated list of speakers to be passed to Android Wear
    private String mSpeakers;

    private boolean mStarred;
    private boolean mInitStarred;
    private boolean mDismissedWatchLivestreamCard = false;
    private boolean mHasLivestream = false;
    private MenuItem mSocialStreamMenuItem;
    private MenuItem mShareMenuItem;

    private View mScrollViewChild;
    private TextView mTitle;
    private TextView mSubtitle;
    private PlusOneButton mPlusOneButton;

    private ObservableScrollView mScrollView;
    private CheckableFrameLayout mAddScheduleButton;

    private TextView mAbstract;
    private LinearLayout mTags;
    private ViewGroup mTagsContainer;
    private TextView mRequirements;
    private View mHeaderBox;
    private View mDetailsContainer;

    private boolean mSessionCursor = false;
    private boolean mSpeakersCursor = false;
    private boolean mHasSummaryContent = false;

    private ImageManager.OnImageLoadedListener mSpeakersImageLoader, mNoPlaceholderImageLoader;
    private List<Runnable> mDeferredUiOperations = new ArrayList<Runnable>();

    private StringBuilder mBuffer = new StringBuilder();

    private int mPhotoHeightPixels;
    private int mHeaderHeightPixels;
    private int mAddScheduleButtonHeightPixels;

    private boolean mHasPhoto;
    private View mPhotoViewContainer;
    private ImageView mPhotoView;
    private int mSessionColor;
    private String mLivestreamUrl;

    private Runnable mTimeHintUpdaterRunnable = null;

    private boolean mAlreadyGaveFeedback = false;
    private boolean mIsKeynote = false;

    private static HashSet<String> sDismissedFeedbackCard = new HashSet<String>();

    private TextView mSubmitFeedbackView;
    private float mMaxHeaderElevation;
    private float mFABElevation;

    private int mTagColorDotSize;

    private ViewTreeObserver.OnGlobalLayoutListener mGlobalLayoutListener
            = new ViewTreeObserver.OnGlobalLayoutListener() {
        @Override
        public void onGlobalLayout() {
          //  mAddScheduleButtonHeightPixels = mAddScheduleButton.getHeight();
            recomputePhotoAndScrollingMetrics();
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // configure this Activity as a floating window, dimming the background
        WindowManager.LayoutParams params = getWindow().getAttributes();
        params.width = getResources().getDimensionPixelSize(R.dimen.post_floating_width);
        params.height = getResources().getDimensionPixelSize(R.dimen.post_floating_width);
        params.alpha = 1;
        params.dimAmount = 0.4f;
        params.flags |= WindowManager.LayoutParams.FLAG_DIM_BEHIND;
        getWindow().setAttributes(params);

        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_new_post_details);
        setTitle(null);

        android.support.v7.widget.Toolbar toolbar = (android.support.v7.widget.Toolbar) findViewById(R.id.my_awesome_toolbar);
        setSupportActionBar(toolbar);

        mFABElevation = getResources().getDimensionPixelSize(R.dimen.fab_elevation);
        mMaxHeaderElevation = getResources().getDimensionPixelSize(
                R.dimen.post_max_header_elevation);

        mTagColorDotSize = getResources().getDimensionPixelSize(R.dimen.tag_color_dot_size);

        mHandler = new android.os.Handler();

        if (mSpeakersImageLoader == null) {
//            mSpeakersImageLoader = new ImageLoader(this, R.drawable.person_image_empty);
        }
        if (mNoPlaceholderImageLoader == null) {
//            mNoPlaceholderImageLoader = new ImageLoader(this);
        }

        mScrollView = (ObservableScrollView) findViewById(R.id.scroll_view);
        mScrollView.addCallbacks(this);
        ViewTreeObserver vto = mScrollView.getViewTreeObserver();
        if (vto.isAlive()) {
            vto.addOnGlobalLayoutListener(mGlobalLayoutListener);
        }

        mScrollViewChild = findViewById(R.id.scroll_view_child);
        mScrollViewChild.setVisibility(View.INVISIBLE);

        mPhotoViewContainer = findViewById(R.id.session_photo_container);
        mDetailsContainer = findViewById(R.id.details_container);

        mHeaderBox = findViewById(R.id.header_session);
    }

    @Override
    public void onScrollChanged(int deltaX, int deltaY) {
        //TODO
    }

    private void recomputePhotoAndScrollingMetrics() {
        mHeaderHeightPixels = mHeaderBox.getHeight();

        mPhotoHeightPixels = 0;
        if (mHasPhoto) {
            mPhotoHeightPixels = (int) (mPhotoView.getWidth() / PHOTO_ASPECT_RATIO);
            mPhotoHeightPixels = Math.min(mPhotoHeightPixels, mScrollView.getHeight() * 2 / 3);
        }

        ViewGroup.LayoutParams lp;
        lp = mPhotoViewContainer.getLayoutParams();
        if (lp.height != mPhotoHeightPixels) {
            lp.height = mPhotoHeightPixels;
            mPhotoViewContainer.setLayoutParams(lp);
        }

        ViewGroup.MarginLayoutParams mlp = (ViewGroup.MarginLayoutParams)
                mDetailsContainer.getLayoutParams();
        if (mlp.topMargin != mHeaderHeightPixels + mPhotoHeightPixels) {
            mlp.topMargin = mHeaderHeightPixels + mPhotoHeightPixels;
            mDetailsContainer.setLayoutParams(mlp);
        }

        onScrollChanged(0, 0); // trigger scroll handling
    }
}
