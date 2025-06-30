////////////////////////////////
// Global Variables Here

const BoxCards = document.querySelectorAll('th')
Cards = []
let Counter = -1
let WonFlag = false
////////////////////////////////
// Functions For Game Logic Here

const FlipCards = () => {
  for (let i = 0; i < BoxCards.length; i++) {
    document.querySelectorAll('img')[i].style.opacity = '0'
  }
}

const CheckWinner = () => {
  if (BoxCards[0].innerText === BoxCards[3].innerText) {
    console.log('You Won!')
  } else {
    console.log('You Not A Winner')
  }
}

const FlipTheCards = (Number) => {
  document.querySelectorAll('img')[Number].style.opacity = '1'
  document.querySelectorAll('th')[Number].style.backgroundColor = 'green'
  //Cards[Number] = document.querySelectorAll('img')[Number].src
  Counter++
  if (Counter === 1) {
    CheckWinner()
  }
}

////////////////////////////////
// Event Listeners Here

setTimeout(FlipCards, 2000)

for (let i = 0; i < BoxCards.length; i++) {
  BoxCards[i].addEventListener('click', () => FlipTheCards(i))
}

////////////////////////////////
