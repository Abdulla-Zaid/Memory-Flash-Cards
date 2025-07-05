////////////////////////////////
// Global Variables Here
let sizeBox = 0
let row = 0
let Colum = 0
let lestIndexNotMatch = 0
let sizeNotMatch = 0
let score = 0
let numberOfMatch = 0
let matchEnd = 0
let size = prompt(
  'Enter The Number of Cards :[4,8,16,18,32] default is 6 Cards '
)
switch (size) {
  case '4':
    row = 2
    Colum = 2
    numberOfMatch = 2
    break
  case '8':
    row = 2
    Colum = 4
    numberOfMatch = 4
    break
  case '16':
    row = 4
    Colum = 4
    numberOfMatch = 8
    break
  case '18':
    row = 6
    Colum = 3
    numberOfMatch = 9
    break
  case '32':
    row = 8
    Colum = 4
    numberOfMatch = 16
    break
  default:
    row = 2
    Colum = 3
    numberOfMatch = 3
}

const Modes = document.querySelectorAll('li')
const audioFilpCard = new Audio('./audio/card-sounds-Filp.mp3')

const audioGamesOver = new Audio('./audio/game-over-deep-male-voice.mp3')
clickCards = []
newCards = []
index = []
let Counter = 0

let arrImg = [
  './images/1.png',
  './images/happy-Dog.png',
  './images/Magic-wand.png',
  './images/orange.png',
  './images/Panana.png',
  './images/star.png',
  './images/treasure-chest.png',
  './images/skating.png',
  './images/american-football.png',
  './images/stopwatch.png',
  './images/trophy.png',
  './images/snow-globe.png',
  './images/cake.png',
  './images/santa-claus.png',
  './images/ping-pong.png'
]

////////////////////////////////
//initialization the  game
function createRowColum(row, Colum) {
  let html = ''
  for (let i = 0; i < row; i++) {
    html += '<tr>'
    for (let i = 0; i < Colum; i++) {
      html += '<th></th>'
    }
    html += '</tr>'
  }
  document.querySelector('table').innerHTML = html
}
createRowColum(row, Colum)
const BoxCards = document.querySelectorAll('th')

const distributionCards = (row, Colum) => {
  let size = (row * Colum) / 2
  for (let i = 0; i < size; i++) {
    let index = Math.floor(Math.random() * 15)
    newCards[i] = arrImg[index].toString()
    newCards[size + i] = arrImg[index].toString()
    BoxCards[i].innerHTML = `<img src=${arrImg[index]} alt="" />`
    BoxCards[size + i].innerHTML = `<img src=${arrImg[index]} alt="" />`
  }
}
distributionCards(row, Colum)
////////////////////////////////
// Functions For Game Logic Here

const NotMatch = () => {
  let size = sizeNotMatch
  let lestIndex = lestIndexNotMatch
  document.querySelectorAll('img')[index[lestIndex]].style.opacity = ''
  document.querySelectorAll('th')[index[lestIndex]].style.backgroundColor = ''
  document.querySelectorAll('img')[index[lestIndex - 1]].style.opacity = ''
  document.querySelectorAll('th')[index[lestIndex - 1]].style.backgroundColor =
    ''
  clickCards.pop()
  index.pop()
  clickCards.pop()
  index.pop()
}

const CheckCards = () => {
  let size = clickCards.length - 1
  let lestIndex = index.length - 1
  sizeNotMatch = size
  lestIndexNotMatch = lestIndex
  if (clickCards[size] === clickCards[size - 1]) {
    document.querySelectorAll('th')[
      index[index.length - 1]
    ].style.backgroundColor = 'blue'
    document.querySelectorAll('th')[
      index[index.length - 2]
    ].style.backgroundColor = 'blue'
    score += 10
    matchEnd += 1
    //add slound
  } else {
    score -= 5
    document.querySelectorAll('th')[index[lestIndex]].style.backgroundColor =
      '#ff0000'
    document.querySelectorAll('th')[
      index[lestIndex - 1]
    ].style.backgroundColor = '#ff0000'

    setTimeout(NotMatch, 1000)
  }
}

const FlipTheCards = (Number) => {
  if (Number !== index[index.length - 1]) {
    document.querySelectorAll('img')[Number].style.opacity = '1'
    document.querySelectorAll('th')[Number].style.backgroundColor = 'green'
    clickCards.push(newCards[Number])
    index.push(Number)
    audioFilpCard.play()
    Counter++

    if (Counter === 2) {
      CheckCards()
      Counter = 0
    }
  }
  if (matchEnd === numberOfMatch) {
    document.querySelectorAll('h1')[0].innerText = `Total Score : ` + `${score}`
    //document.querySelectorAll('h1')[1].innerText = ' You Won '
    //document.querySelectorAll('h1')[1].style.backgroundColor = 'green'
    audioGamesOver.play()
    document.querySelectorAll('h1')[1].innerHTML =
      "<a href='./Memory-Flash-Cards.html'>Reset The Game</a>"
    document.querySelectorAll('h1')[1].style.backgroundColor = '#03e203'
  }
}

for (let i = 0; i < BoxCards.length; i++) {
  BoxCards[i].addEventListener('click', () => FlipTheCards(i))
}
