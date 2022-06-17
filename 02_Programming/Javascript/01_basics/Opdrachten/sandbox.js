"use strict";

// let letOefening = "Let Tekst";
// let letOefening = "let Tekst Twee";

// console.log(letOefening);

// varOefening = "var Tekst";
// console.log(varOefening);

// var varOefening = "Var Tekst Twee!";
// console.log(varOefening);

// var varOefening = "Var Tekst Drie";
// console.log(varOefening);

// let typeQuestion = function calculateSomething() {};
// console.log(`This is a ${typeof typeQuestion} with the value ${typeQuestion}`);

// let someNumber = 5;
// let anotherNumber = "5";
// console.log(someNumber !== anotherNumber);

// let increment = 1;
// console.log(++increment); // 1
// console.log(increment++); // 2

// let increment = 1;
// console.log(increment++); // 1
// console.log(++increment); // 3

// let modulo = 24 / 10;
// console.log(modulo);

// let someNumber = 1;
// someNumber = someNumber + 1;
// console.log(someNumber); // 2

// let someNumber = 1;
// ++someNumber;
// console.log(someNumber); // 2

// let someKittens =
//   "De poes van de buurman heeft kittens gehad! Hij vraagt of wij kittens willen.";

// let eersteZin = someKittens.slice(0, someKittens.indexOf("!") + 1);
// console.log(eersteZin);

// let tweedeZin = someKittens.slice(someKittens.indexOf("Hij"));
// console.log(tweedeZin);

// console.log(someKittens.toUpperCase());

// console.log(someKittens.indexOf("kittens")); // 29
// console.log(someKittens.lastIndexOf("kittens")); // 62

// console.log(someKittens.charAt(29));
// console.log(someKittens.charAt(62));

// console.log(someKittens.substring(5, 2));

// let someKittens = "Die nieuwe kittens zijn zo schattig!";
// let kittensArr = someKittens.split(" ");
// console.log(kittensArr);

// let x = 4;
// let y = 8;
// if (x === 4 && y == 8) {
//   console.log("Result!");
// }

// let x = 4;
// let y = 8;
// if (x == !4 || y == !8) {
//   console.log("Dit resultaat is niet te zien");
// } else {
//   console.log("Result");
// }

// let x = 46;

// if (x > 5 && x < 10) {
//   console.log(`${x} zit tussen de 6 en 9`);
// } else
//   (x >= 11 && x <= 20) ||
//     x === 21 ||
//     x === 23 ||
//     x < 35 ||
//     (x >= 40 && x <= 45);
// console.log(x);

// if (x > 5 && x < 10) {
//   console.log(`${x} zit tussen de 6 en 9`);
// } else if (x >= 11 && x <= 20) {
//   console.log(`${x} is groter dan 11 EN kleinder dan 20`);
// } else if (x === 21 || x === 23) {
//   console.log(`${x} is 21 of 23`);
// } else if (x < 35 || (x >= 40 && x <= 45)) {
//   console.log(`${x} is kleiner dan 35 OF tussen de 40 en 45`);
// } else console.log("ander getal");

//

//

// let x = 3;
// let results;

// results = x <= 4 && x >= 0 ? (results = 2) : (results = 5);
// console.log(results);

// // function expression
// const square = function (x) {
//   return x * x;
// };

// // function declaration
// function square(x) {
//   return x * x;
// }

// // arrow function
// const square = (x) => x * x;

// function clickme() {
//   console.log("Hello World!");
// }

// const inputEl = document.getElementById("input");
// // const value = inputEl.value;

// function logInput(inputEl) {
//   console.log(inputEl.value);
// }

// // const result = logInput(inputEl);
// // console.log(result);

// const body = document.querySelector("body");
// console.log(body.innerText);

// function randomNumber(x) {
//   console.log(Math.floor(Math.random() * x) + 1);
// }

// console.log(Math.min(1, 5, 6, 3, 8, 9, 8, 3, 0, 2)); // 0
// console.log(Math.max(1, 5, 6, 3, 8, 9, 8, 3, 0, 2)); // 9

// const whatsYourName = function (name) {
//   if (
//     name.toLowerCase() === "sander" ||
//     name.toLowerCase() === "marko" ||
//     name.toLowerCase() === "bart" ||
//     name.toLowerCase() === "junier" ||
//     name.toLowerCase() === "szymon"
//   ) {
//     return `${name} is a member of group one`;
//   } else return `Error, ${name} is not a member of group 1`;
// };

