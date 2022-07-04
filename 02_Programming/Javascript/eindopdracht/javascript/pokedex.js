// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     // fetch() returns a promise
//     .then(function (response) {
//       return response.json();
//       // then method handles the promise
//       // De then method neemt een callback function die uitgevoerd moet worden zodra de promise vervuld is.
//       // De callback function neemt 1 argument zodra deze door javascript gecalled wordt en dat argument is de resulterende waarde van de vervulde promise.
//       // Om de data uit de response te kunnen lezen moet je de JSON method teopassen argument.json()
//     })
//     .then(function (data) {
//       // nof een keer de then method toepassen omdat bovenstaande weer een promise teruggeeft. Je krijgt nu daadwerkelijk toegang tot de data.
//       console.log(data);
//     });
// };

// getCountryData("portugal");

// // met fetch verkrijg je een promise
// // de respons wordt omgezet naar JSON (maar is weer een promise)
// // vervolgens pas je weer de then method toe om de data te kunnen gebruik

// const section = document.querySelector(".pokedex__container");

// function generatePokeImg() {
//   for (let i = 1; i < 200; i++) {
//     const pokeImg = document.createElement("img");
//     pokeImg.style.border = "1px solid red";
//     pokeImg.src = `../images/Pokemon-images/${i}.png`;
//     section.appendChild(pokeImg);
//   }
// }

// generatePokeImg();

async function populate() {
  const requestData = "../javascript/pokedex.json";

  const request = new Request(requestData);

  const response = await fetch(request);
  const pokeDex = await response.json();
  // de pokedex variable bevat nu de array met alle pokemon objecten
  console.log(pokeDex);

  // loop door de pokedex array om alle losse pokemon objecten te verkrijgen
  for (const pokemon of pokeDex) {
    const header = document.createElement("h1");

    console.log(pokemon.name.english);
    pokemon.type.map((element) => {
      console.log(element);
    });
  }
}

const output = populate();
