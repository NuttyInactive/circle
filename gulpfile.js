const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');

gulp.task('styles', () => {
  gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css'));
});

gulp.task('default', () => {
  gulp.start('styles');
  gulp.watch('./scss/**/*.scss', ['styles']);
});
