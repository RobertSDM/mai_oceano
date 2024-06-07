# Rotas da API

URL base: https://maiocean.azurewebsites.net/subs

## Endpoints

### /find/by/:email [GET]

**Body**: Não necessário

**Retorno**: 
 * O assinante com o email enviado 
 * Caso não encontrado retorna 404

### /insert [POST]

**Body**: Um json com o email a ser registrado

**Retorno**: 
 * 200 caso sucesso 
 * 500 caso erro ao conectar com a database

### /update/:email [PUT]

**Body**: Um json com o novo email

**Retorno**: 
 * 200 caso sucesso na atualização 
 * 500 caso erro ao conectar com a database

### /delete/:email [DELETE]

**Body**: Não necessário

**Retorno**: 
 * 204 caso sucesso ao excluir 
 * 500 caso de erro com o data base
