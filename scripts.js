const form = document.querySelector("form");
const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mensagem = document.querySelector("#mensagem");
const errorMessages = document.querySelectorAll(".error-message");


form.addEventListener("submit", function (event) {
  event.preventDefault(); //  é usado para evitar o comportamento padrão de recarregar a página ao submeter o formulário
  resetErrors();
  validateInputs();
});


function resetErrors() {
  errorMessages.forEach((errorMessage) => {
    errorMessage.innerText = "";
  });
  nome.parentElement.classList.remove("error");
  email.parentElement.classList.remove("error");
  assunto.parentElement.classList.remove("error");
  mensagem.parentElement.classList.remove("error");
}


function validateInputs() {
  const nomeValue = nome.value.trim();
  const emailValue = email.value.trim();
  const assuntoValue = assunto.value.trim();
  const mensagemValue = mensagem.value.trim();

  if (nomeValue === "") {
    setError(nome, "Nome não pode ficar em branco");
  }

  if (emailValue === "") {
    setError(email, "E-mail não pode ficar em branco");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "E-mail inválido");
  }

  if (assuntoValue === "") {
    setError(assunto, "Assunto não pode ficar em branco");
  }

  if (mensagemValue === "") {
    setError(mensagem, "Mensagem não pode ficar em branco");
  }
}

function setError(input, errorMessage) {
  const errorMessageElement = input.nextElementSibling;
  errorMessageElement.innerText = errorMessage;
  input.parentElement.classList.add("error");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}






























// const form = document.querySelector("form");: Esta linha está selecionando o primeiro elemento <form> no documento HTML e armazenando-o na variável form.
// const nome = document.querySelector("#nome");
// const email = document.querySelector("#email");
// const assunto = document.querySelector("#assunto");, 
// const mensagem = document.querySelector("#mensagem");

//  Essas linhas estão selecionando elementos do DOM com os IDs específicos ("nome", "email", "assunto", "mensagem")
//  e armazenando-os em variáveis correspondentes (nome, email, assunto, mensagem).
//  Presume-se que esses elementos sejam campos de entrada (input ou textarea) dentro do formulário.

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// const errorMessages = document.querySelectorAll(".error-message");:

//  Aqui está sendo selecionado um conjunto de elementos que possuem a classe CSS "error-message" e armazenando-os em uma NodeList na variável errorMessages. 
// Esses elementos provavelmente representam onde as mensagens de erro serão exibidas no formulário.

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// form.addEventListener("submit", function (event) { /* ... */ });

//  Um event listener é adicionado ao formulário (form) para escutar o evento de submissão (submit). Quando o formulário é submetido, 
//  a função anônima definida a seguir será executada.


// event.preventDefault();
//  Dentro da função do event listener de submissão do formulário, event.preventDefault(); 
//  é usado para evitar o comportamento padrão de recarregar a página ao submeter o formulário


// resetErrors();: Chama a função resetErrors() para limpar ou redefinir quaisquer erros ou mensagens de erro anteriores associados aos campos do formulário.
// validateInputs();: Chama a função validateInputs() para realizar a validação dos campos do formulário.


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


// As funções resetErrors() e validateInputs():
//  Elas são responsáveis por limpar mensagens de erro anteriores e validar os campos do formulário, respectivamente.


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


// function setError(input, errorMessage) { /* ... */ }:
//  Esta função recebe um campo de entrada (input) e uma mensagem de erro.
//  Ela é responsável por exibir a mensagem de erro passada no elemento HTML que segue o campo de entrada (presumivelmente um elemento de mensagem de erro).


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// function isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }:
//  Esta função recebe um email como argumento e verifica se o formato do email é válido usando uma expressão regular.
//  Ela retorna true se o formato do email for válido e false caso contrário.



// Resumidamente, este código implementa uma validação de formulário simples, 
// verificando se os campos obrigatórios não estão vazios e se o campo de email possui um formato válido ao tentar submeter o formulário. 
// Ele também lida com a exibição de mensagens de erro associadas aos campos do formulário e impede a submissão caso existam erros de validação.