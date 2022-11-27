# Movies catalog

## Descrição

API de catalogo de filmes desenvolvido para o teste de backend proposto pela [MKS sistemas](https://mkssistemas.com/).<br>
Esta API consiste em uma aplicação CRUD de catalogo de filmes e também criação de usuário e autenticação JWT.

Acesse a [documentação Swagger da APi por aqui](https://api-dot-movies-catalog-369900.uc.r.appspot.com/api)

## Técnologias utilizadas

> Nodejs  
> Typescript  
> Nestjs  
> Typeorm  
> Postgre  
> Redis

## Dependêcias necessárias para executar o projeto

para executar localmente

> [Nodejs](https://nodejs.org/en/)

para executar no Docker

> [Docker](https://docs.docker.com/get-docker/)

## Instalação e execução

#### Clone o repositório

```bash
$ git clone https://github.com/jirlansouza/movies-catalog
$ cd movies-catalog
```

### Executar o projeto localmente

Primeiramente crie um arquivo `.env.local` contendo as variaveis existentes em `.env.example` e insira os valores das mesmas conforme o seu ambiente de execução.  
E depois execute os seguinte comandos no terminal:

com `npm`

```bash
# instale as dependências
$ npm install

# executar em modo de desenvolvimento
$ npm run start:dev

# executar em modo de produção
$ npm run build
$ npm run start
```

ou com `yarn`

```bash
# instale as dependências
$ yarn

# executar em modo de desenvolvimento

$ yarn start:dev

# executar em modo de produção

$ yarn build
$ yarn start

```

### Executar o projeto com o Docker

```bash
$ docker compose --env-file .env.docker.local up -d
```

Com a aplicação já em execução a documentação Swagger pode ser acessada em http://localhost:8080/api

## License

[MIT licensed](LICENSE).
