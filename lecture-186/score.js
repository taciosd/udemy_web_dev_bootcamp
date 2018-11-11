
var p1Display = document.querySelector(`#p1Display`);
var p2Display = document.querySelector(`#p2Display`);
var button1 = document.querySelector(`#p1`);
var button2 = document.getElementById(`p2`);
var resetButton = document.getElementById(`reset`);
var numberInput = document.querySelector(`input`);
var h2 = document.querySelector(`h2`);

var p1Score = 0;
var p2Score = 0;
var maxScore = 5;

button1.addEventListener(`click`, function() {
	if (p1Score == maxScore || p2Score == maxScore) {
		return;
	}

	p1Score++;
	updateScoreLabel();
});

button2.addEventListener(`click`, function() {
	if (p2Score == maxScore || p1Score == maxScore) {
		return;
	}

	p2Score++;
	updateScoreLabel();
});

resetButton.addEventListener(`click`, function() {
	p1Score = 0;
	p2Score = 0;
	resetStyleWinner();
	updateScoreLabel();
});

function updateScoreLabel() {
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	if (p1Score == maxScore) {
		p1Display.classList.add(`winner`);
	}
	else if (p2Score == maxScore) {
		p2Display.classList.add(`winner`);
	}
};

numberInput.addEventListener(`input`, function() {
	maxScore = this.value;
	resetWinner();
	updateMaxScoreLabel();
});

function updateMaxScoreLabel() {
	h2.textContent = `Playing to: ` + maxScore;
};

function resetWinner() {
	p1Display.classList.remove(`winner`);
	p2Display.classList.remove(`winner`);
	p1Score = 0;
	p2Score = 0;
	updateScoreLabel();
}