"use strict";

const slider = document.querySelector(".carousel__slide");
const images = document.querySelectorAll(".carousel__image"); // nodelist
const btnPrevious = document.querySelector(".btn__previous");
const btnNext = document.querySelector(".btn__next");

// zodra je op de next button klikt moet de volgende image in de rij verschijnen (hij loopt omhoog)
// zodra je op de previous button klikt moet de vorige image in de rij verschijnen (hij loopt omlaag)

let counter = 1;
const imageWidth = images[0].clientWidth;

slider.style.transform = `translateX(${-imageWidth * counter}px)`;

btnNext.addEventListener("click", () => {
  if (counter >= images.length - 1) return;
  slider.style.transition = "transform 0.3s ease-in-out";
  counter++;
  slider.style.transform = `translateX(${-imageWidth * counter}px)`;
});

btnPrevious.addEventListener("click", () => {
  if (counter <= 0) return;
  slider.style.transition = "transform 0.3s ease-in-out";
  counter--;
  slider.style.transform = `translateX(${-imageWidth * counter}px)`;
});

slider.addEventListener("transitionend", () => {
  if (images[counter].id === "last") {
    slider.style.transition = "none";
    counter = images.length - 2;
    slider.style.transform = `translateX(${-imageWidth * counter}px)`;
  }
  if (images[counter].id === "first") {
    slider.style.transition = "none";
    counter = images.length - counter;
    slider.style.transform = `translateX(${-imageWidth * counter}px)`;
  }
});
