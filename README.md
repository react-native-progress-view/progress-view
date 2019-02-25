# react-native-progressview

Use `ProgressViewIOS` to render a UIProgressView on iOS.
It was part of React Native Core.

## Getting started

`$ npm install react-native-progressview --save`

### Mostly automatic installation

`$ react-native link react-native-progressview`

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-progressview` and add `RNCProgressview.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNCProgressview.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

## Usage

```javascript
import RNCProgressview from 'react-native-progressview';

## Reference

### Props

* [View props...](view.md#props)

- [`progress`](progressviewios.md#progress)
- [`progressImage`](progressviewios.md#progressimage)
- [`progressTintColor`](progressviewios.md#progresstintcolor)
- [`progressViewStyle`](progressviewios.md#progressviewstyle)
- [`trackImage`](progressviewios.md#trackimage)
- [`trackTintColor`](progressviewios.md#tracktintcolor)

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
```

## Contributors

- [Kaiden Sin](https://github.com/kdenz) - [Passionate Product Maker and Coder](http://linkedin.com/in/kaiden)

## License

The library is released under the MIT license. For more information see [`LICENSE`](/LICENSE).
