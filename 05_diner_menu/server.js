var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var path = require('path');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: {
      baseDir: "public",
      index: "index.html",
      routes: {
        '/img': path.join(__dirname, '../common/img'),
        '/lib': path.join(__dirname, '../common/lib'),
      },
    },
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
  return gulp.src("scss/diner-menu.scss")
    .pipe(sass())
    .pipe(gulp.dest("public/dist/css"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

gulp.start();