// const call = function (callback, firstName) {
//   const body = document.querySelector("body");
//   body.insertAdjacentHTML("beforeend", `<div>${callback(firstName)}</div>`);
// };

// call(whatsYourName, "Bart");

// const whatsYourName = (name) => {
//   if (
//     name.toLowerCase() === "sander" ||
//     name.toLowerCase() === "marko" ||
//     name.toLowerCase() === "bart" ||
//     name.toLowerCase() === "junier" ||
//     name.toLowerCase() === "szymon"
//   ) {
//     return `${name} is a member of group one`;
//   } else return `${name} is NOT a member of group 1`;
// };

// const call = (firstName) => {
//   const body = document.querySelector("body");
//   body.insertAdjacentHTML(
//     "beforeend",
//     `<div>${whatsYourName(firstName)}</div>`
//   );
// };

// call("Jens");

// let array = ["Blink", 182];
// for (let index in array) {
//   console.log(index);
// }

// let array2 = ["Blink", 182];
// for (let element of array) {
//   console.log(element);
// }

// const numbersArray = [1, 3, 5, 2, 8, 6, 7, 10, 9, 4];
// console.log(numbersArray);

// const fruitsArray = ["Appel", "Aardbei", "Banaan", "Sinasappel", "Mandarijn"];
// console.log(fruitsArray);

// console.log(fruitsArray[0], fruitsArray[1]);

// const randomIndex = Math.floor(Math.random() * numbersArray.length);

// console.log(fruitsArray[randomIndex % fruitsArray.length]);

// console.log(fruitsArray.length);

// console.log(0 % 5); // 0
// console.log(1 % 5); // 1
// console.log(2 % 5); // 2
// console.log(3 % 5); // 3
// console.log(4 % 5); // 4
// console.log(5 % 5); // 0

// fruitsArray[0] = "Peer";
// console.log(fruitsArray);

// // peer zit op index 0
// // aardbei zit op index 1

// [fruitsArray[0], fruitsArray[1]] = [fruitsArray[1], fruitsArray[0]];
// console.log(fruitsArray);
// // ["Aardbei", "Peer", "Banaan", "Sinasappel", "Mandarijn"];

// const dutchSports = ["Voetbal", "Hockey", "Schaatsen"];

// for (let sports in dutchSports) {
//   console.log(dutchSports[sports]);
// }

// for (let i = 0; i < dutchSports.length; i++) {
//   console.log(dutchSports[i]);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) console.log(i);
// }

// for (let i = 1; i <= 3; i++) {
//   // i = 1, i = 2, i = 3
//   for (let j = 1; j <= 10; j++) {
//     // j = 1 t/m 10
//     console.log(j);
//     // door j te vermenigvuldigen met i krijg je iedere iteratie een andere uitkomst
//   }
// }

for (let i = 1; i <= 3; i++) {
  // i = 1, i = 2, i = 3
  for (let j = 1; j <= 10; j++) {
    // j = 1 t/m 10
    console.log(i * j);
    // door j te vermenigvuldigen met i krijg je iedere iteratie een andere uitkomst
  }
}

// Nu maken we het iets lastiger. De Reeks van Fibonacci is een lijst met getallen waarbij elk getal een opsomming is van de vorige 2 getallen.

// Begin met het array [0,1]. Maak vervolgens een loop die dit array vult met de eerste 50 getallen van de Reeks van Fibonacci. Log dit array.

let arr = [0, 1];

// loop door 50 getallen
for (let i = 2; i <= 50; i++) {
  // tel bij iedere iteratie de laatste indices op bij total
  arr[i] = arr[i - 2] + arr[i - 1];
  // push het resultaat in de array
  arr.push(arr[i]);
}
console.log(arr);

const bubbleArray = [2, 7, 5, 10, 4, 9, 3, 1, 8, 6];

for (let i = 0; i < bubbleArray.length; i++) {
  let swapped = false;
  for (let j = 0; j < bubbleArray.length; j++) {
    // als het cijfer op index j groter is dan het cijfer op de naastgelegen index, swap dan de variables en zet swapped op true.
    if (bubbleArray[j] > bubbleArray[j + 1]) {
      [bubbleArray[j], bubbleArray[j + 1]] = [
        bubbleArray[j + 1],
        bubbleArray[j],
      ];
      swapped = true;
      if (!swapped) break;
    }
  }
}

// console.log(bubbleArray);

// const dutchSports = ["Voetbal", "Hockey", "Schaatsen"];

