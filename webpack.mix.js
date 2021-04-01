const mix = require('laravel-mix');

mix.sass('src/sass/main.scss', 'dist/css')
.options({
  processCssUrls: false,
});

mix.js('src/js/scripts.js', 'dist/js');

mix.browserSync({
    proxy: 'brazos.test',
    notify: false,
    files: [
      'dist/css/**/*.css',
      'index.html'
     ],
  });