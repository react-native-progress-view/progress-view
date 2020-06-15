/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 * @format
 * @flow strict-local
 */
'use strict';

import {requireNativeComponent, StyleSheet} from 'react-native';
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
    progressViewStyle: props.progressViewStyle,
    progress: props.progress,
    progressTintColor: props.progressTintColor,
    trackTintColor: props.trackTintColor,
    isIndeterminate: props.isIndeterminate,
    progressImage: props.progressImage,
    trackImage: props.trackImage,
    style: [styles.progressWindows, props.style],
  };

  return <RNCProgressView {...nativeProps} />;
}
