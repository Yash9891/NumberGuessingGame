let randomnumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
const userinput = document.querySelector('#userinput');
const submit = document.querySelector('.submit');
const message = document.querySelector('.message');
const prevGuess = document.querySelector('.prevGuess');
const guessremain = document.querySelector('.guessremain');
const restart = document.querySelector('.restart');
const scores=document.querySelector("#score")
const p = document.createElement('p');
let numGuess = 1;
let prevGuesses = [];
let playGame = true;
let score=100;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userinput.value);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Please enter a valid number between 1 and 100.");
        } else {
            prevGuesses.push(guess);
            userinput.value = '';
            prevGuess.innerHTML += `${guess}📍`;
            numGuess++;
            score=score-5;
            guessremain.innerHTML = `${11 - numGuess}`;
            scores.innerHTML=`Score: ${score}`
            


            if (numGuess === 11) {
                message.innerHTML = `<h2>Game over! 😕 The random number was ${randomnumber}</h2>`;
                scores.innerHTML=`Your Score is 0 😬`
                //end the game
                userinput.value = '';
                userinput.setAttribute('disabled', '');
                p.classList.add('button');
                p.innerHTML = `<h2 id='newGame'>Play Again🎮 </h2>`;
                restart.appendChild(p);
                playGame = false;

                  //restart new game
                const newGameButton = document.querySelector('#newGame');
                newGameButton.addEventListener('click', function (e) {
                    randomnumber = Math.floor(Math.random() * 100) + 1;
                    prevGuesses = [];
                    numGuess = 1;
                    score=100;
                    prevGuess.innerHTML = '';
                    guessremain.innerHTML = `${11 - numGuess}`;
                    userinput.removeAttribute('disabled');
                    restart.removeChild(p);
                    playGame = true;
                    message.innerHTML = '';
                    scores.innerHTML=''
                });
            }
             else {
                if (guess < randomnumber) {
                    message.innerHTML = '<h2>Your guess is too small <span>☹️</span></h2>';
                } else if (guess > randomnumber) {
                    message.innerHTML = '<h2>Your guess is too high <span>🙁</span></h2>';
                } else {
                    message.innerHTML = '<h2>Yayyy! Elvissh bayyy You guessed it right <span>😃</span></h2>';
                    //end the game
                    userinput.value = '';
                    userinput.setAttribute('disabled', 'true');
                    p.classList.add('button');
                    p.innerHTML = `<h2 id='newGame'>Play Again🎮</h2>`;
                    restart.appendChild(p);
                    playGame = false;
                     
                  //restart new game
                    const newGameButton = document.querySelector('#newGame');
                    newGameButton.addEventListener('click', function (e) {
                        randomnumber = Math.floor(Math.random() * 100) + 1;
                        prevGuesses = [];
                        numGuess = 1;
                        score=100;
                        prevGuess.innerHTML = '';
                        guessremain.innerHTML = `${11 - numGuess}`;
                        userinput.removeAttribute('disabled');
                        restart.removeChild(p);
                        playGame = true;
                        message.innerHTML = '';
                        scores.innerHTML=''
                    });
                }
            }
        }
    });













































































































































    
}
