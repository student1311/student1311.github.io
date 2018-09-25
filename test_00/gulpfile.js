const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const spritesmith = require('gulp.spritesmith');
const rimraf = require('rimraf');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const fontAwesome = require('node-font-awesome');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');





/* -------- Server  -------- */
gulp.task('server', function() {
  browserSync.init({
    server: {
      port: 9000,
      baseDir: "build"
    }
  });

  gulp.watch('build/**/*').on('change', browserSync.reload);
});

/* ------------ Html compile ------------- */
gulp.task('templates:compile', function buildHTML() {
  return gulp.src([
    // 'source/template/index.pug',
    'source/index.html',
    
    ])
    // .pipe(pug({
    //   pretty: true
    // }))
    .pipe(gulp.dest('build'))
});

/* ------------ Styles compile ------------- */
gulp.task('styles:compile', function () {
  return gulp.src('source/styles/main.sass')

    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('build/css'));
});

/*------------- js -------------------*/
gulp.task('js', function () {
  return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/jquery-ui-dist/jquery-ui.js',
        'source/js/fort.js',
        'source/js/main.js'
    ])
      .pipe(sourcemaps.init())
      .pipe(concat('main.min.js'))
      .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('build/js'));
});



/* ------------ Delete ------------- */
gulp.task('clean', function del(cb) {
  return rimraf('build', cb);
});


/* ------------ Watchers ------------- */
gulp.task('watch', function() {
  gulp.watch('source/*.html', gulp.series('templates:compile'));
  gulp.watch('source/styles/**/*.sass', gulp.series('styles:compile'));
  gulp.watch('source/js/**/*.js', gulp.series('js'));
});

gulp.task('default', gulp.series(
  'clean',
  gulp.parallel('templates:compile', 'styles:compile', 'js'),
  gulp.parallel('watch', 'server')
  )
);
