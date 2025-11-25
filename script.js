//variaveis

const form = document.querySelector("form");

const inputweight = document.querySelector("#weight");
const inputheight = document.querySelector("#height");

const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),

  open() {
    Modal.wrapper.classList.add("open");
  },
  close() {
    Modal.wrapper.classList.remove("open");
  },
};

//funções

form.onsubmit = (event) => {
  event.preventDefault();
  const weight = inputweight.value;
  const height = inputheight.value;

  const result = IMC(weight, height);
  const message = ` Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
};

Modal.buttonClose.onclick = () => {
  Modal.close();
};
function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
1;
