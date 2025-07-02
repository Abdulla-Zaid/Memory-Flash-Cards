////////////////////////////////
//intil game
let rowColum = prompt(
  'Insert Number of size nxn for number of cards :[2,3,4,5,6]'
)
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
clickCards = []
newCards = []
index = []
let Counter = 0
let WonFlag = true
let TimmerFlag = false
let test = ''
for (let i = 0; i < rowColum * rowColum; i++) {
  let index = Math.floor(Math.random() * 7)
  newCards[i] = arrImg[index].toString()
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

const won = () => {
  document.querySelectorAll('h1')[0].style.backgroundColor = '#2ead2e'
  document.querySelectorAll('h1')[0].innerText = 'You Won!'
  document.querySelector('.Next-Level').style.backgroundColor = '#2ead2e'
  document.querySelectorAll('h1')[1].innerHTML =
    "<a href='./Advance-Option.html'>Reset The Game</a>"
  document.querySelectorAll('h1')[1].style.backgroundColor = '#03e203'
  WonFlag = false
  audioWinning.play()
}

const lostGame = () => {
  document.querySelectorAll('h1')[0].style.backgroundColor = '#ff0000'
  document.querySelectorAll('h1')[0].innerText = 'You lost Game Over!'
  document.querySelectorAll('h1')[1].innerHTML =
    "<a href='./Advance-Option.html'>Reset The Game</a>"
  document.querySelectorAll('h1')[1].style.backgroundColor = '#03e203'
  WonFlag = false
  audioGamesOver.play()
}

function CheckWinner() {
  console.log('inside function')
  switch (rowColum) {
    case '2':
      if (
        newCards[index[0]] === clickCards[1] &&
        newCards[index[1]] === clickCards[0]
      ) {
        won()
      } else {
        lostGame()
      }
      break
    case '3':
      if (
        newCards[index[0]] === clickCards[1] &&
        newCards[index[1]] === clickCards[0] &&
        newCards[index[1]] === clickCards[2]
      ) {
        won()
      } else {
        lostGame()
      }
      break
    case '4':
      if (
        newCards[index[0]] === clickCards[1] &&
        newCards[index[1]] === clickCards[0] &&
        newCards[index[1]] === clickCards[2] &&
        newCards[index[2]] === clickCards[3]
      ) {
        won()
      } else {
        lostGame()
      }
      break
    case '5':
      if (
        newCards[index[0]] === clickCards[1] &&
        newCards[index[1]] === clickCards[0] &&
        newCards[index[1]] === clickCards[2] &&
        newCards[index[2]] === clickCards[3] &&
        newCards[index[3]] === clickCards[4]
      ) {
        won()
      } else {
        lostGame()
      }
      break
    case '6':
      if (
        newCards[index[0]] === clickCards[1] &&
        newCards[index[1]] === clickCards[0] &&
        newCards[index[1]] === clickCards[2] &&
        newCards[index[2]] === clickCards[3] &&
        newCards[index[3]] === clickCards[4] &&
        newCards[index[4]] === clickCards[5]
      ) {
        won()
      } else {
        lostGame()
      }
      break
  }
}

const FlipTheCards = (Number) => {
  if (WonFlag && TimmerFlag) {
    document.querySelectorAll('img')[Number].style.opacity = '1'
    document.querySelectorAll('th')[Number].style.backgroundColor = 'green'
    clickCards.push(newCards[Number])
    index.push(Number)
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

Modes[1].addEventListener('click', () => {
  Modes[0].style.backgroundColor = '#03e203'
  Modes[1].style.backgroundColor = '#efff0d'
  setTimeout(FlipCards, 1000)
  setTimeout(FlipCardsBack, 4000)
})
Modes[2].addEventListener('click', () => {
  Modes[0].style.backgroundColor = '#efff0d'
  Modes[1].style.backgroundColor = '#03e203'
  setTimeout(FlipCards, 1000)
  setTimeout(FlipCardsBack, 10000)
})
