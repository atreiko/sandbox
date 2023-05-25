const { watch } = require("gulp");

const scriptsTask = require("./scripts");

const watcher = () => {
	watch("./index.html", (cb) => {
		browserSync.reload();
		cb();
	});
	watch("./src/js/*.js", (cb) => {
		scriptsTask.scripts();
		browserSync.reload();
		cb();
	});
};

exports.watch = watcher;
