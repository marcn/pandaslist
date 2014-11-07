package com.pandora.hackathon.pandalist.aws;

import android.content.Context;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3Client;

import java.io.File;
import java.util.Locale;
import java.util.Random;
import java.util.UUID;

/**
 * Created by dsantiagorivera on 11/6/14.
 */
public class AWSUtils {

    private static Random random = new Random();

    private static AmazonS3Client s3Client;


    public static AmazonS3Client getS3Client() {
        if (s3Client == null) {
            s3Client = new AmazonS3Client(getCredProvider());
        }
        return s3Client;
    }

    public static BasicAWSCredentials getCredProvider() {
        return new BasicAWSCredentials(Constants.AWS_KEY, Constants.AWS_SECRET);
    }

    public static String getFileName() {
        return UUID.randomUUID().toString();
    }

    public static boolean doesBucketExist() {
        return s3Client.doesBucketExist(Constants.BUCKET_NAME.toLowerCase(Locale.US));
    }
}
