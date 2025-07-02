////////////////////////////////
// Global Variables Here
const Modes = document.querySelectorAll('li')
const BoxCards = document.querySelectorAll('th')
const audioFilpCard = new Audio('./audio/card-sounds-Filp.mp3')
const audioWinning = new Audio('./audio/winning.mp3')
const audioGamesOver = new Audio('./audio/game-over-deep-male-voice.mp3')
Cards = []
let Counter = -1
let WonFlag = true
let TimmerFlag = false
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

function CheckWinner() {
  if (
    (Cards[0] && Cards[3] && Cards[12] && Cards[14]) ||
    (Cards[1] && Cards[8] && Cards[10] && Cards[11])
  ) {
    document.querySelectorAll('h1')[0].style.backgroundColor = '#2ead2e'
    document.querySelectorAll('h1')[0].innerText = 'You Won!'
    document.querySelectorAll('h1')[1].innerHTML =
      "<a href='./Level-1.html'>Go to Level 1</a>"
    document.querySelector('.Next-Level').style.backgroundColor = '#2ead2e'
    WonFlag = false
    audioWinning.play()
  } else {
    document.querySelectorAll('h1')[0].style.backgroundColor = '#ff0000'
    document.querySelectorAll('h1')[0].innerText = 'You lost Game Over!'
    document.querySelectorAll('h1')[1].innerHTML =
      "<a href='./Level-3.html'>Reset The Game</a>"
    document.querySelectorAll('h1')[1].style.backgroundColor = '#03e203'
    WonFlag = false
    audioGamesOver.play()
  }
}

const FlipTheCards = (Number) => {
  if (WonFlag && TimmerFlag) {
    document.querySelectorAll('img')[Number].style.opacity = '1'
    document.querySelectorAll('th')[Number].style.backgroundColor = 'green'
    Cards[Number] = true
    Counter++
    audioFilpCard.play()
    if (Counter === 3) {
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
  setTimeout(FlipCardsBack, 2000)
})

////////////////////////////////
