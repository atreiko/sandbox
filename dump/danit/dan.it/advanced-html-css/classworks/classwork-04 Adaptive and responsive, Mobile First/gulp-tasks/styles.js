const { src, dest } = require("gulp");
const sass = require("gulp-sass");

const styles = () => {
	return src("./src/scss/main.scss")
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(dest("./dist/css/"));
};

exports.styles = styles;
