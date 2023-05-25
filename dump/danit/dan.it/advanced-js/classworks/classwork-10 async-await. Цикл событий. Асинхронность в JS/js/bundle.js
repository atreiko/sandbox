export default function main() {
	console.log("A");

	setTimeout(function () {
		console.log("wrWrB");
	}, 3);
	setTimeout(function () {
		console.log("wrB");
	}, 2);
	setTimeout(function exec() {
		console.log("B");
	}, 1);
	runWhileLoopForNSeconds(3);
	console.log("C");
}

function runWhileLoopForNSeconds(sec) {
	let start = Date.now(),
		now = start;
	while (now - start < sec * 1000) {
		now = Date.now();
	}
}
