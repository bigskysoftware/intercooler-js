#!/usr/bin/env ruby

unless File.directory? '../../intercoolerjs.github.io'
  puts "ERROR: You must have the github pages project for intercooler checked out as a sibling to the main intercooler project in order to publish the intercooler website."
  return -1
end

puts "Cleaning..."
puts `jekyll clean`
puts "Building..."
puts `jekyll build`
puts "Syncing to github pages repo..."
puts `rsync -av --exclude=".*" _site/  ../../intercoolerjs.github.io/`
puts "Adding changes in git"
puts `git -C ../../intercoolerjs.github.io add -A`
puts "Done!  You must now push intercoolerjs.github.io up to github"
