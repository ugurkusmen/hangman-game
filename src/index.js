import hangman from './app'
import getPuzzle from './request'

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1 


window.addEventListener('keypress',(e)=>{
    const gues = String.fromCharCode(e.charCode)
    game1.makeGues(gues)
    game1.statu()
    render()
})


const render = ()=>{
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.stop
  
    game1.puzzle.split('').forEach((charcter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = charcter
        puzzleEl.appendChild(letterEl)
    })
    
}

// after end of the round to start a new one
const startGame = async () => {
    const puzzle = await getPuzzle(2)
    const count = Math.ceil(puzzle.split('').length/3)
    game1 = new hangman(puzzle,count)
    render()
}
startGame()

document.querySelector('#reset').addEventListener('click',startGame)

