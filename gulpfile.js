var gulp = require('gulp');
 

gulp.task('move_bootstrap',function() {
  gulp.src('./node_modules/bootstrap/dist/js/*.min.js')
  .pipe(gulp.dest('./public/js/lib/'));
  gulp.src('./node_modules/bootstrap/dist/css/*.min.css')
  .pipe(gulp.dest('./public/css/lib/'));
})


gulp.task('default',['move_bootstrap']);
