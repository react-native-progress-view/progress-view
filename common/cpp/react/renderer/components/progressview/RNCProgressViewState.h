#pragma once

#include <react/renderer/components/progressview/Props.h>
#include <react/renderer/imagemanager/ImageRequest.h>
#include <react/renderer/imagemanager/primitives.h>

#ifdef ANDROID
#include <folly/dynamic.h>
#include <react/renderer/mapbuffer/MapBuffer.h>
#include <react/renderer/mapbuffer/MapBufferBuilder.h>
#endif

namespace facebook {
namespace react {

/*
 * State for <RNCProgressView> component.
 */
class JSI_EXPORT RNCProgressViewState final {
 public:
  RNCProgressViewState(
      ImageSource const &progressImageSource,
      ImageRequest progressImageRequest,
      ImageSource const &trackImageSource,
      ImageRequest trackImageRequest)
      : progressImageSource_(trackImageSource),
        progressImageRequest_(
            std::make_shared<ImageRequest>(std::move(progressImageRequest))),
        trackImageSource_(trackImageSource),
        trackImageRequest_(
            std::make_shared<ImageRequest>(std::move(trackImageRequest))){};

  RNCProgressViewState() = default;

  ImageSource getProgressImageSource() const;
  ImageRequest const &getProgressImageRequest() const;
  ImageSource getTrackImageSource() const;
  ImageRequest const &getTrackImageRequest() const;

#ifdef ANDROID
  RNCProgressViewState(
      RNCProgressViewState const &previousState,
      folly::dynamic data){};

  /*
   * Empty implementation for Android because it doesn't use this class.
   */
  folly::dynamic getDynamic() const {
    return {};
  };
  MapBuffer getMapBuffer() const {
    return MapBufferBuilder::EMPTY();
  };
#endif

 private:
  ImageSource progressImageSource_;
  std::shared_ptr<ImageRequest> progressImageRequest_;
  ImageSource trackImageSource_;
  std::shared_ptr<ImageRequest> trackImageRequest_;
};

} // namespace react
} // namespace facebook
