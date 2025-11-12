//variaveis

const form = document.querySelector("form");

const inputweight = document.querySelector("#weight");
const inputheight = document.querySelector("#height");

const modalWrapper = document.querySelector(".modal-wrapper");
const modalMessage = document.querySelector(".modal .title span");
const modalBtnClose = document.querySelector(".modal button.close");

//funções

form.onsubmit = (event) => {
  event.preventDefault();
  const weight = inputweight.value;
  const height = inputheight.value;

  const result = IMC(weight, height);
  const message = ` Seu IMC é de ${result}`;

  modalMessage.innerText = message;
  modalWrapper.classList.add("open");
};

modalBtnClose.onclick = () => modalWrapper.classList.remove("open");

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
1;
