////////////////////////////////
// Global Variables Here
let sizeBox = 0
let row = 0
let Colum = 0
let numberOfMatch = 0
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
// const audioWinning = new Audio('./audio/winning.mp3')
// const audioGamesOver = new Audio('./audio/game-over-deep-male-voice.mp3')
clickCards = []
newCards = []
index = []
index2 = 0
let Counter = 0
let WonFlag = true
// let TimmerFlag = false

let arrImg = [
  './images/1.png',
  './images/happy-Dog.png',
  './images/Magic-wand.png',
  './images/orange.png',
  './images/Panana.png',
  './images/star.png',
  './images/treasure-chest.png'
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
    let index = Math.floor(Math.random() * 7)
    newCards[i] = arrImg[index].toString()
    newCards[size + i] = arrImg[index].toString()
    BoxCards[i].innerHTML = `<img src=${arrImg[index]} alt="" />`
    BoxCards[size + i].innerHTML = `<img src=${arrImg[index]} alt="" />`
  }
}
distributionCards(row, Colum)
////////////////////////////////
// Functions For Game Logic Here

const CheckCards = () => {
  let size = clickCards.length - 1
  let lestIndex = index.length - 1
  console.log('size')
  console.log(size)
  if (clickCards[size] === clickCards[size - 1]) {
    //add slound
  } else {
    document.querySelectorAll('img')[index[lestIndex]].style.opacity = ''
    document.querySelectorAll('th')[index[lestIndex]].style.backgroundColor = ''
    document.querySelectorAll('img')[index[lestIndex - 1]].style.opacity = ''
    document.querySelectorAll('th')[
      index[lestIndex - 1]
    ].style.backgroundColor = ''
    clickCards.pop()
    index.pop()
    clickCards.pop()
    index.pop()
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
    console.log(clickCards)
    if (Counter === 2) {
      CheckCards()
      Counter = 0
    }
  }
  console.log(clickCards)
}
for (let i = 0; i < BoxCards.length; i++) {
  BoxCards[i].addEventListener('click', () => FlipTheCards(i))
}
