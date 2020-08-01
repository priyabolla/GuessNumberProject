const $submitButton = document.getElementById("submit");
//console.log($submitButton);
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");
var guessNumber = Math.round(Math.random() * 100);
var lives = 10;
var message;
$submitButton.onclick = () => {
    let userinput = document.getElementById("number-input").value;
    lives--;
    if (userinput == guessNumber) {
        location.href = "./win.html";
    } else if (lives == 0) {
        location = "./lose.html";
    } else if (userinput > guessNumber) {
        message = `Oops!Your guess is too high,You have ${lives} lives remaining.`;
    } else if (userinput < guessNumber) {
        message = `Oops!Your guess is too low,You have ${lives} lives remaining.`;
    }
    $message.style.display = "inherit";
    $message.innerHTML = message;
    $lives.innerHTML = lives;
}