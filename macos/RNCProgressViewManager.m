/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "RNCProgressViewManager.h"

#import "RNCProgressView.h"

#import <React/RCTConvert.h>

@implementation RCTConvert (RNCProgressViewManager)

RCT_ENUM_CONVERTER(NSProgressIndicatorStyle, (@{
  @"default": @(NSProgressIndicatorBarStyle),
  @"bar": @(NSProgressIndicatorBarStyle),
}), NSProgressIndicatorBarStyle, integerValue)

@end

@implementation RNCProgressViewManager

RCT_EXPORT_MODULE()

- (RCTPlatformView *)view
{
  return [RNCProgressView new];
}

RCT_EXPORT_VIEW_PROPERTY(style, NSProgressIndicatorStyle)
RCT_REMAP_VIEW_PROPERTY(progress, doubleValue, double)
RCT_EXPORT_VIEW_PROPERTY(progressTintColor, UIColor)
RCT_EXPORT_VIEW_PROPERTY(trackTintColor, UIColor)
RCT_EXPORT_VIEW_PROPERTY(progressImage, UIImage)
RCT_EXPORT_VIEW_PROPERTY(trackImage, UIImage)

@end
