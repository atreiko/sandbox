const { parallel, series } = require("gulp");

const serveTask = require("./gulp-tasks/serve").serve;
const watchTask = require("./gulp-tasks/watch").watch;
const scriptsTask = require("./gulp-tasks/scripts").scripts;
const stylesTask = require("./gulp-tasks/styles").styles;

exports.dev = parallel(serveTask, watchTask, series(stylesTask, scriptsTask));
exports.build = series(stylesTask, scriptsTask);
