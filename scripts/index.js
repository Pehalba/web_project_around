//seleciona botão de ditar
const buttonOpenProfile = document.querySelector(".profile__button-edit");

function openPopup(popupClass) {
  const popup = document.querySelector(popupClass);
  popup.classList.add("popup__opened");
}

buttonOpenProfile.addEventListener("click", () => openPopup(".popup"));

//seleciona boão fechar
const buttonCloseProfile = document.querySelector(".popup__button-close");

//clicar no botão de fechar, e adicionar display none

function closePopup(popupClass) {
  const popup = document.querySelector(popupClass);
  popup.classList.remove("popup__opened");
}

buttonCloseProfile.addEventListener("click", () => closePopup(".popup"));

// Vamos encontrar o formulário no DOM
const formElement = document.querySelector(".popup__form");

// Em seguida vem o handler do submit
// ainda não vai enviar para lugar nenhum

// Observe que o nome da função começa com um verbo
// e descreve exatamente o que a função faz
function handleProfileFormSubmit(evt) {
  // Esta linha impede o navegador
  // de enviar o formulário da forma padrão.
  evt.preventDefault();
  // Fazendo isso, podemos definir nossa própria forma de enviar o formulário.
  // Explicaremos em mais detalhes posteriormente.

  // Vamos encontrar os campos de formulário do DOM
  const nameInput = document.querySelector(".popup__name");
  const jobInput = document.querySelector(".popup__job");

  // Pegue os valores de cada campo do valor da propriedade correspondente

  const name = nameInput.value;
  const job = jobInput.value;

  // Selecione os elementos aos quais os valores dos campos serão inseridos
  const nameElement = document.querySelector(".profile__name");
  const jobElement = document.querySelector(".profile__description");
  // Insira novos valores usando a
  // propriedade textContent
  nameElement.textContent = name;
  jobElement.textContent = job;

  const popupCloseProfile = document.querySelector(".popup");
  popupCloseProfile.classList.remove("popup__opened");
}

// Conecte o handler ao formulário:
// ele vai observar o evento de submit
formElement.addEventListener("submit", handleProfileFormSubmit);

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

const elementList = document.querySelector(".feed");

//cria cartões
function createCards(element) {
  //pega o template
  const cardTemplate = document.querySelector(".info__template").content;
  // faz uma cópia
  const cardElement = cardTemplate.querySelector(".feed__card").cloneNode(true);

  //pegar elementos dentro da copia
  const cardImage = cardElement.querySelector(".feed__photo");
  const cardText = cardElement.querySelector(".feed__text");
  const likeButton = cardElement.querySelector(".feed_like-button");
  const deleteButton = cardElement.querySelector(".delete-button"); // Botão de lixeira

  // popular card
  cardImage.src = element.link;
  cardImage.alt = element.name;
  cardText.textContent = element.name;

  // Adicionar funcionalidade de deletar ao botão de lixeira
  deleteButton.addEventListener("click", () => {
    cardElement.remove(); // Remove o cartão quando a lixeira for clicada
  });

  //adicionar Card no html
  elementList.prepend(cardElement);

  let favoritado = false;

  likeButton.addEventListener("click", () => {
    if (!favoritado) {
      likeButton.src = "./images/like.svg";
      favoritado = true;
    } else {
      likeButton.src = "./images/likeActived.svg";
      favoritado = false;
    }
  });
}

initialCards.forEach(createCards);

//popup de adicionar fotos
const buttonOpenAdd = document.querySelector(".profile__button-add");

buttonOpenAdd.addEventListener("click", () => openPopup(".popup_add"));

const buttonCloseAdd = document.querySelector(".popup__button-close-add");
buttonCloseAdd.addEventListener("click", () => closePopup(".popup_add"));

const popupAdd = document.querySelector(".popup_add");

const formAddCard = popupAdd.querySelector(".popup__form");
formAddCard.addEventListener("submit", (evt) => {
  // atrasa o carregamento
  evt.preventDefault();
  //pega os valores do input
  const inputName = formAddCard.querySelector(".popup__name");
  const inputLink = formAddCard.querySelector(".popup__link");

  //criar objeto contendo os valores
  const card = {
    name: inputName.value,
    link: inputLink.value,
  };
  createCards(card);
  closePopup(".popup_add");
});

function deleteCard(event) {
  const card = event.target.closest(".feed__card"); // Seleciona o cartão mais próximo da lixeira clicada
  card.remove(); // Remove o cartão
}

// Seleciona todas as lixeiras nos cartões
const deleteButtons = document.querySelectorAll(".delete-button");

// Adiciona o evento de clique para cada lixeira
deleteButtons.forEach((button) => {
  button.addEventListener("click", deleteCard);
});
