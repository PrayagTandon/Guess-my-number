'use strict';

// GENERATION OF A RANDOM NUMBER B/W 1 and 20...

const secretNum = Math.floor(Math.random() * 20) + 1;
console.log(secretNum);
let score = 20;
let highScore = 0;

const checkBtn = document.querySelector('.btn--check');

checkBtn.addEventListener('click', function () {
    const guessInput = Number(document.querySelector('.guess').value);
    // console.log(guessInput, typeof guessInput);

    if (guessInput > 0) {

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
    else if (guessInput === 0 || guessInput < 0) {
        const redHeading = document.querySelector('.heading-tertiary');
        redHeading.textContent = '⛔⛔ Not a valid number';
        redHeading.style.color = '#c62a02';
    }
})