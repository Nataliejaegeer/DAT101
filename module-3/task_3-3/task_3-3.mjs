"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function printTodayDate() {
    let today = new Date();
    let formatted = today.toLocaleDateString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    printOut(formatted);
}

printTodayDate();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function getTodayDate() {
    let today = new Date();
    let formatted = today.toLocaleDateString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    printOut("Today: "+formatted);
    return today;
}

function daysUntil2XKO() {
    let today = new Date();
    let release = new Date("2025-05-14");
    let diff= release-today;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days;
}
let todayDate = getTodayDate();
let daysLeft = daysUntil2XKO();
printOut("Days until 2XKO: " + daysLeft);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function circle(radius) {
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * radius * radius;

    printOut("Diameter: " + diameter);
    printOut("Circumference: " + Math.floor(circumference));
    printOut("Area: " + Math.floor(area));
}

circle(5);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rectangle(rect) {
    let width = rect.width;
    let height = rect.height;

    let circumference = 2 * (width + height);
    let area = width * height;

    printOut("Circumference: " + circumference);
    printOut("Area: " + area);
}

rectangle({ width: 4, height: 6 });

printOut(newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function convertTemp(temp,type) {
    type = type.toLowerCase();

    if (type === "c") {
        let f = (temp * 9/5) + 32;
        let k = temp + 273;
        printOut("F: " + Math.floor(f)+",K: "+ Math.floor(k));
    }
    else if (type === "f") {
        let c = (temp - 32) * 5/9;
        let k = c + 273;
        printOut("C: " + Math.floor(c)+",K: "+ Math.floor(k));
    }
    else if (type === "k") {
        let c = temp - 273;
        let f = (c * 9/5) + 32;
        printOut("C: " + Math.floor(c)+",F: "+ Math.floor(f));
    }
    }
    convertTemp(25,"c");
    convertTemp(77,"f");
    convertTemp(300,"k");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calcNet (gross, type) {
    type = type.toLowerCase();
    let vat;

    if (type === "normal") vat = 25;
    else if (type === "food") vat = 15;
    else if (type === "hotel") vat = 10;
    else if (type === "transport") vat = 10;
    else if (type === "cinema") vat = 10;
    else {
        printOut("Unknown VAT group!");
        return NaN;
    }
    let net = (100 * gross) / (vat + 100);
    return Math.floor(net);

}

printOut(calcNet(1000,"normal"));
printOut(calcNet(1000,"food"));
printOut(calcNet(1000,"hotel"));
printOut(calcNet(1000,"goblins"));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function speedCalc(distance, time, speed) {
    if (speed === undefined && distance !== undefined && time !== undefined) {
        return distance / time;
    }
    else if (time === undefined && distance !== undefined && speed !== undefined) {
        return distance / speed;
    }
    else if (distance === undefined && time !== undefined && speed !== undefined) {
        return time * speed;
    }
    else {
        return NaN;
    }
}

printOut(speedCalc(100, 10, undefined));
printOut(speedCalc(100, undefined, 10));
printOut(speedCalc(undefined, 10, 10));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function expandText(text, max, char, beforre) {
    while (text.length < max) {
        if (beforre) {
            text = char + text;
        }else {
            text = text + char;
        }
    }
    return text;
}

printOut(expandText("hi", 5, "*", true));
printOut(expandText("hi", 5, "*", false));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function mathTest() {
    let start = 1;

    for(let row = 1; row <= 200; row++) {
        let leftSum = 0;
        let rightSum = 0;

        for(let i = 0; i < row + 1; i++) {
            leftSum += start + i;
        }
        for(let i = 0; i < row; i++) {
            rightSum += start + row + 1 + i;
        }

        if (leftSum !== rightSum) {
            printOut("Error at row " + row);
            return;
        }

        start += (row + 1)+ row;
    }
    printOut("Maths fun!");
}

mathTest();

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function factoral(n) {
    if (n === 1) {
        return 1;
    }
    return n * factoral(n - 1);
}

printOut(factoral(5));
printOut(newLine);

