﻿# 🍕 Pizzaria API

![](https://img.shields.io/badge/TypeScript-blue) ![](https://img.shields.io/badge/Express-green) ![](https://img.shields.io/badge/Node.js-brightgreen)

## 🔥 Descrição

API simples desenvolvida com **TypeScript** e **Express** para um site de pizzaria. Permite consultar o menu, visualizar detalhes de pizzas e realizar pedidos.

## 📋 Sumário

- [🚀 Tecnologias](#-tecnologias)
- [⚙️ Pré-requisitos](#️-pré-requisitos)
- [💾 Instalação](#-instalação)
- [🛠️ Scripts](#️-scripts)
- [📡 Endpoints](#-endpoints)
  - [GET /menu](#get-menu)
- [🌐 Variáveis de Ambiente](#-variáveis-de-ambiente)
- [🧪 Testando](#-testando)
- [✏️ Contribuição](#️-contribuição)
- [📜 Licença](#-licença)

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## ⚙️ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes)

---

## 💾 Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/pizzaria-api.git
   cd pizzaria-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias (exemplo abaixo).

---

## 🛠️ Scripts

No `package.json` você encontrará os seguintes scripts:

| Script        | Descrição                                |
| ------------- | -----------------------------------------|
| `npm run dev` | Inicia o modo de desenvolvimento (`tsc --watch` + `node`) |
| `npx tsc` | Compila o TypeScript para JavaScript em `lib/` |
| `npm node /lib/index.js`   | Executa o código compilado a partir de `lib/` |

---

## 📡 Endpoints

No momento, a API possui apenas o seguinte endpoint:

### GET /menu

- **Descrição**: Retorna todo o menu de pizzas disponíveis para a página principal.
- **Implementação**:
  ```ts
  export class homeControllers {
    static GetAll(req: Request, res: Response) {
      res.send(menu);
    }
  }
  ```
- **Exemplo de resposta**:
  ```json
  [
    { "id": 1, "nome": "Margherita", "preco": 35.00 },
    { "id": 2, "nome": "Pepperoni", "preco": 40.00 }
  ]
  ```

---

## 🌐 Variáveis de Ambiente

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=senha
```  
> Substitua pelos valores correspondentes ao seu ambiente se usar um banco de dados.

---

## 🧪 Testando

Para testar as rotas, você pode usar ferramentas como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).

---

## ✏️ Contribuição

Contribuições são bem-vindas! Siga os passos:

1. Fork este repositório
2. Crie uma branch: `git checkout -b minha-contribuicao`
3. Faça suas alterações e commit: `git commit -m 'Minhas melhorias'`
4. Envie para a branch original: `git push origin minha-contribuicao`
5. Abra um Pull Request

---

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ❤️ por Você!


