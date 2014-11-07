package com.pandora.hackathon.pandalist.fragment;

import android.animation.ObjectAnimator;
import android.app.Activity;
import android.app.ActivityOptions;
import android.app.Fragment;
import android.content.Intent;
import android.content.res.TypedArray;
import android.graphics.Point;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.ActionBar;
import android.support.v7.widget.DefaultItemAnimator;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.Display;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.melnykov.fab.FloatingActionButton;
import com.pandora.hackathon.pandalist.PandaListApplication;
import com.pandora.hackathon.pandalist.PandasConstants;
import com.pandora.hackathon.pandalist.PostItemData;
import com.pandora.hackathon.pandalist.R;
import com.pandora.hackathon.pandalist.activity.PostDetailActivity;
import com.pandora.hackathon.pandalist.activity.PostingActivity;
import com.pandora.hackathon.pandalist.events.DPPConnectEvent;
import com.pandora.hackathon.pandalist.ui.ListingRecyclerAdapter;
import com.squareup.otto.Subscribe;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;


/**
 * A simple {@link Fragment} subclass.
 * Activities that contain this fragment must implement the
 * {@link ListingsFragment.OnFragmentInteractionListener} interface
 * to handle interaction events.
 * Use the {@link ListingsFragment#newInstance} factory method to
 * create an instance of this fragment.
 *
 */
public class ListingsFragment extends BaseFragment implements View.OnClickListener, ListingRecyclerAdapter.RecyclerViewOnItemClickListener {
    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";
    private static boolean didGetDataEvent = false;

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    private RecyclerView mPostingsRecyclerView;
    private ListingRecyclerAdapter myRecyclerAdapter;

    private OnFragmentInteractionListener mListener;
    private FloatingActionButton mFab;
    private int mScreenWidth;
    private int mScreenHeight;

    private float mActionBarHeight;
    private String mPostSubCategoryName;

    public ListingsFragment() {
        // Required empty public constructor
    }

    /**
     * Returns a new instance of this fragment for the given section
     * number.
     */
    public static ListingsFragment newInstance(String subcategory) {
        ListingsFragment fragment = new ListingsFragment();
        Bundle args = new Bundle();
        args.putString(ARG_POST_SUBCATEGORY, subcategory);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Display display = getActivity().getWindowManager().getDefaultDisplay();
        Point size = new Point();
        display.getSize(size);
        mScreenWidth = size.x;
        mScreenHeight = size.y;


        Bundle b = getArguments();

        mPostSubCategoryName = b.getString(ARG_POST_SUBCATEGORY);
        if (getActionBar() != null) {
            getActionBar().setSubtitle(mPostSubCategoryName);
        }

        final TypedArray styledAttributes = getActivity().getTheme().obtainStyledAttributes(
                new int[] { android.R.attr.actionBarSize });
        mActionBarHeight = styledAttributes.getDimension(0, 0);
    }

    @Override
    public void onSaveInstanceState(final Bundle outState) {
        super.onSaveInstanceState(outState);
        outState.putSerializable("subcategoryName", (Serializable) mPostSubCategoryName);
    }

    @Override
    public void onActivityCreated(Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);

        if (savedInstanceState != null) {
            //probably orientation change
            mPostSubCategoryName = (String) savedInstanceState.getSerializable("list");
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        getActionBar().setSubtitle("SubCategory");
        // Inflate the layout for this fragment
        View mainView =  inflater.inflate(R.layout.fragment_listings_main, container, false);
        mFab = (FloatingActionButton)mainView.findViewById(R.id.fab);
        mFab.setOnClickListener(this);

        mPostingsRecyclerView = (RecyclerView) mainView.findViewById(R.id.postings_listView);
        mPostingsRecyclerView.setHasFixedSize(true);
        mPostingsRecyclerView.setAdapter(myRecyclerAdapter = new ListingRecyclerAdapter(getActivity().getApplicationContext(), createMockList(), R.layout.posts_list_item, this));
        mPostingsRecyclerView.setLayoutManager(new GridLayoutManager(getActivity().getApplicationContext(), 1));
        mPostingsRecyclerView.setItemAnimator(new DefaultItemAnimator());
        mPostingsRecyclerView.setOnScrollListener(mRecycleListViewScrollListener);

        return mainView;
    }

    @Override
    public void onViewCreated(View view, Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        new Handler().postDelayed(new Runnable() {

            @Override
            public void run() {
                getPosts();
            }
        }, 700);
    }

    // TODO: Rename method, update argument and hook method into UI event
    public void onButtonPressed(Uri uri) {
        if (mListener != null) {
            mListener.onFragmentInteraction(uri);
        }
    }

