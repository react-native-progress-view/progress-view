package com.reactnativecommunity.progressview;

import android.content.res.ColorStateList;
import android.widget.ProgressBar;

import androidx.annotation.NonNull;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class RNCProgressViewManager extends SimpleViewManager<ProgressBar> {
    private static final int MAX_PROGRESS_VALUE = 1000;

    @NonNull
    @Override
    public String getName() {
        return "RNCProgressView";
    }

    @NonNull
    @Override
    protected ProgressBar createViewInstance(@NonNull ThemedReactContext reactContext) {
        ProgressBar bar = new ProgressBar(
                reactContext,
                null,
                android.R.attr.progressBarStyleHorizontal
        );
        bar.setMax(MAX_PROGRESS_VALUE);
        return bar;
    }

    @ReactProp(name = "progress")
    public void setProgress(ProgressBar bar, double progress) {
        bar.setProgress((int) (MAX_PROGRESS_VALUE * progress));
    }

    @ReactProp(name = "progressTintColor", customType = "Color")
    public void setProgressTintColor(ProgressBar bar, int color) {
        bar.setIndeterminateTintList(ColorStateList.valueOf(color));
        bar.setProgressTintList(ColorStateList.valueOf(color));
    }

    @ReactProp(name = "trackTintColor", customType = "Color")
    public void setTrackTintColor(ProgressBar bar, int color) {
        bar.setProgressBackgroundTintList(ColorStateList.valueOf(color));
    }

    @ReactProp(name = "isIndeterminate")
    public void setIsIndeterminate(ProgressBar bar, boolean isIndeterminate) {
        bar.setIndeterminate(isIndeterminate);
    }
}
