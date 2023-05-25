// document.body.style.height = "400vh";

document.getElementById("text").addEventListener("scroll", function (evt) {
	console.log(evt);
	console.log("scrolled: " + document.getElementById("text").scrollY);
});
