"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let expr1 = 2 + 3 * 2 - 4 * 6; // vanlig rekkefølge
let expr2 = (2 + 3) * (2 - 4 * 6); // lagt til parenteser for å få -34

printOut("Original expression (2 + 3 * 2 - 4 * 6) = " + expr1);
printOut("Modified expression with parentheses = " + expr2);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let meters = 25;
let cm = 34;
let totalMm = (meters * 1000) + (cm * 10);
let inches = totalMm / 25.4;

printOut("25 meters and 34 cm = " + inches.toFixed(2) + " inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let days = 3;
let hours = 12;
let minutes = 14;
let seconds = 45;

let totalMinutes = (days * 24 * 60) + (hours * 60) + minutes + (seconds / 60);
printOut("Total minutes = " + totalMinutes.toFixed(2));
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let totalMin = 6322.52;
let days2 = Math.floor(totalMin / 1440);
let remainingMin = totalMin % 1440;

let hours2 = Math.floor(remainingMin / 60);
let minutes2 = Math.floor(remainingMin % 60);
let seconds2 = Math.round((remainingMin % 1) * 60);

printOut(days2 + " days, " + hours2 + " hours, " + minutes2 + " minutes, " + seconds2 + " seconds");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let usd = 54;
let nokPerUsd = 76 / 8.6;
let nok = Math.round(usd * nokPerUsd);

let nokValue = 76;
let usdPerNok = 8.6 / 76;
let usdValue = Math.round(nokValue * usdPerNok);

printOut("54 USD = " + nok + " NOK");
printOut("76 NOK = " + usdValue + " USD");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let text = "There is much between heaven and earth that we do not understand.";

printOut("Text length: " + text.length);
printOut("Character at position 19: " + text.charAt(19));
printOut("From position 35, 8 chars: " + text.substr(35, 8));
printOut("Index of 'earth': " + text.indexOf("earth"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("Is 5 greater than 3? " + (5 > 3));
printOut("Is 7 greater than or equal to 7? " + (7 >= 7));
printOut('Is "a" greater than "b"? ' + ("a" > "b"));
printOut('Is "1" less than "a"? ' + ("1" < "a"));
printOut('Is "2500" less than "abcd"? ' + ("2500" < "abcd"));
printOut('"arne" is not equal to "thomas"? ' + ("arne" != "thomas"));
printOut("(2 equals 5)? " + (2 == 5));
printOut('("abcd" > "bcd") is false? ' + !("abcd" > "bcd"));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut('Text "254" to number: ' + Number("254"));
printOut('Text "57.23" to number: ' + Number("57.23"));
printOut('Text "25 kroner" to number: ' + parseInt("25 kroner"));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let r = Math.floor(Math.random() * 360) + 1;
printOut("Random number between 1 and 360: " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/ 
let totalDays = 131;
let weeks = Math.floor(totalDays / 7);
let daysLeft = totalDays % 7;

printOut(totalDays + " days = " + weeks + " weeks and " + daysLeft + " days");
printOut(newLine);
