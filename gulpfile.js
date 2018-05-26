var gulp = require('gulp');
var sass = require('gulp-sass'); //sass
var connect= require('gulp-connect'); //gulp-connect插件搭建本地服务
var concat = require('gulp-concat');//合并文件插件gulp-concat
var uglify = require('gulp-uglify');//将合并js文件进行压缩gulp-uglify
var rename = require('gulp-rename');//为了保留前后压缩两个文件  安装gulp-rename插件
var cleanCss = require('gulp-clean-css');//压缩css
var imagemin = require('gulp-imagemin'); //对图片进行压缩

//gulp 基础
/*gulp.src().pipe(gulp.dest()) 
gulp.src()方法可以帮助我们找出将要处理的文件，然后pipe()去处理这些找到的文件。pipe()可以理解为管道，每个管道就可以指定它的功能，最后我们再使用gulp.dest()方法把处理好的文件放到指定的地方。 */

 gulp.task('hello',function(){ //第一个参数是任务名称，第二个参数是任务功能
 	console.log('hello world!');

}) 
gulp.task("sass",function(){
	gulp.src("sass/*.scss").pipe(sass()).pipe(cleanCss()).pipe(gulp.dest("css"));
})
gulp.task('copy-index',function(){ 
	//gulp.src()找到我们的index.html然后使用.pipe()通道 
	//gulp.dest()发布拷贝 
	return gulp.src('html/*.html').pipe(gulp.dest('dist/html'));
 });
 gulp.task('copy-css',function(){ 
	return gulp.src('css/*.css').pipe(gulp.dest('dist/css'));
 });
 gulp.task('copy-js',function(){ 
	return gulp.src('js/*.js').pipe(gulp.dest('dist/js'));
 });
 gulp.task('images',function(){ 
	return gulp.src('imgeas/*.{jpg,png}').pipe(gulp.dest('dist/imgeas'))
 }) 
gulp.task("jsmin",function(){
	gulp.src("js/*.js")
	.pipe(uglify())
	.pipe(gulp.dest("dist/js"));
})
gulp.task('watch',function(){
	gulp.watch('js/*.js',['jsmin']); 
	 gulp.watch('html/*.html',['copy-index']); 
	 gulp.watch('images/*.{jpg,png}',['images']); 
	 gulp.watch('css/*.css',['copy-css']); 
	
	gulp.watch('sass/*.scss',['sass']);
   }) 