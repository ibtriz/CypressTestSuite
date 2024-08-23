/*Exercícios
Refatore os testes já realizados aplicando o método beforeEach().
Visite a página principal do AdoPet e verifique se o title com o texto “AdoPet” está presente no html.
Visite a página principal do AdoPet e verifique se o texto “Quem ama adota!” está presente no html.
Visite a página principal do AdoPet e verifique se o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html.
Teste o login com um fluxo diferente: Visite a página principal do Adopet, clique no botão de ícone de mensagem no header e escreva nome e senha válidos na página de login.*/

beforeEach(() => {
  cy.visit('https://adopet-frontend-cypress.vercel.app/');
});

describe('Página de cadastro', () => {
  it('Deve preencher os dados corretos e cadastrar usuário', () => {
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Ana Cristina');
    cy.get('input[name="email"]').type('ana@email.com');
    cy.get('input[name="password"]').type('Pass123456');
    cy.get('input[name="confirm_password"]').type('Pass123456');
    cy.contains('button', 'Cadastrar').click();
  });
});

describe('Ver pets disponíveis para adoção', () => {
  it('Deve clicar no botão "Ver pets disponíveis para adoção"', () => {
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
  });
});

describe('Teste dos botões header', () => {
  it('Deve testar os botões header', () => {
    cy.get('a.header__home').click();
    cy.get('a.header__message').click();
  });
});

describe('Teste da página de login', () => {
  it('Deve testar a página de login', () => {
    cy.contains('a', 'Fazer login').click();
    cy.get('input[name="email"]').type('ana@email.com');
    cy.get('input[name="password"]').type('Pass123456');
    cy.contains('button', 'Entrar').click();
  });
});

describe('Teste da página de home', () => {
  it('Deve testar a página de home', () => {
    cy.get('a.header__home').click();
  });
});

describe('Falar com o responsável', () => {
  it('Deve clicar no botão "Falar com o responsável"', () => {
    cy.get('.button').click();
    cy.get(':nth-child(2) > .card__contact').click();
  });
});

describe('Testes na Página principal', () => {
  it('Deve verificar o título da página "AdoPet"', () => {
    cy.title().should('eq', 'AdoPet');
  });

  it('Deve verificar se o texto "Quem ama adota!" está presente', () => {
    cy.contains('Quem ama adota!').should('exist');
  });

  it('Deve verificar se o texto "Adotar pode mudar uma vida..." está presente', () => {
    cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('exist');
  });

  it('Deve testar o login através do ícone de mensagem no header', () => {
    cy.get('a.header__message').click();
    cy.get('input[name="email"]').type('ana@email.com');
    cy.get('input[name="password"]').type('Pass123456');
    cy.contains('button', 'Entrar').click();
  });
});
