var livereload = require('gulp-livereload');
var elixir = require('laravel-elixir');
var gutil = require('gulp-util');
var gulp = require('gulp');

elixir.extend('livereload', function(files) {
    files = files || [
        './app/**/*.php',
        './public/**/*.+(css|js|jpg|png)',
        './resources/**/*.php'
    ];

    if (onWatchTask()) {
        livereload.listen();
        gulp.watch(files).on('change', livereload.changed);
    }

    return this;
});

/**
 * Check if the "watch" task is on the arguments.
 *
 * @returns {boolean}
 */
function onWatchTask() {

    for (var i = 0; i < gutil.env._.length; i++) {
        if (gutil.env._[i] == 'watch') {
            return true;
        }
    }

    return false;
}

