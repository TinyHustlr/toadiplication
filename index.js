let answer = 0
let count1 = 0
let count2 = 0
let count1El = document.querySelector("#count1-el")
let count2El = document.querySelector("#count2-el")
let answerEl = document.querySelector("#answer-el")

function newNumbers() {
let randomNumber = Math.floor(Math.random() * 16) + 1
return randomNumber
}

function newQuestion() {
    count1 = newNumbers()
    count2 = newNumbers()
    count1El.textContent = count1
    count2El.textContent = " X " + count2
    answerEl.textContent = "= " + 0
}


function multiply() {
    let answer = count1 * count2
    console.log(answer)
    answerEl.textContent = "= " + answer
}