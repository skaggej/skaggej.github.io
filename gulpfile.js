// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');

gulp.task('sass', function () {
    gulp.src(['src/*.scss', '!src/sass-variables.scss'])
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['sass'], function () {
    gulp.src([
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/font-awesome/css/font-awesome.min.css'
        ])
        .pipe(gulp.dest('dist/css'));
    gulp.src([
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/jquery/dist/jquery.min.js'
        ])
        .pipe(gulp.dest('dist/js'));
    gulp.src(['node_modules/font-awesome/fonts/*'])
        .pipe(gulp.dest('dist/fonts'));
    gulp.watch('src/*.scss', ['sass']);
});