import Input from "./Input.js";

const container = document.querySelector("#validator-container");
const form = new Input(container);

form.bindToDOM();
