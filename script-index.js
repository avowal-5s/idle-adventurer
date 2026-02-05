// Index.html JS

// Index Menu Bar Animation
window.addEventListener('load', () => {
    const menu = document.getElementById('menuBar');
    menu.classList.add('show');
});

// Button Functionality
const newButton = document.querySelector(`#newGame`);
const loadButton = document.querySelector(`#loadGame`);

newButton.addEventListener(`click`, () => {
  window.location.href = `game.html`
});

loadButton.addEventListener(`click`, () => {
  window.location.href = `game.html`
});