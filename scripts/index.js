//seleciona botão de ditar
const buttonOpenProfile = document.querySelector(".profile__button-edit");

//clica no botão editar e abrir pop removendo display none

buttonOpenProfile.addEventListener("click", () => {
  //função para remover display none
  const popupProfile = document.querySelector(".popup");
  popupProfile.classList.add("popup__opened");
});

//seleciona boão fechar
const buttonCloseProfile = document.querySelector(".popup__button-close");

//clicar no botão de fechar, e adicionar display none

buttonCloseProfile.addEventListener("click", () => {
  const popupCloseProfile = document.querySelector(".popup");
  popupCloseProfile.classList.remove("popup__opened");
});

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
