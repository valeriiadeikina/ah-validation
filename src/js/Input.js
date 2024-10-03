import { determinateCard } from "./determinateCard.js";

export default class Input {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.onSubmit = this.onSubmit.bind(this);
  }

  static get markup() {
    return `
        <form class="card-form-widget">
            <div class="control">
                <label for="card-input">Введите номер карты</label>
                <input type="text" id="card-input" class="input">
            </div>
            <button class="submit">Проверить номер</button>
        </form>
        `;
  }

  bindToDOM() {
    this.parentEl.innerHTML = Input.markup;

    const form = this.parentEl.querySelector(".card-form-widget");
    form.addEventListener("submit", this.onSubmit);

    this.input = this.parentEl.querySelector("#card-input");
  }

  onSubmit(e) {
    e.preventDefault();
    const value = this.input.value;
    const typeOfCard = determinateCard(value);
    if (typeOfCard) {
      const imgElement = document.querySelector(
        `img[alt=${typeOfCard.toLowerCase()}]`
      );
      imgElement.classList.add("colored");
    }
    if (document.querySelector(".result")) {
      document.querySelector(".result").remove();     
    }
    const result = document.createElement("div");
    result.classList.add("result");
    result.textContent = typeOfCard
      ? `Ваша карта: ${typeOfCard}`
      : "Тип карты не определен";
    this.parentEl.appendChild(result);
  }
}
