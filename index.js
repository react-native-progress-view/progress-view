/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/**
 * entry point for example
 */
'use strict';

import {name as appName} from './example/app.json';
import {AppRegistry} from 'react-native';
import {App} from './example/App';

AppRegistry.registerComponent(appName, () => App);
