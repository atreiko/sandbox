const browserSync = require("browser-sync").create();

const serve = (cb) => {
	browserSync.init({
		server: {
			baseDir: "./",
		},
		port: 5500,
		open: true,
		browser: "firefox",
	});

	cb();
};

exports.serve = serve;
