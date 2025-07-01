////////////////////////////////
// Global Variables Here
const Modes = document.querySelectorAll('li')
const BoxCards = document.querySelectorAll('th')
Cards = []
let Counter = -1
let WonFlag = true
let TimmerFlag = false
////////////////////////////////
// Functions For Game Logic Here

const FlipCards = () => {
  for (let i = 0; i < BoxCards.length; i++) {
    document.querySelectorAll('img')[i].style.opacity = '1'
  }
}

const FlipCardsBack = () => {
  for (let i = 0; i < BoxCards.length; i++) {
    document.querySelectorAll('img')[i].style.opacity = '0'
  }
  TimmerFlag = true
}

function CheckWinner() {
  if (
    (Cards[0] && Cards[5] && Cards[6]) ||
    (Cards[2] && Cards[3] && Cards[8])
  ) {
    document.querySelectorAll('h1')[0].style.backgroundColor = '#2ead2e'
    document.querySelectorAll('h1')[0].innerText = 'You Won!'
    document.querySelectorAll('h1')[1].innerHTML =
      "<a href='./Level-3.html'>Next Level</a>"
    document.querySelector('.Next-Level').style.backgroundColor = '#2ead2e'
    WonFlag = false
  } else {
    document.querySelectorAll('h1')[0].style.backgroundColor = '#ff0000'
    document.querySelectorAll('h1')[0].innerText = 'You lost Game Over!'
    document.querySelectorAll('h1')[1].innerHTML =
      "<a href='./Level-2.html'>Reset The Game</a>"
    document.querySelectorAll('h1')[1].style.backgroundColor = '#03e203'
    WonFlag = false
  }
}

const FlipTheCards = (Number) => {
  if (WonFlag && TimmerFlag) {
    document.querySelectorAll('img')[Number].style.opacity = '1'
    document.querySelectorAll('th')[Number].style.backgroundColor = 'green'
    Cards[Number] = true
    Counter++
    if (Counter === 2) {
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

////////////////////////////////
