const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

for (let i=0; i<SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));


    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
}

function setColor(element) {
    const r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    element.style.backgroundColor = "rgb(" + r + "," + g +"," + b +")";
    element.style.boxShadow = "0 0 2px rgb(" + r + "," + g +"," + b +"), 0 0 10px rgb(" + r + "," + g +"," + b +")";
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}
