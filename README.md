# Tech Challenge Fase 02 - Gerenciamento financeiro com Bytebank

## Visão Geral do Projeto

Este projeto foi desenvolvido como parte do segundo Tech Challenge da FIAP para a pós-graduação em Front-end Engeneering. 

Ele apresenta a solução do desafio anterior, porém com uma arquitetura voltada para os microfrontends, dockerizado e implantado na AWS.

O protótipo das telas está disponível no [Figma](https://www.figma.com/design/ns5TC3X5Xr8V7I3LYKg9KA/Projeto-Financeiro?node-id=97-1179&t=ntJjaMZE4EEKGWST-0).

## Principais Funcionalidades

### **Página Home**
- Apresenta a tela inicial e permite que a pessoa usuária faça o login para entrar na conta. Para fazer Login é necessário usar o e-mail:admin@example.com e a senha:password123

### **Página Inicial**
- Possui um menu de navegação entre as páginas da aplicação;
- Apresenta o saldo da conta e o nome do usuário com base no arquivo de back-end;
- Exibe um extrato com as últimas transações realizadas e permite que o usuário altere o tipo e o valor da transação;
- Oferece uma seção para iniciar novas transações.

### **Guia de estilos**

Para o desenvolvimento do projeto nós seguimos o gui de estilo proposto.

![Paleta de Cores](https://github.com/user-attachments/assets/7bb8d6fd-2243-4f9d-b635-9dd5ce9008a3)

## Instruções para Execução

### **Pré-requisitos**
1. Certifique-se de ter o **Docker** instalado na sua máquina.

2. Clone os repositórios dentro de uma pasta que agrupe todos os repositórios necessários:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

3. Crie o seguinte docker-compose.yml na raiz da pasta que contém todos os microfrontends:
   ```yml
   services:
   host: 
      build: ./host-app
      ports: 
         - "3000:80"
      depends_on: 
         - backend
         - auth-app
         - dashboard
      
   auth-app:
      build: 
         context: ./auth-app
         dockerfile: Dockerfile
      ports:
         - "3010:80"

   backend:
      build:
         context: ./backend
         dockerfile: Dockerfile
      ports:
         - "4001:4001"
   
   dashboard:
      build:
         context: ./dashboard
         dockerfile: Dockerfile
      ports:
         - "3001:80"

   ```

4. Certifique-se de que você possui todos os quatro repositórios salvos e todos paralelos para a execução do comando `docker compose up`.

4. Inicialize o docker em sua máquina, em seguida abra o terminal e execute o seguinte comando:
   - `$ docker compose build`, aguarde o término do build.
   - `$ docker compose up` - Assim que terminar, o aplicativo estará disponível na porta **3010**

   
## Tecnologias Aplicadas

 - **[Next.js](https://nextjs.org/):** Meta-framework de React.js para construção de aplicações completas para produção com funcionalidades como SSR e SSG;
- **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript que adiciona tipagem estática, facilitando o desenvolvimento e manutenção de código;
- **[Tailwind CSS](https://tailwindcss.com/):** Framework de utilitários CSS para estilização rápida e eficiente com classes predefinidas;
- **[Context API](https://legacy.reactjs.org/docs/context.html):** Recurso nativo do React para gerenciamento de estado global entre componentes da aplicação.
- **[Luigi](https://luigi-project.io/):** Recurso para criação e orquestração de microfrontends.
- **[Docker](https://www.docker.com/):** Recurso para conter aplicações em ambientes isolados da máquina host.
- **[AWS](https://aws.amazon.com/):** Serviço de hospedagem de aplicações na nuvem.

## Conceitos e Metodologias Aplicadas

- **[Design System](https://www.alura.com.br/artigos/o-que-e-design-system):** Implementação de componentes reutilizáveis e padronização de cores e espaçamentos com o uso do Tailwind CSS.
- **[Hooks Personalizados](https://marcosviniciosneves.medium.com/react-dominando-custom-hooks-e-otimizando-a-reutiliza%C3%A7%C3%A3o-de-l%C3%B3gica-d592ce422fc1):** Desenvolvimento de funções reutilizáveis para encapsular lógica compartilhada entre componentes;
- **[Colocation](https://kentcdodds.com/blog/colocation)**: Organização de diretórios para facilitar a navegação e manutenção do código.
- **[Micro Front Ends](https://martinfowler.com/articles/micro-frontends.html)**: Segregação de funcionanlidades/paginas/domínios de uma aplicação para maior escalabilidade, manutenebilidade e gerenciamento.

## Outra ferramenta útil

- **[React Icons](https://react-icons.github.io/react-icons/):** Utilizados para adicionar elementos gráficos consistentes e visuais ao projeto.

## Apresentação

Confira o [vídeo de demonstração](#) para ver o projeto em funcionamento.

---

Este documento foi criado para fornecer orientações claras sobre o projeto Bytebank e sua execução.
