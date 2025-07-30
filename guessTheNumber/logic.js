

let randomNumber=parseInt(Math.random()*100+1)

const form=document.querySelector("form")
const userInput=document.querySelector(".userInput")
const submit=document.querySelector("button")

const lowOrHigh=document.querySelector("#lowOrHigh")
const previousGuesses=document.getElementById("previousGuesses")
const remainingGuesses=document.getElementById("remainingGuesses")
const startOver=document.querySelector('.resultParas')

const p=document.createElement("p")

let prevGuess=[]
let numGuess=0

let playGame=true

if(playGame){
    submit.addEventListener("click" , function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess) || guess < 1 || guess > 100){
        alert('Please enter a valid number between 1 and 100!');
    } else {
        prevGuess.push(guess);
        numGuess++;
        displayGuess(guess);

        checkGuess(guess);

        if(numGuess === 10 && guess !== randomNumber){
            displayMessage(`Game Over, Random Number was ${randomNumber}`);
            endGame();
        }
    }
}


function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You Guessed it right`)
        endGame()
    }else if(guess<randomNumber){
        if(numGuess==10){
            displayMessage(`Game Over ,Random Number was ${randomNumber}`)
            endGame()
        }else displayMessage(`Number is too low`)
        
    }else{
        if(numGuess==10){
            displayMessage(`Game Over ,Random Number was ${randomNumber}`)
            endGame()
        }else displayMessage(`Number is too high`)
        
    }
}

function displayGuess(guess){
    userInput.value=''
    previousGuesses.innerHTML+=`${guess} `
    
    console.log(numGuess);
    
    remainingGuesses.innerText=`Remaining Guesses : ${10-numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML=`<h1 id="newGame">Restart Game</h2>`
    startOver.appendChild(p)
    playGame=false
    startNewgame()
}

function startNewgame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100+1)
        prevGuess=[]
        numGuess=0
        previousGuesses.innerHTML=`<span>Previous Guesses :</span>`
        remainingGuesses.innerText=`Remaining Guesses : ${10-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}


