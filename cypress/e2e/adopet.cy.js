describe('Teste de cadastro', () => {
    it('Cadastro de usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
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
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
  })
})

//Visite a página de principal do AdoPet e teste os botões header;
describe('Teste dos botões header', () => {
    it('Teste dos botões header', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('a.header__home').click();
    cy.get('a.header__message').click();
  })
})

//Visite a página de /login do Adopet;
describe('Teste da página de login', () => {
    it('Teste da página de login', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
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
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get('a.header__home').click();
  })
})
//Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.
describe('Falar com o responsável', () => {
    it('botão: Falar com o responsável', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.contains('h4', 'Dunga') // Seleciona o card que contém o nome "Dunga"
    cy.contains('a', 'Falar com responsável').click();
  })
})