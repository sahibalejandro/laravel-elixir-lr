# laravel-elixir-lr
The LiveReload extension for Laravel Elixir.

## Install

```javascript
npm install laravel-elixir-lr --save-dev
```

## Usage

Just add the extension to your glup file and mix it! The LiveReload server will watch your
files for changes **only when you run `gulp watch` task.**

```javascript
var elixir = require('laravel-elixir');
require('laravel-elixir-lr');

elixir(function (mix) {
    mix.livereload();
});
```

By default the extension will watch this files:

```javascript
[
    './app/**/*.php',
    './public/**/*.+(css|js|jpg|png)',
    './resources/**/*.php'
]
```
    
But you can specify which files you want to be watched:

```javascript
mix.livereload([
    'my/css/styles.css',
    'my/js/scripts.js'
]);
````
