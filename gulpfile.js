var gulp = require('gulp');
var livereload = require('gulp-livereload');

var paths = {
    markdown:['./data/**/*.md']
};

gulp.task('default', ['sass']);

gulp.task('markdown', function(done) {
    gulp.src('./data/*')
        .pipe(livereload())
        .on('end', done);
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(paths.markdown, ['markdown']);
});