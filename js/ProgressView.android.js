
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

'use strict';

import React from 'react';

import ProgressViewAndroidNativeComponent from './RNCProgressViewNativeComponent';

import type {ViewProps} from 'react-native/Libraries/Components/View/ViewPropTypes';

export type ProgressViewAndroidProps = $ReadOnly<{|
  ...ViewProps,

  /**
   * Style of the ProgressBar and whether it shows indeterminate progress (e.g. spinner).
   *
   * `indeterminate` can only be false if `styleAttr` is Horizontal, and requires a
   * `progress` value.
   */
  ...
    | {|
        styleAttr: 'Horizontal',
        indeterminate: false,
        progress: number,
      |}
    | {|
        typeAttr:
          | 'Horizontal'
          | 'Normal'
          | 'Small'
          | 'Large'
          | 'Inverse'
          | 'SmallInverse'
          | 'LargeInverse',
        indeterminate: true,
      |},
  /**
   * Whether to show the ProgressBar (true, the default) or hide it (false).
   */
  animating?: ?boolean,
  /**
   * Color of the progress bar.
   */
  color?: ?string,
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: ?string,
|}>;

const ProgressViewAndroid = (
  props: ProgressViewAndroidProps,
  forwardedRef: ?React.Ref<typeof ProgressViewAndroidNativeComponent>,
) => {
  return <ProgressViewAndroidNativeComponent {...props} ref={forwardedRef} />;
};

const ProgressViewAndroidToExport = React.forwardRef(ProgressViewAndroid);

ProgressViewAndroidToExport.defaultProps = {
  styleAttr: 'Normal',
  indeterminate: true,
  animating: true,
};

export default (ProgressViewAndroidToExport: ProgressViewAndroidNativeComponent);