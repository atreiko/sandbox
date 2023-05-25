"use strict";

// console.log(window);

// console.log(document);

// const bodyStyle = document.body.style;
// bodyStyle.backgroundColor = "yellow";
// // console.log(bodyStyle);

// document.body.children[0].style.color = "darkblue";
// document.body.childNodes[0].textContent = "first text node";

// const nodes = document.body.childNodes;
// const children = document.body.children;

// nodes.forEach((el, index) => {
// 	console.log(`${index} => ${el}`);
// });

// Array.from(children).forEach((el, index) => {
// 	console.log(`${index} => ${el}`);
// });

// const paragraf = document.getElementsByTagName("p");
// console.log(paragraf);

// const paragraf2 = document.getElementsByClassName("text-block");
// console.log(paragraf2);

// const paragraf3 = document.getElementById("text");
// console.log(paragraf3);
// console.log(document.body.children.text);

// const paragraf4 = document.querySelector(".text-block");
// console.log(paragraf4);

// const paragraf5 = document.querySelectorAll(".text-block");
// console.log(paragraf5);

// paragraf3.style.cssText = "font-size: 28px; color: #000;";

// paragraf3.innerText = "<span>text1</span>";
// paragraf3.innerHTML += "<span>text2</span>";
// paragraf3.insertAdjacentText("afterbegin", "<span>text3</span>");
// paragraf3.insertAdjacentHTML("afterbegin", "<span>text4</span>");
// paragraf3.textContent = "<span>text5</span>";

// const strongElement = document.createElement("strong");
// strongElement.textContent = "created in JS";

// paragraf3.append("<strong>tag 1</strong>");
// paragraf3.prepend(strongElement);
// paragraf3.after(strongElement);
// paragraf3.before("<strong>tag 4</strong>");

// const list = document.getElementById("list");
// console.log(list.innerHTML);
// console.log(list.innerText);
// console.log(list.outerHTML);

// const item = document.getElementsByClassName("list-item");
// console.log(item[0].innerHTML);
// console.log(item[1].innerText);
// console.log(item[2].outerHTML);

// const tag = document.getElementsByTagName("li");
// console.log(tag[0].innerHTML);
// console.log(tag[1].innerText);
// console.log(tag[2].outerHTML);

// const li = document.querySelector("li:nth-child(3)");
// console.log(li.innerHTML);
// console.log(li.innerText);
// console.log(li.outerHTML);

// const li2 = document.querySelectorAll("li");
// console.log(li2[0].innerHTML);
// console.log(li2[1].innerText);
// console.log(li2[2].outerHTML);

// const btnEl = document.querySelector(".remove");
// const btnEl = document.getElementById("buttn");
// console.log(btnEl);

// btnEl.remove();
// document.body.prepend(btnEl);

// btnEl.id = "some-btn";
// btnEl.classList.remove("btn");
// btnEl.classList.add("btn-2");

// btnEl.className = "remove btn-2";

// btnEl.classList.toggle("remove");
// btnEl.classList.replace("btn-2", "btn");

// const btnEl2 = document.querySelector(".btn");

// console.log(btnEl2 === btnEl);

const storeEls = document.querySelectorAll(".store li");

for (let i = 0; i < storeEls.length; i++) {
	let content = storeEls[i].textContent;

	let last = +content.split(": ")[1];
	if (last === 0) {
		storeEls[i].style.color = "red";
		storeEls[i].style.fontWeight = "600";

		// storeEls[i].style.cssText = "color: red; font-weight: 600;"

		storeEls[i].textContent = content.replace("0", "End");
	}
}
