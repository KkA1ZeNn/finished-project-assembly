import gulp from "gulp";

// Конфигурация 
import { path } from "../config/path.js";
import { pluginSettings } from "../config/app.js";

// Плагины
import gulpPlumber from "gulp-plumber";
import babel from "gulp-babel";
import webpack from "webpack-stream";


// Обработка JS
const js = () => {
   return gulp.src(path.js.src, { sourcemaps: true })
   .pipe(gulpPlumber())
   .pipe(babel())
   .pipe(webpack(pluginSettings.webpack))
   .pipe(gulp.dest(path.js.dest, { sourcemaps: true }));
}

export { js };