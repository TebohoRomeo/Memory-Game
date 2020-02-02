// Author: Tebooh Romeo Lekalo

const cards = document.querySelectorAll('.card');

let flipped = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard == true) {
    // try changing the lockBoard boolean metgid after this..
    return;
  }
  this.classList.add('flip');

  if (!hasflipped) {
    hasflipped = true; // was true;
    firstCard = this;

    return;
  } else {
    //hasflipped = false;// Changed this one to the reset Board;
    resetBoard();
    secondCard = this;

    cardMatch();
  }
}

function cardMatch() {
  let matched = firstCard.dataset.framework === secondCard.dataset.framework;
  matched ? disableCards() : notflipped();
}


function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function notFlipped() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 500);
}

function resetBoard(){
    [hasflipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function suffle() {
  cards.forEach((myCards) => {
    let randomPosition = Math.floor(Math.random() * 12);
    myCards.getElementsByClassName.order = randomPosition;
  });
})();
cards.forEach((myCards) => myCards.addEventListener('click', flipCard));
