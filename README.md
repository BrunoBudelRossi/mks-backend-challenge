<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Repositório do desafio mks-backend

## Observações

O desafio solicita o use de 4 principais ferramentas, destas 4, o Swagger e o NestJS eu não possuo uma experiência significativa de uso, já o TypeScript e o TypeORM eu utilizo a bastante tempo e tenho um bom domínio e conhecimento de ambos, embora, talvez a arquitetura simples não tenha possibilitado uma grande demostração de uso dos mesmos.

## Descrição

A API foi feita usando o framework NestJS, com banco de dados PostgreSQL e TypeORM, para realizar o deploy da aplicação, escolhi a plataforma Heroku. Sobre os relacionamentos das entidades da aplicação, minha ideia foi uma relação n-n entre usuários e filmes e uma relação 1-n entre gênero e filme.

## Documentação

Uma boa opção para entender e testar a aplicação é utilizar o **[Insomnia](https://insomnia.rest/)**, o arquivo contendo as rotas da aplicação está na pasta **[/docs](https://github.com/BrunoBudelRossi/mks-backend-challenge/tree/master/docs)**.
A documentação da API foi feita usando o Swagger e pode ser acessada **[aqui](https://mks-movies.herokuapp.com/api/)**.
Caso a documentação esteja indisponível, também é possível rodar o projeto e acessar a mesma a partir de http://localhost:3000/api
