// index.js
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";
import UserInfo from "./UserInfo.js";
import Api from "./Api.js";

// Configuração de validação
const config = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "invalid-input",
  errorClass: "input__errorMessage_block",
};

// Instância da API
const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "eb67a128-23bb-418b-8a19-57c71517e442",
    "Content-Type": "application/json",
  },
});

// Gerenciamento de informações do usuário
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  bioSelector: ".profile__bio",
});

// Função para carregar dados iniciais
function loadInitialData() {
  return Promise.all([api.getUserInfo(), api.getInitialCards()]);
}

// Carregar dados iniciais
loadInitialData()
  .then(([user, cards]) => {
    // Update user info
    userInfo.setUserInfo({ name: user.name, bio: user.about });
    document.querySelector(".profile__avatar").src = "./images/image.jpg";

    // Render cards with user ID
    cards.forEach((card) => {
      cardSection.addItem(createCard(card, user._id));
    });
  })
  .catch((err) => {
    console.error("Failed to load initial data:", err);
  });

// Popup de edição de perfil
const profilePopup = new PopupWithForm(".popup", (formData) => {
  // Send updated profile data to the server
  return api
    .updateProfile({
      name: formData.nome,
      about: formData.sobre,
    })
    .then((updatedUser) => {
      // Update the page with the server response
      userInfo.setUserInfo({ name: updatedUser.name, bio: updatedUser.about });
    })
    .catch((err) => {
      console.error("Failed to update profile:", err);
      throw err; // Re-throw to trigger the catch in PopupWithForm
    });
});
profilePopup.setEventListeners();

// Evento para abrir o popup de edição de perfil
document
  .querySelector(".profile__edit-button")
  .addEventListener("click", () => {
    const userInfoData = userInfo.getUserInfo();
    document.querySelector("#popup__input-name").value = userInfoData.name;
    document.querySelector("#popup__input-about").value = userInfoData.bio;
    profilePopup.open();
  });

// Popup para visualização de imagens
const imagePopup = new PopupWithImage(".element__image-popup");
imagePopup.setEventListeners(); // Certifique-se de chamar setEventListeners

// Popup para adição de cartões
const addCardPopup = new PopupWithForm(".new__img-box", (formData) => {
  // Send new card data to the server

  // Clean the data by trimming whitespace
  const cleanData = {
    name: formData.titulo.trim(),
    link: formData.url.trim(),
  };

  return api
    .addCard(cleanData)
    .then(async (newCard) => {
      // Add the new card to the page using the server response
      const userId = await getCurrentUserId();
      if (userId) {
        const cardElement = createCard(newCard, userId);
        cardSection.addItem(cardElement);
      }
    })
    .catch((err) => {
      console.error("Failed to add card:", err);
      throw err; // Re-throw to trigger the catch in PopupWithForm
    });
});
addCardPopup.setEventListeners();

// Evento para abrir o popup de adição de cartões
document.querySelector(".profile__add").addEventListener("click", () => {
  addCardPopup.open();
});

// Evento para abrir o popup de edição de avatar
document.querySelector(".profile__avatar").addEventListener("click", () => {
  avatarPopup.open();
});

// Popup para confirmação de exclusão
const deleteCardPopup = new PopupWithConfirmation(
  ".popup__delete-confirmation",
  () => {
    if (deleteCardPopup._currentCard) {
      api
        .deleteCard(deleteCardPopup._currentCard._id)
        .then(() => {
          deleteCardPopup._currentCard.deleteCard();
        })
        .catch((err) => {
          console.error("Failed to delete card:", err);
        });
    }
  }
);
deleteCardPopup.setEventListeners();

// Função para obter o ID do usuário atual
async function getCurrentUserId() {
  try {
    const user = await api.getUserInfo();
    return user._id;
  } catch (err) {
    console.error("Failed to get user ID:", err);
    return null;
  }
}

// Função para gerenciar a exclusão de cartões
function handleDeleteCard(card) {
  return api.deleteCard(card._id);
}

// Popup para edição de avatar
const avatarPopup = new PopupWithForm(".popup__avatar-edit", (formData) => {
  // Send updated avatar to the server
  return api
    .updateAvatar({
      avatar: formData.avatar,
    })
    .then((updatedUser) => {
      // Update the avatar on the page
      document.querySelector(".profile__avatar").src = updatedUser.avatar;
    })
    .catch((err) => {
      console.error("Failed to update avatar:", err);
      throw err; // Re-throw to trigger the catch in PopupWithForm
    });
});
avatarPopup.setEventListeners();

// Função para criar um cartão
function createCard(data, userId) {
  const card = new Card(
    data,
    ".card-template",
    (cardData) => {
      imagePopup.open(cardData);
    },
    (cardInstance) => {
      // Abrir popup de confirmação e, se confirmado, deletar via API
      deleteCardPopup._currentCard = cardInstance;
      deleteCardPopup.open();
    },
    (cardInstance, isLiked) => {
      // Like/Unlike via API
      if (isLiked) {
        return api.unlikeCard(cardInstance._id);
      } else {
        return api.likeCard(cardInstance._id);
      }
    },
    userId
  );
  return card.getCardElement();
}

// Renderização inicial dos cartões
const cardSection = new Section(
  {
    items: [], // Start with no items; will load from server
    renderer: (item, userId) => {
      const cardElement = createCard(item, userId);
      cardSection.addItem(cardElement);
    },
  },
  ".elements"
);

// Validação dos formulários
const profileValidator = new FormValidator(
  config,
  document.querySelector(".popup__form")
);
profileValidator.enableValidation();

const addCardValidator = new FormValidator(
  config,
  document.querySelector(".new__img-form")
);
addCardValidator.enableValidation();

const avatarValidator = new FormValidator(
  config,
  document.querySelector("#popup__avatar-form")
);
avatarValidator.enableValidation();
