const path = require('path');
const {makeMetroConfig} = require('@rnx-kit/metro-config');

// The example app lives in `example/` but uses the root node_modules; resolve
// this library from the repository root. @rnx-kit/metro-config also handles
// the out-of-tree macOS and Windows platforms.
module.exports = makeMetroConfig({
  projectRoot: path.join(__dirname, 'example'),
  watchFolders: [__dirname],
  resolver: {
    extraNodeModules: {
      '@react-native-community/progress-view': __dirname,
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
});
