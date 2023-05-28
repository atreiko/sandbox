/* РЕКУРСИЯ */

function loopPow(x, n) {
	while (n > 1) {
		x *= x;
		n--;
	}
	return x;
}
console.log(loopPow(2, 3));

function pow(x, n) {
	let result = 1;
	// умножаем result на x n раз в цикле
	for (let i = 1; i <= n; i++) {
		console.log(i, result);
		result *= x;
	}
	return result;
}
console.log(pow(2, 3));

function recursivePow(x, n) {
	// x<sup>n</sup> = x * x<sup>n-1</sup>
	if (n === 1) return x;
	// база рекурсии
	else return x * recursivePow(x, n - 1); // шаг рекурсии,
	// чтобы сделать шаг, с каждым вызовом уменьшаем n на 1, иначе получим бесконечную рекурсию
}

console.log(recursivePow(2, 3));
