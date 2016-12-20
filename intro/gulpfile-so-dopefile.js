// NOTE: We're not gonna talk about Grunt

var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {
  return gulp.src(['./all-my-js-files/*.js']) // Make sure to keep then in order
    .pipe(concat('concatted-but-not-yet-uglified.js'))
    .pipe(gulp.dest('./all-my-concatted-js-files/'));
});