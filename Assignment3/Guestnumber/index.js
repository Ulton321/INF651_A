
let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess = 0;

while (guess !== randomNumber) {
    guess = parseInt(prompt("Guess the number between 1 and 10:"));

    if (guess < randomNumber) {
        alert("Too low! Try again.");
    } else if (guess > randomNumber) {
        alert("Too high! Try again.");
    } else {
        alert("Congratulations! You guessed the correct number.");
    }
    break;
}

