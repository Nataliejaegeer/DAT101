"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Count from 1 to 10
let countUp = "";
for (let i = 1; i <= 10; i++) {
    countUp += i + " ";
}
printOut(countUp);

// Count from 10 to 1
let countDown = "";
for (let i = 10; i >= 1; i--) {
    countDown += i + " ";
}
printOut(countDown);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Guess a number between 1 and 60
let secretNumber = 45;
let guessedNumber = 0;

while (guessedNumber !== secretNumber) {
    guessedNumber = Math.floor(Math.random() * 60) + 1;
}

printOut("The computer guessed the number: " + guessedNumber);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Guess a number between 1 and 1,000,000 and measure time
let bigSecretNumber = 777777;
let bigGuess = 0;
let guesses = 0;

let startTime = Date.now();

while (bigGuess !== bigSecretNumber) {
    bigGuess = Math.floor(Math.random() * 1000000) + 1;
    guesses++;
}

let endTime = Date.now();
let timeUsed = endTime - startTime;

printOut("Guessed number: " + bigGuess);
printOut("Number of guesses: " + guesses);
printOut("Time used (ms): " + timeUsed);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Find prime numbers between 2 and 199
for (let number = 2; number < 200; number++) {
    let isPrime = true;
    let divider = 2;

    while (divider < number) {
        if (number % divider === 0) {
            isPrime = false;
        }
        divider++;
    }

    if (isPrime) {
        printOut(number);
    }
}

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Nested loops: 9 columns and 7 rows
for (let row = 1; row <= 7; row++) {
    let line = "";

    for (let column = 1; column <= 9; column++) {
        line += "K" + column + "R" + row + " ";
    }

    printOut(line);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Simulate 5 student grades
for (let student = 1; student <= 5; student++) {
    let points = Math.floor(Math.random() * 237);
    let percentage = (points / 236) * 100;
    let grade = "";

    if (percentage >= 89) {
        grade = "A";
    } else if (percentage >= 77) {
        grade = "B";
    } else if (percentage >= 65) {
        grade = "C";
    } else if (percentage >= 53) {
        grade = "D";
    } else if (percentage >= 41) {
        grade = "E";
    } else {
        grade = "F";
    }

    printOut("Student " + student + ": " + points + " points = grade " + grade);
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Dice rolling until all dice are the same (Yahtzee)
let throws = 0;
let d1, d2, d3, d4, d5, d6;

do {
    d1 = Math.floor(Math.random() * 6) + 1;
    d2 = Math.floor(Math.random() * 6) + 1;
    d3 = Math.floor(Math.random() * 6) + 1;
    d4 = Math.floor(Math.random() * 6) + 1;
    d5 = Math.floor(Math.random() * 6) + 1;
    d6 = Math.floor(Math.random() * 6) + 1;

    throws++;
} while (!(d1 === d2 && d2 === d3 && d3 === d4 && d4 === d5 && d5 === d6));

printOut("All dice were equal after " + throws + " throws");

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("No additional task in this part.");

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("No additional task in this part.");

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("No additional task in this part.");

printOut(newLine);
