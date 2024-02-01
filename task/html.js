import gulp from "gulp";

// Плагины
import fileInclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import size from "gulp-size";

// Обработка HTML
const html = () => {
   return gulp.src("./src/html/*.html")
   .pipe(fileInclude())
   .pipe(size())
   .pipe(htmlmin({
      collapseWhitespace: true
   }))
   .pipe(size())
   .pipe(gulp.dest("./public"))
   .pipe(browserSync.stream());
}

export { html };