// dutchSports.push("Zeilen", "Zwemmen");

// // Array(5) [ "Voetbal", "Hockey", "Schaatsen", "Zeilen", "Zwemmen" ]

// dutchSports.unshift("Volleybal");

// // Array(6) [ "Volleybal", "Voetbal", "Hockey", "Schaatsen", "Zeilen", "Zwemmen" ]

// const ballSport = dutchSports.filter((element) => element.includes("bal"));

// // for (let i = dutchSports.length - 1; i >= 0; i--) {
// //   if (dutchSports[i] === "Voetbal" || dutchSports[i] === "Volleybal") {
// //     dutchSports.splice(i, 1);
// //   }
// // }

// // console.log(dutchSports);

// for (let i = 0; i < dutchSports.length; i++) {
//   if (dutchSports[i] === "Voetbal" || dutchSports[i] === "Volleybal") {
//     dutchSports.splice(i, 1);
//     i--;
//     // tijdens de eerste iteratie wordt Volleybal uit de array gesloopt.
//     // Tijdens de volgende iteratie zit voetbal op de index van volleybal maar als gevolg van de /// increment kijkt de loop nu naar de index ernasst en wordt voetbal overgeslagen. Door er // // weer 1 af te halen kijkt de loop naar de juiste index.
//   }
// }

// // console.log(dutchSports);
// // (dutchSports.sort());
// // dutchSports.sort()

// // for (let sport of dutchSports) {
// //   console.log(sport);
// // }

// // creer een lege array
// let sportsLength = [];
// // loop door de dutchSports array
// for (let i = 0; i < dutchSports.length; i++) {
//   // push de lengte van de array items naar de lege array
//   sportsLength.push(dutchSports[i].length);
// }

// console.log(sportsLength);
// // Array(4) [ 6, 9, 6, 7 ]

// let arrayLike = document.querySelectorAll("div");

// console.log(Array.from(arrayLike));

// const numbersArray = [200, 400, -400, 3000, -70, 1300];

// const positiveNumbers = numbersArray.filter((elements) => elements > 0);
// console.log(positiveNumbers);

// const find3000 = numbersArray.find((element) => element === 3000);
// console.log(find3000);

// console.log(numbersArray.some((element) => element > 400));

// console.log();

// const petOne = new Object();

// petOne.name = "Bas";
// petOne.species = "Dog";

// console.log(petOne);

// const petTwo = {
//   name: "catniss",
//   species: "cat",
// };

// console.log(petTwo);

// function PetThree(name, species) {
//   this.name = name;
//   this.species = species;
// }

// let myPet = new PetThree("Jojo", "Rabbit");
// console.log(myPet);

// const petFour = new (function () {
//   (this.name = "Leonardo"), (this.species = "Turtle");
// })();

// console.log(petFour);

// class PetFive {
//   constructor(name, species) {
//     this.name = name;
//     this.species = species;
//   }
// }

// const Fufu = new PetFive("Fufu", "Hamster");

// console.log(Fufu);

// //////////////////////

// const dog = Object.create(petOne);
// const cat = Object.create(petTwo);
// const rabbit = Object.create(myPet);
// const turtle = Object.create(petFour);
// const hamster = Object.create(Fufu);

// const people = [
//   { name: "Dianne", age: 38 },
//   { name: "Sander", age: 43 },
//   { name: "Gerard", age: 73 },
//   { name: "Anne", age: 38 },
//   { name: "Marjo", age: 74 },
// ];
// console.log(people);

// people.sort((a, b) => a.age - b.age);
// console.log(people);

// class Club {
//   constructor(name, type, members) {
//     this.name = name;
//     this.type = type;
//     this.members = members;
//   }
// }

// console.log(Club);

// const clubsArr = ["Ajax", "Twente", "PSV", "Feyenoord", "NAC"];

// function printVariable(variable) {
//   console.log(variable);
// }

// function test(name, callback) {
//   callback("Hello " + name);
// }

// test("Bart", printVariable);

// const sentence = ["has kidnapped", "has escaped from", "has killed"];

// const body = document.querySelector("body");
// const firstName = document.querySelector(".input1");
// const secondName = document.querySelector(".input2");

// function generateFrase() {
//   const name1 = firstName.value;
//   const name2 = secondName.value;
//   const number = Math.floor(Math.random() * sentence.length);
//   const phrase = sentence[number];
//   return body.insertAdjacentHTML(
//     "beforeend",
//     `<div>${name1} ${phrase} ${name2}</div>`
//   );
// }
