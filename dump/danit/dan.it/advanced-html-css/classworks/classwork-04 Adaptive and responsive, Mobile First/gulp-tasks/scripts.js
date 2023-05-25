const { src, dest } = require("gulp");
const jsMinify = require("gulp-js-minify");

const scripts = () => {
	return src("./src/js/*.js").pipe(jsMinify()).pipe(dest("./dist/js/"));
};

exports.scripts = scripts;
