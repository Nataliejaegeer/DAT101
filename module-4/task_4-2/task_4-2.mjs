"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let numbers = [];
for (let i = 1; i <= 20; i++) {
    numbers.push(i);
}

for (let i = 0; i < numbers.length; i++) {
    printOut(numbers[i]);
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(numbers.join(" - "));

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


const text = "Hei på deg, hvordan har du det?";
let words = text.split(" ");

for (let i = 0; i < words.length; i++) {
    printOut("Index " + i + ": " + words[i]);
}

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let girls = ["Anne","Inger","Kari","Marit","Ingrid","Liv","Eva","Berit","Astrid","Bjørg","Hilde","Anna","Solveig","Marianne","Randi","Ida","Nina","Maria","Elisabeth","Kristin"];

function removeName(arr, name) {
    let index = arr.indexOf(name);

    if (index !== -1) {
        arr.splice(index, 1);
        printOut(name + " removed");
    } else {
        printOut(name + " not found");
    }
}

removeName(girls, "Anne");
removeName(girls, "Test");

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let boys = ["Jakob","Lucas","Emil","Oskar","Oliver","William","Filip","Noah","Elias","Isak","Henrik","Aksel","Kasper","Mathias","Jonas","Tobias","Liam","Håkon","Theodor","Magnus"];

let allNames = girls.concat(boys);

printOut("Total names: " + allNames.length);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TBook {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    toString() {
        return this.title + " by " + this.author + " (ISBN: " + this.isbn + ")";
    }
}

let books = [
    new TBook("Harry Potter", "J.K. Rowling", "123"),
    new TBook("The Hobbit", "Tolkien", "456"),
    new TBook("1984", "Orwell", "789")
];

for (let i = 0; i < books.length; i++) {
    printOut(books[i].toString());
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const EWeekDays = {
    Monday: { value: 1, name: "Mandag" },
    Tuesday: { value: 2, name: "Tirsdag" },
    Wednesday: { value: 3, name: "Onsdag" },
    Thursday: { value: 4, name: "Torsdag" },
    Friday: { value: 5, name: "Fredag" },
    Saturday: { value: 6, name: "Lørdag" },
    Sunday: { value: 7, name: "Søndag" },
    Workdays: { value: 12345, name: "Arbeidsdager" },
    Weekends: { value: 67, name: "Helg" }
};

let keys = Object.keys(EWeekDays);

for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    printOut(key + ": " + EWeekDays[key].name);
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


let randomNumbers = [];

for (let i = 0; i < 35; i++) {
    randomNumbers.push(Math.floor(Math.random() * 20) + 1);
}

let asc = [...randomNumbers].sort((a, b) => a - b);
let desc = [...randomNumbers].sort((a, b) => b - a);

printOut("Ascending: " + asc.join(", "));
printOut("Descending: " + desc.join(", "));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let frequency = {};

for (let num of randomNumbers) {
    if (frequency[num]) {
        frequency[num]++;
    } else {
        frequency[num] = 1;
    }
}

for (let key in frequency) {
    printOut(key + " appears " + frequency[key] + " times");
}

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/


let grid = [];

for (let row = 0; row < 5; row++) {
    let tempRow = [];

    for (let col = 0; col < 9; col++) {
        tempRow.push("R" + row + "C" + col);
    }

    grid.push(tempRow);
}

for (let row = 0; row < grid.length; row++) {
    printOut(grid[row].join(" "));
}

printOut(newLine);
