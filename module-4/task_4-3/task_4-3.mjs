"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
// Rectangle
const txtTask1Width = document.getElementById("txtTask1Width");
const txtTask1Height = document.getElementById("txtTask1Height");
const txtTask1Output = document.getElementById("txtTask1Output");
const cmbTask1Calculate = document.getElementById("cmbTask1Calculate");

cmbTask1Calculate.addEventListener("click", () => {
  let width = Number(txtTask1Width.value);
  let height = Number(txtTask1Height.value);

  let area = width * height;
  let perimeter = 2 * (width + height);

  txtTask1Output.innerText = "Area: " + area + " | Perimeter: " + perimeter;
});

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

// Dynamic word list
const txtTask2Word = document.getElementById("txtTask2Word");
const txtTask2Output = document.getElementById("txtTask2Output");

let task2Words = [];

txtTask2Word.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    task2Words.push(txtTask2Word.value);
    txtTask2Output.innerText = "Words (" + task2Words.length + "): " + task2Words.join(", ");
    txtTask2Word.value = "";
  }
});


//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
// Checkboxes
const txtTask3Output = document.getElementById("txtTask3Output");
const cmbTask3Check = document.getElementById("cmbTask3Check");

cmbTask3Check.addEventListener("click", () => {
  let checkboxes = document.getElementsByName("chkTask3");
  let result = [];

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      result.push(checkboxes[i].value);
    }
  }

  txtTask3Output.innerText = result.join(", ");
});

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
// Radio buttons
const divTask4Cars = document.getElementById("divTask4Cars");
const txtTask4Output = document.getElementById("txtTask4Output");

// create radios
for (let i = 0; i < CarTypes.length; i++) {
  let radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "car";
  radio.value = CarTypes[i].caption;

  let label = document.createElement("label");
  label.innerText = CarTypes[i].caption;

  radio.addEventListener("change", () => {
    txtTask4Output.innerText = "Selected: " + radio.value;
  });

  divTask4Cars.appendChild(radio);
  divTask4Cars.appendChild(label);
  divTask4Cars.appendChild(document.createElement("br"));
}

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
// Dropdown
const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

selectTask5Animals.addEventListener("change", () => {
  txtTask5Output.innerText = selectTask5Animals.value;
});


//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
// Dynamic dropdown
const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");

// add names
for (let i = 0; i < GirlsNames.length; i++) {
  let option = document.createElement("option");
  option.value = GirlsNames[i];
  option.text = GirlsNames[i];
  selectTask6Girls.add(option);
}

selectTask6Girls.addEventListener("change", () => {
  txtTask6Output.innerText = selectTask6Girls.value;
});


//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

// Table
const txtMovieTitle = document.getElementById("filmtittel");
const selectMovieGenre = document.getElementById("filmsjanger");
const txtMovieDirector = document.getElementById("filmregissor");
const txtMovieRating = document.getElementById("filmrate");
const cmbAddMovie = document.getElementById("cmbAddMovie");
const tblMovies = document.getElementById("tblMovies");

// fill genre dropdown
for (let i = 0; i < MovieGenre.length; i++) {
  let option = document.createElement("option");
  option.value = MovieGenre[i];
  option.text = MovieGenre[i];
  selectMovieGenre.add(option);
}

cmbAddMovie.addEventListener("click", () => {
  let row = tblMovies.insertRow();

  row.insertCell(0).innerText = txtMovieTitle.value;
  row.insertCell(1).innerText = selectMovieGenre.value;
  row.insertCell(2).innerText = txtMovieDirector.value;
  row.insertCell(3).innerText = txtMovieRating.value;
});
