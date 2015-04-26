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

function onWatchTask() {
    return gutil.env._[0] == 'watch';
}

