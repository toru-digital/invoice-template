'use strict'

var gulp = require ('gulp')
var livereload = require ('gulp-livereload')

livereload.listen ()

gulp.task ('scss', function () {
	var sass = require ('gulp-sass')
	var watch = require ('gulp-watch')

	return gulp
		.src ("style.scss")
		.pipe (sass ({ outputStyle : 'expanded'}))
		.pipe (gulp.dest (''))
		.pipe (livereload ())
})

gulp.watch ("*.scss", ['scss'])
gulp.task ('default')
