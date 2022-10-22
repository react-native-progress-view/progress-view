import * as React from 'react';
import {StyleSheet, Text, SafeAreaView, Platform} from 'react-native';
import {ProgressView} from '@react-native-community/progress-view';

type Props = {||};
type State = {|
  progress: number,
|};

class App extends React.Component<Props, State> {
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
        <Text style={styles.header}>
          ProgressView Example (
          {global?.nativeFabricUIManager ? 'Fabric' : 'Paper'})
        </Text>
        <ProgressView
          style={styles.progressView}
          progress={this.getProgress(0)}
          testID={'p1'}
        />
        <ProgressView
          style={styles.progressView}
          progressTintColor="purple"
          progress={this.getProgress(0.2)}
          testID={'p2'}
        />
        <ProgressView
          style={styles.progressView}
          progressTintColor="red"
          progress={this.getProgress(0.4)}
          testID={'p3'}
        />
        <ProgressView
          style={styles.progressView}
          progressTintColor="orange"
          progress={this.getProgress(0.6)}
          testID={'p4'}
        />
        <ProgressView
          style={styles.progressView}
          progressTintColor="yellow"
          progress={this.getProgress(0.8)}
          testID={'p5'}
        />

        <Text style={styles.text}>isIndeterminate</Text>
        <ProgressView
          style={styles.progressView}
          isIndeterminate={true}
          testID={'Indeterminate'}
        />
        <Text style={styles.text}>ProgressImage with local image</Text>
        <ProgressView
          style={styles.progressView}
          progress={0.5}
          progressImage={require('./test.png')}
          testID={'localimage'}
        />
        <Text style={styles.text}>TrackImage with network image</Text>
        {Platform.OS === 'windows' ? (
          <ProgressView
            style={styles.progressView}
            progress={0.5}
            trackImage={{
              uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
            }}
            testID={'networkimage'}
          />
        ) : (
          <Text>Network Images only work on Windows</Text>
        )}
        <Text style={styles.text}>TrackTint Color</Text>
        <ProgressView
          style={styles.progressView}
          progress={0.8}
          trackTintColor={'red'}
          progressTintColor={'yellow'}
          testID={'trackcolor'}
        />
        <Text style={styles.text}>Bar Style</Text>
        <ProgressView
          style={styles.progressView}
          progress={0.4}
          progressViewStyle={'bar'}
          testID={'bar'}
        />
      </SafeAreaView>
    );
  }
}

export default App;

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
  text: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
});
