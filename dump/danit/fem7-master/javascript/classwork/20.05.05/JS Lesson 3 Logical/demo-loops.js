/* WHILE */
(function () {
	let a = 0;
	while (a < 3) {
		// выводит 0, затем 1, затем 2
		console.log(a);
		a++;
	}
	// цикл while(true) будет бесконечным
	// цикл без увеличения i тоже будет бесконечным

	let b = 3;
	while (b) {
		// когда i будет равно 0, условие станет ложным, и цикл остановится
		console.log(b);
		b--;
	}

	// цикл в одну строчку
	let c = 3;
	while (c) console.log(c--);

	// DO WHILE
	// если вы хотите, чтобы тело цикла выполнилось хотя бы один раз, даже если условие окажется ложным
	let i = 0;
	do {
		console.log(i);
		i++;
	} while (i > 10);
})();

/* FOR */
/*
начало
→ условие ? тело -> шаг
→ условие ? тело -> шаг
*/
(function () {
	for (let i = 0; i < 3; i++) console.log(i);
	// так как переменная объявлена внутри цикла и не видна снаружи
	// console.log(i); // будет ошибка

	// ПРОПУСК ЧАСТЕЙ FOR
	let a = 0; // мы уже имеем объявленную i с присвоенным значением, нет необходимости в "начале"
	for (; a < 3; a++) console.log(a);
	console.log(a);

	// можно убрать шаг (перенести в тело); = аналог while
	let b = 0;
	for (; b < 3; ) console.log(b++);
})();

// BREAK / CONTINUE
(function () {
	for (let a = 0; a < 10; a++) {
		if (a === 2) continue;
		if (a === 5) break;
		console.log(a);
	}

	// такой вариант приведет к бесконечному циклу, т.к. b++ не сработает при b === 2, и на следующей итерации b будет снова === 2
	/* 	for (let b = 0; b < 10) {
		if (b === 2) continue;
		b++;
		console.log(b);
	} */

	for (let i = 0; i < 10; i++) {
		// если true, пропустить оставшуюся часть тела цикла
		if (i % 2 === 0) continue;
		console.log(i);
	}
})();

// ВЛОЖЕННЫЕ ЦИКЛЫ
(function () {
	outer: for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			// если пустая строка или Отмена, то выйти из обоих циклов
			if (i === 2 && j === 2) break outer; // (*)
			console.log(i, j);
		}
	}
})();
