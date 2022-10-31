#import "RNCProgressViewComponentView.h"

#import <react/renderer/components/progressview/EventEmitters.h>
#import <react/renderer/components/progressview/Props.h>
#import <react/renderer/components/progressview/RCTComponentViewHelpers.h>
#import <react/renderer/components/progressview/RNCProgressViewComponentDescriptors.h>
#import <react/renderer/components/progressview/RNCProgressViewShadowNode.h>
#import <react/renderer/components/progressview/RNCProgressViewState.h>

#import <React/RCTConversions.h>
#import <React/RCTFabricComponentsPlugins.h>
#import <React/RCTImageLoaderProtocol.h>
#import <React/RCTImageResponseDelegate.h>
#import <React/RCTImageResponseObserverProxy.h>
#import "RCTImagePrimitivesConversions.h"

using namespace facebook::react;

static UIProgressViewStyle progressViewStyle(RNCProgressViewProgressViewStyle const progressViewStyle)
{
  switch (progressViewStyle) {
    case RNCProgressViewProgressViewStyle::Default:
      return UIProgressViewStyleDefault;
    case RNCProgressViewProgressViewStyle::Bar:
      return UIProgressViewStyleBar;
  }
}

@interface RNCProgressViewComponentView () <RCTRNCProgressViewViewProtocol, RCTImageResponseDelegate>
@end

@implementation RNCProgressViewComponentView {
  UIProgressView *_view;

  UIImage *_progressImage;
  UIImage *_trackImage;

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
    _view = [[UIProgressView alloc] init];

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

  if (_progressImage) {
    [_view setProgressImage:nil];
  }
  if (_trackImage) {
    [_view setTrackImage:nil];
  }
  
  _progressImage = nil;
  _trackImage = nil;
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
  const auto &oldViewProps = *std::static_pointer_cast<RNCProgressViewProps const>(_props);
  const auto &newViewProps = *std::static_pointer_cast<RNCProgressViewProps const>(props);

  if (oldViewProps.progressViewStyle != newViewProps.progressViewStyle) {
    [_view setProgressViewStyle:progressViewStyle(newViewProps.progressViewStyle)];
  }

  if (oldViewProps.progress != newViewProps.progress) {
    [_view setProgress:newViewProps.progress];
  }

  if (oldViewProps.progressTintColor != newViewProps.progressTintColor) {
    [_view setProgressTintColor:RCTUIColorFromSharedColor(newViewProps.progressTintColor)];
  }

  if (oldViewProps.trackTintColor != newViewProps.trackTintColor) {
    [_view setTrackTintColor:RCTUIColorFromSharedColor(newViewProps.trackTintColor)];
  }

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

- (void)setProgressImage:(UIImage *)progressImage
{
  if ([progressImage isEqual:_progressImage]) {
    return;
  }

  _progressImage = progressImage;
  [_view setProgressImage:progressImage];
}

- (void)setTrackImage:(UIImage *)trackImage
{
  if ([trackImage isEqual:_trackImage]) {
    return;
  }

  _trackImage = trackImage;
  [_view setTrackImage:trackImage];
}

#pragma mark - RCTComponentViewProtocol

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<RNCProgressViewComponentDescriptor>();
}

#pragma mark - RCTImageResponseDelegate

- (void)didReceiveImage:(UIImage *)image metadata:(id)metadata fromObserver:(void const *)observer
{
  if (observer == &_progressImageResponseObserverProxy) {
    self.progressImage = image;
  } else if (observer == &_trackImageResponseObserverProxy) {
    self.trackImage = image;
  }
}

- (void)didReceiveProgress:(float)progress fromObserver:(void const *)observer
{
}

- (void)didReceiveFailureFromObserver:(void const *)observer
{
}

@end

Class<RCTComponentViewProtocol> RNCProgressViewCls(void)
{
  return RNCProgressViewComponentView.class;
}
