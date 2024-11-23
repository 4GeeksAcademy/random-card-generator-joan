/* eslint-disable */
import "./style.css";

let symbols = ["♦", "♥", "♠", "♣"];
let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"];

let upper_symbol = document.querySelector(".row1");
let number = document.querySelector(".row2");
let lower_symbol = document.querySelector(".row3");
let card = document.querySelector(".card");

function generate_random_card() {
  let chosen_suit = symbols[Math.floor(Math.random() * symbols.length)];
  let chosen_number = numbers[Math.floor(Math.random() * numbers.length)];
  upper_symbol.innerHTML = chosen_suit;
  lower_symbol.innerHTML = chosen_suit;
  number.innerHTML = chosen_number;

  upper_symbol.style.color =
    chosen_suit === "♦" || chosen_suit === "♥" ? "red" : "black";
  lower_symbol.style.color =
    chosen_suit === "♦" || chosen_suit === "♥" ? "red" : "black";
}

window.onload = function() {
  generate_random_card();
};

setInterval(function() {
  generate_random_card();
}, 10000);

function changeCard(event) {
  const clickedElement = event.target;
  if (clickedElement) {
    return generate_random_card();
  }
}

card.addEventListener("click", changeCard);

function changeWidth(event) {
  const inputElement = event.target;
  card.style.width = inputElement.value;
}

cardWidth.addEventListener("input", changeWidth);

function changeHeight(event) {
  const inputElement = event.target;
  card.style.height = inputElement.value;
}

cardHeight.addEventListener("input", changeHeight);
