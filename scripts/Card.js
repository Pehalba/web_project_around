import { openFullImagPopup } from "./index.js";

export default class Card {
  constructor(cardData, template) {
    this._cardData = cardData;
    this._template = template;
  }
  createCard() {
    const cardTemplate = document.querySelector(this._template).content;
    const elementCard = cardTemplate
      .querySelector(".elements__element")
      .cloneNode(true);
    elementCard.querySelector(".elements__element-title").textContent =
      this._cardData.name;
    elementCard
      .querySelector(".elements__element-image")
      .setAttribute("alt", this._cardData.name);
    elementCard
      .querySelector(".elements__element-image")
      .setAttribute("src", this._cardData.link);
    const cardTrash = elementCard.querySelector(
      "elements-element-button-trash"
    );

    const elements = document.querySelector(".elements");
    elements.prepend(elementCard);

    const openImgFull = document.querySelector(".popup__imgfull-imgbig");
    const openImgFullTittle = document.querySelector(".popup__imgfull-tittle");
    //botao like
    elementCard
      .querySelector(".elements__element-button-heart")
      .addEventListener("click", (event) => {
        if (
          event.target.getAttribute("src") ===
          "./images/elements__image-heart-disble.png"
        ) {
          return event.target.setAttribute(
            "src",
            "./images/elements_element-button-heart-like.png"
          );
        }
        return event.target.setAttribute(
          "src",
          "./images/elements__image-heart-disble.png"
        );
      });

    //remove card
    elementCard
      .querySelector(".elements-element-button-trash")
      .addEventListener("click", (event) => {
        event.target.parentElement.remove();
      });

    //Abrir/fechar PopupImgFull
    elementCard
      .querySelector(".elements__element-image")
      .addEventListener("click", (event) => {
        console.log(event.target);
        openImgFull.setAttribute("alt", this._cardData.name);
        openImgFull.setAttribute("src", this._cardData.link);
        openImgFullTittle.textContent = this._cardData.name;
        openFullImagPopup();
      });

    return elementCard;
  }
}
