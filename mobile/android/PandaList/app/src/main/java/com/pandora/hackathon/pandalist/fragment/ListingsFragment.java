package com.pandora.hackathon.pandalist.fragment;

import android.app.Activity;
import android.app.Fragment;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import android.widget.ArrayAdapter;
import android.widget.ListView;
import com.melnykov.fab.FloatingActionButton;
import com.pandora.hackathon.pandalist.PandaListApplication;
import com.pandora.hackathon.pandalist.R;
import com.pandora.hackathon.pandalist.activity.PostingActivity;
import com.pandora.hackathon.pandalist.ddp.MyDDPState;
import com.pandora.hackathon.pandalist.events.DPPConnectEvent;
import com.pandora.hackathon.pandalist.events.DataChangeEvent;
import com.squareup.otto.Subscribe;

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
public class ListingsFragment extends BaseFragment implements View.OnClickListener {
    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    private ListView postingsListView;
    private ArrayAdapter<String> postingsAdapter;

    private OnFragmentInteractionListener mListener;
    private FloatingActionButton mFab;
    public ListingsFragment() {
        // Required empty public constructor
    }

    /**
     * Returns a new instance of this fragment for the given section
     * number.
     */
    public static ListingsFragment newInstance(int sectionNumber) {
        ListingsFragment fragment = new ListingsFragment();
        Bundle args = new Bundle();
        args.putInt(ARG_SECTION_NUMBER, sectionNumber);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View mainView =  inflater.inflate(R.layout.fragment_listings_main, container, false);
        mFab = (FloatingActionButton)mainView.findViewById(R.id.fab);
        mFab.setOnClickListener(this);

        postingsListView = (ListView) mainView.findViewById(R.id.postings_listView);
        postingsAdapter = new ArrayAdapter<String>(getActivity(), android.R.layout.simple_list_item_1);
        postingsListView.setAdapter(postingsAdapter);


        return mainView;
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

            getActivity().startActivity(intent);
        }
    }

    /**
     * This interface must be implemented by activities that contain this
     * fragment to allow an interaction in this fragment to be communicated
     * to the activity and potentially other fragments contained in that
     * activity.
     * <p>
     * See the Android Training lesson <a href=
     * "http://developer.android.com/training/basics/fragments/communicating.html"
     * >Communicating with Other Fragments</a> for more information.
     */
    public interface OnFragmentInteractionListener {
        // TODO: Update argument type and name
        public void onFragmentInteraction(Uri uri);
    }

    @Subscribe
    public void onDPPConnect(DPPConnectEvent event) {
        PandaListApplication.getDDP().subscribe("posts", new Object[]{});
    }

    @Subscribe
    public void onDataChangeEvent(DataChangeEvent event) {
        if (event.subscriptionName.equals("posts")) {
            if (event.changeType.equals("added")) {
                MyDDPState ddp = PandaListApplication.getDDP();
                Map<String, Object> post = ddp.getCollection(event.subscriptionName).get(event.docId);
                postingsAdapter.add(post.get("title").toString());
            }
        }
    }
}
