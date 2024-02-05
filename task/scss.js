import gulp from "gulp";

// Конфигурация 
import { path } from "../config/path.js";

// Плагины
import gulpPlumber from "gulp-plumber";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import size from "gulp-size";
import shorthand from "gulp-shorthand";
import CombineMedia  from "gulp-combine-media";
import sass  from "gulp-dart-sass";
import sassGlob  from "gulp-sass-glob";
import webpCss  from "gulp-webp-css";

// Обработка SCSS
const scss = () => {
   return gulp.src(path.scss.src, { sourcemaps: true })
   .pipe(gulpPlumber())
   .pipe(sassGlob())
   .pipe(sass())
   .pipe(webpCss())
   .pipe(autoprefixer())
   .pipe(shorthand())
   .pipe(CombineMedia())
   .pipe(size())
   .pipe(gulp.dest(path.scss.dest, { sourcemaps: true }))
   .pipe(rename({ suffix: ".min" }))
   .pipe(csso())
   .pipe(size())
   .pipe(gulp.dest(path.scss.dest, { sourcemaps: true }));
}

export { scss };