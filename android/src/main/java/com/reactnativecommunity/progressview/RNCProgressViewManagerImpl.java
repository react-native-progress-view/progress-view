package com.reactnativecommunity.progressview;

import android.content.res.ColorStateList;
import android.widget.ProgressBar;

import androidx.annotation.Nullable;

import com.facebook.react.uimanager.ThemedReactContext;

public class RNCProgressViewManagerImpl {
    private static final int MAX_PROGRESS_VALUE = 1000;

    public static final String NAME = "RNCProgressView";

    public static ProgressBar createViewInstance(ThemedReactContext reactContext) {
        ProgressBar bar = new ProgressBar(
                reactContext,
                null,
                android.R.attr.progressBarStyleHorizontal
        );
        bar.setMax(MAX_PROGRESS_VALUE);
        return bar;
    }


    public static void setProgress(ProgressBar bar, double progress) {
        bar.setProgress((int) (MAX_PROGRESS_VALUE * progress));
    }

    public static void setProgressTintColor(ProgressBar bar, int color) {
        bar.setIndeterminateTintList(ColorStateList.valueOf(color));
        bar.setProgressTintList(ColorStateList.valueOf(color));
    }

    public static void setTrackTintColor(ProgressBar bar, int color) {
        bar.setProgressBackgroundTintList(ColorStateList.valueOf(color));
    }

    public static void setIsIndeterminate(ProgressBar bar, boolean isIndeterminate) {
        bar.setIndeterminate(isIndeterminate);
    }
}