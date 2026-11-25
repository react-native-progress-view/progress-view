#import <React/RCTUIKit.h>

#import <React/RCTViewComponentView.h>

NS_ASSUME_NONNULL_BEGIN

// macOS counterpart of ios/Fabric/RNCProgressViewComponentView. It has the same
// class name because codegenConfig.ios.componentProvider, which macOS shares,
// registers RNCProgressView under it.
@interface RNCProgressViewComponentView : RCTViewComponentView

@end

NS_ASSUME_NONNULL_END
