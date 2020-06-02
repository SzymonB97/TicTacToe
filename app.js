const PLAYER1 = 'X';
const PLAYER2 = 'O';
let currentPlayer = PLAYER1;
let round = 1;
let message = '';

let winCombinations = [
	[0, 1, 2], [3, 4, 5], [6, 7, 8],
	[0, 3, 6], [1, 4, 7], [2, 5, 8],
	[0, 4, 8], [2, 4, 6]
];

let board = [
	'', '', '',
	'', '', '',
	'', '', ''
];

function check() {
	let endGame = false;

	for(let i = 0; i < winCombinations.length; i++) {
		let combination = [];
		let counter1 = 0;
		let counter2 = 0;
		Array.prototype.push.apply(combination, winCombinations[i]);

		for(let j = 0; j < combination.length; j++) {
			if(board[combination[j]] === PLAYER1) {
				counter1++;
			}

			if(board[combination[j]] === PLAYER2) {
				counter2++;
			}

			if((counter1 === 3) || (counter2 === 3)) {
				if(counter1 === 3) {
					message = 'Player 1 wins!';
				} else if(counter2 === 3) {
					message = 'Player 2 wins!';
				}

				endGame = true;
				return true;
			} 

			
		}
	}

	if((!endGame) && (round === 10)) {
		message = 'Draw!';
		return true;
	}

	return false;
}

function set(box) {
	if(box.textContent.length === 0) {
		box.textContent = currentPlayer;

		if(currentPlayer === PLAYER1) {
			board[box.id] = PLAYER1;
			currentPlayer = PLAYER2;
		} else {
			board[box.id] = PLAYER2;
			currentPlayer = PLAYER1;
		}

		round++;
	}

	setTimeout(function() {
		if(check()) {
			if(confirm(message + '\nPlay again?')) {
				location.reload();
			} else {
				location.href = "index.html";
			}
		}
	}, 10);
}