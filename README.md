# laravel-elixir-lr
LiveReload extension for Laravel Elixir

## Install

    npm install laravel-elixir-lr --save-dev

## Usage

    var elixir = require('laravel-elixir');
    require('laravel-elixir-lr');
    
    elixir(function (mix) {
        mix.livereload();
    });
    
You can specify which files you want to be watched...

    mix.livereload(['my/css/styles.css', 'my/js/scripts.js']);

By default the extension watch for `['./app/**/*.php', './public/**/*.+(css|js|jpg|png)', './resources/**/*.php']`.

## Notes
The livereload server only starts when you run `gulp watch`
