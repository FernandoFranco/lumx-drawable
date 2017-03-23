'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var jsmin = require('gulp-jsmin');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var embedTemplates = require('gulp-angular-embed-templates');

////////////////////////////////////////////////////////////////////////////////////////////////////

gulp.task('clearJs', function () {
    return gulp.src(['./dist/js', './.tmp/js'], {
            read: false
        })
        .pipe(clean());
});

gulp.task('angular', ['clearJs'], function () {
    return gulp.src('./lxpp/**/*.js')
        .pipe(embedTemplates())
        .pipe(gulp.dest('./.tmp/js'));
});

gulp.task('contactJs', ['angular'], function () {
    return gulp.src('./.tmp/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('lxpp.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('minJs', ['contactJs'], function () {
    return gulp.src('./dist/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(jsmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('clearCss', function () {
    return gulp.src('./dist/css', {
            read: false
        })
        .pipe(clean());
});

gulp.task('sass', ['clearCss'], function () {
    return gulp.src('./stylesheets/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('minCss', ['sass'], function () {
    return gulp.src('./dist/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function () {
    gulp.watch('./stylesheets/**/*.scss', ['minCss']);
    gulp.watch(['./lxpp/**/*.js', './lxpp/**/*.html'], ['minJs']);
});

gulp.task('default', ['watch', 'minJs', 'minCss']);