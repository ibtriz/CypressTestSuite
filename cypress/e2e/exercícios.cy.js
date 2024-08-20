/*Exercícios
Refatore os testes já realizados aplicando o método beforeEach().*/
beforeEach('Pré Condição', () => {
  cy.visit('https://adopet-frontend-cypress.vercel.app/');
});

describe('Pagina de cadastro', () => {
  it('Deve preencher os dados corretos e cadastrar usuário', () => {
  cy.contains('a', 'Cadastrar').click();
  cy.get('input[name="nome"]').type('Ana Cristina');
  cy.get('input[name="email"]').type('ana@email.com');
  cy.get('input[name="password"]').type('Pass123456');
  cy.get('input[name="confirm_password"]').type('Pass123456');
  cy.contains('button', 'Cadastrar').click();
})
})

//Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”;
describe('Ver pets disponíveis para adoção', () => {
  it('botão: Ver pets disponíveis para adoção', () => {
  cy.contains('a', 'Ver pets disponíveis para adoção').click();
})
})

//Visite a página de principal do AdoPet e teste os botões header;
describe('Teste dos botões header', () => {
  it('Teste dos botões header', () => {
  cy.get('a.header__home').click();
  cy.get('a.header__message').click();
})
})

//Visite a página de /login do Adopet;
describe('Teste da página de login', () => {
  it('Teste da página de login', () => {
  cy.get('a.header__home').click();
  cy.contains('a', 'Fazer login').click();
  cy.get('input[name="email"]').type('ana@email.com');
  cy.get('input[name="password"]').type('Pass123456');
  cy.contains('button', 'Entrar').click();
})
})

//Visite a página de /home do Adopet;
describe('Teste da página de home', () => {
  it('Teste da página de home', () => {
  cy.get('a.header__home').click();
})
})
//Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.
describe('Falar com o responsável', () => {
  it('botão: Falar com o responsável', () => {
    cy.get('.button').click();
    cy.get(':nth-child(2) > .card__contact').click();
})
})

//Agora é com você! A partir do Roteiro de testes abaixo, escreva um teste e complemente sua suíte no login:
//Visite a página principal do AdoPet e verifique se o title com o texto “AdoPet” está presente no html.

describe('Testes na Página principal', () => {
  it('deve clicar no botão ‘Ver pets disponíveis para adoção”', () => {
    cy.get('.button').click();
      cy.title().should('eq', 'AdoPet');
  });
});

//Visite a página principal do AdoPet e verifique se o texto “Quem ama adota!” está presente no html.
describe('Testes na Página principal', () => {
  cy.get('.button').click();
  it('deve verificar texto “Quem ama adota!”', () => {
    cy.contains('Quem ama adota!').should('exist');
  });
});
//Visite a página principal do AdoPet e verifique se o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html.
//Teste o login com um fluxo diferente: Visite a página principal do Adopet, clique no botão de ícone de mensagem no header e escreva nome e senha válidos na página de login. */
