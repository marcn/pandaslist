package com.pandora.hackathon.pandalist.fragment;

import android.app.Activity;
import android.app.Fragment;
import android.support.v7.app.ActionBar;
import android.support.v7.app.ActionBarActivity;

import com.pandora.hackathon.pandalist.activity.PandaListActivity;

/** Base Fragment with common functionality for any fragments
 *
 */
public class BaseFragment extends Fragment {

    /**
     * The fragment argument representing the section number for this
     * fragment.
     */
    protected static final String ARG_SECTION_NUMBER = "section_number";

    public BaseFragment() {
    }

    @Override
    public void onAttach(Activity activity) {
        super.onAttach(activity);

        if ( getArguments() != null) {
            ((PandaListActivity) activity).onSectionAttached(
                    getArguments().getInt(ARG_SECTION_NUMBER));
        }
    }

    protected ActionBar getActionBar() {
        return ((ActionBarActivity)getActivity()).getSupportActionBar();
    }
}
