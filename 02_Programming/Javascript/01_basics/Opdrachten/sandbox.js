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

// const call = function (callback) {
//   const body = document.querySelector("body");
//   body.insertAdjacentHTML("beforeend", `<div>${callback}</div>`);
// };

// call(whatsYourName("Bart"));

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

// for (let i = 1; i <= 3; i++) {
//   // i = 1, i = 2, i = 3
//   for (let j = 1; j <= 10; j++) {
//     // j = 1 t/m 10
//     console.log(i * j);
//     // door j te vermenigvuldigen met i krijg je iedere iteratie een andere uitkomst
//   }
// }

// Nu maken we het iets lastiger. De Reeks van Fibonacci is een lijst met getallen waarbij elk getal een opsomming is van de vorige 2 getallen.

// Begin met het array [0,1]. Maak vervolgens een loop die dit array vult met de eerste 50 getallen van de Reeks van Fibonacci. Log dit array.

// let arr = [0, 1];
// // loop door 50 getallen
// for (let i = 2; i <= 48; i++) {
//   // tel bij iedere iteratie de laatste indices op bij total
//   arr[i] = arr[i - 2] + arr[i - 1];
//   // push het resultaat in de array
//   arr.push(arr[i]);
// }
// console.log(arr);

// const bubbleArray = [2, 7, 5, 10, 4, 9, 3, 1, 8, 6];

// for (let i = 0; i < bubbleArray.length; i++) {
//   let swapped = false;
//   for (let j = 0; j < bubbleArray.length; j++) {
//     // als het cijfer op index j groter is dan het cijfer op de naastgelegen index, swap dan de variables en zet swapped op true.
//     if (bubbleArray[j] > bubbleArray[j + 1]) {
//       [bubbleArray[j], bubbleArray[j + 1]] = [
//         bubbleArray[j + 1],
//         bubbleArray[j],
//       ];
//       swapped = true;
//       if (!swapped) break;
//     }
//   }
// }

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
// console.table(people);

// people.sort((a, b) => a.age - b.age);
// console.table(people);

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

// function warnTheSheep(queue) {
//   // reverse the que
//   const reversed = queue.reverse();
//   // [sheep, wolf, sheep, sheep, sheep]

//   for (let i = 0; i < reversed.length; i++) {
//     console.log(reversed[i]);
//   }
// }

// warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]);
// // index 1 is wolf

/*Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.*/

// function lovefunc(flower1, flower2) {
//   if (flower1 % 2 === 0 && flower2 % 2 === 1) {
//     return true;
//   } else if (flower1 % 2 === 1 && flower2 % 2 === 0) {
//     return true;
//   } else return false;
// }

// console.log(lovefunc(1, 4));

// Your task is to write a function which returns the time since midnight in milliseconds

// function past(h, m, s) {
//   {
//     return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
//   }
// }
// console.log(past(1, 1, 1));

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   const willWeMakeIt = distanceToPump <= fuelLeft * mpg ? true : false;
//   return willWeMakeIt;
// };

// console.log(zeroFuel(50, 25, 2)); //true
// console.log(zeroFuel(100, 50, 1));

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// let jonas = new Person("Jonas", 1991);
// let bart = new Person("Bart", 1980);

// Person.prototype.calcAge = function () {
//   return 2022 - this.birthYear;
// };

// console.log(bart.calcAge());
// console.log(jonas.calcAge());

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };

// const car1 = new Car("BMW", 120);
// const car2 = new Car("Mercedes", 95);

// car1.accelerate();
// car1.accelerate();
// car1.brake();
// car1.brake();
// car1.brake();
// car1.accelerate();

/* Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.*/

// tel naar beneden vanaf num tot 1
// maak een total variable

// var summation = function (num) {
//   let total = 0;
//   for (let i = num; num >= 1; num--) {
//     total += num;
//   }
//   return total;
// };

// console.log(summation(8));

// var min = function (list) {
//   return Math.min(...list);
// };

// var max = function (list) {
//   return Math.max(...list);
// };

// min([4, 6, 2, 1, 9, 63, -134, 566]);
// max([4, 6, 2, 1, 9, 63, -134, 566]);

// const grow = (x) => {
//   let total = 1;
//   for (let i = 0; i < x.length; i++) {
//     total *= x[i];
//   }
//   return total;
// };

// console.log(grow([4, 1, 1, 1, 4]));

// const even_or_odd = (number) => {
//   if (number % 2 === 0) {
//     return "Even";
//   }
//   return "Odd";
// };

// console.log(even_or_odd(-42));
// console.log(even_or_odd(-423));

// const betterThanAverage = (classPoints, yourPoints) => {
//   let sum = 0;
//   classPoints.map((element) => (sum += element));
//   const better = sum / classPoints.push(yourPoints) < yourPoints ? true : false;
//   return better;
// };

// console.log(betterThanAverage([2, 3], 5));
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));

// class Club {
//   // constructur is een method van de class
//   constructor(name, type, members) {
//     this.name = name;
//     this.type = type;
//     this.members = members;
//     this.ContactInformation =
//     };
//   }

