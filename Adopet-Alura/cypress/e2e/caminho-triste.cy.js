/*Agora é com você! A partir do Roteiro de testes abaixo, escreva um teste e complemente sua suíte no login:

Funcionalidade: Login no site Adopet

Cenário: Falha no login do sistema

Passos:

O usuário acessa a página de login.
O usuário insere um e-mail e senha fora do padrão aceito nos campos correspondentes.
O usuário clica no botão de login.
Resultados Esperados:

O sistema valida as credenciais fornecidas.
O sistema exibe mensagens de erro específicas para o e-mail e senha inseridos incorretamente, como: "Por favor, verifique o e-mail digitado" e/ou "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres".
Regra de Negócio:

O e-mail deve ter um formato válido.
A senha deve conter pelo menos uma letra maiuscula, um número e ter entre 6 e 15 caracteres.
Dica: Utilize o método .should('exist') para verificar se a mensagem de erro foi exibida na tela.*/

beforeEach('Pré Condição', () => {
  cy.visit('https://adopet-frontend-cypress.vercel.app/login');
  cy.get('.header__home').click();
});

describe('Login no site Adopet', () => { // Describe contém a funcionalidade a ser testada
  it('Falha no login do sistema', () => { //it contém o cenário a ser testado
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Ana Cristina');
    cy.get('[data-test="input-email"]').type('not-an-email');
    cy.get('[data-test="input-password"]').type('not-a-password');
    cy.get('[data-test="input-confirm-password"]').type('not-a-password');
      cy.contains('Por favor, verifique o email digitado').should('be.visible');
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible'); //TODO: Validar se a mensagem de erro foi exibida na tela
  })
})