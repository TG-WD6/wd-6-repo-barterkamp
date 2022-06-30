"use strict";

console.log("it works");

// localStorage = method to store key-value pairs in de webbrower
// de data blijft bestaan als je de browser sluit of de pagina refreshed.
// Je kan alleen data als een string bewaren
// convert object to a string met JSON.stringify(objectvariable)
// convert string back into object with JSON.parse

// .localStorage neemt 2 argumenten. Een naam die je zelf kan bedenken waar het object in wordt opgeslagen (key) en het object (value) zelf.
// Je kunt de localStorage benaderen via de 'application tab' in de developer tools

const searchBtn = document.querySelector(".search__btn");
const searchInput = document.querySelector(".search__input");

// maak een klik event aan op de search button
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // altijd EERST checken of er als data in local storage zit.
  // Zo niet, creeer dan een lege array.
  const searchterms = JSON.parse(localStorage.getItem("searchWords") || []);
  // Push iedere nieuwe input value per klik naar de searchterms array
  searchterms.unshift(searchInput.value);
  // Sla deze  array op in het locale geheugen
  localStorage.setItem("searchWords", JSON.stringify(searchterms));
});
