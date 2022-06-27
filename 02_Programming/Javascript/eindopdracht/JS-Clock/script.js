"use strict";

/* 

Logica 

- Genereer de huidige datum en sla deze op in een nieuwe variabele met de new Date() method "When called as a function, returns a string representation of the current date and time."

- Genereer het aanta seconden op basis van de new Date() m.b.v de get.Seconds() method. "The getSeconds() method returns the seconds in the specified date according to local time.""

- Berkenen het aantal graden dat de wijzer moet transformen op basis van het aantal seconden m.b.v de formule seconden / 60 * 360  

- Voeg de transform: rotate property toe op basis van de berekende aantal graden.

- zorg ervoor dat de functie om het aantal seconden te berekenen iedere seconde wordt gecalled met setInterval (setInterval(functie, vertraging))

*/

const seconds = document.querySelector(".second");
const minutes = document.querySelector(".minute");
const hours = document.querySelector(".hour");

const clock = function () {
  const today = new Date();
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
