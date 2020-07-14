import * as React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {ProgressView} from '../js';

type Props = {||};
type State = {|
  progress: number,
|};

export class App extends React.Component<Props, State> {
  _rafId: ?AnimationFrameID = null;

  state = {
    progress: 0,
  };

  componentDidMount() {
    this.updateProgress();
  }

  componentWillUnmount() {
    if (this._rafId != null) {
      cancelAnimationFrame(this._rafId);
    }
  }

  updateProgress = () => {
    const progress = this.state.progress + 0.01;
    this.setState({progress});
    this._rafId = requestAnimationFrame(() => this.updateProgress());
  };

  /* $FlowFixMe(>=0.85.0 site=react_native_fb) This comment suppresses an error
   * found when Flow v0.85 was deployed. To see the error, delete this comment
   * and run Flow. */
  getProgress = (offset) => {
    const progress = this.state.progress + offset;
    return Math.sin(progress % Math.PI) % 1;
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>ProgressView Example</Text>
        <ProgressView
          style={styles.progressView}
          progress={this.getProgress(0)}
        />
        <ProgressView
          style={styles.progressView}
          progressTintColor="purple"
          progress={this.getProgress(0.2)}
        />
        <ProgressView
          style={styles.progressView}
          progressTintColor="red"
          progress={this.getProgress(0.4)}
        />
        <ProgressView
          style={styles.progressView}
          progressTintColor="orange"
          progress={this.getProgress(0.6)}
        />
        <ProgressView
          style={styles.progressView}
          progressTintColor="yellow"
          progress={this.getProgress(0.8)}
        />
        <ProgressView style={styles.progressView} isIndeterminate={true}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  progressView: {
    marginTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
  },
});
