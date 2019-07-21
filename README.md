# react-upload-uppy

## Tecnologias utilizadas

- [React](https://pt-br.reactjs.org/)
- [Material-ui](https://material-ui.com/pt/)
- [Uppy](https://uppy.io)

## Requisitos

É preciso ter a aplicação backend disponível em [`http://localhost:5000`](http://localhost:5000) (ou em outro endereço) e de um token de acesso válido.
Ambos os requisitos precisam estarem configurados nas **Variáveis de Ambiente**.

## Variáveis de Ambiente

No arquivo `src/environment.js` estão as variáveis de ambiente necessárias para a aplicação, são elas:

- API_HOST: O endereço da aplicação backend, ex: `'http://localhost:5000'`;
- TOKEN: Um token de acesso de um usuário logado na aplicação backend;

## Iniciando a Aplicação

Para iniciar a aplicação, primeiro baixe as dependências.

```sh
$ yarn
```

Pode-se iniciar a aplicação no modos de produção e desenvolvimento.

- Modo de desenvolvimento:

```sh
$ yarn local
```

- Modo de produção:

```sh
$ yarn build
$ yarn start
```
