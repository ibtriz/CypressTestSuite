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