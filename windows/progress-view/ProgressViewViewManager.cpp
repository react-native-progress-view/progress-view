// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

#include "pch.h"
#include "ProgressViewViewManager.h"
#include "NativeModules.h"
#include "ProgressViewView.h"

namespace winrt {
    using namespace Microsoft::ReactNative;
    using namespace Windows::Foundation::Collections;
    using namespace Windows::UI::Xaml;
}

namespace winrt::progress_view::implementation {

    ProgressViewViewManager::ProgressViewViewManager() {}

    // IViewManager
    winrt::hstring ProgressViewViewManager::Name() noexcept {
        return L"RNCProgressViewWindows";
    }

    winrt::FrameworkElement ProgressViewViewManager::CreateView() noexcept {
        return winrt::progress_view::ProgressViewView(m_reactContext);
    }

    // IViewManagerWithReactContext
    winrt::IReactContext ProgressViewViewManager::ReactContext() noexcept {
        return m_reactContext;
    }

    void ProgressViewViewManager::ReactContext(IReactContext reactContext) noexcept {
        m_reactContext = reactContext;
    }

    // IViewManagerWithNativeProperties
    IMapView<hstring, ViewManagerPropertyType> ProgressViewViewManager::NativeProps() noexcept {
        auto nativeProps = winrt::single_threaded_map<hstring, ViewManagerPropertyType>();
        nativeProps.Insert(L"progress", ViewManagerPropertyType::Number);
        nativeProps.Insert(L"progressTintColor", ViewManagerPropertyType::Color);
        nativeProps.Insert(L"trackTintColor", ViewManagerPropertyType::Color);
        nativeProps.Insert(L"progressViewStyle", ViewManagerPropertyType::String);
        nativeProps.Insert(L"progressImage", ViewManagerPropertyType::Map);
        nativeProps.Insert(L"trackImage", ViewManagerPropertyType::Map);
        nativeProps.Insert(L"isIndeterminate", ViewManagerPropertyType::Boolean);

        return nativeProps.GetView();
    }

    void ProgressViewViewManager::UpdateProperties(
        FrameworkElement const& view,
        IJSValueReader const& propertyMapReader) noexcept {
        if (auto progressView = view.try_as<ProgressViewView>()) {
            progressView->UpdateProperties(propertyMapReader);
        }
    }

    // IViewManagerWithExportedEventTypeConstants
    ConstantProviderDelegate ProgressViewViewManager::ExportedCustomBubblingEventTypeConstants() noexcept {
        return nullptr;
    }

    ConstantProviderDelegate ProgressViewViewManager::ExportedCustomDirectEventTypeConstants() noexcept {
        return [](winrt::IJSValueWriter const& constantWriter) {
            WriteCustomDirectEventTypeConstant(constantWriter, "onChange");
        };
    }

} // namespace winrt::progress_view::implementation