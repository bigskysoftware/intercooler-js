module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %>  <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/intercooler.js',
        dest: 'www/release/intercooler-<%= pkg.version %>.min.js'
      }
    },
    "regex-replace": {
      "update-test-ref": { //specify a target with any name
        src: ['www/release/unit-tests-<%= pkg.version %>.html'],
        actions: [
          {
            name: 'lib ref',
            search: "../src/intercooler.js",
            replace: './intercooler-<%= pkg.version %>.js',
            flags: 'g'
          }
        ]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-regex-replace');

  grunt.registerTask('release', "Releases a new version of the library", function () {
    grunt.file.copy("src/intercooler.js", 'www/release/intercooler-' + grunt.config.get('pkg').version + '.js');
    grunt.file.copy("src/intercooler-debugger.js", 'www/release/intercooler-debugger.js');
    grunt.file.copy("test/jquery.mockjax.js", 'www/release/jquery.mockjax.js');
    grunt.file.copy("test/unit_tests.html", 'www/release/unit-tests-' + grunt.config.get('pkg').version + '.html');
    grunt.task.run('uglify');
    grunt.task.run('regex-replace');
  });

  // Default task(s).
  grunt.registerTask('default', ['release']);

};
