// Конфигурация 
import  gulp  from "gulp";
import  browserSync  from "browser-sync";
import { path } from "./config/path.js";
import { pluginSettings } from "./config/app.js";

global.$ = {
   gulp: gulp,
   browserSync: browserSync.create(),
   path: path,
   pluginSettings: pluginSettings
}

// Задачи
import { clear } from "./task/clear.js";
import { html } from "./task/html.js";
import { scss } from "./task/scss.js";
import { js } from "./task/js.js";
import { img } from "./task/img.js";
import { font } from "./task/font.js";
import { server } from "./task/server.js";

// Наблюдение 
const watch = () => {
   $.gulp.watch($.path.html.watch, html).on("all", $.browserSync.reload);
   $.gulp.watch($.path.scss.watch, scss).on("all", $.browserSync.reload);
   $.gulp.watch($.path.js.watch, js).on("all", $.browserSync.reload);
   $.gulp.watch($.path.img.watch, img).on("all", $.browserSync.reload);
   $.gulp.watch($.path.font.watch, font).on("all", $.browserSync.reload);
}

// Сборка
const build = $.gulp.series(
   clear,
   $.gulp.parallel(html, scss, js, img, font)
);

const dev = $.gulp.series(
   build,
   $.gulp.parallel(watch, server)
);

export { watch };
export { html };
export default $.pluginSettings.isProd ? build : dev;