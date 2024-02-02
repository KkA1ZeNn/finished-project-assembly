import  gulp  from "gulp";
import  browserSync  from "browser-sync";

// Конфигурация 
import { path } from "./config/path.js";

// Задачи
import { clear } from "./task/clear.js";
import { html } from "./task/html.js";
import { scss } from "./task/scss.js";
import { js } from "./task/js.js";

// Плагины

// Сервер
const server = () => {
   browserSync.init({
      server: {
         baseDir: path.root
      }
   });
}

// Наблюдение 
const watch = () => {
   gulp.watch(path.html.watch, html).on("all", browserSync.reload);
   gulp.watch(path.scss.watch, scss).on("all", browserSync.reload);
   gulp.watch(path.js.watch, js).on("all", browserSync.reload);
}

// Сборка
const dev = gulp.series(
   clear,
   gulp.parallel(html, scss, js),
   gulp.parallel(watch, server)
);

export { watch };
export { dev };