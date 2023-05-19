'use strict';

// GENERATION OF A RANDOM NUMBER B/W 1 and 20...

let secretNum = Math.floor(Math.random() * 20) + 1;
console.log(secretNum);
let score = 20;
let highScore = 0;

const gameDescription = document.querySelector('.game--description');
const gameContent = document.querySelector('.game--content');

const checkBtn = document.querySelector('.btn--check');

checkBtn.addEventListener('click', function () {
    const guessInput = Number(document.querySelector('.guess').value);

    if (guessInput > 0 && guessInput <= 20) {

        if (guessInput === secretNum) {
            document.querySelector('.heading-tertiary').textContent = '🎉🎉 Correct Number';
            const symbolQues = document.querySelectorAll('.symbol-span');
            for (let i = 0; i < symbolQues.length; i++) {
                symbolQues[i].textContent = secretNum;
            }
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
            checkBtn.disabled = true;
            checkBtn.classList.add('btn--invalid');

            gameDescription.classList.add('game--won');
            gameContent.classList.add('game--won');

        }

        else if (guessInput > secretNum) {
            if (score > 1) {
                document.querySelector('.heading-tertiary').textContent = '📈📈 Too high!!';
                score--;
                document.querySelector('.score').textContent = score;
            }
        }

        else if (guessInput < secretNum) {
            if (score > 1) {
                document.querySelector('.heading-tertiary').textContent = '📉📉 Too Low!!';
                score--;
                document.querySelector('.score').textContent = score;
            }
        }
    }
    else if (guessInput <= 0 || guessInput > 20) {
        const redHeading = document.querySelector('.heading-tertiary');
        redHeading.textContent = '⛔⛔ Not a valid number';
        redHeading.style.color = '#c62a02';
    }
})

const btnReset = document.querySelector('.btn--new');

btnReset.addEventListener('click', function () {

    secretNum = Math.floor(Math.random() * 20) + 1;
    console.log(secretNum);
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.heading-tertiary').textContent = 'Start guessing...';
    gameDescription.classList.remove('game--won');
    gameContent.classList.remove('game--won');
    checkBtn.disabled = false;
    checkBtn.classList.remove('btn--invalid');
    document.querySelector('.guess').value = '';

    const symbolQues = document.querySelectorAll('.symbol-span');
    for (let i = 0; i < symbolQues.length; i++) {
        symbolQues[i].textContent = '?';
    }
})