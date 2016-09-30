'use strict';

var gulp    = require('gulp');
var connect = require('gulp-connect');
var pug     = require('gulp-pug');
var path    = require('../paths.js');

gulp.task('pug', function() {
  return gulp.src(path.to.pug.pages)
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(path.to.pug.destination))
    .pipe(connect.reload());
});
