function enableValidation(config) {
  const formElements = document.querySelectorAll(config.formSelector);
  formElements.forEach((formElement) => {
    const inputs = formElement.querySelectorAll(config.inputSelector);
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        const formButton = formElement.querySelector(
          config.submitButtonSelector
        );
        const isValid = input.checkValidity();
        const errorElement = input.nextElementSibling;
        if (isValid) {
          errorElement.textContent = "";
          errorElement.classList.remove(config.errorClass);
          input.classList.remove(config.inputErrorClass);
        } else {
          const errorMessage = input.validationMessage;
          errorElement.textContent = errorMessage;
          errorElement.classList.add(config.errorClass);
          input.classList.add(config.inputErrorClass);
          formButton.disabled = true;
        }
        const isFormValid = formElement.checkValidity();
        if (isFormValid) {
          formButton.disabled = false;
        }
      });
    });
  });
}

// Valida todas as configurações

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "invalid-input",
  errorClass: "input__errorMessage_block",
});
