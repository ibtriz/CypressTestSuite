describe('Pagina de cadastro', () => {
    it('Deve preencher os dados corretos e cadastrar usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Ana Cristina');
    cy.get('[data-test="input-email"]').type('ana@email.com');
    cy.get('[data-test="input-password"]').type('Pass123456');
    cy.get('[data-test="input-confirm-password"]').type('Pass123456');
    cy.get('[data-test="submit-button"]').click();
  })
})