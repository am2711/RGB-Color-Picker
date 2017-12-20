var colors = generateRandomColors(6);

var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById('colorDisplay');
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");


resetButton.addEventListener("click", function() {
	colors = generateRandomColors(6);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor.toUpperCase();
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor="#232323";
	resetButton.textContent="New Colors";
})


colorDisplay.textContent=pickedColor.toUpperCase();

for (var i = 0; i < squares.length; i++) {
	//add initial colors to square
	squares[i].style.background=colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function() {
	//grab color of clicked square
	var clickedColor=this.style.backgroundColor; //using .background gives none repeat scroll 0% 0%
	//compare color to clicked color
	//console.log(clickedColor); //bug check
	if(clickedColor === pickedColor){
		messageDisplay.textContent="Correct";
		changeColors(clickedColor);
		resetButton.textContent = "Play Again?";
		h1.style.backgroundColor = clickedColor;
	}	else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try again";
		}

	});
}


function changeColors(color) {
	// body...
for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = color;
}}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
	//get random color here
	arr.push(randomColor());
	}
	
	return arr;
}
function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb("+r+", "+g+", "+b+")";
}