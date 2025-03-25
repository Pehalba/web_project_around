// Variaveis PopuPerfil
export const popupProfile = document.querySelector(".popup-profile");
export const popup = document.querySelector(".popup");
export const editbutton = document.querySelector(".profile__info-button-edit");
export const closebutton = document.querySelector(".popup__form-button-close");
export const closePopupImgButton = document.querySelector(
  ".popup__form-button-img"
);
export const saveButtonProfile = document.querySelector(
  ".popup__form-button-save"
);
export const form = document.querySelector(".popup__form");
export const inputName = form.querySelector("#name");
export const inputProfission = form.querySelector("#profission");
export const profileInfo = document.querySelector(".profile__info-name");
export const profileProfission = document.querySelector(
  ".profile__info-profession"
);
export const buttonHeartLike = document.querySelectorAll(
  ".elements__element-button-heart"
);
export const popupImage = document.querySelector(".popup-image");
export const addImageButton = document.querySelector(".profile__button");
export const inputTittle = document.querySelector("#tittle");
export const inputUrl = document.querySelector("#url");
export const saveButton = document.querySelector("#add-button");
export const cards = document.querySelector(".elements");
export const closePopupImgFull = document.querySelector(
  ".popup__imgfull-button-close"
);
export const imgFull = document.querySelector(".popup__imgfull");
export const openImgFull = document.querySelector(".popup__imgfull-imgbig");
export const openImgFullTittle = document.querySelector(
  ".popup__imgfull-tittle"
);

// Abrir/fechar popperfil
export function openPopup() {
  popup.classList.add("popup_change_display");
}
editbutton.addEventListener("click", openPopup);

export function closePopup() {
  popup.classList.remove("popup_change_display");
}
closebutton.addEventListener("click", (event) => {
  event.preventDefault();
  closePopup();
});

//Fechar pop with ESCAPE
export function closePopWithEsc(event) {
  if (event.key == "Escape") {
    const popupAll = document.querySelectorAll(".popup");
    popupAll.forEach((popup) => {
      popup.classList.remove("popup_change_display");
    });
  }
}
document.addEventListener("keydown", closePopWithEsc);

// Abrir/fechar Popup Cards
export function openPopupImg() {
  popupImage.classList.add("popup_change_display");
}
addImageButton.addEventListener("click", openPopupImg);

export function closePopupImg() {
  popupImage.classList.remove("popup_change_display");
}
closePopupImgButton.addEventListener("click", (event) => {
  event.preventDefault();
  closePopupImg();
});

//Fechar PopupIMGfull

export function closeImgFull() {
  imgFull.classList.remove("popup_change_display");
}
closePopupImgFull.addEventListener("click", closeImgFull);
