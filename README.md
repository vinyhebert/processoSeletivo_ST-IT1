# processoSeletivo_ST-IT1

#API ST IT

O API ST IT foi disponibiliza para vendedores obterem acesso aos produtos do sistema conforme o seu nivel de acesso.

As dúvidas e solicitações, relacionadas ao acesso da API, podem ser enviadas para o e-mail corevinicius@gmail.com.

##Dependências
* Express
  - npm install Express
* readLine
  - npm install linebyline
* jsonwebtoken
  - npm install jsonwebtoken

Recursos disponíveis para acesso via API:
* [**Login**](#reference/recursos/login)
* [**Produtos**](#reference/recursos/produtos)

## Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `POST` | Utilizar para iniciar sessão autenticada. |
| `GET` | Retorna um ou mais registros de produtos de acordo com seu level. |

## Respostas

| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `400` | Erros de validação ou os campos informados não existem no sistema.|
| `401` | Dados de acesso inválidos.|
| `404` | Registro pesquisado não encontrado (Not found).|

## Return Products
As ações de `Return Products` permitem o envio dos seguintes parâmetros:

| Parâmetro | Descrição |
|---|---|
| `organization` | Filtra dados pela organização. |
| `tag` | Especificar qual produto dentro da organização deve ser retornado. |

# Autenticação - JWT

Nossa API utiliza **Token Authentication** como forma de autenticação/autorização.

Para utilizar o Token Authentication, você precisará:
1. Utilizar uma das contas contidas no arquivo `users.json` enviando:
    * Email;
    * Password;

2. Receber um `client_id` e `client_secret`, utilizados na solicitação de acesso;

### Solicitando tokens de acesso

Através da URL `http://localhost:3003/login` nos autenticamos.

+ Request (application/json)
    
    + Body
         { 
	        "email": "middle.salesrep@stit.talent",
	        "password": "9fiD2NCGeLqjSSjhUP78kDS3ic2B93Wy"
        }

+ Response 200

    + Body
    
        { 
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlF5b0VkcWJmMld5emVSdGoiLCJpYXQiOjE2MjQ5MDI3NDYsImV4cCI6MTYyNDk4OTE0Nn0.Nq6FIt72wp99Fv7hqsEqb8qt-sTrL_yC9nuF_dFTQfI"
        }

O Token é valido por 24Hrs.

# Requisição de produtos

Nossa API utiliza parametros e querystrings para definir o que será retornado.

Para utilizar esse recurso de forma correta, você precisará:
1. Token dentro do seu prazo de validade;
2. Permissão para a organization passada como parametro na URL;

## Retornando Products

Através da URL `http://localhost:3003/products/organizationName?tag=<tag1>`

+ Request (application/json)
    
    + Body
    
    + Authorization
      - type = Bearer
      - Token Ex: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlF5b0VkcWJmMld5emVSdGoiLCJpYXQiOjE2MjQ4NDI5ODEsImV4cCI6MTYyNDkyOTM4MX0.a2SoXCl78eVkFPKeXfdM_WVXqj9VmX4shbSnMsLypkg
      

+ Response 200

    + Body
    
        { 
          "Products"
        }






