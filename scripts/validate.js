/*function showErrorMessage(input) {
  const errorMessage = input.validationMessage;
  const errorMsgElement = input.nextElementSibling;
  errorMsgElement.textContent = errorMessage;
  errorMsgElement.classList.add(config.errorClass);
  input.classList.add(config.inputErrorClass);
}

function hideErrorMessage(input) {
  const errorMsgElement = input.nextElementSibling;
  errorMsgElement.textContent = "";
  errorMsgElement.classList.remove(config.errorClass);
  input.classList.remove(config.inputErrorClass);
}

function enableButton(form) {
  const button = form.querySelector(config.submitButtonSelector);
  button.classList.remove(config.inactiveButtonClass);
  button.removeAttribute("disabled", true);
}

function disableButton(form) {
  const button = form.querySelector(config.submitButtonSelector);
  button.classList.add("formButton_disabled");
  button.setAttribute("disabled", true);
}

function checkValidation(form, event) {
  const input = event.target;
  const isValid = input.validity.valid;

  if (!isValid) {
    showErrorMessage(input);
    disableButton(form);
  } else {
    hideErrorMessage(input);
  }

  const isFormValid = Array.from(form.elements).every(
    (input) => input.validity.valid
  );

  if (isFormValid) {
    enableButton(form);
  } else {
    disableButton(form);
  }
}

function enableValidation() {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  for (const form of forms) {
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    for (const input of inputs) {
      input.addEventListener("input", (event) => {
        checkValidation(form, event);
      });
    }
  }
}

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "invalid-input",
  errorClass: "input__errorMessage_block",
};

enableValidation();

/*function enableValidation(config) {
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

// Valide todas as configurações

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "invalid-input",
  errorClass: "input__errorMessage_block",
}); */
