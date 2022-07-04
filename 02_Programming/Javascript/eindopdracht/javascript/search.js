"use strict";

////////////////////////////////////////
// Selectie van benodigde HTML elementen
////////////////////////////////////////

const searchBtn = document.querySelector(".search__btn");
const searchInput = document.querySelector(".search__input");
const searchGroup = document.querySelector(".search__group");
const resultList = document.querySelector(".search__list");
console.log(resultList);

////////////////////////////////////////////
// Opslaan van zoekwoorden in local storage.
////////////////////////////////////////////

/* 
LOGICA 
- Maak een klik event aan op de search button om de input in het lokale geheugen op te slaan.
- Let op! altijd EERST checken of er al data in local storage zit met localStorage.getItem. Zo niet, creeer dan een lege array waar de zoekwoorden in het vervolg in opgeslagen kunnen worden.
- Push iedere nieuw zoekwoord (de input.value) naar de searchterms array.
- Sla de  array op in het locale geheugen met localStorage.setItem.
- Maak het inputfield leeg
- Return de searchterms array uit de functie om te gebruiken in de filterfunctie
*/

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchterms = JSON.parse(localStorage.getItem("searchWords")) || [];
  searchterms.unshift(searchInput.value);
  localStorage.setItem("searchWords", JSON.stringify(searchterms));
  searchInput.value = "";
});

////////////////////////////////////////////////////////////////
// Vergelijken van zoekwoorden met zoekwoorden in local storage.
////////////////////////////////////////////////////////////////

/* 
LOGICA 
- Zet een eventListerner op de input die 'luistert' naar iedere letter die ingetypt wordt
- Check of er daadwerkelijk input is
- Als er input is, filter dan door de array in het locale geheugen.
- Check binnen het filter of de array letters of woorden bevat die overeenkomen en geef deze terug in een nieuwe variabele (filter levert altijd een nieuwe array op met items die voldoen aan een conditie) 
- Loop door de gefilterde results array en return de individuele woorden als een string binnen een een <li> element zodat deze later makkelijk binnen het ul element te plaatsen is.
- Als er geen woorden overeenkomen haal dan de class show weg
- Als er wel woorden overeenkomen voeg dan de show class toe en voeg de list items toe aan het lijst element.

*/

searchInput.addEventListener("input", () => {
  let result = [];

  // Filter
  if (searchInput.value) {
    result = JSON.parse(localStorage.getItem("searchWords")).filter(
      (searchWord) => {
        if (
          searchWord.toLowerCase().includes(searchInput.value.toLowerCase())
        ) {
          return searchWord;
        } else return;
      }
    );
  }

  // Loop door gefilterde zoekwoorden
  const words = result
    .map((word) => {
      return `<li>${word}</li>`;
    })
    .join(" ");

  // Toevoegen of verwijderen van show class
  if (!words) {
    resultList.classList.remove("show");
  } else {
    resultList.classList.add("show");
    resultList.innerHTML = words;
  }
});
