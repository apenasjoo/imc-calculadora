import { Modal } from "./modal.js";

//variaveis

const form = document.querySelector("form");

const inputweight = document.querySelector("#weight");
const inputheight = document.querySelector("#height");

form.onsubmit = (event) => {
  event.preventDefault();
  const weight = inputweight.value;
  const height = inputheight.value;

  const result = IMC(weight, height);
  const message = ` Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
};

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
1;
