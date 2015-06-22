require './lib/cubic-bezier'

Gem::Specification.new do |s|
  # Release Specific Information
  s.version = CubicBezier::VERSION
  s.date = CubicBezier::DATE

  # Gem Details
  s.name = "sass-cubic-bezier"
  s.rubyforge_project = "sass-cubic-bezier"
  s.description = %q{A Sass function that extends the CSS cubic-bezier() notation to allow for (predefined) named easing functions}
  s.summary = %q{}
  s.authors = ["Daniel Guillan"]
  s.email = ["daniel.guillan@gmail.com"]
  s.homepage = "https://github.com/danielguillan/sass-cubic-bezier"

  # LICENSE file
  s.licenses = ['MIT']

  # README file
  s.files = ["README.md"]

  # CHANGELOG
  s.files += ["CHANGELOG.md"]

  # Library Files
  s.files += Dir.glob("lib/**/*.*")

  # Sass Files
  s.files += Dir.glob("stylesheets/**/*.*")

  # Gem Bookkeeping
  s.required_rubygems_version = ">= 1.3.6"
  s.rubygems_version = %q{1.3.6}

  # Gems Dependencies
  s.add_dependency("sass",      ["~> 3.4"])
  s.add_dependency("compass",   ["~> 1.0"])
end
