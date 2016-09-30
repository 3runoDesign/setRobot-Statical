'use strict';

var concat   = require('gulp-concat');
var connect  = require('gulp-connect');
var eslint   = require('gulp-eslint');
var gulp     = require('gulp');

var path     = require('../paths.js');

gulp.task('eslint', function() {
  return gulp.src(path.to.scripts.source)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('scripts', ['eslint'], function() {
  return gulp.src(path.to.scripts.source)
    .pipe(concat('main.js'))
    .pipe(gulp.dest(path.to.scripts.destination))
    .pipe(connect.reload());
});
