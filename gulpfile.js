var gulp = require('gulp');
var ap = require('gulp-autoprefixer');
var bs = require('browser-sync').create();

gulp.task('bs', function() {
  bs.init({
    notify: false,
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('styles', function() {
  gulp.src('css/styles.css')
    .pipe(ap())
    .pipe(gulp.dest('build'))
    .pipe(bs.reload({stream: true}));
});

gulp.task('watch', ['bs'], function() {
  gulp.watch('css/styles.css', ['styles']);
  gulp.watch('*.html').on('change', bs.reload);
});
