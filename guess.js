let word = "BANANA";
let hiddenWord = "_".repeat(word.length);
let remainingGuesses = 5;


function updateDisplay() {
    document.getElementById('hidden-word').innerHTML = hiddenWord.split('').join(' ');
    document.getElementById('result').innerHTML = `Remaining Guesses: ${remainingGuesses}`;
}


function makeguess() {
    let guess = document.getElementById('guessinput').value.toUpperCase();
    document.getElementById('guessinput').value = ""; // Clear the input

    if (guess.length === 1 && /^[A-Z]$/.test(guess)) {
        let newHiddenWord = "";
        let correctGuess = false;

        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                newHiddenWord += guess;
                correctGuess = true;
            } else {
                newHiddenWord += hiddenWord[i];
            }
        }

        hiddenWord = newHiddenWord;

        if (!correctGuess) {
            remainingGuesses--;
        }

        if (hiddenWord === word) {
            document.getElementById('result').innerHTML = "Congratulations! You guessed the word!";
        } else if (remainingGuesses === 0) {
            document.getElementById('result').innerHTML = "Game Over! The word was " + word;
        } else {
            updateDisplay();
        }
    } else {
        alert("Please enter a valid letter.");
    }
}

updateDisplay();