/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

'use strict';

import {requireNativeComponent} from 'react-native';

import type {NativeComponent} from 'react-native/Libraries/Renderer/shims/ReactNative';
import type {ImageSource} from 'react-native/Libraries/Image/ImageSource';
import type {ColorValue} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import type {ViewProps} from 'react-native/Libraries/Components/View/ViewPropTypes';

type NativeProps = $ReadOnly<{|
  ...ViewProps,
  progressViewStyle?: ?('default' | 'bar'),
  progress?: ?number,
  progressTintColor?: ?ColorValue,
  trackTintColor?: ?ColorValue,
  progressImage?: ?ImageSource,
  trackImage?: ?ImageSource,
|}>;

type NativeProgressViewIOS = Class<NativeComponent<NativeProps>>;

export default ((requireNativeComponent(
  'RNCProgressView',
): any): NativeProgressViewIOS);
