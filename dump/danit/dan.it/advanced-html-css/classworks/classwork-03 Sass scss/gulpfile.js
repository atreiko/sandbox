const { parallel, series } = require("gulp");

const serveTask = require("./gulp-tasks/serve");
// const watchTask = require("./gulp-tasks/watch");
const scriptsTask = require("./gulp-tasks/scripts");
const stylesTask = require("./gulp-tasks/styles");

exports.dev = parallel(
	serveTask.serve,
	series(stylesTask.styles, scriptsTask.scripts)
);
exports.build = series(stylesTask.styles, scriptsTask.scripts);
