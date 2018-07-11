var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var path = require('path');

gulp.task('copy', function() {
  gulp.src([
    path.join(__dirname, '../node_modules/jquery/dist/jquery.min.js'),
    path.join(__dirname, '../node_modules/jquery/dist/jquery.min.map'),
  ]).pipe(gulp.dest('public/dist/js'));
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: "./public",
    open: false,
  });

  gulp.watch("scss/*.scss", ['sass']);
  gulp.watch([
    "public/*.html",
    "public/part/*.html",
  ]).on('change', browserSync.reload);
  gulp.watch("public/js/*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("scss/navbar.scss")
    .pipe(sass())
    .pipe(gulp.dest("public/dist/css"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve', 'copy']);

gulp.start();
