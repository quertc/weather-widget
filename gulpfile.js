let gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync  = require('browser-sync');

gulp.task('sass', () => {
  return gulp.src(['app/sass/**/*.sass', 'app/sass/**/*.scss'])
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
  browserSync({
      server: {
          baseDir: 'app'
      },
      notify: false
  });
});

gulp.task('code', function() {
  return gulp.src('app/*.html')
  .pipe(browserSync.reload({ stream: true }));
});

gulp.task('watch', () => {
  gulp.watch(['app/sass/**/*.sass', 'app/sass/**/*.scss'], gulp.parallel('sass'));
  gulp.watch('app/*.html', gulp.parallel('code'));
});

gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));
