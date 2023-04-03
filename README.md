
# Desafio técnico - Squadra Digital

#### O desafio se consiste em criar um microsserviço aonde é feito uma integração com a api OpenWeatherMap e Spotify. De acordo com a temperatura da cidade é feito uma recomendação de uma faixa musical.

<br/>

## Instalação

Instale o projeto com npm

```bash
  cd challange-squadra
  npm install
  npm run start:dev
```
Instale o projeto com yarn

```bash
  cd challange-squadra
  yarn
  yarn start:dev
```    
<br/>

## Documentação da API

#### Retorna todos os itens

```http
  GET /api/city/?name=
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**. Nome da cidade|

#### Retorna um item

```http
  GET /api/coords/?lon=&lat=
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `lon`      | `number` | **Obrigatório**. Longitudade da cidade |

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `lat`      | `number` | **Obrigatório**. Latitudade da cidade |
