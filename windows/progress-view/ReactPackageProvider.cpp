#include "pch.h"
#include "ReactPackageProvider.h"
#include "ReactPackageProvider.g.cpp"
#include "ProgressViewViewManager.h"

using namespace winrt::Microsoft::ReactNative;

namespace winrt::progress_view::implementation {

    void ReactPackageProvider::CreatePackage(IReactPackageBuilder const& packageBuilder) noexcept {
        packageBuilder.AddViewManager(L"ProgressViewViewManager", []() { return winrt::make<ProgressViewViewManager>(); });
    }

} // namespace winrt::progress_view::implementation