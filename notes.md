# Quality Assurance

### **Cenários de Teste e Procedimentos**

- **Cenários de Teste**: Descrevem situações específicas que devem ser verificadas para garantir que o software funcione conforme esperado. Cada cenário é baseado em uma regra de negócio ou requisito do sistema.
- **Procedimentos de Teste**: Consistem em passos sequenciais que devem ser seguidos para executar um cenário de teste. Eles incluem ações do usuário, entradas no sistema, e verificações necessárias para garantir que o software funcione corretamente.
- **Regras de Negócio**: São condições específicas que o sistema deve seguir. Durante o teste, se um passo revelar uma nova condição, isso pode gerar uma regra adicional que precisa ser documentada e testada.

### **Tabelas de Decisão para Testes**

- **O que são Tabelas de Decisão?**
    - Uma ferramenta eficaz para mapear e organizar testes, especialmente quando há várias condições a serem verificadas.
- **Como Funciona?**
    - **Estrutura**: Cada linha representa uma condição (ou regra de negócio), e cada coluna representa um conjunto específico de condições e seus resultados.
- **Quando Usar?**
    - Útil em situações onde múltiplas regras de negócio interagem, ou onde as decisões no sistema são baseadas em várias condições simultâneas.

### **Planejamento de Testes**

- **Mapeamento dos Testes**:
    - Identifique todos os cenários críticos que precisam ser validados para garantir a qualidade do software.
    - Utilize abordagens como análise de risco para priorizar os testes mais importantes.
- **Estratégia de Teste**:
    - Defina a abordagem geral, incluindo quais tipos de testes serão executados (ex: testes manuais, automação, testes de regressão, etc.).
    - Estabeleça critérios claros para entrada e saída de testes, garantindo que os testes sejam consistentes e repetíveis.

### **Execução e Análise de Testes**

- **Execução dos Testes**:
    - Siga os procedimentos planejados para executar cada cenário de teste. Registre os resultados, incluindo qualquer comportamento inesperado ou falha.
- **Análise de Resultados**:
    - Revise os resultados dos testes para identificar defeitos e áreas que necessitam de melhorias.
    - Comunique os resultados à equipe de desenvolvimento, incluindo relatórios detalhados das falhas encontradas e sugestões para correção.

### **Pirâmide de Testes**

- **Definição**:
    - Uma estratégia visual para organizar diferentes tipos de testes em um projeto de software, baseada na quantidade e complexidade.
- **Estrutura**:
    - **Base**: Testes de Unidade (executados por desenvolvedores, focados em componentes isolados do sistema).
    - **Meio**: Testes de Integração (validam a interação entre diferentes componentes ou módulos).
    - **Topo**: Testes End-to-End (E2E) (simulam o comportamento do usuário final para garantir que todo o sistema funcione corretamente).
- **Objetivo**:
    - Minimizar o número de testes E2E, pois são mais complexos e demorados, enquanto maximizando os testes de unidade e integração para detectar problemas o mais cedo possível.

---

# **Cypress**

### **O que é Cypress?**

- Cypress é uma ferramenta de automação de testes end-to-end (E2E) para aplicações web, permitindo a simulação do comportamento do usuário.

### **Instalação e Execução**

- **Instalação**: `npm install cypress --save-dev`
- **Execução**:
    - Abrir Cypress: `npx cypress open`
    - Executar testes: `npx cypress run`

### **Interface Gráfica do Cypress**

- **Criação de Testes**:
    1. **Scaffold example specs**: Exemplos de testes prontos.
    2. **Create New Spec**: Criar um teste do zero (caminho padrão: `cypress\e2e\`, extensão `.cy.js`).

### **Modelo de Código Padrão**

```jsx
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})
```

- **describe()**: Define uma suíte de testes.
- **it()**: Representa um caso de teste individual.
- **cy.visit()**: Visita uma URL específica.

### **Estrutura de Arquivos no Cypress**

- **cypress/integration/**: Armazena os testes.
- **cypress/fixtures/**: Armazena arquivos de dados estáticos (ex: JSON).
- **cypress/support/**: Configurações globais e comandos personalizados.

### **Comandos Básicos do Cypress**

- **cy.visit(url)**: Visita uma URL.
- **cy.get(selector)**: Seleciona um elemento na página.
- **cy.contains(text)**: Encontra um elemento que contém o texto especificado.
- **cy.click()**: Clica em um elemento.
- **cy.type(text)**: Digita texto em um campo de entrada.
- **cy.should(assertion)**: Faz uma asserção sobre um elemento (ex: visibilidade, texto).

### **Estrutura de Testes no Cypress**

- **describe()**: Grupo de testes.
- **it()**: Caso de teste individual.
- **beforeEach()**: Código executado antes de cada teste.

```jsx
describe('Minha suíte de testes', () => {
  beforeEach(() => {
    cy.visit('https://meusite.com');
  });

  it('Deve testar algo', () => {
    // Teste aqui
  });
});
```

### **Asserções**

- **.should('be.visible')**: Verifica visibilidade do elemento.
- **.should('exist')**: Verifica se o elemento existe no DOM.
- **.should('have.text', 'texto')**: Verifica o texto de um elemento.

### **Teste End-to-End (E2E)**

- **Objetivo**: Simular a interação do usuário com a aplicação do início ao fim.
- **Exemplo**:

```jsx
describe('Teste de cadastro', () => {
  it('Deve realizar o cadastro com sucesso', () => {
    cy.visit('https://meusite.com/cadastro');
    cy.get('input[name="nome"]').type('João');
    cy.get('input[name="email"]').type('joao@email.com');
    cy.get('input[name="password"]').type('senha123');
    cy.get('button[type="submit"]').click();
    cy.contains('Cadastro realizado com sucesso!').should('be.visible');
  });
});
```

### **Interceptação de Requisições**

- **cy.intercept()**: Intercepta e modifica requisições de rede durante os testes.

```jsx
cy.intercept('GET', '/api/usuarios', { fixture: 'usuarios.json' }).as('getUsuarios');
```

### **Debugging e Logs**

- **cy.debug()**: Pausa o teste para debugging.
- **cy.log('Mensagem')**: Adiciona mensagens ao log de execução.

### **Resolução de Problemas Comuns**

- **Erro "Command timed out after 30000 milliseconds"**:
    - Solução: Reexecutar o comando ou aumentar o timeout no arquivo `verify.js`.

```jsx
const VERIFY_TEST_RUNNER_TIMEOUT_MS = process.env.CYPRESS_VERIFY_TIMEOUT || 100000
```