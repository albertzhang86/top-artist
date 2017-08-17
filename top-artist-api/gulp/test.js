const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const path = require('path');
const conf = require('./conf');
const customReporter = require('jasmine-spec-reporter');

gulp.task('test', [], () => {
  const jasmineConfig = {
    reporter: new customReporter()
  };
  return gulp.src(path.join(conf.paths.test, '/**/*.spec.js'))
    .pipe(jasmine(jasmineConfig));
});

gulp.task('test:unit:prep-coverage', () => {

  const istanbulConfig = {
    includeUntested: true
  };

  return gulp.src([path.join(conf.paths.src, '/**/*.js')])
    .pipe(istanbul(istanbulConfig))
    .pipe(istanbul.hookRequire());
});
