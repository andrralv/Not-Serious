// list of dependencies used
var gulp = require('gulp'), 
	gsass = require('gulp-compass'), 
	gutil = require('gulp-util'),
	connect = require('gulp-connect');

// path variables
var sassSources = ['SCSS/style.scss'];
var jsSources = ['JS/*.js'];
var htmlSources = ['.'];

// compiles my Sass files
gulp.task('compileSass', function() {
	gulp.src(sassSources)
	.pipe(gsass({
		sass: 'SCSS', 
		image: 'images', 
		style: 'expanded'
	}).on('error', gutil.log))
	.pipe(gulp.dest('CSS'))
	.pipe(connect.reload())
});

// concats my javascript and uses browserify
gulp.task('browseriCat', function() {
	gulp.src(jsSources)
	.pipe(concat('script.js'))
	.pipe(browserify())
	.pipe(gulp.dest('JS'))
});

// live sass compile
// ctrl + c to stop
gulp.task('watch', function() {
	 gulp.watch('SCSS/*.scss', ['compileSass']);
});

// prints a message to the console
gulp.task('gUtil', function() {  
	gutil.log("This is a test. Here's your number: ", 5+3)
});

// live reload
gulp.task('connect', function() {
	connect.server({ 
		root: '.',
		host: 'localhost', 
		hostname: 'rainysounds',
		livereload: true, 
		options: {
			port:80,
			host:'localhost/rainysounds'
		}
	});
});

// live html source
gulp.task('html', function() {
	gulp.src(htmlSources)
	.pipe(connect.reload())
});

