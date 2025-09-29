
#pragma once

#include <react/renderer/core/ConcreteComponentDescriptor.h>
#include "RNCProgressViewShadowNode.h"

namespace facebook {
namespace react {

/*
 * Descriptor for <RNCProgressView> component.
 */
class RNCProgressViewComponentDescriptor final
    : public ConcreteComponentDescriptor<RNCProgressViewShadowNode> {
 public:
  RNCProgressViewComponentDescriptor(
      ComponentDescriptorParameters const &parameters)
      : ConcreteComponentDescriptor(parameters),
        imageManager_(std::make_shared<ImageManager>(contextContainer_)) {}

  void adopt(ShadowNode& shadowNode) const override {
    ConcreteComponentDescriptor::adopt(shadowNode);

      auto& progressViewShadowNode =
          static_cast<RNCProgressViewShadowNode&>(shadowNode);

    // `RNCProgressViewShadowNode` uses `ImageManager` to initiate image loading
    // and communicate the loading state and results to mounting layer.
      progressViewShadowNode.setImageManager(imageManager_);
  }

 private:
  const SharedImageManager imageManager_;
};

} // namespace react
} // namespace facebook