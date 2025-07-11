////////////////////////////////
// Global Variables Here
const modes = document.querySelectorAll('li')
const boxCards = document.querySelectorAll('th')
const audioFilpCard = new Audio('./audio/card-sounds-Filp.mp3')
const audioWinning = new Audio('./audio/winning.mp3')
const audioGamesOver = new Audio('./audio/game-over-deep-male-voice.mp3')
Cards = []
let counter = -1
let wonFlag = true
let timmerFlag = false
////////////////////////////////
// Functions For Game Logic Here

const flipCards = () => {
  for (let i = 0; i < boxCards.length; i++) {
    document.querySelectorAll('img')[i].style.opacity = '1'
    audioFilpCard.play()
  }
}

const flipCardsBack = () => {
  for (let i = 0; i < boxCards.length; i++) {
    document.querySelectorAll('img')[i].style.opacity = '0'
    audioFilpCard.play()
  }
  timmerFlag = true
}

function checkWinner() {
  if (Cards[0] && Cards[3]) {
    document.querySelectorAll('h1')[0].style.backgroundColor = '#2ead2e'
    document.querySelectorAll('h1')[0].innerText = 'You Won!'
    document.querySelectorAll('h1')[1].innerHTML =
      "<a href='./Level-2.html'>Next Level</a>"
    document.querySelector('.Next-Level').style.backgroundColor = '#2ead2e'
    wonFlag = false
    audioWinning.play()
  } else {
    document.querySelectorAll('h1')[0].style.backgroundColor = '#ff0000'
    document.querySelectorAll('h1')[0].innerText = 'You lost Game Over!'
    document.querySelectorAll('h1')[1].innerHTML =
      "<a href='./Level-1.html'>Reset The Game</a>"
    document.querySelectorAll('h1')[1].style.backgroundColor = '#03e203'
    wonFlag = false
    audioGamesOver.play()
  }
}

const flipTheCards = (Number) => {
  if (wonFlag && timmerFlag) {
    document.querySelectorAll('img')[Number].style.opacity = '1'
    document.querySelectorAll('th')[Number].style.backgroundColor = 'green'
    Cards[Number] = true
    counter++
    audioFilpCard.play()
    if (counter === 1) {
      checkWinner()
    }
  }
}

////////////////////////////////
// Event Listeners Here

for (let i = 0; i < boxCards.length; i++) {
  boxCards[i].addEventListener('click', () => flipTheCards(i))
}

modes[1].addEventListener('click', () => {
  modes[1].style.backgroundColor = '#03e203'
  modes[2].style.backgroundColor = '#efff0d'
  setTimeout(flipCards, 1000)
  setTimeout(flipCardsBack, 4000)
})
modes[2].addEventListener('click', () => {
  modes[1].style.backgroundColor = '#efff0d'
  modes[2].style.backgroundColor = '#03e203'
  setTimeout(flipCards, 1000)
  setTimeout(flipCardsBack, 2000)
})

////////////////////////////////
