# **Projeto: Web Around - SPRINT 9 **

Bem-vindo ao **Web Around**, um projeto desenvolvido para praticar e aprimorar conceitos de desenvolvimento web com foco em HTML, CSS e JavaScript, seguindo as melhores práticas e padrões modernos.

---

## **Sobre o Projeto**
O **Web Around** é uma aplicação interativa que permite aos usuários personalizar seu perfil e adicionar ou visualizar locais com imagens e descrições. O projeto foi desenvolvido com foco em responsividade, modularidade e usabilidade, garantindo uma experiência fluida em dispositivos móveis e desktops.

Principais funcionalidades:
- Pop-ups interativos para edição de perfil e adição de locais.
- Validação de formulários com mensagens de erro visuais.
- Adição dinâmica de cartões de locais com suporte a imagens.
- Design responsivo que segue os princípios de acessibilidade.

---

## **Linha do Tempo do Projeto**
O projeto foi desenvolvido ao longo de três sprints principais, com evolução contínua em cada etapa.

### **Sprint 7: Fundação e Estrutura Base**
Nesta etapa inicial, o foco foi estabelecer os alicerces do projeto, priorizando a estruturação e o design responsivo:
- **Responsividade**: O layout foi configurado para se ajustar de 320px a 1280px, com adaptação automática do número de cartões exibidos por linha (1, 2 ou 3).
- **Metodologia BEM**: A organização dos arquivos CSS seguiu a metodologia BEM, garantindo modularidade e clareza.
- **Criação de pop-ups**: Implementação da caixa de diálogo "Editar perfil" com campos de entrada e botão "Salvar".
- **Estilização avançada**: Uso de `text-overflow: ellipsis` para lidar com textos longos nos campos "Nome" e "Sobre".
- **Interação básica**: Abertura e fechamento do pop-up com botões de edição e fechamento.

### **Sprint 8: Funcionalidades Dinâmicas**
Com a estrutura estabelecida, a segunda sprint focou na adição de interatividade e funcionalidades dinâmicas:
- **Cartões iniciais**: Seis cartões pré-definidos foram gerados dinamicamente com JavaScript.
- **Formulário para adicionar cartões**: Implementação do formulário para criação de novos cartões personalizados.
- **Recursos interativos**:
  - Botão "Curtir" funcional, alterando o estado visual ao ser clicado.
  - Exclusão de cartões com ícone de lixeira.
  - Pop-up para exibição ampliada de imagens ao clicar nos cartões.
- **Integração adaptativa**: Garantia de responsividade, mantendo largura máxima de 75vw e altura máxima de 75vh para as imagens nos pop-ups.

### **Sprint 9: Validação e Refatoração**
Na sprint atual, o objetivo foi aprimorar a usabilidade e a qualidade do código, com foco em validação e modularidade:
- **Validação de formulários**:
  - Campos obrigatórios com limites de caracteres específicos.
  - Verificação de URLs no formulário de "Novo Local".
  - Mensagens de erro exibidas abaixo dos campos inválidos.
  - Botões "Salvar" desativados até que todos os campos sejam válidos.
- **Melhorias nos pop-ups**:
  - Fechamento por clique na sobreposição e tecla **Esc**.
  - Resolução de problemas de estado persistente ao reabrir pop-ups.
- **Refatoração de código**:
  - Modularização da lógica de validação em `validate.js`.
  - Adoção de boas práticas de nomeação e estrutura de funções.

---

## **Tecnologias Utilizadas**
- **HTML5**: Estrutura semântica da aplicação.
- **CSS3**: Estilização com uso da metodologia **BEM** para organização e responsividade.
- **JavaScript (ES6+)**: Manipulação do DOM, validação de formulários e interação dinâmica.
- **normalize.css**: Padronização entre navegadores para consistência de estilo.

---

## **Estrutura do Projeto**

- **HTML**: Estrutura principal da aplicação, localizada no arquivo `index.html`. Contém a marcação semântica e referência a todos os componentes.
- **CSS**: Dividido em estilos globais (`index.css`) e componentes modulares na pasta `/blocks`, seguindo a metodologia **BEM**.
  - Inclui o `normalize.css` na pasta `vendor/` para garantir a consistência de estilos entre navegadores.
- **JavaScript**:
  - `index.js`: Gerencia a lógica interativa, incluindo abertura e fechamento de pop-ups, além de integração com `validate.js`.
  - `validate.js`: Responsável pela validação dinâmica de formulários, utilizando funções modulares e configuração personalizada.
- **Imagens e Fontes**:
  - **Imagens**: Localizadas na pasta `images/`, organizadas por funcionalidade (ícones, cartões e outros recursos visuais).
  - **Fontes**: Armazenadas na pasta `vendor/fonts/` com arquivos otimizados para web.

---

## **Publicação Online**

Confira a versão publicada do projeto no GitHub Pages:
[Web Around - GitHub Pages](https://fphellippe.github.io/web_project_around/)

---
