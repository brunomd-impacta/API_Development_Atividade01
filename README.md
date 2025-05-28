## Descrição

Atividade 01 - API Development
Aluno: Bruno Martins Damasceno - bruno.damasceno@aluno.faculdadeimpacta.com.br
Utilizei os conceitos apresentados no Hands-on da ultima aula e o Copilot, princiaplmente na criação da lógida serviço.


## Install NPM

```bash
$ npm install
```

## Rodar o projeto

```bash
$ npm run start

$ npm run start
```

## Usando a API

```bash
# Criando o usuário
$ curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"nome":"Bruno", "email":"bruno@email.com"}'

$ curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"nome":"Emilio", "email":"emilio@email.com"}'


# Listar todos os usuários
$ curl http://localhost:3000/users


# Buscar usuário por ID
$ curl http://localhost:3000/users/1
$ curl http://localhost:3000/users/2


# Remover usuário por ID
$ curl -X DELETE http://localhost:3000/users/1
$ curl -X DELETE http://localhost:3000/users/2
```
