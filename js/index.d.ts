import React from 'react';
import {ViewProps, ImageSourcePropType, ColorValue} from 'react-native';

export type ProgressViewProps = ViewProps & {
  /**
   * The progress bar style.
   */
  progressViewStyle?: 'default' | 'bar',

  /**
   * The progress value (between 0 and 1).
   */
  progress?: number,

  /**
   * The tint color of the progress bar itself.
   */
  progressTintColor?: ColorValue,

  /**
   * The tint color of the progress bar track.
   */
  trackTintColor?: ColorValue,

  /**
   * A stretchable image to display as the progress bar.
   */
  progressImage?: ImageSourcePropType,

  /**
   * A stretchable image to display behind the progress bar.
   */
  trackImage?: ImageSourcePropType,
};
export class ProgressView extends React.Component<ProgressViewProps> {}
