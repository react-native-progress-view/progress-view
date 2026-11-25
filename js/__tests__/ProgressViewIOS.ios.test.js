import * as React from 'react';
import renderer, {act} from 'react-test-renderer';
import ProgressView from '../ProgressView.ios';

// React 19 commits renders asynchronously; render inside act() so the tree is
// complete before it's serialized.
async function render(element) {
  let root;
  await act(async () => {
    root = renderer.create(element);
  });
  return root.toJSON();
}

describe('<ProgressView />', () => {
  it('renders enabled ProgressView', async () => {
    const tree = await render(<ProgressView />);

    expect(tree).toMatchSnapshot();
  });

  it('renders Horizontal ProgressView', async () => {
    const tree = await render(<ProgressView progressViewStyle="bar" />);

    expect(tree).toMatchSnapshot();
  });

  it('renders ProgressView with tintColor', async () => {
    const tree = await render(<ProgressView progressTintColor="red" />);

    expect(tree).toMatchSnapshot();
  });
});
