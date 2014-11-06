package com.pandora.hackathon.pandalist.ui;

import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.pandora.hackathon.pandalist.R;
import com.squareup.picasso.Picasso;

import java.util.List;



public class ListingRecyclerAdapter extends RecyclerView.Adapter<ListingRecyclerAdapter.ViewHolder> {

    private List<Object> items;
    private int itemLayout;

    public ListingRecyclerAdapter(List<Object> items, int itemLayout) {
        this.items = items;
        this.itemLayout = itemLayout;
    }

    @Override public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext()).inflate(itemLayout, parent, false);
        return new ViewHolder(v);
    }

    @Override public void onBindViewHolder(ViewHolder holder, int position) {
        Object item = items.get(position);


        holder.image.setImageBitmap(null);
        Picasso.with(holder.image.getContext()).cancelRequest(holder.image);
        Picasso.with(holder.image.getContext()).load(R.drawable.ic_launcher).into(holder.image);
        holder.itemView.setTag(item);
    }

    @Override public int getItemCount() {
        return items.size();
    }

    public static class ViewHolder extends RecyclerView.ViewHolder {
        public ImageView image;
        public TextView title;
        public TextView desc;
        public TextView price;
        public TextView location;

        public ViewHolder(View itemView) {
            super(itemView);
            image = (ImageView) itemView.findViewById(R.id.post_image);
            title = (TextView) itemView.findViewById(R.id.post_title);
            desc = (TextView) itemView.findViewById(R.id.post_description);
            price = (TextView) itemView.findViewById(R.id.post_price);
            location = (TextView) itemView.findViewById(R.id.post_location);
        }
    }
}