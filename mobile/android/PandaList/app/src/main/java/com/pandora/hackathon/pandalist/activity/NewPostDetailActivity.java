package com.pandora.hackathon.pandalist.activity;

import android.content.res.Resources;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.view.ViewCompat;
import android.support.v7.widget.Toolbar;
import android.text.TextUtils;
import android.util.TypedValue;
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

        final Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar_actionbar);
        toolbar.setNavigationIcon(true
                ? R.drawable.ic_ab_close : R.drawable.ic_up);
        toolbar.setNavigationOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });
        mHandler.post(new Runnable() {
            @Override
            public void run() {
                toolbar.setTitle("");
            }
        });
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
        // Reposition the header bar -- it's normally anchored to the top of the content,
        // but locks to the top of the screen on scroll
        int scrollY = mScrollView.getScrollY();

        float newTop = Math.max(mPhotoHeightPixels, scrollY);
        mHeaderBox.setTranslationY(newTop);
        if (mAddScheduleButton != null) {
            mAddScheduleButton.setTranslationY(newTop + mHeaderHeightPixels
                    - mAddScheduleButtonHeightPixels / 2);
        }

        float gapFillProgress = 1;
        if (mPhotoHeightPixels != 0) {
            gapFillProgress = Math.min(Math.max(getProgress(scrollY,
                    0,
                    mPhotoHeightPixels), 0), 1);
        }

        ViewCompat.setElevation(mHeaderBox, gapFillProgress * mMaxHeaderElevation);
        ViewCompat.setElevation(mAddScheduleButton, gapFillProgress * mMaxHeaderElevation
                + mFABElevation);

        // Move background photo (parallax effect)
        mPhotoViewContainer.setTranslationY(scrollY * 0.5f);
    }

    @Override
    public void onResume() {
        super.onResume();
        updatePlusOneButton();
        if (mTimeHintUpdaterRunnable != null) {
            mHandler.postDelayed(mTimeHintUpdaterRunnable, TIME_HINT_UPDATE_INTERVAL);
        }
    }

    private void updatePlusOneButton() {
        if (mPlusOneButton == null) {
            return;
        }

        if (!TextUtils.isEmpty(mUrl) && !mIsKeynote) {
            mPlusOneButton.initialize(mUrl, 0);
            mPlusOneButton.setVisibility(View.VISIBLE);
        } else {
            mPlusOneButton.setVisibility(View.GONE);
        }
    }

    @Override
    public void onStop() {
        super.onStop();
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

    public static float getProgress(int value, int min, int max) {
        if (min == max) {
            throw new IllegalArgumentException("Max (" + max + ") cannot equal min (" + min + ")");
        }

        return (value - min) / (float) (max - min);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mScrollView == null) {
            return;
        }

        ViewTreeObserver vto = mScrollView.getViewTreeObserver();
        if (vto.isAlive()) {
            vto.removeGlobalOnLayoutListener(mGlobalLayoutListener);
        }
    }
}
