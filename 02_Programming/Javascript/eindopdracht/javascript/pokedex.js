"use strict";

async function populate() {
  const requestData = "../javascript/pokedex.json";

  const request = new Request(requestData);

  const response = await fetch(request);
  const pokeDex = await response.json();

  // generate cards
  generateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    generateCard(pokeDex, selectEl.value);
  });

  // clear cards
  clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    pokeDexContainer.innerHTML = "";
  });
}

const clearBtn = document.querySelector(".clear");
const generateBtn = document.querySelector(".generate");
const pokeDexContainer = document.querySelector(".pokedex");
const selectEl = document.querySelector("#generation");

function generateCard(pokeDex, select) {
  for (const pokemon of pokeDex) {
    console.log(select);
    // als de select value 1 is genereer dan alle kaarten van 1 tot 151 etc.
    if (pokemon.id > 20) {
      return;
    }

    // individual components in JSON array

    const pokemonId = pokemon.id;
    const pokemonName = pokemon.name.english;
    const pokemonTypes = pokemon.type;
    const pokemonBase = pokemon.base;

    // article
    const pokeDexCard = document.createElement("article");
    pokeDexCard.classList.add("pokedex__card");
    pokeDexContainer.appendChild(pokeDexCard);

    // header
    const pokeDexHeader = document.createElement("h2");
    pokeDexHeader.classList.add("pokedex__header");
    pokeDexHeader.textContent = `${pokemonName} #${pokemonId}`;

    // image sprite
    const pokeDexSprite = document.createElement("img");
    pokeDexSprite.classList.add("pokedex__sprite");
    pokeDexSprite.src = `../images/Pokemon-sprites/${pokemonId}MS.png`;

    pokeDexCard.append(pokeDexHeader, pokeDexSprite);

    // types container
    const pokeDexType = document.createElement("div");
    pokeDexType.classList.add("pokedex__types");

    // first type
    const firstPokeDexType = document.createElement("div");
    firstPokeDexType.classList.add("pokedex__type");
    firstPokeDexType.textContent = pokemonTypes[0];

    // second type
    const secondPokeDexType = document.createElement("div");
    secondPokeDexType.classList.add("pokedex__type");
    secondPokeDexType.textContent = pokemonTypes[1];

    if (!pokemonTypes[1]) {
      secondPokeDexType.classList.add("hide");
    }

    // type colors

    const typeColors = [
      { normal: "#a8a87d" },
      { fire: "#e18644" },
      { fighting: "#b13d32" },
      { water: "#708fe9" },
      { flying: "#a491ea" },
      { grass: "#8bc660" },
      { poison: "#94469b" },
      { electric: "#f2d254" },
      { ground: "#dbc075" },
      { psychic: "#e66388" },
      { rock: "#b4a14b" },
      { ice: "#a6d6d7" },
      { bug: "#abb842" },
      { dragon: "#693bef" },
      { ghost: "#6c5994" },
      { dark: "#6c594a" },
      { steel: "#b8b8ce" },
      { fairy: "#d8a2e3" },
    ];

    // kleur koppelen aan juiste types

    for (const color of typeColors) {
      const pokemonColor = Object.keys(color).join("").toLowerCase();
      if (firstPokeDexType.textContent.toLocaleLowerCase() === pokemonColor) {
        firstPokeDexType.style.backgroundColor = `${color[pokemonColor]}`;
      } else if (
        secondPokeDexType.textContent.toLocaleLowerCase() === pokemonColor
      ) {
        secondPokeDexType.style.backgroundColor = `${color[pokemonColor]}`;
      }
    }

    pokeDexCard.appendChild(pokeDexType);
    pokeDexType.append(firstPokeDexType, secondPokeDexType);

    // card table
    const pokeTable = document.createElement("table");
    pokeTable.classList.add("pokedex__table");
    pokeDexCard.appendChild(pokeTable);

    // table rows
    const firstRow = document.createElement("tr");
    firstRow.classList.add("pokedex__table-row");
    const secondRow = document.createElement("tr");
    secondRow.classList.add("pokedex__table-row");
    const thirdRow = document.createElement("tr");
    thirdRow.classList.add("pokedex__table-row");

    // table columns first row
    const firstColumn = document.createElement("td");
    firstColumn.classList.add("pokedex__table-column");
    firstColumn.textContent = "HP";
    const secondColumn = document.createElement("td");
    secondColumn.classList.add("pokedex__table-column");
    secondColumn.textContent = pokemonBase.HP;
    const thirdColumn = document.createElement("td");
    thirdColumn.textContent = "Speed";
    thirdColumn.classList.add("pokedex__table-column");
    const fourthColumn = document.createElement("td");
    fourthColumn.classList.add("pokedex__table-column");
    fourthColumn.textContent = pokemonBase.Speed;

    // table columns second row
    const fifthColumn = document.createElement("td");
    fifthColumn.classList.add("pokedex__table-column");
    fifthColumn.textContent = "atk";
    const sixtColumn = document.createElement("td");
    sixtColumn.classList.add("pokedex__table-column");
    sixtColumn.textContent = pokemonBase.Attack;
    const seventhColumn = document.createElement("td");
    sixtColumn.classList.add("pokedex__table-column");
    seventhColumn.textContent = "sp.atk";
    const eightColumn = document.createElement("td");
    eightColumn.classList.add("pokedex__table-column");
    eightColumn.textContent = pokemonBase["Sp. Attack"];

    // table columns third row

    const ninthColumn = document.createElement("td");
    ninthColumn.classList.add("pokedex__table-column");
    ninthColumn.textContent = "def";
    const tenthColumn = document.createElement("td");
    tenthColumn.classList.add("pokedex__table-column");
    tenthColumn.textContent = pokemonBase.Defense;
    const eleventhColumn = document.createElement("td");
    eleventhColumn.classList.add("pokedex__table-column");
    eleventhColumn.textContent = "sp.def";
    const twelthColumn = document.createElement("td");
    twelthColumn.classList.add("pokedex__table-column");
    twelthColumn.textContent = pokemonBase["Sp. Defense"];

    pokeTable.append(firstRow, secondRow, thirdRow);
    firstRow.append(firstColumn, secondColumn, thirdColumn, fourthColumn);
    secondRow.append(fifthColumn, sixtColumn, seventhColumn, eightColumn);
    thirdRow.append(ninthColumn, tenthColumn, eleventhColumn, twelthColumn);
  }
}

populate();
