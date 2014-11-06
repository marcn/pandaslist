package com.pandora.hackathon.pandalist.ui;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.support.v7.graphics.Palette;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.pandora.hackathon.pandalist.PostItemData;
import com.pandora.hackathon.pandalist.R;
import com.squareup.picasso.Picasso;
import com.squareup.picasso.Target;

import java.util.List;



public class ListingRecyclerAdapter extends RecyclerView.Adapter<ListingRecyclerAdapter.ViewHolder> {

    private List<PostItemData> mItems;
    private int ItemLayout;
    private Context mCtx;
    private RecyclerViewOnItemClickListener mListener;

    public ListingRecyclerAdapter(List<PostItemData> items, int itemLayout, RecyclerViewOnItemClickListener listener) {
        this.mItems = items;
        this.ItemLayout = itemLayout;
        this.mListener = listener;
    }

    public void setItems(List<PostItemData> items) {
        this.mItems = items;

        notifyItemRangeChanged(0, mItems.size());

    }

    @Override public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext()).inflate(ItemLayout, parent, false);
        return new ViewHolder(v, mListener);
    }

    @Override public void onBindViewHolder(final ViewHolder holder, int position) {
        PostItemData item = mItems.get(position);

        holder.title.setText(item.getTitle());
        holder.desc.setText(item.getDescription());
        Picasso.with(holder.image.getContext()).cancelRequest(holder.image);
        Picasso.with(holder.image.getContext()).load((int)item.getBitmapResId()).into(new Target() {

            @Override
            public void onBitmapLoaded(Bitmap bitmap, Picasso.LoadedFrom from) {
                Palette.generateAsync(bitmap, new Palette.PaletteAsyncListener() {
                    @Override
                    public void onGenerated(Palette palette) {

                        int color = palette.getLightMutedColor(Color.parseColor("#22224099"));
                        int colorAlpha = Color.argb(200, Color.red(color), Color.green(color), Color.blue(color));

                        holder.detailContainer.setBackgroundColor(colorAlpha);
                    }
                });
            }

            @Override
            public void onBitmapFailed(Drawable errorDrawable) {

            }

            @Override
            public void onPrepareLoad(Drawable placeHolderDrawable) {

            }
        });
        holder.itemView.setTag(item);
    }


    @Override public int getItemCount() {
        return mItems.size();
    }

    public static class ViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {
        public View container;
        public View detailContainer;
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
            detailContainer =  itemView.findViewById(R.id.detail_container);
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