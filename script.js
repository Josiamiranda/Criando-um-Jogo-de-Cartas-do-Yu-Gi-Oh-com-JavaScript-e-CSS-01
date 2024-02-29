const drawButton = document.getElementById('draw-button');
const playerField = document.getElementById('player-field');
const opponentField = document.getElementById('opponent-field');

drawButton.addEventListener('click', drawCard);

function drawCard() {
    const card = createCard();
    playerField.appendChild(card);
}

function createCard() {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardName = document.createElement('span');
    cardName.textContent = 'Carta Yu-Gi-Oh!';

    card.appendChild(cardName);

    card.addEventListener('click', () => {
        if (card.parentNode === playerField) {
            moveCard(card, playerField, opponentField);
        } else {
            moveCard(card, opponentField, playerField);
        }
    });

    return card;
}

function moveCard(card, fromField, toField) {
    if (card.parentNode === fromField) {
        fromField.removeChild(card);
        toField.appendChild(card);
    }
}
