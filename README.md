# 📚 API de Livros

Uma API simples construída com **Node.js + Express** para gerenciar uma coleção de livros.

---

## 🧾 Descrição

Esta aplicação expõe endpoints REST para visualizar e cadastrar livros. Foi desenvolvida com fins educativos e demonstra a utilização de boas práticas como versionamento com GitHub Flow e documentação com Swagger.

---

## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js (v14 ou superior)
- npm (ou yarn)

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/api-livros.git
cd api-livros
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação:

```bash
npm start
```

> A API estará disponível em: `http://localhost:3000`

---

## 📘 Endpoints disponíveis

| Método | Rota    | Descrição              |
|--------|---------|------------------------|
| GET    | /livros | Lista todos os livros  |
| POST   | /livro  | Adiciona um novo livro |

---

## 📑 Documentação Swagger

A documentação interativa da API está disponível em:

🔗 [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

> Gerada automaticamente com `swagger-jsdoc` e `swagger-ui-express`.

---

## 🌿 GitHub Flow: por que estou usando?

O **GitHub Flow** é uma estratégia de versionamento leve e prática, ideal para projetos que fazem deploy contínuo ou têm um fluxo de trabalho mais ágil. Os principais motivos para utilizá-lo aqui são:

- **Simplicidade**: utiliza apenas a branch principal (`main`) e ramificações temporárias para features ou correções.
- **Integração contínua**: todas as alterações são integradas por meio de pull requests.
- **Velocidade**: ideal para projetos com entregas frequentes.

### Fluxo básico usado:

- `main`: versão estável e em produção  
- `feature/*`: desenvolvimento de novas funcionalidades  
- `fix/*`: correções de bugs  

---

## 🛠 Tecnologias utilizadas

- Node.js  
- Express  
- Swagger (OpenAPI 3.0)  
- GitHub Flow  
