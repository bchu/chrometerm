'use strict';

var request = require('request');

module.exports = function (grunt) {
  var reloadPort = 35729, files;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    develop: {
      server: {
        file: 'app.js'
      }
    },
    nodemon: {
      dev: {
        options: {
          file: 'chrometerm',
          delayTime: 1,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('default', ['nodemon']);
};
