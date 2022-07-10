
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

  void adopt(ShadowNode::Unshared const &shadowNode) const override {
    ConcreteComponentDescriptor::adopt(shadowNode);

    auto progressViewhadowNode =
        std::static_pointer_cast<RNCProgressViewShadowNode>(shadowNode);

    // `RNCProgressViewShadowNode` uses `ImageManager` to initiate image loading
    // and communicate the loading state and results to mounting layer.
    progressViewhadowNode->setImageManager(imageManager_);
  }

 private:
  const SharedImageManager imageManager_;
};

} // namespace react
} // namespace facebook