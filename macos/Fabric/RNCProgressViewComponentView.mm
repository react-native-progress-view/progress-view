#import "RNCProgressViewComponentView.h"

#import <react/renderer/components/progressview/EventEmitters.h>
#import <react/renderer/components/progressview/Props.h>
#import <react/renderer/components/progressview/RCTComponentViewHelpers.h>
#import <react/renderer/components/progressview/RNCProgressViewComponentDescriptors.h>
#import <react/renderer/components/progressview/RNCProgressViewShadowNode.h>
#import <react/renderer/components/progressview/RNCProgressViewState.h>

#import <React/RCTConversions.h>
#import <React/RCTFabricComponentsPlugins.h>
#import <React/RCTImageResponseDelegate.h>
#import <React/RCTImageResponseObserverProxy.h>

#import "RNCProgressView.h"

using namespace facebook::react;

@interface RNCProgressViewComponentView () <RCTRNCProgressViewViewProtocol, RCTImageResponseDelegate>
@end

@implementation RNCProgressViewComponentView {
  // The NSProgressIndicator subclass the old architecture uses; it draws the
  // tint colors and images itself.
  RNCProgressView *_view;

  ImageResponseObserverCoordinator const *_progressImageCoordinator;
  ImageResponseObserverCoordinator const *_trackImageCoordinator;

  RCTImageResponseObserverProxy _progressImageResponseObserverProxy;
  RCTImageResponseObserverProxy _trackImageResponseObserverProxy;
}

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
    static const auto defaultProps = std::make_shared<const RNCProgressViewProps>();
    _props = defaultProps;
    _view = [[RNCProgressView alloc] initWithFrame:self.bounds];

    _progressImageResponseObserverProxy = RCTImageResponseObserverProxy(self);
    _trackImageResponseObserverProxy = RCTImageResponseObserverProxy(self);

    self.contentView = _view;
  }

  return self;
}

- (void)prepareForRecycle
{
  [super prepareForRecycle];
  self.progressImageCoordinator = nullptr;
  self.trackImageCoordinator = nullptr;

  _view.progressImage = nil;
  _view.trackImage = nil;
  [_view setNeedsDisplay:YES];
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
  const auto &oldViewProps = *std::static_pointer_cast<RNCProgressViewProps const>(_props);
  const auto &newViewProps = *std::static_pointer_cast<RNCProgressViewProps const>(props);

  // progressViewStyle has no macOS equivalent: NSProgressIndicator is always
  // drawn as a bar (the old architecture maps both styles to the bar style).

  if (oldViewProps.progress != newViewProps.progress) {
    _view.doubleValue = newViewProps.progress;
  }

  if (oldViewProps.progressTintColor != newViewProps.progressTintColor) {
    _view.progressTintColor = RCTUIColorFromSharedColor(newViewProps.progressTintColor);
  }

  if (oldViewProps.trackTintColor != newViewProps.trackTintColor) {
    _view.trackTintColor = RCTUIColorFromSharedColor(newViewProps.trackTintColor);
  }

  [_view setNeedsDisplay:YES];

  [super updateProps:props oldProps:oldProps];
}

- (void)updateState:(facebook::react::State::Shared const &)state
           oldState:(facebook::react::State::Shared const &)oldState
{
  auto _state = std::static_pointer_cast<RNCProgressViewShadowNode::ConcreteState const>(state);
  auto _oldState = std::static_pointer_cast<RNCProgressViewShadowNode::ConcreteState const>(oldState);

  auto data = _state->getData();

  bool havePreviousData = _oldState != nullptr;

  auto getCoordinator = [](ImageRequest const *request) -> ImageResponseObserverCoordinator const * {
    if (request) {
      return &request->getObserverCoordinator();
    } else {
      return nullptr;
    }
  };

  if (!havePreviousData || data.getProgressImageSource() != _oldState->getData().getProgressImageSource()) {
    self.progressImageCoordinator = getCoordinator(&data.getProgressImageRequest());
  }

  if (!havePreviousData || data.getTrackImageSource() != _oldState->getData().getTrackImageSource()) {
    self.trackImageCoordinator = getCoordinator(&data.getTrackImageRequest());
  }
}

- (void)setProgressImageCoordinator:(const ImageResponseObserverCoordinator *)coordinator
{
  if (_progressImageCoordinator) {
    _progressImageCoordinator->removeObserver(_progressImageResponseObserverProxy);
  }
  _progressImageCoordinator = coordinator;
  if (_progressImageCoordinator) {
    _progressImageCoordinator->addObserver(_progressImageResponseObserverProxy);
  }
}

- (void)setTrackImageCoordinator:(const ImageResponseObserverCoordinator *)coordinator
{
  if (_trackImageCoordinator) {
    _trackImageCoordinator->removeObserver(_trackImageResponseObserverProxy);
  }
  _trackImageCoordinator = coordinator;
  if (_trackImageCoordinator) {
    _trackImageCoordinator->addObserver(_trackImageResponseObserverProxy);
  }
}

#pragma mark - RCTComponentViewProtocol

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<RNCProgressViewComponentDescriptor>();
}

#pragma mark - RCTImageResponseDelegate

- (void)didReceiveImage:(RNCProgressViewImage *)image metadata:(id)metadata fromObserver:(void const *)observer
{
  if (observer == &_progressImageResponseObserverProxy) {
    _view.progressImage = image;
  } else if (observer == &_trackImageResponseObserverProxy) {
    _view.trackImage = image;
  }
  [_view setNeedsDisplay:YES];
}

- (void)didReceiveProgress:(float)progress
                    loaded:(int64_t)loaded
                     total:(int64_t)total
              fromObserver:(void const *)observer
{
}

- (void)didReceiveFailure:(NSError *)error fromObserver:(void const *)observer
{
}

@end

Class<RCTComponentViewProtocol> RNCProgressViewCls(void)
{
  return RNCProgressViewComponentView.class;
}
