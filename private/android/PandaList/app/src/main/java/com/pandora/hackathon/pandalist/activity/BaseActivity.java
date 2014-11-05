package com.pandora.hackathon.pandalist.activity;

import android.app.Activity;
import android.app.Fragment;
import android.app.FragmentManager;
import android.net.Uri;
import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.pandora.hackathon.pandalist.fragment.ListingsFragment;
import com.pandora.hackathon.pandalist.fragment.NavigationDrawerFragment;
import com.pandora.hackathon.pandalist.R;

/**
 * Common functionality for our activities
 */
public class BaseActivity  extends ActionBarActivity implements ListingsFragment.OnFragmentInteractionListener, NavigationDrawerFragment.NavigationDrawerCallbacks {


    @Override
    public void onFragmentInteraction(Uri uri) {

    }


    @Override
    public void onNavigationDrawerItemSelected(int position) {
        // update the main content by replacing fragments
        FragmentManager fragmentManager = getFragmentManager();
        fragmentManager.beginTransaction()
                .replace(R.id.container, getFragmentBySection(position + 1))
                .commit();
    }

    private Fragment getFragmentBySection(int section) {

        if (section == 1) {
            return ListingsFragment.newInstance(section);
        }
        return PlaceholderFragment.newInstance(section);
    }

    /**
     * A placeholder fragment containing a simple view.
     */
    public static class PlaceholderFragment extends Fragment {
        /**
         * The fragment argument representing the section number for this
         * fragment.
         */
        private static final String ARG_SECTION_NUMBER = "section_number";

        /**
         * Returns a new instance of this fragment for the given section
         * number.
         */
        public static PlaceholderFragment newInstance(int sectionNumber) {
            PlaceholderFragment fragment = new PlaceholderFragment();
            Bundle args = new Bundle();
            args.putInt(ARG_SECTION_NUMBER, sectionNumber);
            fragment.setArguments(args);
            return fragment;
        }

        public PlaceholderFragment() {
        }

        @Override
        public View onCreateView(LayoutInflater inflater, ViewGroup container,
                                 Bundle savedInstanceState) {
            View rootView = inflater.inflate(R.layout.main_fragment, container, false);
            return rootView;
        }

        @Override
        public void onAttach(Activity activity) {
            super.onAttach(activity);
            ((PandaListActivity) activity).onSectionAttached(
                    getArguments().getInt(ARG_SECTION_NUMBER));
        }
    }

}
