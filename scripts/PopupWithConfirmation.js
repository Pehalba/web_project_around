import PopUp from "./Popup.js";

export default class PopupWithConfirmation extends PopUp {
  constructor(popupSelector, handleConfirm) {
    super(popupSelector);
    this._handleConfirm = handleConfirm;
    this._confirmButton = this._popup.querySelector(
      ".popup__delete-confirm-button"
    );
  }

  setEventListeners() {
    super.setEventListeners();

    // Add event listener for confirm button
    this._confirmButton.addEventListener("click", () => {
      this._handleConfirm();
      this.close();
    });
  }
}
