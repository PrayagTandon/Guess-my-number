'use strict';

// GENERATION OF A RANDOM NUMBER B/W 1 and 20...

let secretNum = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const gameDescription = document.querySelector('.game--description');
const gameContent = document.querySelector('.game--content');

// REUSABLE FUNCTIONS
const displayMessage = function (message) {
    document.querySelector('.heading-tertiary').textContent = message;
    document.querySelector('.heading-tertiary').style.color = '#1c2541';
}

const symbolContainer = function (quesValue) {
    const symbolQues = document.querySelectorAll('.symbol-span');
    for (let i = 0; i < symbolQues.length; i++) {
        symbolQues[i].textContent = quesValue;
    }
}

const checkBtnBoolean = function (btnBooleanValue) {
    checkBtn.disabled = btnBooleanValue;
}

const classListAdd = function (className) {
    gameDescription.classList.add(className);
    gameContent.classList.add(className);
}

const classListRemove = function (className) {
    gameDescription.classList.remove(className);
    gameContent.classList.remove(className);
}

// CHECK BTN EVENT LISTENER

const checkBtn = document.querySelector('.btn--check');

checkBtn.addEventListener('click', function () {
    const guessInput = Number(document.querySelector('.guess').value);

    if (guessInput > 0 && guessInput <= 20) {

        if (guessInput === secretNum) {
            displayMessage('🎉🎉 Correct Number');
            symbolContainer(secretNum);
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
            checkBtnBoolean(true);
            checkBtn.classList.add('btn--invalid');

            classListAdd('game--won');

        }

        else if (guessInput !== secretNum) {
            if (score > 1) {
                guessInput > secretNum ? displayMessage('📈📈 Too high!!') : displayMessage('📉📉 Too Low!!');
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                displayMessage('☹️☹️ You lost the game!!');
                document.querySelector('.score').textContent = 0;
                checkBtnBoolean(true);
                checkBtn.classList.add('btn--invalid');
                classListAdd('game--lost');
            }
        }
    }
    else if (guessInput <= 0 || guessInput > 20) {
        document.querySelector('.heading-tertiary').textContent = '⛔⛔ Not a valid number!!'
        document.querySelector('.heading-tertiary').style.color = '#e0441b';
    }
})


// RESET BTN EVENT LISTENER

const btnReset = document.querySelector('.btn--new');

btnReset.addEventListener('click', function () {

    secretNum = Math.floor(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.heading-tertiary').style.color = '#1c2541';
    classListRemove('game--won');
    classListRemove('game--lost');
    checkBtnBoolean(false);
    checkBtn.classList.remove('btn--invalid');
    document.querySelector('.guess').value = '';

    symbolContainer('?');
})