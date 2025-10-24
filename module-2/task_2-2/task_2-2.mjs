"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* 2 + 3 * 2 - 4 * 6 = -34*/

const part1 = 2 + 3 * (2 - 4) * 6;

printOut("Answer: " + part1);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Convert 25 metres and 34 centimetres to inches. An inch is 25.4 millimetres (maximum 2 decimal places in
the answer)*/
const metres = 25;
const centimetres = 34;
const totalCentimetres = (metres * 100) + centimetres; // Convert metres to centimetres and add
const totalMillimetres = totalCentimetres * 10; // Convert centimetres to millimetres
const inches = totalMillimetres / 25.4; // Convert millimetres to inches
const roundedInches = inches.toFixed(2); // Round to 2 decimal places 
printOut("Answer: " + roundedInches + " inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes. (Not allowed to use date objects). The
task must be solved with primitives.*/ 
const days = 3;
const hours = 12;
const minutes = 14;
const seconds = 45;

const totalMinutes = (days * 24 * 60) + (hours * 60) + minutes + (seconds / 60);

printOut("Answer: " + totalMinutes + " minutes");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Convert 6,322.52 minutes to days, hours, minutes, and seconds. (Not allowed to use date objects). The
task must be solved with primitives.*/
const totalMinutesPart4 = 6322.52;

const daysPart4 = Math.floor(totalMinutesPart4 / (24 * 60));
const hoursPart4 = Math.floor((totalMinutesPart4 % (24 * 60)) / 60);
const minutesPart4 = Math.floor(totalMinutesPart4 % 60);
const secondsPart4 = Math.round((totalMinutesPart4 % 1) * 60);

printOut("Answer: " + daysPart4 + " days, " + hoursPart4 + " hours, " + minutesPart4 + " minutes, " + secondsPart4 + " seconds");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Convert 54 dollars to Norwegian kroner, and print the price for both:
NOK → USD and USD → NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole "Kroner" and whole "dollars".*/
const usdToNokRate = 76 / 8.6;
const nokToUsdRate = 8.6 / 76;

const dollars = 54;
const kroner = Math.round(dollars * usdToNokRate);
const dollarsFromKroner = Math.round(kroner * nokToUsdRate);

printOut("54 dollars is approximately " + kroner + " NOK");
printOut("And " + kroner + " NOK is approximately " + dollarsFromKroner + " dollars");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Create a variable that contains the following text:
"There is much between heaven and earth that we do not understand."
● Print the number of characters in the text.
● Print the character at position number 19.
● Print the characters starting at position number 35 and 8 characters forward.
Print the index at which "earth" starts in the text*/ 
const text = "There is much between heaven and earth that we do not understand.";

const numberOfCharacters = text.length;
const charAt19 = text.charAt(19);
const substring35to43 = text.substring(35, 43);
const indexOfEarth = text.indexOf("earth");

printOut("Number of characters: " + numberOfCharacters);
printOut("Character at position 19: " + charAt19);
printOut("Characters from position 35 to 43: " + substring35to43);
printOut("Index of 'earth': " + indexOfEarth);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Comparison, print the values for the following expressions (evaluate whether the statements are true):
● Is 5 greater than 3?
● Is 7 greater than or equal to 7?
● Is "a" greater than "b"?
● Is "1" less than "a"?
● Is "2500" less than "abcd"?
● "arne" is not equal to "thomas".
● (2 equals 5) is this statement true?
● ("abcd" is greater than "bcd") is this statement false?*/ 
printOut("Is 5 greater than 3? " + (5 > 3));
printOut("Is 7 greater than or equal to 7? " + (7 >= 7));
printOut('Is "a" greater than "b"? ' + ("a" > "b"));
printOut('Is "1" less than "a"? ' + ("1" < "a"));
printOut('Is "2500" less than "abcd"? ' + ("2500" < "abcd"));
printOut('"arne" is not equal to "thomas": ' + ("arne" != "thomas"));
printOut("(2 equals 5) is this statement true? " + (2 === 5));
printOut('("abcd" is greater than "bcd") is this statement false? ' + !("abcd" > "bcd"));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Convert and print the following expressions:
● from text "254" to a number
● from text "57.23" to a number
● from text "25 kroner" to a number*/ 
const text1 = "254";
const text2 = "57.23";
const text3 = "25 kroner";

const number1 = Number(text1);
const number2 = parseFloat(text2);
const number3 = parseInt(text3);

printOut('From text "254" to a number: ' + number1);
printOut('From text "57.23" to a number: ' + number2);
printOut('From text "25 kroner" to a number: ' + number3);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360).*/
const r = Math.floor(Math.random() * 360) + 1;
printOut("Randomly generated number r: " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Use modulus (%) to calculate how many weeks and days are in 131 days.*/
const totalDays = 131;
const weeks = Math.floor(totalDays / 7);
const daysLeft = totalDays % 7;

printOut("131 days is " + weeks + " weeks and " + daysLeft + " days.");
printOut(newLine);
