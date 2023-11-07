/**
 * MIT License
 * 
 * Copyright (C) 2021 Huawei Device Co., Ltd.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANT KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

#pragma once
#include <jsi/jsi.h>
#include <react/renderer/components/view/ViewProps.h>
#include <react/renderer/core/PropsParserContext.h>
#include <react/renderer/graphics/Color.h>
#include <react/renderer/imagemanager/primitives.h>

namespace facebook {
namespace react {
enum class RNCProgressViewProgressViewStyle {Default, Bar};
static inline void fromRawValue(const PropsParserContext &context, const RawValue &value, 
                                RNCProgressViewProgressViewStyle &result) {
    auto string = (std::string)value;
    if (string == "default") {
        result = RNCProgressViewProgressViewStyle::Default;
        return;
    }
    if (string == "bar") {
        result = RNCProgressViewProgressViewStyle::Bar;
        return;
    }
    abort();
}
static inline std::string toString(const RNCProgressViewProgressViewStyle &value) {
    switch (value) {
    case RNCProgressViewProgressViewStyle::Default:
        return "default";
    case RNCProgressViewProgressViewStyle::Bar:
        return "bar";
    }
}
class JSI_EXPORT RNCProgressViewProps final : public ViewProps {
public:
    RNCProgressViewProps() = default;
    RNCProgressViewProps(const PropsParserContext &context, const RNCProgressViewProps &sourceProps, 
                         const RawProps &rawProps);
#pragma mark - Props
    RNCProgressViewProgressViewStyle progressViewStyle{RNCProgressViewProgressViewStyle::Default};
    Float progress{0.0};
    SharedColor progressTintColor{};
    SharedColor trackTintColor{};
    ImageSource progressImage{};
    ImageSource trackImage{};
    bool isIndeterminate{false};
    };
} // namespace react
} // namespace facebook