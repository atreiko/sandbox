"use strict";

// const root = document.getElementById('root');

const root = $("#root");

console.log($);
console.log(root);
console.log($("li"));

// $("li").css("color", "#00f");

$("li").css({
	color: "#00f",
	"font-size": "28px",
});

$("li").each(function (indx, element) {
	$(element).text(`index ${indx}`);
});

console.log($("li")[0]);

const firstLi = $("li")[0];

$(firstLi).css("color", "#f0f");

$("li")[1].style.color = "#f0f";

console.log($("ol"));
$("ol").css("fontSize", "30px");

$("li").attr("class", "item");
// $($("li")[1]).attr("class", "item1");

$($("li")[1]).addClass("item1"); // $.removeClass() $.toggleClass()

console.log($($("li")[0]).data("color"));
$($("li")[0]).data("color", "#00f");
console.log($($("li")[0]).data("color"));
console.log($($("li")[0]));
// const classLi = $("li").attr("class");
// console.log(classLi);

console.log($("ul").children(".item1"));
console.log($("ul").children(".item"));

$("ul").children(".item1").next().css("color");

// $("li").click((e) => {
// 	console.log(e);
// });

// $("li").on("click", (e) => {
// 	console.log(e);
// });

$(document).on("click", "li", (e) => {
	$(e.target).fadeOut(600);
});

// ЗАДАЧА №1------------------------------

$(document).on("click", "#btn", (e) => {
	$("ul").toggle("slow");
	$("#btn").toggleClass("closed");
});
