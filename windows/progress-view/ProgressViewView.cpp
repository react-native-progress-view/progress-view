// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

#include "pch.h"
#include "JSValueXaml.h"
#include "ProgressViewView.h"
#include "ProgressViewView.g.cpp"

namespace winrt {
    using namespace Microsoft::ReactNative;
    using namespace Windows::Foundation;
    using namespace Windows::Foundation::Metadata;
    using namespace Windows::UI;
    using namespace Windows::UI::Xaml;
    using namespace Windows::UI::Xaml::Controls;
    using namespace Windows::UI::Xaml::Input;
    using namespace Windows::UI::Xaml::Media;
    using namespace Windows::UI::Xaml::Media::Imaging;
} // namespace winrt

namespace winrt::progress_view::implementation {

    ProgressViewView::ProgressViewView(winrt::IReactContext const& reactContext) : m_reactContext(reactContext) {
        //Added for readibility, 0/100 is progressbar default
        this->Minimum(0);
        this->Maximum(100);
    }

    void ProgressViewView::UpdateProperties(winrt::IJSValueReader const& reader) {
        auto const& propertyMap = JSValueObject::ReadFrom(reader);

        for (auto const& pair : propertyMap) {
            auto const& propertyName = pair.first;
            auto const& propertyValue = pair.second;

            if (propertyName == "progress") {
                this->Value(propertyValue.AsDouble() * 100);
            }
            else if (propertyName == "progressTintColor") {
                this->Foreground(propertyValue.To<winrt::Brush>());

            }
            else if (propertyName == "trackTintColor") {
                this->Background(propertyValue.To<winrt::Brush>());
            }
            else if (propertyName == "progressViewStyle") {
                if (propertyValue == "bar") {
                    this->Background(SolidColorBrush(ColorHelper::FromArgb(000, 000, 000, 000)));
                }
            }
            else if (propertyName == "isIndeterminate") {
                this->IsIndeterminate(propertyValue.AsBoolean());
            }
            else if (propertyName == "progressImage") {
                if (!propertyValue.IsNull()) {
                    auto imgUriString = propertyValue.AsObject()["uri"].AsString();
                    BitmapImage bitmap = BitmapImage(Uri(to_hstring(imgUriString)));
                    ImageBrush imgB = ImageBrush();
                    imgB.ImageSource(bitmap);

                    this->Foreground(imgB);
                }
            }
            else if (propertyName == "trackImage") {
                if (!propertyValue.IsNull()) {
                    auto imgUriString = propertyValue.AsObject()["uri"].AsString();
                    BitmapImage bitmap = BitmapImage(Uri(to_hstring(imgUriString)));
                    ImageBrush imgB = ImageBrush();
                    imgB.ImageSource(bitmap);

                    this->Background(imgB);
                }
            }
        }
    }
} // namespace winrt::progress_view::implementation