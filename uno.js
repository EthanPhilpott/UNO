let cards = [
    ['Red', 0],['Red', 1],['Red', 2],['Red', 3],
    ['Red', 4],['Red', 5],['Red', 6],['Red', 7],
    ['Red', 8],['Red', 9],['Red', 1],['Red', 2],
    ['Red', 3],['Red', 4],['Red', 5],['Red', 6],
    ['Red', 7],['Red', 8],['Red', 9],
    ['Red', 'Draw2'], ['Red', 'Draw2'], 
    ['Red', 'Skip'], ['Red', 'Skip'],
    ['Red', 'Reverse'], ['Red', 'Reverse'],

    ['Blue', 0],['Blue', 1],['Blue', 2],['Blue', 3],
    ['Blue', 4],['Blue', 5],['Blue', 6],['Blue', 7],
    ['Blue', 8],['Blue', 9],['Blue', 1],['Blue', 2],
    ['Blue', 3],['Blue', 4],['Blue', 5],['Blue', 6],
    ['Blue', 7],['Blue', 8],['Blue', 9],
    ['Blue', 'Draw2'], ['Blue', 'Draw2'], 
    ['Blue', 'Skip'], ['Blue', 'Skip'],
    ['Blue', 'Reverse'], ['Blue', 'Reverse'],

    ['Green', 0],['Green', 1],['Green', 2],['Green', 3],
    ['Green', 4],['Green', 5],['Green', 6],['Green', 7],
    ['Green', 8],['Green', 9],['Green', 1],['Green', 2],
    ['Green', 3],['Green', 4],['Green', 5],['Green', 6],
    ['Green', 7],['Green', 8],['Green', 9],
    ['Green', 'Draw2'], ['Green', 'Draw2'], 
    ['Green', 'Skip'], ['Green', 'Skip'],
    ['Green', 'Reverse'], ['Green', 'Reverse'],

    ['Yellow', 0],['Yellow', 1],['Yellow', 2],['Yellow', 3],
    ['Yellow', 4],['Yellow', 5],['Yellow', 6],['Yellow', 7],
    ['Yellow', 8],['Yellow', 9],['Yellow', 1],['Yellow', 2],
    ['Yellow', 3],['Yellow', 4],['Yellow', 5],['Yellow', 6],
    ['Yellow', 7],['Yellow', 8],['Yellow', 9],
    ['Yellow', 'Draw2'], ['Yellow', 'Draw2'], 
    ['Yellow', 'Skip'], ['Yellow', 'Skip'],
    ['Yellow', 'Reverse'], ['Yellow', 'Reverse'],

    ['Wild'],['Wild'],
    ['WildDraw4'],['WildDraw4']
]

function TempFunction () {
    console.log(this.value)
}

function CreateCard (cardName) {
    card = '';
    let img = document.createElement('img')
    for (let i = 0; i < cardName.length; i++) {
        card += cardName[i];
    }

    img.value = cardName
    img.src = "Images/Cards/" + card + ".png";
    return img
}

function CreateCardButton (img) {
    button = document.createElement("button")
    button.onclick = TempFunction
    button.value = img.value;
    button.appendChild(img)

    return button;
}


document.getElementById("currentCard").appendChild(CreateCard(cards[Math.floor(Math.random() * 103)]))

document.getElementById("hand").appendChild(CreateCardButton(CreateCard(cards[Math.floor(Math.random() * 103)])))
document.getElementById("hand").appendChild(CreateCardButton(CreateCard(cards[Math.floor(Math.random() * 103)])))
document.getElementById("hand").appendChild(CreateCardButton(CreateCard(cards[Math.floor(Math.random() * 103)])))
document.getElementById("hand").appendChild(CreateCardButton(CreateCard(cards[Math.floor(Math.random() * 103)])))
document.getElementById("hand").appendChild(CreateCardButton(CreateCard(cards[Math.floor(Math.random() * 103)])))


