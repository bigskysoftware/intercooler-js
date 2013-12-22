task :deploy_js do
  version = File.open('VERSION', 'rb') { |file| file.read }.chomp
  puts "Copying src/intercooler.js to www/release/intercooler-#{version}.js"
  FileUtils.cp("src/intercooler.js", "www/release/intercooler-#{version}.js")
  puts "Copying src/intercooler.js to www/release/intercooler-latest.js"
  FileUtils.cp("src/intercooler.js", "www/release/intercooler-latest.js")
end
