/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <React/RCTComponent.h>
#import <React/RCTUIKit.h>

@interface RNCProgressView : NSProgressIndicator

@property (nonatomic, strong, nullable) RCTUIColor *progressTintColor;
@property (nonatomic, strong, nullable) RCTUIColor *trackTintColor;
@property(nonatomic, strong, nullable) UIImage *progressImage;
@property(nonatomic, strong, nullable) UIImage *trackImage;

@end
