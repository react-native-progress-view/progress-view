# @react-native-community/progress-view

[![Build Status][build-badge]][build]
[![Version][version-badge]][package]
![Supports iOS][support-badge]
[![MIT License][license-badge]][license]
[![Lean Core Badge][lean-core-badge]][lean-core-issue]

Use `ProgressViewIOS` to render a UIProgressView on iOS.

## Getting started

```
$ npm install @react-native-community/progress-view --save
```

or

```
$ yarn add @react-native-community/progress-view
```

### Linking

- React Native 0.60+

 The package is [automatically linked](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md) when building the app. All you need to do is:

```
$ cd ios && pod install
```

- React Native <= 0.59

Run the following commands

```
$ react-native link @react-native-community/progress-view
```

### Manual installation

<details>
<summary>Manually linking the library - iOS</summary>

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `@react-native-community/progress-view` and add `RNCProgressView.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNCProgressView.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)

</details>

## Usage

```javascript
import {ProgressView} from "@react-native-community/progress-view";
```

## Reference

### Props

- [Inherited `View` props...](https://facebook.github.io/react-native/docs/view#props)

* [`progress`](#progress)
* [`progressImage`](#progressimage)
* [`progressTintColor`](#progresstintcolor)
* [`progressViewStyle`](#progressviewstyle)
* [`trackImage`](#trackimage)
* [`trackTintColor`](#tracktintcolor)

---

# Reference

## Props

### `progress`

The progress value (between 0 and 1).

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### `progressImage`

A stretchable image to display as the progress bar.

| Type                   | Required |
| ---------------------- | -------- |
| Image.propTypes.source | No       |

---

### `progressTintColor`

The tint color of the progress bar itself.

| Type   | Required |
| ------ | -------- |
| string | No       |

---

### `progressViewStyle`

The progress bar style.

| Type                   | Required |
| ---------------------- | -------- |
| enum('default', 'bar') | No       |

---

### `trackImage`

A stretchable image to display behind the progress bar.

| Type                   | Required |
| ---------------------- | -------- |
| Image.propTypes.source | No       |

---

### `trackTintColor`

The tint color of the progress bar track.

| Type   | Required |
| ------ | -------- |
| string | No       |

## Contributors

- [Kaiden Sin](https://github.com/kdenz) - [Passionate Product Maker and Coder](http://linkedin.com/in/kaiden)

## License

The library is released under the MIT license. For more information see [`LICENSE`](/LICENSE).

[build-badge]: https://img.shields.io/circleci/project/github/react-native-community/react-native-progress-view/master.svg?style=flat-square
[build]: https://circleci.com/gh/react-native-community/react-native-progress-view
[version-badge]: https://img.shields.io/npm/v/@react-native-community/progress-view.svg?style=flat-square
[package]: https://www.npmjs.com/package/@react-native-community/progress-view
[support-badge]:https://img.shields.io/badge/platforms-ios-lightgrey.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/@react-native-community/progress-view.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
[lean-core-badge]: https://img.shields.io/badge/Lean%20Core-Extracted-brightgreen.svg?style=flat-square
[lean-core-issue]: https://github.com/facebook/react-native/issues/23313