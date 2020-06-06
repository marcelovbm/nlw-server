# Back-end para aplicação do NLW (Next Level Week)

Este projeto tem como objetivo realizar o desenvolvimento de um aplicação para gereciar (CRUD) pontos de coletas de itens selecionados pelos estabelecimentos.

Esta ideia foi apresentada pelo NLW, sendo este organizado pela Rocketseat e compartilhado durante os dias 01/06/2020 até 07/06/2020. Seu material de estudo foi todo compartilhado de forma gratiuta durante um período especíco de tempo, como informado anteriormente.

Este documento será utilizado para descrever todas as minhas anotações dos conhecimentos adquiridos e também para a documentação da própria aplicação.

## Conceitos iniciais de API
- Rota: Endereço completo da requisição;
- Recurso: Qual entidade estamos acessando do sistema;

## Tipos de requisições
- GET: Busca uma ou mais informações do back-end;
  - Exemplo: http://localhost:8080/users => Listar usuários;
  - Exemplo: http://localhost:8080/users/1 => Buscar dados do usuário com identificador;
- POST: Criar uma nova informação do back-end;
  - Exemplo: http://localhost:8080/users => Criar um usuário;
- PUT: Atualizar uma informação existente do back-end;
- DELETE: Remover uma informação do back-end;

## Passagem de parâmetros
- Request Param: Parâmetros que vem na própria rota que identificam um recurso;
- Query Param: Parâmetros que vem na própria rota, geralmente opcionais para filtros, paginação;
- Request Body: Parâmetros para criação/atualização de informações;

## Nomenclatura de métodos
Segundo informação passado durante o curso, existem alguns padrões de nomenclaturas utilizadas para a criação dos métodos de um controller, sendo eles:
- index: Para realizar uma listagem;
- show: Para exibir um registro específico;
- create/store: Para criar um novo registro;
- update: Para atualizar um registro já existente;
- delete/destroy: Para realizar a exclusão de um registro já existente;

Neste projeto foi utilizado este padrão para a realização dos métodos inseridos nas controllers. 
