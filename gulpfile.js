var cssnano = require('gulp-cssnano');
var clean = require('gulp-clean');
var gulp = require('gulp');
var rename = require('gulp-rename');
var runSequence = require('gulp-sequence').use(gulp);
var sass = require('gulp-sass');

gulp.task('dist-prep', function(){
    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
        'jpicker-1.1.6/css/jPicker-1.1.6.min.css'
        ])
        .pipe(gulp.dest('dist/css'));
    gulp.src([
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'jpicker-1.1.6/jpicker-1.1.6.min.js'
        ])
        .pipe(gulp.dest('dist/js'));
    gulp.src(['node_modules/font-awesome/fonts/*'])
        .pipe(gulp.dest('dist/fonts'));
    gulp.src(['jpicker-1.1.6/images/*.*'])
        .pipe(gulp.dest('dist/images'));
});

gulp.task('clean',function(){
    return gulp.src('dist/css/index.css', {read: false})
        .pipe(clean({force:true}));
});

gulp.task('sass', function() {
    gulp.src(['src/*.scss','!src/sass-variables.scss']) 
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', function () {
    return gulp.watch('src/*.scss', ['watchEvent']);
});

gulp.task('watchEvent', function (callback) {
    runSequence('sass','clean')(callback);
});

gulp.task('default', runSequence('dist-prep','sass','clean','watch'));
