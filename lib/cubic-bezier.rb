require 'compass'
extension_path = File.expand_path(File.join(File.dirname(__FILE__), ".."))
Compass::Frameworks.register('cubic-bezier', :path => extension_path)

module CubicBezier
  VERSION = "0.1.0"
  DATE = "2015-06-22"
end
