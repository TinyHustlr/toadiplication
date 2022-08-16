let count1 = 0
let count2 = 0
let answer = 0

let count1El = document.getElementById("count1-el")
let count2El = document.getElementById("count2-el")
let answerEl = document.getElementById("answer-el")

function add1() {
    count1 += + 1
    count1El.textContent = count1
}

function subtract1() {
    count1 += -1
    count1El.textContent = count1
}

function add2() {
    count2 += + 1
    count2El.textContent = count2
}

function subtract2() {
    count2 += -1
    count2El.textContent = count2
}

function multiply() {
    let answer = count1 * count2
    console.log(answer)
    answerEl.textContent = answer
}