const container = document.querySelector(".container");


function setupGame() {
    for (let i = 0; i < 9; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'images/white_tile.png')
        container.appendChild(card);
    }
    startGame();
}

function startGame() {

}



setupGame();

