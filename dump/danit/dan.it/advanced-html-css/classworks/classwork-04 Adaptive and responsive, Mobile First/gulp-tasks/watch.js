const { watch } = require("gulp");
const scriptsTask = require("./scripts").scripts;
const stylesTask = require("./styles").styles;
const browserSync = require("./serve").browserSync;

const watcher = () => {
	watch("./index.html", (cb) => {
		browserSync.reload();
		cb();
	});
	watch("./src/js/*.js", (cb) => {
		scriptsTask();
		browserSync.reload();
		cb();
	});
	watch("./src/scss/*.scss", (cb) => {
		stylesTask();
		browserSync.reload();
		cb();
	});
};

exports.watch = watcher;
