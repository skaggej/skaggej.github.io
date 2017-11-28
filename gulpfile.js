// Sass configuration
var cssnano = require('gulp-cssnano');
var del = require('del');
var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

gulp.task('clean',function(){
    return del([
        'dist/css/index.css'
    ])
})

gulp.task('sass', function() {
    gulp.src(['src/*.scss','!src/sass-variables.scss']) 
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(cssnano())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('default', ['sass','clean'], function () {
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
    gulp.watch('src/*.scss', ['sass','clean']);
});
