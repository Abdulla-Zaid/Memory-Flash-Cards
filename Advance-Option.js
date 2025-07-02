////////////////////////////////
//intil game
let rowColum = prompt('Insert Number of size nxn of cards :[2,3,4,5,6]')
let html = ''
// for (; !(rowColum > 1 && rowColum < 7); ) {
//   let rowColum = prompt('Insert Number of size of cards :[2,3,4,5,6]')
// }
for (let i = 0; i < rowColum; i++) {
  html += '<tr>'
  for (let i = 0; i < rowColum; i++) {
    html += '<th></th>'
  }
  html += '</tr>'
}
document.querySelector('table').innerHTML = html

////////////////////////////////
// Global Variables Here

let arrImg = [
  './images/1.png',
  './images/happy-Dog.png',
  './images/Magic-wand.png',
  './images/orange.png',
  './images/Panana.png',
  './images/star.png',
  './images/treasure-chest.png'
]

const Modes = document.querySelectorAll('li')
const BoxCards = document.querySelectorAll('th')
const audioFilpCard = new Audio('./audio/card-sounds-Filp.mp3')
const audioWinning = new Audio('./audio/winning.mp3')
const audioGamesOver = new Audio('./audio/game-over-deep-male-voice.mp3')
Cards = []
let Counter = 0
let WonFlag = true
let TimmerFlag = false
let test = ''
for (let i = 0; i < rowColum * rowColum; i++) {
  let index = Math.floor(Math.random() * 7)
  BoxCards[i].innerHTML = `<img src=${arrImg[index]} alt="" />`
}

////////////////////////////////
// Functions For Game Logic Here

const FlipCards = () => {
  for (let i = 0; i < BoxCards.length; i++) {
    document.querySelectorAll('img')[i].style.opacity = '1'
    audioFilpCard.play()
  }
}

const FlipCardsBack = () => {
  for (let i = 0; i < BoxCards.length; i++) {
    document.querySelectorAll('img')[i].style.opacity = '0'
    audioFilpCard.play()
  }
  TimmerFlag = true
}

const FlipTheCards = (Number) => {
  if (WonFlag && TimmerFlag) {
    document.querySelectorAll('img')[Number].style.opacity = '1'
    document.querySelectorAll('th')[Number].style.backgroundColor = 'green'
    Cards[Number] = Number
    Counter++
    audioFilpCard.play()
    if (Counter >= rowColum) {
      CheckWinner()
    }
  }
}

////////////////////////////////
// Event Listeners Here

for (let i = 0; i < BoxCards.length; i++) {
  BoxCards[i].addEventListener('click', () => FlipTheCards(i))
}

Modes[0].addEventListener('click', () => {
  Modes[0].style.backgroundColor = '#03e203'
  Modes[1].style.backgroundColor = '#efff0d'
  setTimeout(FlipCards, 1000)
  setTimeout(FlipCardsBack, 4000)
})
Modes[1].addEventListener('click', () => {
  Modes[0].style.backgroundColor = '#efff0d'
  Modes[1].style.backgroundColor = '#03e203'
  setTimeout(FlipCards, 1000)
  setTimeout(FlipCardsBack, 2000)
})
