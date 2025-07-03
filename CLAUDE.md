# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is `@react-native-community/progress-view`, a React Native library providing a cross-platform ProgressView component. The library supports iOS (UIProgressView), Android, macOS, and Windows platforms with both legacy and new React Native architecture (Fabric).

## Development Commands

### Essential Commands
- `yarn lint` - Run ESLint on the codebase
- `yarn test` - Run Jest tests for JavaScript components
- `yarn test:windows` - Run Windows-specific tests
- `yarn type-check` - Run TypeScript type checking
- `yarn flow` - Run Flow type checking

### Platform-Specific Development
- `yarn ios` - Run iOS example app
- `yarn android` - Run Android example app  
- `yarn windows` - Run Windows example app
- `yarn start` - Start Metro bundler
- `yarn start:macos` - Start Metro for macOS
- `yarn start:windows` - Start Metro for Windows

### Testing Individual Components
- `yarn test js/__tests__/*` - Run specific test files
- Tests are located in `js/__tests__/` and use Jest with React Native preset

## Architecture Overview

### Multi-Platform Native Module Structure
The library implements platform-specific components that all expose the same JavaScript interface:

**JavaScript Layer** (`js/` directory):
- `index.js` - Main entry point exporting ProgressView
- `index.d.ts` - TypeScript definitions
- Platform-specific implementations:
  - `ProgressView.ios.js` - iOS implementation using UIProgressView
  - `ProgressView.android.js` - Android implementation  
  - `ProgressView.macos.js` - macOS implementation
  - `ProgressView.windows.js` - Windows implementation

**Native Component Generation**:
- Uses React Native's codegen system for type-safe native components
- `RNCProgressViewNativeComponent.js` - iOS/macOS native component spec
- `RNCProgressViewNativeComponentAndroid.js` - Android native component spec
- `RNCProgressViewNativeComponentWindows.js` - Windows native component spec

### Native Platform Implementations

**iOS/macOS** (`ios/` and `macos/` directories):
- Objective-C implementation wrapping UIProgressView
- Supports both old and new architecture (Fabric)
- Fabric implementation in `ios/Fabric/` uses C++ and the new renderer

**Android** (`android/` directory):
- Java implementation with separate Paper and Fabric managers
- `src/paper/` - Legacy architecture implementation
- `src/fabric/` - New architecture implementation

**Windows** (`windows/` directory):
- C++/WinRT implementation
- Uses Visual Studio project structure

### Build System Integration
- **React Native Config**: `react-native.config.js` defines platform-specific dependencies
- **CocoaPods**: `react-native-progress-view.podspec` handles iOS/macOS dependencies
- **Android Gradle**: `android/build.gradle` handles Android dependencies
- **Codegen**: `package.json` contains `codegenConfig` for automatic native component generation

### Key Files to Understand
- `js/index.js:3` - Main component export
- `js/index.d.ts:4-40` - TypeScript interface definitions
- `package.json:81-88` - Codegen configuration for native components
- `react-native-progress-view.podspec:22-49` - Fabric/Paper conditional compilation

## Development Notes

### Dual Architecture Support
The library supports both the old React Native architecture (Paper) and the new architecture (Fabric). The build system automatically selects the appropriate implementation based on the `RCT_NEW_ARCH_ENABLED` environment variable.

### Cross-Platform Considerations
Each platform has slightly different prop support:
- `isIndeterminate` prop is Windows-only
- Image props (`progressImage`, `trackImage`) work differently across platforms
- Default styling varies by platform (iOS: 2px height, Android: 20px height)

### Testing Strategy
- Unit tests focus on component rendering and prop validation
- Platform-specific test setups in `jest-setups/`
- Example apps in `example/` and `fabric-example/` for manual testing