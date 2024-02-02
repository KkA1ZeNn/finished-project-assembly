import gulp from "gulp";

// Конфигурация 
import { path } from "../config/path.js";

// Плагины
import gulpPlumber from "gulp-plumber";
import babel from "gulp-babel";
import uglify from "gulp-uglify";


// Обработка JS
const js = () => {
   return gulp.src(path.js.src, { sourcemaps: true })
   .pipe(gulpPlumber())
   .pipe(babel())
   .pipe(uglify())
   .pipe(gulp.dest(path.js.dest, { sourcemaps: true }));
}

export { js };