package com.pandora.hackathon.pandalist.fragment;

import android.app.Activity;
import android.app.Fragment;
import android.support.v4.content.LocalBroadcastManager;
import android.support.v7.app.ActionBar;
import android.support.v7.app.ActionBarActivity;

import android.util.Log;
import com.pandora.hackathon.pandalist.PandaListApplication;
import com.pandora.hackathon.pandalist.activity.PandaListActivity;
import com.pandora.hackathon.pandalist.ddp.DDPBroadcastReceiver;
import com.pandora.hackathon.pandalist.ddp.DDPStateSingleton;
import com.pandora.hackathon.pandalist.ddp.MyDDPState;
import com.pandora.hackathon.pandalist.events.DPPConnectEvent;
import com.pandora.hackathon.pandalist.events.DataChangeEvent;

/** Base Fragment with common functionality for any fragments
 *
 */
public class BaseFragment extends Fragment {

    /**
     * The fragment argument representing the section number for this
     * fragment.
     */
    protected static final String ARG_SECTION_NUMBER = "section_number";
    private DDPBroadcastReceiver mReceiver;

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

    @Override
    public void onResume() {
        super.onResume();

        PandaListApplication.getBus().register(this);

        mReceiver = new DDPBroadcastReceiver(PandaListApplication.getDDP(), getActivity()) {

            @Override
            protected void onDDPConnect(DDPStateSingleton ddp) {
                PandaListApplication.getBus().post(new DPPConnectEvent());
            }

            @Override
            protected void onSubscriptionUpdate(String changeType, String subscriptionName, String docId) {
                Log.d("DDP UPDATE", "changeType=" + changeType + ",subName=" + subscriptionName + ",docId=" + docId);
                PandaListApplication.getBus().post(new DataChangeEvent(subscriptionName, changeType, docId));
            }
        };
        MyDDPState.getInstance().connectIfNeeded();
    }

    @Override
    public void onPause() {
        super.onPause();

        PandaListApplication.getBus().unregister(this);

        if (mReceiver != null) {
            LocalBroadcastManager.getInstance(getActivity()).unregisterReceiver(mReceiver);
            mReceiver = null;
        }
    }
}
