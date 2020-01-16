let gulp = require('gulp');
let less = require('gulp-less');
let browserSync = require('browser-sync').create();

function styles() {
    return gulp.src('src/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('src/*.less', styles);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("cv/*.html").on('change', browserSync.reload);
}

exports.styles = styles;
exports.watch = watch;
