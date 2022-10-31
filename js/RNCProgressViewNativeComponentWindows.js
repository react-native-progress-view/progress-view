/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

'use strict';

import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

import type {HostComponent} from 'react-native';
import type {ImageSource} from 'react-native/Libraries/Image/ImageSource';
import type {ColorValue} from 'react-native/Libraries/StyleSheet/StyleSheet';
import type {
  Float,
  WithDefault,
} from 'react-native/Libraries/Types/CodegenTypes';
import type {ViewProps} from 'react-native/Libraries/Components/View/ViewPropTypes';

type NativeProps = $ReadOnly<{|
  ...ViewProps,
  progressViewStyle?: WithDefault<'default' | 'bar', 'default'>,
  progress?: WithDefault<Float, 0>,
  progressTintColor?: ?ColorValue,
  trackTintColor?: ?ColorValue,
  progressImage?: ?ImageSource,
  trackImage?: ?ImageSource,
  isIndeterminate?: ?boolean,
|}>;

export default (codegenNativeComponent<NativeProps>(
  'RNCProgressView',
): HostComponent<NativeProps>);
