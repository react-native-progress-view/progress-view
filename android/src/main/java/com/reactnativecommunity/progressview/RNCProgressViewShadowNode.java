/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.reactnativecommunity.progressview;

import android.util.SparseIntArray;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ProgressBar;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.yoga.YogaMeasureFunction;
import com.facebook.yoga.YogaMeasureMode;
import com.facebook.yoga.YogaMeasureOutput;
import com.facebook.yoga.YogaNode;
import java.util.HashSet;
import java.util.Set;
import javax.annotation.Nullable;

/**
 * Node responsible for holding the style of the ProgressBar, see under
 * {@link android.R.attr.progressBarStyle} for possible styles. ReactProgressBarViewManager
 * manages how this style is applied to the ProgressBar.
 */
public class RNCProgressViewShadowNode extends LayoutShadowNode implements YogaMeasureFunction {

  private String mStyle = RNCProgressViewViewManager.DEFAULT_STYLE;

  private final SparseIntArray mHeight;
  private final SparseIntArray mWidth;
  private final Set<Integer> mMeasured;

  public RNCProgressViewShadowNode() {
    mHeight = new SparseIntArray();
    mWidth = new SparseIntArray();
    mMeasured = new HashSet<>();
    initMeasureFunction();
  }

  private void initMeasureFunction() {
    setMeasureFunction(this);
  }

  public @Nullable String getStyle() {
    return mStyle;
  }

  @ReactProp(name = RNCProgressViewViewManager.PROP_STYLE)
  public void setStyle(@Nullable String style) {
    mStyle = style == null ? RNCProgressViewViewManager.DEFAULT_STYLE : style;
  }

  @Override
  public long measure(
      YogaNode node,
      float width,
      YogaMeasureMode widthMode,
      float height,
      YogaMeasureMode heightMode) {
    final int style = RNCProgressViewViewManager.getStyleFromString(getStyle());
    if (!mMeasured.contains(style)) {
      ProgressBar progressBar = RNCProgressViewViewManager.createProgressBar(getThemedContext(), style);
      final int spec = View.MeasureSpec.makeMeasureSpec(
          ViewGroup.LayoutParams.WRAP_CONTENT,
          View.MeasureSpec.UNSPECIFIED);
      progressBar.measure(spec, spec);
      mHeight.put(style, progressBar.getMeasuredHeight());
      mWidth.put(style, progressBar.getMeasuredWidth());
      mMeasured.add(style);
    }

    return YogaMeasureOutput.make(mWidth.get(style), mHeight.get(style));
  }
}
