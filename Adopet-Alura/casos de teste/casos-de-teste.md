# ID do Caso de Teste: TC001
# Título do Caso de Teste: Ver pets disponíveis para adoção na página principal
# Pré-condições: Acessar a página principal do AdoPet.

Funcionalidade: Adoção de pets
  Como usuário
  Eu quero ver os pets disponíveis para adoção
  Para que eu possa selecionar um pet para adotar

  Cenário: Ver pets disponíveis para adoção
  -  Dado que estou na página principal do AdoPet
   - Quando clico no botão "Ver pets disponíveis para adoção"
   - Então devo ser redirecionado para a página que exibe os pets disponíveis


# Caso de Teste TC002: Testar botões do header na página principal
- **Funcionalidade:** Funcionalidade dos botões do header
- **Cenário:** Verificar os botões do header na página principal
- **Dado que:** estou na página principal do AdoPet
- **Quando:** clico em cada botão do header
- **Então:** devo ser redirecionado para a página correspondente

# Caso de Teste TC003: Visitar a página de login
- **Funcionalidade:** Acesso à página de login
- **Cenário:** Visitar a página de login do AdoPet
- **Dado que:** estou em qualquer página do site AdoPet
- **Quando:** visito a página "/login"
- **Então:** devo ver o formulário de login

# Caso de Teste TC004: Visitar a página /home
- **Funcionalidade:** Acesso à página inicial
- **Cenário:** Visitar a página /home do AdoPet
- **Dado que:** estou em qualquer página do site AdoPet
- **Quando:** visito a página "/home"
- **Então:** devo ver o conteúdo principal da página inicial

# Caso de Teste TC005: Falar com o responsável
- **Funcionalidade:** Contatar o responsável
- **Cenário:** Falar com o responsável na página /home
- **Dado que:** estou na página "/home" do AdoPet
- **Quando:** clico no botão "Falar com o responsável"
- **Então:** devo ser redirecionado para um formulário de contato ou a página correspondente
