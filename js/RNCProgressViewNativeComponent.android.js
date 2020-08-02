
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
import type {HostComponent} from 'react-native/Libraries/Renderer/shims/ReactNativeTypes';
import type {ViewProps} from 'react-native/Libraries/Components/View/ViewPropTypes';

type NativeProps = $ReadOnly<{|
  ...ViewProps,

  //Props
  styleAttr?: string,
  typeAttr?: string,
  indeterminate: boolean,
  progress?: number,
  animating?: boolean,
  color?: ?string,
  testID?: ?string,
|}>;

type NativeProgressViewAndroid = HostComponent<NativeProps>;

export default ((requireNativeComponent(
    'RNCProgressView',
  ): any): NativeProgressViewIOS);