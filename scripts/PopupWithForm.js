// PopupWithForm.js
import PopUp from "./Popup.js";

export default class PopupWithForm extends PopUp {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector("form");
    this._submitButton = this._form.querySelector(".popup__button-save");
  }

  _getInputValues() {
    const inputs = this._form.querySelectorAll(".popup__input");
    const inputValues = {};
    inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  _setLoadingState(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Salvando...";
      this._submitButton.disabled = true;
    } else {
      this._submitButton.textContent = "Salvar";
      this._submitButton.disabled = false;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._setLoadingState(true);

      this._handleFormSubmit(this._getInputValues())
        .then(() => {
          this.close();
        })
        .catch((err) => {
          console.error("Form submission error:", err);
        })
        .finally(() => {
          this._setLoadingState(false);
        });
    });
  }

  close() {
    super.close();
    this._form.reset();
    this._setLoadingState(false);
  }
}
