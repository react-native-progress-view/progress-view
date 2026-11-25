/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <React/RCTComponent.h>
#import <React/RCTUIKit.h>

// react-native-macos 0.81 replaced its `UIImage` alias for NSImage with the
// `RCTPlatformImage` macro; older versions only have the alias.
#ifdef RCTPlatformImage
#define RNCProgressViewImage RCTPlatformImage
#else
#define RNCProgressViewImage UIImage
#endif

@interface RNCProgressView : NSProgressIndicator

@property (nonatomic, strong, nullable) RCTUIColor *progressTintColor;
@property (nonatomic, strong, nullable) RCTUIColor *trackTintColor;
@property(nonatomic, strong, nullable) RNCProgressViewImage *progressImage;
@property(nonatomic, strong, nullable) RNCProgressViewImage *trackImage;

@end
