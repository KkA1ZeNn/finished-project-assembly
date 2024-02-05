import gulp from "gulp";

// Конфигурация 
import { path } from "../config/path.js";
import { pluginSettings } from "../config/app.js";

// Плагины
import gulpPlumber from "gulp-plumber";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
import webp from "gulp-webp";


// Обработка Изображений
const img = () => {
   return gulp.src(path.img.src)
   .pipe(gulpPlumber())
   .pipe(newer(path.img.dest))
   .pipe(webp())
   .pipe(gulp.dest(path.img.dest))
   .pipe(gulp.src(path.img.src))
   .pipe(newer(path.img.dest))
   .pipe(imagemin(pluginSettings.imagemin))
   .pipe(gulp.dest(path.img.dest));
}

export { img };