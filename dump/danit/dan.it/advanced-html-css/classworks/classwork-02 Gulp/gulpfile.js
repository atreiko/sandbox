const { src, dest, parallel, series, watch } = require("gulp");

const serveTask = require("./gulp-tasks/serve");
const watchTask = require("./gulp-tasks/watch");
const scriptsTask = require("./gulp-tasks/scripts");

const build = () => {
	scriptsTask.scripts();
};

exports.default = parallel(serveTask.serve, watchTask.watch, build);
