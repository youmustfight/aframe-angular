'use strict';

// Gulp Modules
var babel = require('gulp-babel');
var gulp = require('gulp');
var runSeq = require('run-sequence');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var eslint = require('gulp-eslint');
var livereload = require('gulp-livereload');

// --------------------------------------------------------------

// Development tasks
// --------------------------------------------------------------

// Live reload business.
gulp.task('reload', function () {
    livereload.reload();
});

gulp.task('reloadCSS', function () {
    return gulp.src('./public/style.css').pipe(livereload());
});

gulp.task('buildJS', function () {
    return gulp.src(['./app/js/app.js', './app/js/**/*.js'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(babel())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public'));
});

gulp.task('buildCSS', function () {
    return gulp.src('./app/scss/main.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./public'));
});

// --------------------------------------------------------------

// Production tasks
// --------------------------------------------------------------

gulp.task('buildCSSProduction', function () {
    return gulp.src('./app/scss/main.scss')
        .pipe(sass())
        .pipe(rename('style.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./public'))
});

gulp.task('buildJSProduction', function () {
    return gulp.src(['./app/js/app.js', './app/js/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(babel())
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});

gulp.task('buildProduction', ['buildCSSProduction', 'buildJSProduction']);

// --------------------------------------------------------------

// Composed tasks
// --------------------------------------------------------------

gulp.task('build', function () {
    runSeq(['buildJS', 'buildCSS']);
    // runSeq('buildProduction');
});

gulp.task('default', function () {

    livereload.listen();
    gulp.start('build');

    gulp.watch('app/js/**', function () {
        runSeq('buildJS', 'reload');
    });

    gulp.watch('app/scss/**', function () {
        runSeq('buildCSS', 'reloadCSS');
    });

    // Reload when a template (.html) file changes.
    gulp.watch(['app/**/*.html'], ['reload']);

});
