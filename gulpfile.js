// Конфигурация 
import  gulp  from "gulp";
import  browserSync  from "browser-sync";
import { path } from "./gulpSettings/config/path.js";
import { pluginSettings } from "./gulpSettings/config/app.js";

global.$ = {
   gulp: gulp,
   browserSync: browserSync.create(),
   path: path,
   pluginSettings: pluginSettings
}

// Задачи
import { clear } from "./gulpSettings/task/clear.js";
import { html } from "./gulpSettings/task/html.js";
import { scss } from "./gulpSettings/task/scss.js";
import { js } from "./gulpSettings/task/js.js";
import { img } from "./gulpSettings/task/img.js";
import { font } from "./gulpSettings/task/font.js";
import { server } from "./gulpSettings/task/server.js";

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
export default $.pluginSettings.isProd ? build : dev;