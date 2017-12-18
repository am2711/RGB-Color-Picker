var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 0, 255)",
	"rgb(0, 255, 255)",
	"rgb(0, 255, 0)",
	"rgb(0, 0, 255)",
	"rgb(255, 255, 0)"
]

var squares=document.querySelectorAll(".square");
var pickedColor=colors[3];
var colorDisplay=document.getElementById('colorDisplay');

colorDisplay.textContent=pickedColor.toUpperCase();

for (var i = 0; i < squares.length; i++) {
	//add initial colors to square
	squares[i].style.background=colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function() {
	//grab color of clicked square
	var clickedColor=this.style.background;
	//compare color to clicked color
	// if(clickedColor === pickedColor){
	// 	alert("Correct");
	// }	else{
	// 		alert("Wrong");
	// 	}
	console.log(clickedColor); //gives none repeat scroll 0% 0%
	console.log(pickedColor);
	});
}