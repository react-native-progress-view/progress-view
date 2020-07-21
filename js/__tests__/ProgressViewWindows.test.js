/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { driver, By2 } from 'selenium-appium'
import { until } from 'selenium-webdriver';

const setup = require('../../jest-setups/jest.setup');
jest.setTimeout(50000);

beforeAll(() => {
    return driver.startWithCapabilities(setup.capabilites);
  });
  
  afterAll(() => {
    return driver.quit();
  });

describe('Windows Tests', () => {
  
    test('Test test', async () => {
      const showAlertButton = await driver.wait(until.elementLocated(By2.nativeName('ProgressView Example')));
    });
  
  });