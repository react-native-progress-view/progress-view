#pragma once
#include "ReactPackageProvider.g.h"

using namespace winrt::Microsoft::ReactNative;

namespace winrt::progress_view::implementation {

    struct ReactPackageProvider : ReactPackageProviderT<ReactPackageProvider> {
        ReactPackageProvider() = default;

        void CreatePackage(IReactPackageBuilder const& packageBuilder) noexcept;
    };

} // namespace winrt::progress_view::implementation

namespace winrt::progress_view::factory_implementation {

    struct ReactPackageProvider : ReactPackageProviderT<ReactPackageProvider, implementation::ReactPackageProvider> {};

} // namespace winrt::progress_view::factory_implementation