export default class Card {
  constructor(
    data,
    templateSelector,
    handleCardClick,
    handleDeleteCard,
    handleLikeToggle,
    currentUserId
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id; // Card ID from server
    this._ownerId = data.owner; // Owner ID from server
    this._isLiked = data.isLiked || false; // Use server's isLiked property
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeToggle = handleLikeToggle;
    this._currentUserId = currentUserId;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardTemplate;
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () =>
      this._handleCardClick({ link: this._link, name: this._name })
    );
    this._likeButton.addEventListener("click", () => this._toggleLike());

    // Only show delete button if card belongs to current user
    if (this._ownerId === this._currentUserId) {
      this._deleteButton.addEventListener("click", () =>
        this._handleDeleteCard(this)
      );
    } else {
      this._deleteButton.style.display = "none";
    }
  }

  // Alterna o estado do like no servidor
  _toggleLike() {
    this._handleLikeToggle(this, this._isLiked)
      .then((updatedCard) => {
        this._isLiked = updatedCard.isLiked;
        if (this._isLiked) {
          this._likeButton.classList.add("element__like_active");
        } else {
          this._likeButton.classList.remove("element__like_active");
        }
      })
      .catch((err) => {
        console.error("Failed to toggle like:", err);
      });
  }

  // Deleta o cartão do servidor
  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  getCardElement() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".element__image");
    this._likeButton = this._element.querySelector(".element__like");
    this._deleteButton = this._element.querySelector(".element__trash-icon");

    // Dados do cartão
    this._element.querySelector(".element__name").textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    // Estado inicial do like baseado no servidor
    if (this._isLiked) {
      this._likeButton.classList.add("element__like_active");
    }

    this._setEventListeners();
    return this._element;
  }
}
