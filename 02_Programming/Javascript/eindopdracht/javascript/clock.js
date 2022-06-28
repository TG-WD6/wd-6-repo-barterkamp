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
const timeOffset = document.querySelector(".timezone__offset");

const clock = function () {
  // let op! de today variable kan niet buiten de functie geplaatst worden, omdat je deze bij iedere functie call wilt genereren en niet enkel bij het laden van de pagina.
  const today = new Date();

  // console.log(today);
  // console.log(today.toLocaleString("en-US"));

  // bereken seconden
  const secondsPassed = today.getSeconds();
  const secondsDegrees = (secondsPassed / 60) * 360 + 90;
  seconds.style.transform = `rotate(${secondsDegrees}deg)`;
  // breken minuten
  const minutesPassed = today.getMinutes();
  const minuteDegrees = (minutesPassed / 60) * 360 + 90;
  minutes.style.transform = `rotate(${minuteDegrees}deg)`;
  // bereken uren
  const hoursPassed = today.getHours();
  const hourDegrees = (hoursPassed / 12) * 360 + 90;
  hours.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(clock, 1000);