    @Override
    public void onAttach(Activity activity) {
        super.onAttach(activity);
        try {
            mListener = (OnFragmentInteractionListener) activity;
        } catch (ClassCastException e) {
            throw new ClassCastException(activity.toString()
                    + " must implement OnFragmentInteractionListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        mListener = null;
    }

    @Override
    public void onClick(View v) {
        int id = v.getId();

        if (id == R.id.fab) {
            //open new Activity with Fragment createPost
            Intent intent = new Intent(getActivity(), PostingActivity.class);

            Bundle bundle = ActivityOptions.makeScaleUpAnimation(mFab, 0, 0,
                    0, 0).toBundle();

            getActivity().startActivity(intent, bundle);
        }
    }

    @Override
    public void onItemClick(int position) {
        PostItemData itemDataClick = myRecyclerAdapter.getItem(position);

        Intent intent = new Intent(getActivity(), PostDetailActivity.class);

        Bundle b = new Bundle();
        b.putSerializable(PandasConstants.INTENT_DATA_POST_ITEM, itemDataClick);
        intent.putExtras(b);


        getActivity().startActivity(intent);
    }

    /**
     * This interface must be implemented by activities that contain this
     * fragment to allow an interaction in this fragment to be communicated
     * to the activity and potentially other fragments contained in that
     * activity.
     * <p>
     * See the Android Training lesson  <a href=
     * "http://developer.android.com/training/basics/fragments/communicating.html"
     * >Communicating with Other Fragments</a> for more information.
     */
    public interface OnFragmentInteractionListener {
        // TODO: Update argument type and name
        public void onFragmentInteraction(Uri uri);
    }

    @Subscribe
    public void onDPPConnect(DPPConnectEvent event) {
        //PandaListApplication.getDDP().subscribe("posts", new Object[]{});
    }



    @Override
    public void onResume() {
        super.onResume();

       getPosts();
    }

    private void getPosts() {
        mListItems.clear();
        myRecyclerAdapter.setItems(mListItems);

        myRecyclerAdapter.notifyDataSetChanged();


        Map<String, Map<String, Object>> postings = PandaListApplication.getDDP().getCollection("posts");
        if (postings != null && !postings.isEmpty()) {
            Log.d("JEnny", "onResume + ");

            for (String postId : postings.keySet()) {

                Map<String, Object> post = postings.get(postId);
                String subcategory = post.get("subcategory") != null ? post.get("subcategory").toString() : "";


                if (mPostSubCategoryName != null && mPostSubCategoryName.equals(subcategory)) {
                    mListItems.add(createPostItem(postId, post));
                }
            }
        }

    /*    Handler h = new Handler();
        h.postDelayed(new Runnable() {
            @Override
            public void run() {
                if (!didGetDataEvent && isResumed()) {
                    if (mListItems.isEmpty()) {
                        getView().findViewById(R.id.error_view).setVisibility(View.VISIBLE);
                    } else {
                        getView().findViewById(R.id.error_view).setVisibility(View.GONE);
                    }
                }
            }
        }, 7000);*/

        myRecyclerAdapter.setItems(mListItems);
        myRecyclerAdapter.notifyDataSetChanged();
        getActionBar().setSubtitle(mPostSubCategoryName);
    }
    /** We need to return an Data object model
     * to populate the adapter
     * @return
     */
    private List<PostItemData> createMockList() {
        List<PostItemData> list = new ArrayList<PostItemData>(6);

        return list;
    }

    List<PostItemData> mListItems = new ArrayList<PostItemData>();



    private PostItemData createPostItem(String postId, Map<String, Object> post) {
        PostItemData item = null;

        String title = post.get("title") != null ? post.get("title").toString() : "";
        String category = post.get("category") != null ? post.get("category").toString() : "";
        String subcategory = post.get("subcategory") != null ? post.get("subcategory").toString() : "";

        String location = post.get("location") != null ? post.get("location").toString() : "";
        String description = post.get("description") != null ? post.get("description").toString() : "";
        String coverPhotoUrl  = post.get("coverPhotoUrl") != null ? post.get("coverPhotoUrl").toString() : "";
        String createdBy  = post.get("createdBy") != null ? post.get("createdBy").toString() : "";
        String published  = post.get("published") != null ? post.get("published").toString() : "";
        String price  = post.get("price") != null ? post.get("price").toString() : "";

        item = new PostItemData();
        item.setId(postId);
        item.setCategory(category);
        item.setSubcategory(subcategory);
        item.setCreatedBy(createdBy);
        item.setTitle(title);
        item.setDescription(description);
        item.setImageUrl(coverPhotoUrl);
        item.setLocation(location);
        item.setSubcategory(subcategory);
        item.setCategory(category);
        item.setPrice(price);

        Log.d("JEnny", "title + " + title);

        return item;
    }

    private float globalScroll;

    private RecyclerView.OnScrollListener mRecycleListViewScrollListener = new RecyclerView.OnScrollListener() {
        @Override
        public void onScrollStateChanged(RecyclerView recyclerView, int newState) {
            super.onScrollStateChanged(recyclerView, newState);

        }

        @Override
        public void onScrolled(RecyclerView recyclerView, int dx, int dy) {
            super.onScrolled(recyclerView, dx, dy);

            if (recyclerView.getScrollState() == RecyclerView.SCROLL_STATE_SETTLING) {
                globalScroll += dy;


                ActionBar actionBar = getActionBar();
                if (globalScroll >= mActionBarHeight) {
                    if (actionBar.isShowing()) {
                        actionBar.hide();
                        ObjectAnimator.ofFloat(mFab, "translationY", mFab.getTranslationY(), 500).setDuration(250).start();
                    }
                    globalScroll = 0;

                } else if (dy <= 0) {
                    if (!actionBar.isShowing()) {
                        actionBar.show();
                        ObjectAnimator.ofFloat(mFab, "translationY", mScreenHeight, 0).setDuration(250).start();
                    }
                    globalScroll = 0;
                }


            }
        }

    };

}
