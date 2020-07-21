/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 * @formatyar
 * @flow strict-local
 */
'use strict';

import {requireNativeComponent, StyleSheet, Image} from 'react-native';
import type {WindowsNativeProps} from './RNCProgressViewNativeComponent';
import * as React from 'react';

const RNCProgressView = requireNativeComponent('RNCProgressViewWindows');

const styles = StyleSheet.create({
  progressWindows: {
    height: 5,
  },
});

export default function ProgressViewWindows(props: WindowsNativeProps) {
  const nativeProps = {
    testID: props.testID,
    progressViewStyle: props.progressViewStyle,
    progress: props.progress,
    progressTintColor: props.progressTintColor,
    trackTintColor: props.trackTintColor,
    isIndeterminate: props.isIndeterminate,
    progressImage: Image.resolveAssetSource(props.progressImage),
    trackImage: Image.resolveAssetSource(props.trackImage),
    style: [styles.progressWindows, props.style],
  };

  return <RNCProgressView {...nativeProps} />;
}
