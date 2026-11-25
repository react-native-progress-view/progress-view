// The example app under `example/` is a react-native-test-app project driven
// from the repository root (dependencies in the root package.json), the same
// layout as react-native-menu/menu.
const project = (() => {
  const path = require('path');
  try {
    const {configureProjects} = require('react-native-test-app');
    return configureProjects({
      android: {
        sourceDir: path.join('example', 'android'),
        manifestPath: path.join(__dirname, 'example', 'android'),
      },
      ios: {
        sourceDir: path.join('example', 'ios'),
      },
      macos: {
        sourceDir: path.join('example', 'macos'),
      },
      windows: {
        sourceDir: path.join('example', 'windows'),
        solutionFile: path.join(
          'example',
          'windows',
          'ProgressViewExample.sln',
        ),
      },
    });
  } catch (_) {
    return undefined;
  }
})();

module.exports = {
  // How apps that install this library autolink it.
  dependency: {
    platforms: {
      android: {
        libraryName: 'progressview',
      },
      macos: null,
      windows: null,
    },
  },
  dependencies: {
    // Let the example app autolink this library from the repository root.
    '@react-native-community/progress-view': {
      root: __dirname,
    },
  },
  ...(project ? {project} : undefined),
};
