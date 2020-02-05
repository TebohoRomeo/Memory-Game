// Author: Tebooh Romeo Lekalo

const cards = document.querySelectorAll('.card');

let hasflipped = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;

  this.classList.add('flip');

  if (!hasflipped) {
    hasflipped = true;
    firstCard = this;

    return;
  } 
    hasflipped = false;
    resetBoard();
    secondCard = this;

    cardMatch();

}

function cardMatch() {
  if (firstCard.dataset.name === secondCard.dataset.name){
    return disableCards();
  } else {

    return notFlipped();
  }
}


function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

}

function notFlipped() {
  lockBoard = false;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 500);
}

function resetBoard(){
    hasflipped, lockBoard = false, false;
    firstCard, secondCard = null, null;
}

(function suffle() {
  cards.forEach(myCards => {
    let randomPosition = Math.floor(Math.random() * 12);
    myCards.style.order = randomPosition;
  });
})();
cards.forEach((myCards) => myCards.addEventListener('click', flipCard));
