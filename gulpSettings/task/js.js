// Плагины
import gulpPlumber from "gulp-plumber";
import babel from "gulp-babel";
import webpack from "webpack-stream";


// Обработка JS
const js = () => {
   return $.gulp.src($.path.js.src, { sourcemaps: $.pluginSettings.isDev })
   .pipe(gulpPlumber())
   .pipe(babel())
   .pipe(webpack($.pluginSettings.webpack))
   .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.pluginSettings.isDev }));
}

export { js };