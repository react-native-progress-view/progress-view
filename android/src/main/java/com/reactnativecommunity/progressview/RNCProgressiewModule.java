
package com.reactnativecommunity.progressview;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNCProgressViewModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNCProgressViewModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNCProgressView";
  }
}