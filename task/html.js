import gulp from "gulp";

// Конфигурация 
import { path } from "../config/path.js";
import { pluginSettings } from "../config/app.js";

// Плагины
import gulpPlumber from "gulp-plumber";
import fileInclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import size from "gulp-size";

// Обработка HTML
const html = () => {
   return gulp.src(path.html.src)
   .pipe(gulpPlumber())
   .pipe(fileInclude())
   .pipe(size())
   .pipe(htmlmin(pluginSettings.htmlmin))
   .pipe(size())
   .pipe(gulp.dest(path.html.dest))
}

export { html };