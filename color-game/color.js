var colors = [
	`rgb(255, 0, 0)`,
	`rgb(255, 255, 0)`,
	`rgb(0, 255, 0)`,
	`rgb(0, 255, 255)`,
	`rgb(0, 0, 255)`,
	`rgb(255, 0, 255)`,
]

var squares = document.querySelectorAll(`.square`);
var colorDisplay = document.querySelector(`#color-display`);
var pickedColor;

pickNewColor();
configureSquares();

function pickNewColor() {
	pickedColor = colors[Math.floor(Math.random()*100%colors.length)];
	colorDisplay.textContent = pickedColor;
}

function configureSquares() {
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener(`click`, function() {
			if (this.style.backgroundColor === pickedColor) {
				console.log(`Yeeeeyyy!`);
			}
		});
	}
}
