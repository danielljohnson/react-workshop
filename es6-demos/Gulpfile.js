var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel', function () {
    return gulp.src('js/**/*.js')
        .pipe(babel())
        .on('error', function(err) {
            console.log(err.message);
            this.emit('end');
        })
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['babel']);

gulp.task('watch', function() {
    gulp.watch('js/**/*.js', ['default']);
});