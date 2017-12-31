var numSquares=6;
var colors = generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById('colorDisplay');
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent=pickedColor.toUpperCase();
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i]; 
		} else {
			squares[i].style.display = "none";
		}
		
	}
})

hardBtn.addEventListener("click",function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent=pickedColor.toUpperCase();
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i]; 
			squares[i].style.display = "block";
		}
})

resetButton.addEventListener("click", function() {
	colors = generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor.toUpperCase();
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor="steelblue";
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