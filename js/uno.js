// ----- //
// Cards //
// ----- //

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

    ['zWild'],['zWild'],
    ['zWildDraw4'],['zWildDraw4']
]

// --------- //
// Functions //
// --------- //

function CanPlace () {
    card = this.value.split(',');
    sumCard = this.value.replace(',', '')

    if (card[0] != "zWild" && card[0] != "zWildDraw4") {
        if (card[0] == currCard[0] || card[1] == currCard[1]) {
            document.getElementById('C').remove();
            document.getElementById(sumCard).remove();
            currCard = card;
        
            let cardCurr = CreateCard(currCard);
            cardCurr.id = 'C';
            document.getElementById("currentCard").appendChild(cardCurr);
        }
    } else {
        document.getElementById('C').remove();
        document.getElementById(sumCard).remove();
        currCard = card;
    
        let cardCurr = CreateCard(currCard);
        cardCurr.id = 'C';
        document.getElementById("currentCard").appendChild(cardCurr);
    }
}

function CreateCard (cardName) {
    card = '';
    let img = document.createElement('img')
    for (let i = 0; i < cardName.length; i++) {
        card += cardName[i];
    }
    
    img.id = card;
    img.value = cardName;
    img.src = "images/cards/" + card + ".png";
    return img;
}

function CreateCardButton (img) {
    img.className = "card";
    button = document.createElement("button")
    button.onclick = CanPlace;
    button.value = img.value;
    button.appendChild(img);

    return button;
}

function SortCards () {
    let q = document.querySelectorAll(".card");
    let idList = []; 
    let valueList = []
    for (let i = 0; i < q.length; i++) {
        idList.push(q[i].id);
        valueList.push(q[i].value)
    }
    idList.sort()
    valueList.sort()
    for (let i = 0; i < idList.length; i++){
        document.querySelector("#" + idList[i]).remove()
    }
    for (let i = 0; i < valueList.length; i++) {
        document.getElementById("hand").appendChild(CreateCardButton(CreateCard(valueList[i])))
    }
}

function AddCard () {
    document.getElementById("hand").appendChild(CreateCardButton(CreateCard(cards[Math.floor(Math.random() * 103)])))
    SortCards()
    document.getElementById("cardBank").style.height = document.body.scrollHeight
}

// Sets the starting current card
let currCard = cards[Math.floor(Math.random() * 103)];

let cardCurr = CreateCard(currCard);
cardCurr.id = 'C';
document.getElementById("currentCard").appendChild(cardCurr);

//Updates screen length
document.getElementById("cardBank").style.height = "auto"

let staringScrollHeight = document.body.scrollHeight





