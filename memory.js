const cards = document.querySelectorAll('.card');

function flipCard(){
    this.classList.toggle('flip');
    // console.log('I was clicked');
    // console.log(this);
}

cards.forEach(myCards => myCards.addEventListener('click', flipCard));












//Making sure the text 'Memory game appears on the html'
//let text = document.createElement('div'); //creates a div
// text.innerHTML = 'memory game';
// document.body.appendChild(text);

// Creating another div for the images
// let images = document.createElement('div');
// document.body.appendChild(images)

// let pic = document.createElement('div');
// document.body.appendChild(pic)

// Looping through all the pictures in th media folder
// And printing each one of them...
// let pics = ''

// for(let i = 1; i <= 8; i++){
//     if(i == 4){
//         pics += '<br>'
//     }
//     pics += '<img src="./media/'+ i +'.png"></img>';
// }


// images.innerHTML = pics;

// Create a function for image flipping..