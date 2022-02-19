let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let custom = document.getElementById("custom");
console.log(custom);

let customNum = document.getElementById("customNum");
console.log(customNum);

let attempts = document.getElementById("attempts")
let current = document.getElementById("current");
let totals = document.getElementById("totals")
let check = document.getElementById("check");
console.log(check);

let numberGuessed = document.getElementById("numberGuessed");
let output = document.getElementById("output");
let masterNumber = Math.floor(Math.random() * 100);
console.log(masterNumber);

let congrats = document.getElementById("congrats");
let gameOver = document.getElementById("gameover");

let master = document.getElementById("master");

function change() {
    console.log("test change");
    if (custom.checked = true) {
        console.log("custom checked");
        customInput.classList.remove("hidden");
    }
}

let tries = 0;
let counter = 1;

function play() {
    console.log("test play");
    attempts.classList.remove("hidden");
    console.log(customNum.value);
    // console.log(check.value);

    if (custom.checked) {
        tries = Number(customNum.value);
    }
    else if (four.checked) {
        tries = 4;
    }
    else if (five.checked) {
        tries = 5;
    }
    else {
        tries = 6;
    }

    totals.innerHTML = tries;
    current.innerHTML = counter;

    output.innerHTML += `<br>Attempt ${counter} of ${tries} <br>`;

    let numberGuessedValue = Number(numberGuessed.value);
    console.log(numberGuessedValue);

    if (numberGuessedValue < masterNumber && counter < tries) {
        output.innerHTML += `Try a higher number<br>`;
    }
    else if (numberGuessedValue > masterNumber && counter < tries) {
        output.innerHTML += `Try a lower number<br>`;
    }
    else if (numberGuessedValue === masterNumber && counter <= tries) {
        // output.innerHTML += `Congrats!!!`;
        congrats.classList.remove("hidden");
    }

    if (counter > tries) {
        // output.innerHTML = `sorry, game over`;
        gameOver.classList.remove("hidden");
        master.innerHTML = `${masterNumber}`;

    }


    // console.log(tries);
    // console.log(counter);


    counter++;
}

function restart() {
    window.location.reload();
}