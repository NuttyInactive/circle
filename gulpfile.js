const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');

gulp.task('styles', () => {
  return gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css'));
});

gulp.task('dev', () => {
  gulp.start('jekyll');
  gulp.watch('./scss/**/*.scss', ['jekyll']);
});

gulp.task('jekyll', ['styles'], () => {
  gulp.src(['./css/*.css']).pipe(gulp.dest('./jekyll/assets/css'));
  gulp.src(['./js/*.js']).pipe(gulp.dest('./jekyll/assets/js'));
});

gulp.task('dist', ['styles'], () => {
  gulp.src(['index.html']).pipe(gulp.dest('./dist'));
  gulp.src(['./css/*.css']).pipe(gulp.dest('./dist/css'));
  gulp.src(['./js/*.js']).pipe(gulp.dest('./dist/js'));
});

gulp.task('default', () => {
  gulp.start('styles');
  gulp.start('jekyll');
  gulp.start('dist');
});
