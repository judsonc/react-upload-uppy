# frontend-upload

## Tecnologias utilizadas

- React
- Material-ui
- GraphQL
- Apollo Client
- Uppy

## Requisitos

É preciso ter a aplicação backend disponível em `http://localhost:5000`.

## Iniciando a Aplicação

Para iniciar a aplicação, primeiro baixe as dependências.

```sh
$ yarn
```

Pode-se iniciar a aplicação no modos de produção e desenvolvimento.

- Modo de produção:

```sh
$ yarn build
$ yarn start
```

- Modo de desenvolvimento:

```sh
$ yarn local
```

## Variáveis de ambiente

No arquivo `src/environment.js` estão as variáveis de ambiente necessárias para a aplicação, são elas:

- API_HOST: O endereço da aplicação backend, ex: `'http://localhost:5000'`.
