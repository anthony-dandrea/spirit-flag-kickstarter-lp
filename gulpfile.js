var gulp     = require('gulp'),
    plugins  = require('gulp-load-plugins')();

// compile scss styling and minfiy
gulp.task('styles', function() {
  gulp.src('src/styles/site.scss')
    .pipe(plugins.sass({
      includePaths: [
        './node_modules/normalize-css',
        './node_modules/breakpoint-sass/stylesheets'
      ]
    }).on('error', plugins.sass.logError))
    .pipe(plugins.cleanCss())
    .pipe(plugins.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

// move scripts to a single file and minfiy
// 3rd party libs added here
gulp.task('scripts', function() {
  gulp.src([
      './node_modules/parallax/source/parallax.js',
      'src/scripts/**/*.js'
    ])
    .pipe(plugins.plumber())
    .pipe(plugins.concat('script.js'))
    .pipe(plugins.uglify())
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'))
});

// compile handlebars partials into html
// minify rendered html
gulp.task('templates', function() {
  gulp.src('src/templates/*.hbs')
    .pipe(plugins.compileHandlebars({}, {
      batch: ['./src/templates/partials']
    }))
    .pipe(plugins.plumber())
    .pipe(plugins.htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(plugins.rename({extname: '.html'}))
    .pipe(gulp.dest('dist'))
});

// optimize images
gulp.task('images', function() {
  gulp.src('src/images/**/*')
    .pipe(plugins.imagemin())
    .pipe(gulp.dest('dist/images'));
});

// start static file dev server
gulp.task('server', plugins.serve({
  root: ['dist'],
  port: 8080
}));

// watch files for change
gulp.task('watch', function() {
  gulp.watch('./src/styles/**', ['styles']);
  gulp.watch('./src/scripts/**', ['scripts']);
  gulp.watch('./src/templates/**', ['templates']);
  gulp.watch('./src/images/**/*', ['images']);
});

// replace paths with something like: {{ 'foo.png' | asset_url }}
gulp.task('paths', function() {
  gulp.src(['dist/index.html'])
    .pipe(plugins.replace(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif|css|js))/g, "{{ '$1' | asset_url }}"))
    .pipe(plugins.replace('images/social/', ''))
    .pipe(plugins.replace('images/', ''))
    .pipe(gulp.dest('dist_shopify/'));
  gulp.src(['dist/site.min.css'])
    .pipe(plugins.replace("fonts/Rachelhand.ttf", "'{{ 'Rachelhand.ttf' | asset_url }}'"))
    .pipe(plugins.replace("fonts/ColorsOfAutumn.ttf", "'{{ 'ColorsOfAutumn.ttf' | asset_url }}'"))
    .pipe(plugins.replace("images/videoborder.png", "videoborder.png"))
    .pipe(plugins.replace("images/starbackground.jpg", "starbackground.jpg"))
    .pipe(gulp.dest('dist_shopify/'));
});

gulp.task('shopfiy', ['paths']);
// default task: handle assets, start server, watch & reload
gulp.task('default', ['styles', 'scripts', 'templates', 'images', 'server', 'watch']);
// build task: just build assets with no watch & server
gulp.task('build', ['styles', 'scripts', 'templates', 'images']);
// shopfiy task: just build assets with no watch & server
