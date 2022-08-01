"use strict";

async function populate() {
  const response = await fetch(
    "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json"
  );
  let pokeDex = await response.json();

  // generate cards
  generateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    generateCard(pokeDex);
  });

  // clear cards
  clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    pokeDexGrid.innerHTML = "";
  });
}

const clearBtn = document.querySelector(".clear");
const generateBtn = document.querySelector(".generate");
const pokeDexGrid = document.querySelector(".pokedex");
const selectEl = document.querySelector("#generation");

function generateCard(pokeDex) {
  const filteredPokeDex = pokeDex.filter((element) => {
    if (+selectEl.value === 1) {
      return element.id <= 151;
    } else if (+selectEl.value === 2) {
      return element.id >= 152 && element.id <= 251;
    } else if (+selectEl.value === 3) {
      return element.id >= 252 && element.id <= 386;
    } else if (+selectEl.value === 4) {
      return element.id >= 387 && element.id <= 493;
    } else if (+selectEl.value === 5) {
      return element.id >= 494 && element.id <= 649;
    } else if (+selectEl.value === 6) {
      return element.id >= 650 && element.id <= 721;
    } else if (+selectEl.value === 7) {
      return element.id >= 722 && element.id <= 809;
    } else return;
  });

  for (const pokemon of filteredPokeDex) {
    const pokemonId = pokemon.id;
    const pokemonName = pokemon.name.english;
    const pokemonTypes = pokemon.type;
    const pokemonBase = pokemon.base;

    // card container

    const pokeDexContainer = document.createElement("div");
    pokeDexContainer.classList.add("pokedex__container");
    pokeDexGrid.appendChild(pokeDexContainer);

    ///////////////////
    // front of card //
    ///////////////////

    const pokeDexImageFront = document.createElement("div");
    pokeDexImageFront.classList.add("pokedex__image", "front");
    pokeDexContainer.appendChild(pokeDexImageFront);

    const pokeDexFrontImage = document.createElement("img");
    pokeDexFrontImage.src = `../images/Pokemon-images/${pokemonId}.png`;
    pokeDexImageFront.appendChild(pokeDexFrontImage);

    //////////////////
    // back of card //
    //////////////////

    const pokeDexCard = document.createElement("article");
    pokeDexCard.classList.add("pokedex__card");
    pokeDexContainer.appendChild(pokeDexCard);

    // header
    const pokeDexHeader = document.createElement("h2");
    pokeDexHeader.classList.add("pokedex__header");
    pokeDexHeader.textContent = `${pokemonName} #${pokemonId}`;

    // images
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

    if (pokemonTypes.length === 1) {
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
      if (firstPokeDexType.textContent.toLowerCase() === pokemonColor) {
        firstPokeDexType.style.backgroundColor = `${color[pokemonColor]}`;
      } else if (secondPokeDexType.textContent.toLowerCase() === pokemonColor) {
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
