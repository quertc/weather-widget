let gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
  return gulp.src(['app/sass/**/*.sass', 'app/sass/**/*.scss'])
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .pipe(gulp.dest('app/css'))
});

gulp.task('watch', () => {
  gulp.watch(['app/sass/**/*.sass', 'app/sass/**/*.scss'], gulp.parallel('sass'));
})

gulp.task('default', gulp.parallel('sass','watch'))