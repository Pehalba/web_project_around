export default class FormValidation {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputs = Array.from(
      formElement.querySelectorAll(this._config.inputSelector)
    );
  }

  _showErrorMessage(input) {
    const errorMessage = input.validationMessage;
    const errorMsgElement = input.nextElementSibling;
    errorMsgElement.textContent = errorMessage;
    errorMsgElement.classList.add(this._config.errorClass);
    input.classList.add(this._config.inputErrorClass);
  }

  _hideErrorMessage(input) {
    const errorMsgElement = input.nextElementSibling;
    errorMsgElement.textContent = "";
    errorMsgElement.classList.remove(this._config.errorClass);
    input.classList.remove(this._config.inputErrorClass);
  }

  _enableButton() {
    const button = this._formElement.querySelector(
      this._config.submitButtonSelector
    );
    button.classList.remove(this._config.inactiveButtonClass);
    button.removeAttribute("disabled");
  }

  _disableButton() {
    const button = this._formElement.querySelector(
      this._config.submitButtonSelector
    );
    button.classList.add(this._config.inactiveButtonClass);
    button.setAttribute("disabled", true);
  }

  _checkValidation(event) {
    const input = event.target;
    const isValid = input.validity.valid;

    if (!isValid) {
      this._showErrorMessage(input);
    } else {
      this._hideErrorMessage(input);
    }

    const isFormValid = this._inputs.every((input) => input.validity.valid); // Verificando se todos os inputs são válidos

    if (isFormValid) {
      this._enableButton();
    } else {
      this._disableButton();
    }
  }

  _setEventListeners() {
    this._inputs.forEach((input) => {
      input.addEventListener("input", (event) => {
        this._checkValidation(event);
      });
    });
  }

  // Public method
  enableValidation() {
    this._setEventListeners();
    this._disableButton(); // Garante que o botão comece desabilitado
  }
}

// Configuration object
const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "invalid-input",
  errorClass: "input__errorMessage",
};

// Enabling validation for each form
const forms = document.querySelectorAll(config.formSelector);
forms.forEach((formElement) => {
  const formValidationInstance = new FormValidation(config, formElement);
  formValidationInstance.enableValidation();
});
