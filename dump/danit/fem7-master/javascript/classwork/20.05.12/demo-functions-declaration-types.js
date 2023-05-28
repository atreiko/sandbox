{
	// Function Declaration

	// ведут себя почти как var (но еще и инициализируются сразу)
	// hoisting (инициализация "поднимаются")
	console.log(functionDeclaration());

	// console.log(functionExpression); // cannot access functionExpression before initilization;
	// т.е. переменная functionExpression существует, но не инициализирована

	function functionDeclaration() {
		console.log("I an a function declaration");
	}

	// Function Expression
	const functionExpression = function () {
		console.log("I an a function expression");
	};

	console.log(functionExpression);
}

// FD видна снаружи блока, в отличие от FE
// console.log(functionDeclaration);
console.log(functionExpression); // function expression is not defined;

/* Function names */
// имя функции нужно, чтобы надежно обращаться к самой себе при рекурсивном вызове (т.к. переменная может быть переименована)
{
	// Named function expression (NFE);
	let namedFunctionExpression = function functionExpressionName() {
		console.log("I an a named function expression");
		// console.log(functionExpressionName);
		console.log(namedFunctionExpression);
	};

	console.log(namedFunctionExpression.name);
	// это имя отображается при дебаггинге:
	console.log(namedFunctionExpression);
	// обращение к функции по имени доступно только внутри функции
	// поэтому мы не можем его случайно перезаписать, как переменную, в которую она записана (если бы мы объявили через let)
	// console.log(functionExpressionName); // not defined
	namedFunctionExpression();

	// если имя явно не указано, оно становится равным имени переменной ("контекстное" имя)
	const functionExpression = function () {
		console.log("I an a function expression");
	};
	console.log(functionExpression.name);

	function functionDeclaration2() {
		console.log("I an a function declaration");
	}
	console.log(functionDeclaration2.name);

	// анонимные функции - объявляются "на месте".  используются для callback'ов
	function handleAnswer(answer, handleYes, handleNo, handleNull) {
		if (answer) handleYes();
		else if (answer === null) handleNull();
		else handleNo();

		console.log(handleYes);
	}

	// функция = это значение. мы можем передать ее как аргумент в другую функцию
	const handleNull = function () {
		console.log("Вы отменили выполнение.");
	};

	handleAnswer(
		true,
		// анонимная функция - FE. но при желании можем дописать имя после function
		function yesCallback() {
			console.log("Вы согласились.");
		},
		// анонимная функция - стрелка
		() => console.log("Вы не согласились."),
		handleNull,
	);
	// console.log(yesCallback); // notDefined
}
