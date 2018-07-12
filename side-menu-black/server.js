var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var path = require('path');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html",
      routes: {
        '/img': path.join(__dirname, '../common/img'),
        '/lib': path.join(__dirname, '../common/lib'),
      },
    },
    open: false,
  });

  gulp.watch("*.scss", ['sass']);
  gulp.watch([
    "*.{html,js}",
  ]).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("side-menu-black.scss")
    .pipe(sass())
    .pipe(gulp.dest("./"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

gulp.start();
