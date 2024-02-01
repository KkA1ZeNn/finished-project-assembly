import gulp from "gulp";
import browserSync from "browser-sync";

// Задачи
import { clear } from "./task/clear.js";
import { html } from "./task/html.js";

// Плагины


// Сервер
const server = () => {
   browserSync.init({
      server: {
         baseDir: "./public"
      }
   });
}

// Наблюдение 
const watch = () => {
   gulp.watch("./src/html/**/*.html", html);
}

// Сборка
const dev = gulp.series(
   clear,
   html, 
   gulp.parallel(watch, server)
);

export { watch };
export { dev };