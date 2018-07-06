const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const gulpPngquant = require('gulp-pngquant');
const rimraf = require('gulp-rimraf');



gulp.task('default',['clearDest','gif','jpg','jpeg','svg','png'], () =>
        console.log('Done!')
);

gulp.task('clearDest', ()=>
   gulp.src('optimized_images/*')
   .pipe(rimraf())
    );

gulp.task('gif',()=>gulp.src('original_images/*.gif')
    .pipe(imagemin([
    imagemin.gifsicle({interlaced: true})]))
    .pipe(gulp.dest('optimized_images'))
    );

gulp.task('jpg',()=>gulp.src('original_images/*.jpg')
    .pipe(imagemin([
    imagemin.jpegtran({progressive: true})]))
    .pipe(gulp.dest('optimized_images'))
    );

gulp.task('jpeg',()=>gulp.src('original_images/*.jpeg')
    .pipe(imagemin([
    imagemin.jpegtran({progressive: true})]))
    .pipe(gulp.dest('optimized_images'))
    );

gulp.task('svg',()=>gulp.src('original_images/*.jpeg')
    .pipe(imagemin([
   imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })]))
    .pipe(gulp.dest('optimized_images'))
    );

gulp.task('png',()=>gulp.src('original_images/*.png')
     .pipe(gulpPngquant({quality: '60-70'}))
    .pipe(gulp.dest('optimized_images'))
    );


