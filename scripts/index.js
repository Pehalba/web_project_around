import Card from "./card.js";
import FormValidation from "./FormValidation.js";

// Variaveis PopuPerfil
const popupProfile = document.querySelector(".popup-profile");
const popup = document.querySelector(".popup");
const editbutton = document.querySelector(".profile__info-button-edit");
const closebutton = document.querySelector(".popup__form-button-close");
const closePopupImgButton = document.querySelector(".popup__form-button-img");

const saveButtonProfile = document.querySelector(".popup__form-button-save");

const form = document.querySelector(".popup__form");
const inputName = form.querySelector("#name");
const inputProfission = form.querySelector("#profission");

const profileInfo = document.querySelector(".profile__info-name");
const profileProfission = document.querySelector(".profile__info-profession");

const buttonHeartLike = document.querySelectorAll(
  ".elements__element-button-heart"
);

// Variaveis Popup Add Card
const popupImage = document.querySelector(".popup-image");
const addImageButton = document.querySelector(".profile__button");

const inputTittle = document.querySelector("#tittle");
const inputUrl = document.querySelector("#url");
const saveButton = document.querySelector("#add-button");
const cards = document.querySelector(".elements");

//Variaveis PopupimgFull
const closePopupImgFull = document.querySelector(
  ".popup__imgfull-button-close"
);
const imgFull = document.querySelector(".popup__imgfull");
const openImgFull = document.querySelector(".popup__imgfull-imgbig");
const openImgFullTittle = document.querySelector(".popup__imgfull-tittle");

// Abrir/fechar popperfil
function openPopup() {
  popup.classList.add("popup_change_display");
}
editbutton.addEventListener("click", openPopup);

function closePopup() {
  popup.classList.remove("popup_change_display");
}
closebutton.addEventListener("click", closePopup);

//Abrir/ popImgFull

export function openFullImagPopup() {
  imgFull.classList.add("popup_change_display");
}

//Fechar pop with ESCAPE
function closePopWithEsc(event) {
  if (event.key == "Escape") {
    const popupAll = document.querySelectorAll(".popup");
    popupAll.forEach((popup) => {
      popup.classList.remove("popup_change_display");
    });
  }
}
document.addEventListener("keydown", closePopWithEsc);

// Abrir/fechar Popup Cards
function openPopupImg() {
  popupImage.classList.add("popup_change_display");
}
addImageButton.addEventListener("click", openPopupImg);

function closePopupImg() {
  popupImage.classList.remove("popup_change_display");
}
closePopupImgButton.addEventListener("click", closePopupImg);

//Fechar PopupIMGfull

function closeImgFull() {
  imgFull.classList.remove("popup_change_display");
}
closePopupImgFull.addEventListener("click", closeImgFull);

//ferchar popup click
popup.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup")) {
    closePopup();
  }
});

popupImage.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup-image")) closePopupImg();
});

imgFull.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup__imgfull-card")) closeImgFull();
});

// Atualizar dados do usuario
function updateProfileInfo(event) {
  event.preventDefault();
  profileInfo.textContent = inputName.value;
  profileProfission.textContent = inputProfission.value;
  closePopup();
}
saveButtonProfile.addEventListener("click", updateProfileInfo);

// botao de like
function heartLike(event) {
  event.target.classList.toggle("elements__element_button-heart-like");
}

buttonHeartLike.forEach((buttonLike) => {
  buttonLike.addEventListener("click", heartLike);
});

// pegar o array

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

// Adicionar os cartoes a pagina
initialCards.forEach((cardContent) => {
  const card = new Card(cardContent, ".element-template");
  const newCard = card.createCard();
  cards.prepend(newCard);
});

//add card image
function addCardImage(event) {
  event.preventDefault();
  if (inputTittle.value != "" && inputUrl.value != "") {
    const card = new Card(
      {
        name: inputTittle.value,
        link: inputUrl.value,
      },
      ".element-template"
    );
    const newCard = card.createCard();
    cards.prepend(newCard);
    inputTittle.value = "";
    inputUrl.value = "";
  }
  closePopupImg();
}
saveButton.addEventListener("click", addCardImage);

import Section from "./components/Section.js";
import Popup from "./components/Popup.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";