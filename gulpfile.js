const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');

gulp.task('sass', () => gulp.src(['app/sass/**/*.sass', 'app/sass/**/*.scss'])
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({ stream: true })));

gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: 'app',
    },
    notify: false,
  });
});

gulp.task('scripts', () => gulp.src('app/js/**/*.js')
  .pipe(browserSync.reload({ stream: true })));

gulp.task('code', () => gulp.src('app/*.html')
  .pipe(browserSync.reload({ stream: true })));

gulp.task('watch', () => {
  gulp.watch(['app/sass/**/*.sass', 'app/sass/**/*.scss'], gulp.parallel('sass'));
  gulp.watch('app/*.html', gulp.parallel('code'));
  gulp.watch('app/js/**/*.js', gulp.parallel('scripts'));
});

gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));
