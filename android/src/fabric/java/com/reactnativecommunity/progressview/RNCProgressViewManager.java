package com.reactnativecommunity.progressview;

import android.widget.ProgressBar;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import com.facebook.react.bridge.ReadableMap;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.RNCProgressViewManagerInterface;
import com.facebook.react.viewmanagers.RNCProgressViewManagerDelegate;

    
@ReactModule(name = RNCProgressViewManagerImpl.NAME)
public class RNCProgressViewManager extends SimpleViewManager<ProgressBar>
        implements RNCProgressViewManagerInterface<ProgressBar> {

    private final ViewManagerDelegate<ProgressBar> mDelegate;

    public RNCProgressViewManager() {
    mDelegate = new RNCProgressViewManagerDelegate<>(this);
    }

    @Nullable
    @Override
    protected ViewManagerDelegate<ProgressBar> getDelegate() {
        return mDelegate;
    }

    @NonNull
    @Override
    public String getName() {
        return RNCProgressViewManagerImpl.NAME;
    }

    @NonNull
    @Override
    protected ProgressBar createViewInstance(@NonNull ThemedReactContext context) {
        return RNCProgressViewManagerImpl.createViewInstance(context);
    }

    @Override
    @ReactProp(name = "progress")
    public void setProgressViewStyle(ProgressBar bar, @Nullable String value) {
        // RNCProgressViewManagerImpl.setProgress(bar, (double) progress);
    }

    @Override
    @ReactProp(name = "progress")
    public void setProgress(ProgressBar bar, float progress) {
        RNCProgressViewManagerImpl.setProgress(bar, (double) progress);
    }

    @Override
    @ReactProp(name = "progressTintColor", customType = "Color")
    public void setProgressTintColor(ProgressBar bar, @Nullable Integer color) {
        RNCProgressViewManagerImpl.setProgressTintColor(bar, color);
    }

    @Override
    @ReactProp(name = "trackTintColor", customType = "Color")
    public void setTrackTintColor(ProgressBar bar, @Nullable Integer color) {
        RNCProgressViewManagerImpl.setTrackTintColor(bar, color);
    }

    @Override
    @ReactProp(name = "isIndeterminate")
    public void setIsIndeterminate(ProgressBar bar, boolean isIndeterminate) {
        RNCProgressViewManagerImpl.setIsIndeterminate(bar, isIndeterminate);
    }

    @Override
    @ReactProp(name = "progressImage")
    public void setProgressImage(ProgressBar bar, @Nullable ReadableMap image) {}

    @Override
    @ReactProp(name = "trackImage")
    public void setTrackImage(ProgressBar bar, @Nullable ReadableMap image) {}
}