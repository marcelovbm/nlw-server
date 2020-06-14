# Back-end para aplicação do NLW (Next Level Week)

Este projeto tem como objetivo realizar o desenvolvimento de um aplicação para gereciar (CRUD) pontos de coletas de itens selecionados pelos estabelecimentos.

Esta ideia foi apresentada pelo NLW, sendo este organizado pela Rocketseat e compartilhado durante os dias 01/06/2020 até 07/06/2020. Seu material de estudo foi todo compartilhado de forma gratiuta durante um período especíco de tempo, como informado anteriormente.

Este documento será utilizado para descrever todas as minhas anotações dos conhecimentos adquiridos e também para a documentação da própria aplicação.

## Conceitos iniciais de API
- Rota: Endereço completo da requisição;
- Recurso: Qual entidade estamos acessando do sistema;

## Tipos de requisições
- `GET`: Busca uma ou mais informações do back-end;
  - Exemplo: `http://localhost:8080/users` => Listar usuários;
  - Exemplo: `http://localhost:8080/users/1` => Buscar dados do usuário com identificador;
- `POST`: Criar uma nova informação do back-end;
  - Exemplo: `http://localhost:8080/users` => Criar um usuário;
- `PUT`: Atualizar uma informação existente do back-end;
- `DELETE`: Remover uma informação do back-end;

## Passagem de parâmetros
- _Request Param_: Parâmetros que vem na própria rota que identificam um recurso;
- _Query Param_: Parâmetros que vem na própria rota, geralmente opcionais para filtros, paginação;
- _Request Body_: Parâmetros para criação/atualização de informações;

## Nomenclatura de métodos
Segundo informação passado durante o curso, existem alguns padrões de nomenclaturas utilizadas para a criação dos métodos de um controller, sendo eles:
- _index_: Para realizar uma listagem;
- _show_: Para exibir um registro específico;
- _create/store_: Para criar um novo registro;
- _update_: Para atualizar um registro já existente;
- _delete/destroy_: Para realizar a exclusão de um registro já existente;

Neste projeto foi utilizado este padrão para a realização dos métodos inseridos nas controllers. 

## Criando imagem Docker

Realizando a criação da imagem que será executada.
- `docker build -t mmagrinelli/nlw-server .`

Será possível ver a imagem criada executando o comando `docker images`.

Será preciso executar o seguinte comando para que possa deixar a imagem rodando em backgroup em sua máquina.
- `docker run -dp 8080:8080 mmagrinelli/nlw-server`

## Logging requisições

Foi escolhido o [morgan](https://www.npmjs.com/package/morgan) para realizar o log das requisições `HTTP` do back-end. Está sendo utilizado o estilo "dev", sendo este um modelo já pré-definido pela aplicação.

- `:method :url :status :response-time ms - :res[content-length]`

## Base de dados

O [SqLite](https://www.sqlite.org/index.html) foi a ferramente escolhida para ser a nossa base de dados que irá quardar todos os nossos dados. Por ser um banco sequencial que não precisa realizar instalações em sua máquina, porém já consegue simular como seria em um grande banco, facilitando durante o processo de estudo de uma nova aplicação.

Para gerencias todo o nosso processo com o banco de dados, o [knex](http://knexjs.org) foi a ferramenta escolhida. Sendo um SQL Query builder e tendo a compatibilidade com os principais bancos SQL, faz com que ele seja escolhido sem olhar para outras opções.