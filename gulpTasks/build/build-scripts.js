'use strict';

var gulp   = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var path   = require('../paths.js');

gulp.task('scripts-min', ['scripts'], function() {
  return gulp.src(path.to.scripts.destination + '/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(path.to.scripts.destination));
});
