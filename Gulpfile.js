'use strict';

var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');
var requireDir = require('require-dir');
var argv = require('yargs').argv;

requireDir('./gulpTasks', { recurse: true });

gulp.task('basic-sass', function(callback) {
  gulpSequence('sass', ['css-build'], callback);
});

gulp.task('basic-sprite', function(callback) {
  gulpSequence('sass', 'images', 'sprite', ['css-build'], callback);
});

gulp.task('basic-assets', function(callback) {
  gulpSequence('providers', 'sass', 'images', 'sprite', ['css-build'], 'scripts', 'fonts', 'pug', callback);
});

gulp.task('build-assets', function(callback) {
  if (argv.p === true || argv.production === true) {
    gulpSequence('clean-all', ['basic-assets'], 'css-min', 'scripts-min', callback);
  } else {
    gulpSequence('clean-all', ['basic-assets'], callback);
  }
});

// Names Short Tasks
// ======

// Conexão e Watch
gulp.task('cw', function(callback) {
  gulpSequence('build-assets', ['connect'], 'watch', callback);
});

// Assets Build
gulp.task('ba', ['build-assets']);
