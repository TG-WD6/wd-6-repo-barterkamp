"use strict";

/*

Logica

- Genereer de huidige datum en sla deze op in een nieuwe variabele met de new Date() method "When called as a function, returns a string representation of the current date and time."

- Genereer het aanta seconden/minuten en uren op basis van de new Date() m.b.v de getSeconds(), getMinutes() en getHours() method.

- Berkenen het aantal graden dat de wijzer moet transformen op basis van het aantal seconden, minuten en uren.

- Voeg dynamisch de transform: rotate property toe aan de verschillende classes op basis van de berekende aantal graden met behulp van .style property

- Zorg ervoor dat de functie iedere seconde gecalled wordt met setInterval (setInterval(functie, vertraging))

*/

const seconds = document.querySelector(".second");
const minutes = document.querySelector(".minute");
const hours = document.querySelector(".hour");

console.log();

const clock = function () {
  // let op! de today variable kan niet buiten de functie geplaatst worden, omdat je deze bij iedere functie call wilt genereren en niet enkel bij het laden van de pagina.
  const timeZoneOffset = document.getElementById("timezone");

  const offset = +timeZoneOffset.value / 10;

  // values in de select zijn lelijk maar kloppen wel
  // onze offset is new Date().getTimezoneOffset()/60;
  // een value van 0 in HTML is dus in werkelijkheid een offset van 2
  // is niet schaalbaar met zomertijd, heb de juiste manier van timezone implementatie nog niet kunnen vinden.

  const today = new Date();

  // bereken seconden

  const secondsPassed = today.getSeconds() / 60;
  const secondsDegrees = secondsPassed * 360;
  seconds.style.transform = `rotate(${secondsDegrees}deg)`;
  // breken minuten
  const minutesPassed = (secondsPassed + today.getMinutes()) / 60;
  const minuteDegrees = minutesPassed * 360;
  minutes.style.transform = `rotate(${minuteDegrees}deg)`;
  // bereken uren
  const hoursPassed = (minutesPassed + today.getHours()) / 12 + offset;

  const hourDegrees = hoursPassed * 360;

  hours.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(clock, 1000);

// new york offset - 0 (-4)
// london offset -0.3 (-1)
// amsterdam offset -0.2 (+2)
// moskou offset - 0.1 (+3)

// tokyo offset -0.3 (+9)
