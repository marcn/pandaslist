package com.pandora.hackathon.pandalist.activity;

import android.accounts.AccountManager;
import android.app.AlertDialog;
import android.app.Dialog;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.IntentSender;
import android.content.SharedPreferences;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v4.content.LocalBroadcastManager;
import android.text.TextUtils;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.view.inputmethod.EditorInfo;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.auth.GoogleAuthException;
import com.google.android.gms.auth.GoogleAuthUtil;
import com.google.android.gms.auth.GooglePlayServicesAvailabilityException;
import com.google.android.gms.auth.UserRecoverableAuthException;
import com.google.android.gms.common.AccountPicker;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.GooglePlayServicesUtil;
import com.google.android.gms.common.Scopes;
import com.google.android.gms.plus.PlusClient;
import com.google.android.gms.plus.model.people.Person;
import com.pandora.hackathon.pandalist.R;
import com.pandora.hackathon.pandalist.ddp.MyDDPState;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * Activity which displays a login screen to the user
 */
public class LoginActivity extends BaseActivity implements
        PlusClient.ConnectionCallbacks, PlusClient.OnConnectionFailedListener,
        PlusClient.OnAccessRevokedListener{

    private static final String TAG = "LoginActivity";

    private static final int REQUEST_CODE_PICK_ACCOUNT = 1000;
    private static final int REQUEST_CODE_RECOVER_FROM_PLAY_SERVICES_ERROR = 1001;
    private static final int REQUEST_CODE_RECOVER_FROM_AUTH_ERROR = 1002;

    private static final int DIALOG_GET_GOOGLE_PLAY_SERVICES = 1;

    private static final int REQUEST_CODE_SIGN_IN = 1;
    private static final int REQUEST_CODE_GET_GOOGLE_PLAY_SERVICES = 2;

    private static final String SCOPE = "oauth2:https://www.googleapis.com/auth/userinfo.profile";

    private static  final String PREF_USERNAME = "pref.username";
    private static  final String PREF_DISPLAY_NAME = "pref.displayname";
    private static  final String PREF_FIRST_NAME = "pref.displayname";
    private static  final String PREF_LAST_NAME = "pref.displayname";
    private static  final String PREF_IMAGE_URL = "pref.imageurl";
    private static  final String PREF_AUTH_TOKEN = "pref.token";

    /**
     * broadcast receiver for DDP events
     */
    private BroadcastReceiver mReceiver;

    private String mEmail;
    private String mDisplayName;
    private String mImageUrl;
    private String mPassword;

    // UI references.
    private EditText mEmailView;
    private EditText mPasswordView;

    private PlusClient mPlusClient;
    private ConnectionResult mConnectionResult;

    /**
     * Handles creation of this activity
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_login);

        SharedPreferences prefs = getPreferences(MODE_PRIVATE);
        mEmail = prefs.getString(PREF_USERNAME, "");

        // Set up the login form.
        mEmailView = (EditText) findViewById(R.id.email);
        mEmailView.setText(mEmail);

        mPasswordView = (EditText) findViewById(R.id.password);
        mPasswordView.setOnEditorActionListener(new TextView.OnEditorActionListener() {
            @Override
            public boolean onEditorAction(TextView textView, int id, KeyEvent keyEvent) {
                if (id == R.id.login || id == EditorInfo.IME_NULL) {
                    doLogin();
                    return true;
                }
                return false;
            }
        });

        findViewById(R.id.btnSignIn).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                doLogin();
            }
        });

        findViewById(R.id.btnSignInWithGoogle).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                getUsername();
            }
        });

        // Setup Plus Client
        mPlusClient = new PlusClient.Builder(this, this, this)
                .setScopes(Scopes.PROFILE)
                .build();
    }

    protected void onResume() {
        super.onResume();
        // get ready to handle DDP events
        mReceiver = new BroadcastReceiver() {
            @Override
            public void onReceive(Context context, Intent intent) {
                // display errors to the user
                Bundle bundle = intent.getExtras();
                showProgress(false);
                if (intent.getAction().equals(MyDDPState.MESSAGE_ERROR)) {
                    String message = bundle.getString(MyDDPState.MESSAGE_EXTRA_MSG);
                    showError("Login Error", message);
                } else if (intent.getAction().equals(MyDDPState.MESSAGE_CONNECTION)) {
                    int state = bundle.getInt(MyDDPState.MESSAGE_EXTRA_STATE);
                    if (state == MyDDPState.DDPSTATE.LoggedIn.ordinal()) {
                        //TODO: login complete, so we can close this login activity and navigate to the app
                    }
                }
            }

        };
        // we want error messages
        LocalBroadcastManager.getInstance(this).registerReceiver(mReceiver,
                new IntentFilter(MyDDPState.MESSAGE_ERROR));
        // we want connection state change messages so we know we're logged in
        LocalBroadcastManager.getInstance(this).registerReceiver(mReceiver, new IntentFilter(MyDDPState.MESSAGE_CONNECTION));

        // show connection error if it happened
        if (MyDDPState.getInstance().getState() == MyDDPState.DDPSTATE.Closed) {
            showError("Connection Issue", "Error connecting to server...please try again");
            MyDDPState.getInstance().connectIfNeeded();    // try reconnecting
        }
    }

    /**
     * Used to display error dialogs
     *
     * @param title title of dialog
     * @param msg   details of error
     */
    private void showError(String title, String msg) {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setMessage(msg)
                .setTitle(title);
        builder.setPositiveButton("OK", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
                dialog.dismiss();
            }
        });
        AlertDialog dialog = builder.create();
        dialog.show();
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mReceiver != null) {
            LocalBroadcastManager.getInstance(this).unregisterReceiver(mReceiver);
            mReceiver = null;
        }
    }

    private void doLogin() {
        View focusView = validateFields();
        if (focusView == null) {
            // Show a progress spinner
            showProgress(true);

            // Non-blocking call
            MyDDPState.getInstance().login(mEmail, mPassword);
        }
    }

    private void pickUserAccount() {
        String[] accountTypes = new String[]{"com.google"};
        Intent intent = AccountPicker.newChooseAccountIntent(null, null, accountTypes, false, null, null, null, null);
        startActivityForResult(intent, REQUEST_CODE_PICK_ACCOUNT);
    }

    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == REQUEST_CODE_PICK_ACCOUNT) {
            // Receiving a result from the AccountPicker
            if (resultCode == RESULT_OK) {
                mEmail = data.getStringExtra(AccountManager.KEY_ACCOUNT_NAME);
                // Save email to preferences
                getPreferences(MODE_PRIVATE).edit().putString(PREF_USERNAME, mEmail).commit();
                // With the account name acquired, go get the auth token
                getUsername();
            } else if (resultCode == RESULT_CANCELED) {
                // The account picker dialog closed without selecting an account.
                // Notify users that they must pick an account to proceed.
                Toast.makeText(this, R.string.pick_account, Toast.LENGTH_SHORT).show();
            }
        } else if ((requestCode == REQUEST_CODE_RECOVER_FROM_AUTH_ERROR ||
                requestCode == REQUEST_CODE_RECOVER_FROM_PLAY_SERVICES_ERROR)
                && resultCode == RESULT_OK) {
            // Receiving a result that follows a GoogleAuthException, try auth again
            getUsername();
        } else if (requestCode == REQUEST_CODE_SIGN_IN
                || requestCode == REQUEST_CODE_GET_GOOGLE_PLAY_SERVICES) {
            if (resultCode == RESULT_OK && !mPlusClient.isConnected()
                    && !mPlusClient.isConnecting()) {
                // This time, connect should succeed.
                mPlusClient.connect();
            }
        }
    }

    private View validateFields() {
        // Reset errors.
        mEmailView.setError(null);
        mPasswordView.setError(null);

        // Store values at the time of the login attempt.
        mEmail = mEmailView.getText().toString();
        mPassword = mPasswordView.getText().toString();

        View focusView = null;
        // Check for a valid password.
        if (TextUtils.isEmpty(mPassword)) {
            mPasswordView.setError(getString(R.string.error_field_required));
            focusView = mPasswordView;
        }

        // Check for a valid email address.
        if (TextUtils.isEmpty(mEmail)) {
            mEmailView.setError(getString(R.string.error_field_required));
            focusView = mEmailView;
        } else if (!mEmail.contains("@")) {
            mEmailView.setError(getString(R.string.error_invalid_email));
            focusView = mEmailView;
        }
        if (focusView != null) {
            // There was an error; focus the first
            // form field with an error.
            focusView.requestFocus();
        }
        return focusView;
    }

    private void showProgress(final boolean show) {
        //TODO: Implement it
    }

    private void getUsername() {
        if (mEmail != null && mEmail.length() > 0) {
            SharedPreferences prefs = getPreferences(MODE_PRIVATE);
            String token = prefs.getString(PREF_AUTH_TOKEN, "");
            if(token != null && token.length() > 0) {
                // We have a saved token, try to login

//                Object[] params = new Object[1];
//                Map<String,Object> options = new HashMap<String, Object>();
//                params[0] = options;
//                options.put("email", mEmail);
//                options.put("accessToken", token);
//
//                MyDDPState.getInstance().call("login", params);
                loginSuccessNavigateToMainActivity();
            } else {
                // Fetch new token and login
                new GetTokenTask(mEmail, SCOPE).execute();
            }
        } else {
            int available = GooglePlayServicesUtil.isGooglePlayServicesAvailable(this);
            if (available != ConnectionResult.SUCCESS) {
                showDialog(DIALOG_GET_GOOGLE_PLAY_SERVICES);
                return;
            }

            try {
                mConnectionResult.startResolutionForResult(this, REQUEST_CODE_SIGN_IN);
            } catch (IntentSender.SendIntentException e) {
                // Fetch a new result to start.
                mPlusClient.connect();
            }
        }
    }

    private void loginSuccessNavigateToMainActivity() {
        Intent intent = new Intent(LoginActivity.this, PandaListActivity.class);
        intent.putExtra("name", mDisplayName);
        intent.putExtra("email", mEmail);
        intent.putExtra("image", mImageUrl);
        startActivity(intent);
        finish();
    }

    public void handleException(final Exception e) {
        // Because this call comes from the AsyncTask, we must ensure that the following
        // code instead executes on the UI thread.
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (e instanceof GooglePlayServicesAvailabilityException) {
                    // The Google Play services APK is old, disabled, or not present.
                    // Show a dialog created by Google Play services that allows
                    // the user to update the APK
                    int statusCode = ((GooglePlayServicesAvailabilityException)e).getConnectionStatusCode();
                    Dialog dialog = GooglePlayServicesUtil.getErrorDialog(statusCode, LoginActivity.this, REQUEST_CODE_RECOVER_FROM_PLAY_SERVICES_ERROR);
                    dialog.show();
                } else if (e instanceof UserRecoverableAuthException) {
                    // Unable to authenticate, such as when the user has not yet granted
                    // the app access to the account, but the user can fix this.
                    // Forward the user to an activity in Google Play services.
                    Intent intent = ((UserRecoverableAuthException)e).getIntent();
                    startActivityForResult(intent, REQUEST_CODE_RECOVER_FROM_PLAY_SERVICES_ERROR);
                }
            }
        });
    }

    @Override
    protected Dialog onCreateDialog(int id) {
        if (id != DIALOG_GET_GOOGLE_PLAY_SERVICES) {
            return super.onCreateDialog(id);
        }

        int available = GooglePlayServicesUtil.isGooglePlayServicesAvailable(this);
        if (available == ConnectionResult.SUCCESS) {
            return null;
        }
        if (GooglePlayServicesUtil.isUserRecoverableError(available)) {
            return GooglePlayServicesUtil.getErrorDialog(
                    available, this, REQUEST_CODE_GET_GOOGLE_PLAY_SERVICES);
        }
        return new AlertDialog.Builder(this)
                .setMessage("Error")
                .setCancelable(true)
                .create();
    }

    @Override
    public void onStart() {
        super.onStart();
        mPlusClient.connect();
    }

    @Override
    public void onStop() {
        mPlusClient.disconnect();
        super.onStop();
    }

    @Override
    public void onConnected(Bundle bundle) {
        Person currentPerson = mPlusClient.getCurrentPerson();

        if(currentPerson != null) {
            Log.d(TAG, "Logged in as : " + currentPerson.getDisplayName());

            mEmail = mPlusClient.getAccountName();
            mDisplayName = currentPerson.getDisplayName();

            Person.Image image = currentPerson.getImage();
            mImageUrl = (image == null) ? "" : image.getUrl();

            // Save email to preferences
            SharedPreferences.Editor editor = getPreferences(MODE_PRIVATE).edit();
            editor.putString(PREF_USERNAME, mEmail);
            editor.putString(PREF_DISPLAY_NAME, currentPerson.getDisplayName());
            editor.putString(PREF_FIRST_NAME, currentPerson.getName().getGivenName());
            editor.putString(PREF_LAST_NAME, currentPerson.getName().getFamilyName());
            editor.putString(PREF_IMAGE_URL, mImageUrl);
            editor.commit();
            // With the account name acquired, go get the auth token
            getUsername();
        }
    }

    @Override
    public void onDisconnected() {
        Log.d(TAG, "onDisconnected");
    }

    @Override
    public void onAccessRevoked(ConnectionResult connectionResult) {
        Log.d(TAG, "onAccessRevoked");
    }

    @Override
    public void onConnectionFailed(ConnectionResult connectionResult) {
        mConnectionResult = connectionResult;
    }

    class GetTokenTask extends AsyncTask<Void, Void, String> {
        String mEmail;
        String mScope;

        GetTokenTask(String email, String scope) {
            this.mEmail = email;
            this.mScope = scope;
        }

        @Override
        protected String doInBackground(Void... params) {
            String token = null;
            try {
                token = fetchToken();
                if (token != null) {
                    // Save token to preferences
                    getPreferences(MODE_PRIVATE).edit().putString(PREF_AUTH_TOKEN, token).commit();
                    // Got the token, try to login
//                    MyDDPState.getInstance().login(token);
                }
            } catch (IOException e) {
                // The fetchToken() method handles Google-specific exceptions,
                // so this indicates something went wrong at a higher level.
                // TIP: Check for network connectivity before starting the AsyncTask.
                Log.e(TAG, "IOException", e);
            }
            return token;
        }

        @Override
        protected void onPostExecute(String token) {

            if(token != null) {
                loginSuccessNavigateToMainActivity();
            }
            super.onPostExecute(token);
        }

        /**
         * Gets an authentication token from Google and handles any
         * GoogleAuthException that may occur.
         */
        protected String fetchToken() throws IOException {
            try {
                return GoogleAuthUtil.getToken(LoginActivity.this, mEmail, mScope);
            } catch (UserRecoverableAuthException userRecoverableException) {
                // GooglePlayServices.apk is either old, disabled, or not present
                // so we need to show the user some UI in the activity to recover.
                handleException(userRecoverableException);
            } catch (GoogleAuthException fatalException) {
                // Some other type of unrecoverable exception has occurred.
                // Report and log the error as appropriate for your app.
                Log.e(TAG, "GoogleAuthException", fatalException);
            }
            return null;
        }
    }
}