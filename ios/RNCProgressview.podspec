
Pod::Spec.new do |s|
  s.name         = "RNCProgressview"
  s.version      = "1.0.0"
  s.summary      = "RNCProgressview"
  s.description  = <<-DESC
                  RNCProgressview
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNCProgressview.git", :tag => "master" }
  s.source_files  = "RNCProgressview/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  