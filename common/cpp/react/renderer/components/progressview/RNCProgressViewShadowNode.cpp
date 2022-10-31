#include "RNCProgressViewShadowNode.h"

namespace facebook {
namespace react {

extern const char RNCProgressViewComponentName[] = "RNCProgressView";

void RNCProgressViewShadowNode::setImageManager(
    const SharedImageManager &imageManager) {
  ensureUnsealed();
  imageManager_ = imageManager;
}

void RNCProgressViewShadowNode::updateStateIfNeeded() {
  const auto &newProgressImageSource = getProgressImageSource();
  const auto &newTrackImageSource = getTrackImageSource();

  auto const &currentState = getStateData();

  auto progressImageSource = currentState.getProgressImageSource();
  auto trackImageSource = currentState.getTrackImageSource();

  bool anyChanged = newProgressImageSource != progressImageSource ||
      newTrackImageSource != trackImageSource;

  if (!anyChanged) {
    return;
  }

  // Now we are about to mutate the Shadow Node.
  ensureUnsealed();

  auto state = RNCProgressViewState{
      newProgressImageSource,
      imageManager_->requestImage(newProgressImageSource, getSurfaceId()),
      newTrackImageSource,
      imageManager_->requestImage(newTrackImageSource, getSurfaceId()),
  };
  setStateData(std::move(state));
}

ImageSource RNCProgressViewShadowNode::getProgressImageSource() const {
  return getConcreteProps().progressImage;
}

ImageSource RNCProgressViewShadowNode::getTrackImageSource() const {
  return getConcreteProps().trackImage;
}

#pragma mark - LayoutableShadowNode

void RNCProgressViewShadowNode::layout(LayoutContext layoutContext) {
  updateStateIfNeeded();
}

} // namespace react
} // namespace facebook
