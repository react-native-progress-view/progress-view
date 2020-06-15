import * as React from 'react';
import renderer from 'react-test-renderer';
import ProgressView from '../ProgressView.ios';

describe('<ProgressView />', () => {
  it('renders enabled ProgressView', () => {
    const tree = renderer.create(<ProgressView />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders Horizontal ProgressView', () => {
    const tree = renderer
      .create(<ProgressView progressViewStyle="bar" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders ProgressView with tintColor', () => {
    const tree = renderer
      .create(<ProgressView progressTintColor="red" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
