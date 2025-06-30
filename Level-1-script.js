////////////////////////////////
// Global Variables Here
const Modes = document.querySelectorAll('li')
const BoxCards = document.querySelectorAll('th')
Cards = []
let Counter = -1
let WonFlag = false
let TimmerFlag = false
let Mode = ''
////////////////////////////////
// Functions For Game Logic Here

const FlipCards = () => {
  for (let i = 0; i < BoxCards.length; i++) {
    document.querySelectorAll('img')[i].style.opacity = '0'
  }
  TimmerFlag = true
}

function CheckWinner() {
  if (Cards[0] && Cards[3]) {
    console.log('You Won!')
    document.querySelectorAll('h1')[0].style.backgroundColor = '#2ead2e'
    document.querySelectorAll('h1')[1].innerText = 'You Won!'
    document.querySelectorAll('a')[0].href = './Level-2.html'
  } else {
    console.log('You Not A Winner')
  }
}

const FlipTheCards = (Number) => {
  document.querySelectorAll('img')[Number].style.opacity = '1'
  document.querySelectorAll('th')[Number].style.backgroundColor = 'green'
  Cards[Number] = true
  Counter++
  if (Counter === 1) {
    CheckWinner()
  }
}

////////////////////////////////
// Event Listeners Here

setTimeout(FlipCards, 2000)

for (let i = 0; i < BoxCards.length && TimmerFlag; i++) {
  BoxCards[i].addEventListener('click', () => FlipTheCards(i))
}

Modes[0].addEventListener('click', () => {
  Mode = 'Esay'
})
Modes[1].addEventListener('click', () => {
  Mode = 'Hard'
})
console.log(TimmerFlag)

////////////////////////////////
