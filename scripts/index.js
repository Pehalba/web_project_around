import Card from "./Card.js";
import FormValidation from "./FormValidation.js";
import {
  popupProfile,
  popup,
  editbutton,
  closebutton,
  closePopupImgButton,
  saveButtonProfile,
  form,
  inputName,
  inputProfission,
  profileInfo,
  profileProfission,
  buttonHeartLike,
  popupImage,
  addImageButton,
  inputTittle,
  inputUrl,
  saveButton,
  cards,
  closePopupImgFull,
  imgFull,
  openImgFull,
  openImgFullTittle,
  openPopup,
  closePopup,
  closePopWithEsc,
  openPopupImg,
  closePopupImg,
  closeImgFull,
} from "./utils.js";

// Abrir/fechar popperfil

//Abrir/ popImgFull

export function openFullImagPopup() {
  imgFull.classList.add("popup_change_display");
}

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
