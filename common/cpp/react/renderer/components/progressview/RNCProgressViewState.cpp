#include "RNCProgressViewState.h"
#include <react/renderer/core/LayoutContext.h>

namespace facebook {
namespace react {

ImageSource RNCProgressViewState::getProgressImageSource() const {
  return progressImageSource_;
}

ImageRequest const &RNCProgressViewState::getProgressImageRequest() const {
  return *progressImageRequest_;
}

ImageSource RNCProgressViewState::getTrackImageSource() const {
  return trackImageSource_;
}

ImageRequest const &RNCProgressViewState::getTrackImageRequest() const {
  return *trackImageRequest_;
}

} // namespace react
} // namespace facebook
