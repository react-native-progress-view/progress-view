/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

import type { Float, WithDefault } from 'react-native-macos/Libraries/Types/CodegenTypes';
import codegenNativeComponent, { NativeComponentType } from 'react-native-macos/Libraries/Utilities/codegenNativeComponent';


type NativeProps = $ReadOnly<{|
  ...ViewProps,

  // Props
  progressViewStyle?: WithDefault<'default' | 'bar', 'default'>,
  progress?: WithDefault<Float, 0>,
  progressTintColor?: ?ColorValue,
  trackTintColor?: ?ColorValue,
  progressImage?: ?ImageSource,
  trackImage?: ?ImageSource,
|}>;

export default (codegenNativeComponent<NativeProps>(
  'RCTProgressView',
): NativeComponentType<NativeProps>);
