let cards = [
    ['Red', 0],['Red', 1],['Red', 2],['Red', 3],
    ['Red', 4],['Red', 5],['Red', 6],['Red', 7],
    ['Red', 8],['Red', 9],['Red', 1],['Red', 2],
    ['Red', 3],['Red', 4],['Red', 5],['Red', 6],
    ['Red', 7],['Red', 8],['Red', 9],
    ['Red', 'Draw2'], ['Red', 'Draw2'], 
    ['Red', 'Skip'], ['Red', 'Skip'],

    ['Blue', 0],['Blue', 1],['Blue', 2],['Blue', 3],
    ['Blue', 4],['Blue', 5],['Blue', 6],['Blue', 7],
    ['Blue', 8],['Blue', 9],['Blue', 1],['Blue', 2],
    ['Blue', 3],['Blue', 4],['Blue', 5],['Blue', 6],
    ['Blue', 7],['Blue', 8],['Blue', 9],
    ['Blue', 'Draw2'], ['Blue', 'Draw2'], 
    ['Blue', 'Skip'], ['Blue', 'Skip'],

    ['Green', 0],['Green', 1],['Green', 2],['Green', 3],
    ['Green', 4],['Green', 5],['Green', 6],['Green', 7],
    ['Green', 8],['Green', 9],['Green', 1],['Green', 2],
    ['Green', 3],['Green', 4],['Green', 5],['Green', 6],
    ['Green', 7],['Green', 8],['Green', 9],
    ['Green', 'Draw2'], ['Green', 'Draw2'], 
    ['Green', 'Skip'], ['Green', 'Skip'],

    ['Yellow', 0],['Yellow', 1],['Yellow', 2],['Yellow', 3],
    ['Yellow', 4],['Yellow', 5],['Yellow', 6],['Yellow', 7],
    ['Yellow', 8],['Yellow', 9],['Yellow', 1],['Yellow', 2],['Yellow', 3],['Yellow', 4],['Yellow', 5],['Yellow', 6],['Yellow', 7],['Yellow', 8],['Yellow', 9],
    ['Yellow', 'Draw2'], ['Yellow', 'Draw2'], 
    ['Yellow', 'Skip'], ['Yellow', 'Skips'],

    ['Wild'],['Wild'],
    ['WildDraw4'],['WildDraw4']
]

let cardInPlay = cards[Math.floor(Math.random() * 108)]
console.log(cardInPlay)

let button = document.createElement('button')
let img = document.createElement('img')
img.src = "Cards/Blue0.png"
button.id = "blueCard"

document.getElementById("cardHand").appendChild(button)
document.getElementById("blueCard").appendChild(img)
