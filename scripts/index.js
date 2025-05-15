import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
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
import Section from "./components/Section.js";
import Popup from "./components/Popup.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";

// Instância do UserInfo com seus seletores personalizados
const userInfo = new UserInfo(profileInfo, profileProfission);

// Configuração da validação de formulários
const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
  popupButton: ".popup__button",
};

// Validador do formulário de perfil
const profileFormValidator = new FormValidator(config, form);
profileFormValidator.enableValidation();

// Instância do popup de imagem
const imagePopup = new PopupWithImage(popupImage);
imagePopup.setEventListeners();

// Função para criar cards
function createCard(data) {
  const card = new Card(data, "#card-template", (name, link) => {
    imagePopup.open(name, link);
  });
  return card.generateCard();
}

// Seção que contém os cards
const cardSection = new Section(
  {
    items: cards,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardSection.addItem(cardElement);
    },
  },
  ".elements"
);
cardSection.renderItems();

// Instância do popup de formulário de perfil
const profilePopup = new PopupWithForm(popupProfile, (formData) => {
  userInfo.setUserInfo(formData.name, formData.about);
  profilePopup.close();
});
profilePopup.setEventListeners();

// Evento para abrir popup de perfil com dados atuais
editbutton.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  inputName.value = name;
  inputProfission.value = about;
  profilePopup.open();
});

// Evento de ESC, click fora, etc.
closePopWithEsc(popupProfile);
closePopWithEsc(popupImage);
