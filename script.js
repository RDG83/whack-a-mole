const container = document.querySelector(".container");
const startButton = document.querySelector("#startbutton");
const stopButton = document.querySelector("#stopbutton");
const score = document.querySelector("#score");

score.textContent = 0;

const cardArray = [
    {
        name: "blank",
        img: "images/white_tile.png"
    },
    {
        name: "blank",
        img: "images/white_tile.png"
    },
    {
        name: "blank",
        img: "images/white_tile.png"
    },
    {
        name: "blank",
        img: "images/white_tile.png"
    },
    {
        name: "blank",
        img: "images/white_tile.png"
    },
    {
        name: "blank",
        img: "images/white_tile.png"
    },
    {
        name: "blank",
        img: "images/white_tile.png"
    },
    {
        name: "blank",
        img: "images/white_tile.png"
    },
    {
        name: "mole",
        img: "images/mole.png"
    },


]

startButton.addEventListener('click', startGame);
stopButton.addEventListener('click', stopGame);

function startGame() {
    t = setInterval(playGame, 50)
}

function stopGame() {
    clearInterval(t);
}

function setupGame() {
    shuffle(cardArray);
    for (let i = 0; i < 9; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', cardArray[i].img)
        card.addEventListener('click', checkHit);
        container.appendChild(card);
    }
}

function playGame() {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    setupGame();
}
// add id to img to be able to select them
// write continuous function that selects image at random and change it to the mole and then change it back to the original image
// add event listeners to the mole img

function checkHit() {
    cardSrc = this.getAttribute('src')
    if (cardSrc === 'images/mole.png') {
        score.textContent++
    }
}

// Function to randomize an array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

setupGame();