//   class ContactInformation {
//     constructor(adress, phonenumber, contactperson) {
//       this.adress = adress;
//       this.phonenumber = phonenumber;
//       this.contactperson = contactperson;
//     }
//   };

// const ajax = new Club(
//   "Ajax",
//   "Voetbal",
//   new ContactInformation(
//     150000,
//     "088-18 3 1900",
//     "Johan Cruijff Boulevard 1, 1100 DL Amsterdam"
//   )
// );

// const petProto = {
//   name: this.name,
//   species: this.species,
// };

// const dog = Object.create(petProto);
// dog.name = "Bas";
// dog.species = "Dog";
// console.log(dog);

// const rabbit = Object.create(petProto);
// rabbit.name = "JoJo";
// rabbit.species = "Rabbit";
// console.log(rabbit);

// const cat = Object.create(petProto);
// cat.name = "catniss";
// cat.species = "cat";
// console.log(cat);

// const turtle = Object.create(petProto);
// turtle.name = "Leonardo";
// turtle.species = "Turtle";
// console.log(turtle);

// const hamster = Object.create(petProto);
// hamster.name = "Fufu";
// hamster.species = "Hamster";
// console.log(hamster);

// console.log("----------------------");

// class PetFive {
//   constructor(name, species) {
//     this.name = name;
//     this.species = species;
//   }
// }

// const dog = new PetFive("Bas", "Dog");
// const hamster = new PetFive("Fufu", "Hamster");
// const cat = new PetFive("Catniss", "Cat");

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   return 2022 - this.birthYear;
// };

// // the child constructor krijgt dezelfde argumenten als de parent constructor aangevuld met extra argumenten
// const Student = function(firstName, birthYear)

// function sumArray(array) {
//   if (array === null || array === undefined || array.length <= 2) {
//     return 0;
//   } else {
//     const max = Math.max(...array);
//     const min = Math.min(...array);
//     const total = array.reduce((accumulator, element) => {
//       return accumulator + element;
//     }, 0);
//     return total - max - min;
//   }
// }

// console.log(sumArray(null));
// console.log(sumArray([]));
// console.log(sumArray([3]));
// console.log(sumArray([3, 5]));
// console.log("--------------");
// console.log(sumArray([6, 2, 1, 8, 10]));
// console.log(sumArray([0, 1, 6, 10, 10]));
// console.log(sumArray([-6, -20, -1, -10, -12]));
// console.log(sumArray([-6, 20, -1, 10, -12]));

// function areYouPlayingBanjo(name) {
//   const plays =
//     name.toLowerCase()[0] === "r"
//       ? `${name} plays banjo`
//       : `${name} does not play banjo`;
//   return plays;
// }

// console.log(areYouPlayingBanjo("Adam"));

// const petProto = {
//   name: "Default",
//   species: "Default",
// };

// const dog = Object.create(petProto);
// dog.name = "Bas";
// dog.species = "Dog";
// console.log(dog);

// const rabbit = Object.create(petProto);
// rabbit.name = "JoJo";
// rabbit.species = "Rabbit";
// console.log(rabbit);

// // Person constructor (blauwdruk van een persoon)
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// // method gecreeerd buiten de function constructor
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Koppel HIER het sudent prototype aan het Person prototype met Object.create()
// // Als je het na de method definieerd dan verdwijnt je method omdat er een leeg object wordt gemaakt.
// // het Student.prototype is nu een object die erft van Person.prototype
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study (this.course)`);
// };

// const mike = new Student("Mike", 2000, "Computer Science");
// console.log(mike);
// mike.calcAge(); // je gebruikt nu de method die gedefinieerd is in het Person object.

// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }
// }

// // uses extends to inherit from person class
// class Student extends Person {
//   // add additional arguments, in this case course
//   constructor(firstName, birthYear, course) {
//     // Call the super function which is basically the constructor function of the parent class. This always needs to happen first because the super function creates the this keyword! Als arguments gebruik je dezelfde arguments als in de Person class
//     super(firstName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.firstName} and I study ${this.course})`);
//   }
// }

// const martha = new Student("Martha", 1980, "Computer Science");
// console.log(martha);
// martha.introduce();
// martha.calcAge(); // is afkomstig uit de parent class genaamd Person

// var number = function (busStops) {
//   let passengerIn = 0;
//   let passengerOut = 0;
//   for (let i = 0; i < busStops.length; i++) {
//     passengerIn += busStops[i][0];
//     passengerOut += busStops[i][1];
//   }
//   return passengerIn - passengerOut;
// };

// console.log(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 10],
//     [12, 2],
//     [6, 1],
//     [7, 10],
//   ])
// );

// // index 0 = [10,0]
// // index 1 = [3,5]
// //index 2 = [5,8]

// function find_average(array) {
//   if (array.length < 1) {
//     return 0;
//   } else {
//     return array.reduce((accumulator, element) => {
//       return accumulator + element / array.length;
//     }, 0);
//   }
// }

// console.log(find_average([1, 2, 3, 4]));
