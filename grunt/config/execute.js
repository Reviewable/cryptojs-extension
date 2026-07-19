'use strict';

var childProcess = require('child_process');

module.exports = {
  test: {
    call: function(grunt) {
      grunt.file.expand('test/*.js').forEach(function(file) {
        grunt.log.writeln('-> executing ' + file);

        var result = childProcess.spawnSync(process.execPath, [file], {
          stdio: 'inherit'
        });

        if (result.error) {
          grunt.fail.warn(result.error);
        }
        if (result.status) {
          grunt.fail.warn(file + ' exited with code ' + result.status);
        }
      });
    }
  }
};
