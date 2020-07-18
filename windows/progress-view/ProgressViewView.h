// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

#pragma once

#include "ProgressViewView.g.h"
#include "winrt/Microsoft.ReactNative.h"
#include "NativeModules.h"

namespace winrt::progress_view::implementation {

    class ProgressViewView : public ProgressViewViewT<ProgressViewView> {
    public:
        ProgressViewView(Microsoft::ReactNative::IReactContext const& reactContext);
        void UpdateProperties(Microsoft::ReactNative::IJSValueReader const& reader);

    private:
        Microsoft::ReactNative::IReactContext m_reactContext{ nullptr };
    };
} // namespace winrt::progress_view::implementation

namespace winrt::progress_view::factory_implementation {
    struct ProgressViewView : ProgressViewViewT<ProgressViewView, implementation::ProgressViewView> {};
} // namespace winrt::progress_view::factory_implementation
