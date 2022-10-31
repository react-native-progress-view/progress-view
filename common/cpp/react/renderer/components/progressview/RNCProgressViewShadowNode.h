#pragma once

#include <jsi/jsi.h>
#include <react/renderer/components/progressview/Props.h>
#include <react/renderer/components/view/ConcreteViewShadowNode.h>
#include <react/renderer/components/view/ViewEventEmitter.h>
#include <react/renderer/core/LayoutContext.h>
#include <react/renderer/imagemanager/ImageManager.h>
#include <react/renderer/imagemanager/primitives.h>

#include "RNCProgressViewState.h"

namespace facebook {
namespace react {

JSI_EXPORT extern const char RNCProgressViewComponentName[];

/*
 * `ShadowNode` for <RNCProgressView> component.
 */
class JSI_EXPORT RNCProgressViewShadowNode final
    : public ConcreteViewShadowNode<RNCProgressViewComponentName,
                                    RNCProgressViewProps, ViewEventEmitter,
                                    RNCProgressViewState> {
public:
  using ConcreteViewShadowNode::ConcreteViewShadowNode;

  // Associates a shared `ImageManager` with the node.
  void setImageManager(const SharedImageManager &imageManager);

  static RNCProgressViewState initialStateData(
      ShadowNodeFragment const &fragment,
      ShadowNodeFamilyFragment const &familyFragment,
      ComponentDescriptor const &componentDescriptor) {
    auto imageSource = ImageSource{ImageSource::Type::Invalid};
    return {
        imageSource,
        {imageSource, nullptr},
        imageSource,
        {imageSource, nullptr},
    };
  }

#pragma mark - LayoutableShadowNode

  void layout(LayoutContext layoutContext) override;

private:
  void updateStateIfNeeded();

  ImageSource getProgressImageSource() const;
  ImageSource getTrackImageSource() const;

  SharedImageManager imageManager_;
};

} // namespace react
} // namespace facebook
