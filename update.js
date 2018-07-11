var gulp = require('gulp');

gulp.task('copy', function() {

  gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/jquery/dist/jquery.min.map',
  ]).pipe(gulp.dest('common/lib/js'));

});

gulp.task('default', ['copy']);

gulp.start();
