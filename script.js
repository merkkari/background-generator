var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomHex () {
	var num = Math.floor(Math.random() * 0xFFFFFF <<0);
	var hex = "#" + num.toString(16);
	return hex;
}

function randomGradient() {
	color1.value = randomHex ();
	color2.value = randomHex ();
	setGradient()
}

setGradient()

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomGradient);