/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import {driver, By2} from 'selenium-appium';
import {until} from 'selenium-webdriver';

const setup = require('../jest-setups/jest.setup');
jest.setTimeout(50000);

beforeAll(() => {
  return driver.startWithCapabilities(setup.capabilites);
});

afterAll(() => {
  return driver.quit();
});

describe('Windows Tests', () => {
  test('Render every windows example app progress bars', async () => {
    try {
      await driver.wait(
        until.elementLocated(
          By2.nativeXpath('//ProgressBar[@AutomationId="p1"]'),
        ),
      );
    } catch (error) {
      throw new Error('Progress Bar 1 failed to render');
    }
    try {
      await driver.wait(
        until.elementLocated(
          By2.nativeXpath('//ProgressBar[@AutomationId="p2"]'),
        ),
      );
    } catch (error) {
      throw new Error('Progress Bar 2 failed to render');
    }
    try {
      await driver.wait(
        until.elementLocated(
          By2.nativeXpath('//ProgressBar[@AutomationId="p3"]'),
        ),
      );
    } catch (error) {
      throw new Error('Progress Bar 3 failed to render');
    }
    try {
      await driver.wait(
        until.elementLocated(
          By2.nativeXpath('//ProgressBar[@AutomationId="p4"]'),
        ),
      );
    } catch (error) {
      throw new Error('Progress Bar 4 failed to render');
    }
    try {
      await driver.wait(
        until.elementLocated(
          By2.nativeXpath('//ProgressBar[@AutomationId="Indeterminate"]'),
        ),
      );
    } catch (error) {
      throw new Error('Indeterminate Progress Bar failed to render');
    }
    try {
      await driver.wait(
        until.elementLocated(
          By2.nativeXpath('//ProgressBar[@AutomationId="localimage"]'),
        ),
      );
    } catch (error) {
      throw new Error('Local Image Progress Bar failed to render');
    }
    try {
      await driver.wait(
        until.elementLocated(
          By2.nativeXpath('//ProgressBar[@AutomationId="networkimage"]'),
        ),
      );
    } catch (error) {
      throw new Error('Network Image Progress Bar failed to render');
    }
    try {
      await driver.wait(
        until.elementLocated(
          By2.nativeXpath('//ProgressBar[@AutomationId="trackcolor"]'),
        ),
      );
    } catch (error) {
      throw new Error('Track Color Progress Bar failed to render');
    }
    try {
      await driver.wait(
        until.elementLocated(
          By2.nativeXpath('//ProgressBar[@AutomationId="bar"]'),
        ),
      );
    } catch (error) {
      throw new Error('Bar Style Progress Bar failed to render');
    }
  });
});
