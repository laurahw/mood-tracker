var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css')
    concat = require('gulp-concat')
    prefix = require('gulp-autoprefixer')
    sass = require('gulp-sass')



gulp.task('styles', function(){
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(concat('App.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('src/'))
});


gulp.task('default', function() {
    gulp.start('styles')
});
