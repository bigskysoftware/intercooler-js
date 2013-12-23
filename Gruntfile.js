module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %>  <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/intercooler.js',
        dest: 'www/release/intercooler-<%= pkg.version %>-.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('release', "Releases a new version of the library", function () {
    grunt.file.copy("src/intercooler.js", 'www/release/intercooler-' + grunt.config.get('pkg').version + '.js');
    grunt.task.run('uglify');
  });

  // Default task(s).
  grunt.registerTask('default', ['release']);

};