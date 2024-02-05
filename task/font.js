import gulp from "gulp";

// Конфигурация 
import { path } from "../config/path.js";
import { pluginSettings } from "../config/app.js";

// Плагины
import gulpPlumber from "gulp-plumber";
import newer from "gulp-newer";
import fonter from "gulp-fonter";


// Обработка Шрифтов
const font = () => {
   return gulp.src(path.font.src)
   .pipe(gulpPlumber())
   .pipe(newer(path.font.dest))
   .pipe(fonter(pluginSettings.fonter))
   .pipe(gulp.dest(path.font.dest));
}

export { font };