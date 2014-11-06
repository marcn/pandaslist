package com.pandora.hackathon.pandalist.ui;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.pandora.hackathon.pandalist.R;
import com.squareup.picasso.Picasso;

import java.util.List;



public class ListingRecyclerAdapter extends RecyclerView.Adapter<ListingRecyclerAdapter.ViewHolder> {

    private List<Object> mItems;
    private int ItemLayout;
    private Context mCtx;
    private RecyclerViewOnItemClickListener mListener;

    public ListingRecyclerAdapter(List<Object> items, int itemLayout, RecyclerViewOnItemClickListener listener) {
        this.mItems = items;
        this.ItemLayout = itemLayout;
        this.mListener = listener;
    }

    @Override public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext()).inflate(ItemLayout, parent, false);
        return new ViewHolder(v, mListener);
    }

    @Override public void onBindViewHolder(ViewHolder holder, int position) {
        Object item = mItems.get(position);


        holder.image.setImageBitmap(null);
        Picasso.with(holder.image.getContext()).cancelRequest(holder.image);
        Picasso.with(holder.image.getContext()).load(R.drawable.ic_launcher).into(holder.image);
        holder.itemView.setTag(item);
    }

    @Override public int getItemCount() {
        return mItems.size();
    }

    public static class ViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {
        public View container;
        public ImageView image;
        public TextView title;
        public TextView desc;
        public TextView price;
        public TextView location;
        public RecyclerViewOnItemClickListener listener;

        public ViewHolder(View itemView, RecyclerViewOnItemClickListener listener) {
            super(itemView);
            image = (ImageView) itemView.findViewById(R.id.post_image);
            title = (TextView) itemView.findViewById(R.id.post_title);
            desc = (TextView) itemView.findViewById(R.id.post_description);
            price = (TextView) itemView.findViewById(R.id.post_price);
            location = (TextView) itemView.findViewById(R.id.post_location);
            container =  itemView.findViewById(R.id.container);
            this.listener = listener;
            container.setOnClickListener(this);
        }

        @Override
        public void onClick(View v) {
            Log.d("JENNY", "onClick " + getPosition() + " ");
            listener.onItemClick(getPosition());


        }
    }

    public interface RecyclerViewOnItemClickListener {

        public void onItemClick(int position);

    }
}