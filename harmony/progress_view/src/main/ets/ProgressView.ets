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

import {
  Descriptor,
  RNOHContext,
  ViewBaseProps,
  RNViewBase,
  ComponentBuilderContext,
  ColorSegments,
  convertColorSegmentsToString,
} from 'rnoh'

export const PROGRESS_VIEW_TYPE: string = "RNCProgressView"

export interface ProgressViewProps extends ViewBaseProps {
  progress?: number,
  progressTintColor?: ColorSegments,
  trackTintColor?: ColorSegments,
  // progressImage?: string,
  // trackImage?: string,
  isIndeterminate?: boolean
}

export type RNCProgressViewDescriptor = Descriptor<"RNCProgressView", ProgressViewProps>

@Component
export struct RNCProgressView {
  ctx!: RNOHContext
  tag: number = 0
  @BuilderParam buildCustomComponent: (ComponentBuilderContext: ComponentBuilderContext) => void
  @State descriptor: RNCProgressViewDescriptor = {} as RNCProgressViewDescriptor
  private unregisterDescriptorChangesListener?: () => void = undefined

  aboutToAppear() {
    this.descriptor = this.ctx.descriptorRegistry.getDescriptor<RNCProgressViewDescriptor>(this.tag)
    this.unregisterDescriptorChangesListener = this.ctx.descriptorRegistry.subscribeToDescriptorChanges(this.tag,
      (newDescriptor) => {
        this.descriptor = (newDescriptor as RNCProgressViewDescriptor)
      }
    )
    console.info(`[RNOH]: in RNCProgressView, ${JSON.stringify(this.descriptor.props)}`)
  }

  aboutToDisappear() {
    this.unregisterDescriptorChangesListener?.()
  }

  build() {
    RNViewBase({ ctx: this.ctx, tag: this.tag }) {
      if (this.descriptor.props.isIndeterminate) {
        Progress({ value: 0, type: ProgressType.Ring })
          .color(convertColorSegmentsToString(this.descriptor.props.progressTintColor))
          .backgroundColor(convertColorSegmentsToString(this.descriptor.props.trackTintColor))
          .style({ status: ProgressStatus.LOADING })
          .width("100%")
          .height("100%")
      } else {
        Progress({value: this.descriptor.props.progress ? this.descriptor.props.progress * 100 : 0,type: ProgressType.Linear})
          .color(convertColorSegmentsToString(this.descriptor.props.progressTintColor))
          .backgroundColor(convertColorSegmentsToString(this.descriptor.props.trackTintColor))
          .width("100%")
          .height("100%")
      }
    }
  }
}