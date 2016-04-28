// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');

gulp.task('sass', function() {
    gulp.src(['css/src/*.scss','!css/src/sass-variables.scss']) 
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(cssnano())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['sass'], function() {
    gulp.watch('css/src/*.scss', ['sass']);
})