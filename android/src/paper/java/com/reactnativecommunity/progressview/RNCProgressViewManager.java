package com.reactnativecommunity.progressview;

import android.widget.ProgressBar;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

@ReactModule(name = RNCProgressViewManagerImpl.NAME)
public class RNCProgressViewManager extends SimpleViewManager<ProgressBar> {
    @NonNull
    @Override
    public String getName() {
        return RNCProgressViewManagerImpl.NAME;
    }

    @NonNull
    @Override
    protected ProgressBar createViewInstance(@NonNull ThemedReactContext reactContext) {
        return RNCProgressViewManagerImpl.createViewInstance(reactContext);
    }

    @ReactProp(name = "progress")
    public void setProgress(ProgressBar bar, double progress) {
        RNCProgressViewManagerImpl.setProgress(bar, progress);
    }

    @ReactProp(name = "progressTintColor", customType = "Color")
    public void setProgressTintColor(ProgressBar bar, int color) {
        RNCProgressViewManagerImpl.setProgressTintColor(bar, color);
    }

    @ReactProp(name = "trackTintColor", customType = "Color")
    public void setTrackTintColor(ProgressBar bar, int color) {
        RNCProgressViewManagerImpl.setTrackTintColor(bar, color);
    }

    @ReactProp(name = "isIndeterminate")
    public void setIsIndeterminate(ProgressBar bar, boolean isIndeterminate) {
        RNCProgressViewManagerImpl.setIsIndeterminate(bar, isIndeterminate);
    }
}
