var gulp = require('gulp');
var to5 = require('gulp-6to5');
var browserify = require('gulp-browserify');
var del = require('del');

gulp.task('6to5', function () {
    return gulp.src('js/**/*.js')
        .pipe(to5())
        .pipe(gulp.dest('dist'));
});

gulp.task('browserify', ['6to5'], function() {
    return gulp.src('dist/app.js')
        .pipe(browserify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['browserify'], function() {
    del(['dist/components', 'dist/domain']);
});

gulp.task('watch', function() {
    gulp.watch('js/**/*.js', ['default']);
});