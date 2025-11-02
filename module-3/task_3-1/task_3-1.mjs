"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/

// jeg tester forskjellige tider
let wakeUpTime = 8; // prøv 6, 7 eller 8 for å se forskjell

if (wakeUpTime === 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime === 8) {
  printOut("I can take the train to school.");
} else {
  printOut("I have to take the car to school.");
}

printOut(newLine);



printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// sjekker om tallet er positivt, negativt eller null
let number = 0;

if (number > 0) {
  printOut("Positive");
} else if (number < 0) {
  printOut("Negative");
} else {
  printOut("Zero");
}

printOut(newLine);



printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// bildeopplasting, sjekker størrelse
let imageSize = Math.floor(Math.random() * 8) + 1;
printOut("Image size: " + imageSize + "MP");

if (imageSize >= 4) {
  printOut("Thank you");
} else {
  printOut("The image is too small");
}

printOut(newLine);



printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// sjekker også for store bilder
let imageSize2 = Math.floor(Math.random() * 8) + 1;
printOut("Image size: " + imageSize2 + "MP");

if (imageSize2 < 4) {
  printOut("The image is too small");
} else if (imageSize2 >= 6) {
  printOut("Image is too large");
} else {
  printOut("Thank you");
}

printOut(newLine);



printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// vitamin D test med måneder
const monthList = ["January", "February", "Mars", "April", "Mai", "Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut("Month: " + monthName);

if (monthName.includes("r")) {
  printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}

printOut(newLine);



printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// sjekker hvor mange dager i måneden
let days = 31;

if (monthName === "February") {
  days = 28;
} else if (["April", "Juni", "September", "November"].includes(monthName)) {
  days = 30;
}

printOut(monthName + " has " + days + " days.");

printOut(newLine);



/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// galleri status
if (monthName === "Mars" || monthName === "Mai") {
  printOut("Gallery is closed.");
} else if (monthName === "April") {
  printOut("Gallery is open in the temporary location.");
} else {
  printOut("Gallery is open.");
}

printOut(newLine);