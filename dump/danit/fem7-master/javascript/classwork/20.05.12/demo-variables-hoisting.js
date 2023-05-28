// объявления var "высплывают", но не инициализируются, пока до них не дойдет выполнение
console.log(_var);
console.log(_let); // cannot access var before initialization

var _var = 2;
let _let = 1;

{
	let _let2 = 1;
	var _var2 = 1;
}
// var видны снаружи блока в отличие от let/const
// console.log(_let2); // _let2 is not defined
console.log(_var2);

// для ограничения видимости var придумали IIFE
(function () {
	var iife_var = 1;
})();

// console.log(iife_var); // not defined

// var и FD не становятся св-вом globalThis в NodeJS, но становятся в браузезе
// console.log(globalThis._let);
// console.log(globalThis._var);
// console.log(globalThis._var2);

/* Shadowing */

// If a scope declares a variable that has the same name as one in a surrounding scope,
// access to the outer variable is blocked in the inner scope and all scopes nested inside it.
// Changes to the inner variable do not affect the outer variable, which is accessible again after the inner scope is left:
let x = "global";
function f() {
	let x = "local";
	console.log(x); // local
}
f();
console.log(x); // global
// Inside the function f(), the global x is shadowed by a local x.
