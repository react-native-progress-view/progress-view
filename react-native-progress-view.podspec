require 'json'

fabric_enabled = ENV['RCT_NEW_ARCH_ENABLED'] == '1'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name             = 'react-native-progress-view'
  s.version          = package['version']
  s.summary          = package['description']
  s.license          = package['license']

  s.authors          = package['author']
  s.homepage         = package['homepage']
  s.platforms        = { :ios => '11.0', :osx => '10.14' }

  s.source           = { :git => 'https://github.com/react-native-progress-view/progress-view.git', :tag => '#{s.version}' }
  s.ios.source_files = 'ios/**/*.{h,m}'
  s.ios.exclude_files= 'ios/Fabric'
  s.osx.source_files = 'macos/**/*.{h,m}'

  if fabric_enabled
    folly_compiler_flags = '-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1 -Wno-comma -Wno-shorten-64-to-32'

    s.subspec 'common' do |ss|
      ss.source_files         = 'common/cpp/**/*.{cpp,h}'
      ss.header_dir           = 'react/renderer/components/progressview'
      ss.pod_target_xcconfig  = { 'HEADER_SEARCH_PATHS' => '\'$(PODS_TARGET_SRCROOT)/common/cpp\'' }
    end

    s.subspec 'fabric' do |ss|
      s.compiler_flags = folly_compiler_flags + ' -DRCT_NEW_ARCH_ENABLED=1'

      s.pod_target_xcconfig = {
        'HEADER_SEARCH_PATHS' => '\'$(PODS_ROOT)/boost\'',
        'OTHER_CPLUSPLUSFLAGS' => '-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1',
        'CLANG_CXX_LANGUAGE_STANDARD' => 'c++17'
      }

      s.dependency 'RCT-Folly'
      s.dependency 'RCTRequired'
      s.dependency 'RCTTypeSafety'
      s.dependency 'ReactCommon/turbomodule/core'
      ss.dependency 'React-Codegen'
      ss.dependency 'React-RCTFabric'
      ss.dependency 'react-native-progress-view/common'
      ss.source_files         = 'ios/Fabric/**/*.{h,m,mm}'
      ss.pod_target_xcconfig  = { 'HEADER_SEARCH_PATHS' => '\'$(PODS_TARGET_SRCROOT)/common/cpp\'' }
    end
  else
    s.dependency 'React-Core'
  end
end
