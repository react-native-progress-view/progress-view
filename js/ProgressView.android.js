/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

import * as React from 'react';
import {requireNativeComponent} from 'react-native';

const RNCProgressView = requireNativeComponent('RNCProgressView');

export default function ProgressView(props) {
  const nativeProps = {
    testID: props.testID,
    progress: props.progress,
    progressTintColor: props.progressTintColor,
    trackTintColor: props.trackTintColor,
    isIndeterminate: props.isIndeterminate,
    style: [{height: 20}, props.style],
  };

  return <RNCProgressView {...nativeProps} />;
}
