var gulp = require('gulp');
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer');

var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');

var watch = require('gulp-watch');
var less = require('gulp-less');

// Read package info
var pkg = require('./package.json');

var files = {
    js: './app.js',
    dest: './build'
}

/**
 * Configure browserify
 */
function getBrowserify(entry) { 
    console.log('Browserify entry', entry);

    return browserify({
        entries: [entry],
        transform: [babelify],
        // These params are for watchify
        cache: {}, 
        packageCache: {}
    })
}

/**
 * Bundel js from browserify
 * If compress is true, then uglify js
 */
function bundleJs(browserify) {
    
    var handleError = function(er){
        console.log(er.message+' on line '+er.line+':'+er.column);
        console.log(er.annotated);
    }

    browserify
        .bundle()
        .on('error', handleError)
        .pipe(source('app.js'))
        .pipe(gulp.dest(files.dest));
}

function bundleLess() {
    gulp.src('./less/app.less')
        .pipe(
            less()
                .on('error', function(er){
                    console.log(er.type+': '+er.message);
                    console.log(er.filename+':'+er.line);
                })
        )
        .pipe(gulp.dest(files.dest));
}

gulp.task('js', function(){
    bundleJs(getBrowserify(files.js));
});

gulp.task('less', function(){
    bundleLess();
});

gulp.task('watchjs', function(){
    var w = watchify(
        getBrowserify(files.js, false)
    );
    
    w.on('update', function(){
        // bundle without compression for faster response
        bundleJs(w, false);
        console.log('js files updated');
    });

    w.bundle().on('data', function() {});
});

gulp.task('watchless', function(){
    watch(['./less/**/*.less'], function(){
        console.log('less files updated');
        bundleLess();
    });
});


gulp.task('default', ['watchjs', 'watchless']);
gulp.task('dist', ['js', 'less']);