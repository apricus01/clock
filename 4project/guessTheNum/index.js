const num=(parseInt(Math.random()*100+1));
const submit=document.querySelector('#subt')
const userinput=document.querySelector('#guessField')
const guessslot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const resultparas=document.querySelector('.resultparas')

const p= document.createElement('p')

let totalattempt=[]
let numguess=1
let playgame=true
if(playgame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
      const num=parseFloat (userinput.value)
      console.log(num)
      valideguess(guess )

    })
}

function valideguess(guess){
     
}

function checkguess(guess){
     
}
function displayguess(guess){
     
}

function displaymsz(message){
     
}
function endgame(){
     
}
function newgame(){

}
