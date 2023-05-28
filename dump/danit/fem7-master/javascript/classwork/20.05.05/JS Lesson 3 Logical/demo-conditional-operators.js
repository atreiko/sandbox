/* CONDITIONAL OPERATORS */

// IF
// никогда не выполнится
if (0) {
	// 0 is falsy
}
// всегда выполнится
if (1) {
	// 0 is falsy
}

// ELSE IF, ELSE

const age = 16;
if (age < 18) {
	console.error("You are not allowed to visit this website");
}
// если используем здесь просто if, оба условия будут просчитаны
// и во втором случае else выполнится, хотя мы этого не хотим. Поэтому во втором случае ставим if else
else if (18 <= age && age <= 22) {
} else {
	console.log("Welcome");
}

// можно ли здесь использовать 18 <= age <= 22?
// нельзя, так как например 18 <= 24 <= 22 будет выполняться по порядку, получим сначала true, потом true преобразуется к 1, а 1 <= 22 это тоже true

/* ТЕРНАРНЫЙ ОПЕРАТОР */

const color = "white";

/* SWITCH */

switch (color) {
	case "orange":
	case "yellow":
	case "green":
		console.log("my favourite!");
		break;

	case "red":
		console.log("so cool!");
		break;

	default:
		console.log(color);
}

// ВАЖНО! если break пропущен,
// все case до следующего break выполнятся автоматически без проверки условия
const value = "a";

switch (value) {
	case "a":
		console.log("а1");
	case "b":
		console.log("b");
	case "a":
		console.log("а2");
		break;
	case "a":
		console.log("а3");
}

// выведет а1 b а2
