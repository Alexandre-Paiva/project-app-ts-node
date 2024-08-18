# Podcast Filter API

## Descrição

Esta API permite filtrar podcasts e episódios com base em seu nome. Ela oferece duas rotas principais:

- `GET /api/list`: Retorna uma lista de podcasts filtrados por nome.
- `GET /api/episodes`: Retorna uma lista de episódios filtrados pelo nome da categoria.

## Endpoints

### 1. `GET /api/list`

**Descrição:**  
Este endpoint retorna uma lista de podcasts com base no nome especificado.

**Resposta:**
- Código de Status: `200 OK`
- Corpo da Resposta:
```json
[
 {
        "podcastName": "flow",
        "episode": "TECNOLOGIA E IA [+ FABIO AKITA] - ",
        "videoId": "--slRywdonM",
        "categories": ["tecnologia"]
    },
]
```

### 2. `GET /api/episodes`

**Descrição:**  
Este endpoint retorna uma lista de episódios com base no nome especificado.

**Parâmetros de Query:**
- `name` : O nome pelo qual deseja filtrar os episódios.

**Exemplo de Requisição:**
```bash
GET /api/episodes?p=flow
```

**Resposta:**
- Código de Status: `200 OK`
- Corpo da Resposta:
```json
[
        "podcastName": "flow",
        "episode": "TECNOLOGIA E IA [+ FABIO AKITA] - ",
        "videoId": "--slRywdonM",
        "categories": ["tecnologia"]
]
```

## Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/Alexandre-Paiva/project-app-ts-node
   ```
2. Instale as dependências:
   ```bash
   cd repo-podcast-api
   npm install
   ```
3. Inicie o servidor:
   ```bash
   rum start:dev
   ```
4. Acesse os endpoints mencionados acima usando um cliente HTTP como o Postman ou cURL.

## Estrutura do Projeto

```
repo-podcast-api/
│
├── src/
│   ├── controllers/
│   │   ├── controller.ts
│   ├── routes/
│   │   ├── podcastRoutes.ts
│   ├── models/
│   │   ├── podcastModel.ts
│   |   
|   ├── app.ts
│   └── server.ts
├── package.json
└── README.md
```

## Dependências

- "@types/node": "^22.0.0",
- "tsup": "^8.2.3",
- "tsx": "^4.16.2",
- "typescript": "^5.5.4"

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais informações.
```

Esse README fornece uma explicação clara sobre o funcionamento da API, os endpoints disponíveis e como utilizá-los.