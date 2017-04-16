var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('tsc', function(){
  gulp.src('./server/*.ts').pipe(tsProject()).pipe(gulp.dest('./build'));
});

gulp.task('tsc:w',['tsc'], function() {
  gulp.watch('./server/*.ts',['tsc']);
});
