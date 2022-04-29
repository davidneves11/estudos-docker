# Descrição

Criei uma [imagem](https://hub.docker.com/repository/docker/davidneves/app-node) capaz de rodar uma aplicação em _NodeJS_ através de um container. A aplicação é uma página web estática.

![alt text: Página web com uma frase escrita Eu amo Docker!](https://github.com/davidneves11/estudos-docker/blob/main/imgs/img_pag_web.jpg)

## Alguns dos comandos estudados:

* Listagem de containers: `docker ps`

  * Flag `-a` lista containers que estão e não estão mais em execução.

* Inicialização e encerramento de containers: `docker start` `docker stop`
  
  * Quando se tem vários containers rodando e é necessário encerrar todos: `docker stop $(docker container ls -q)`

* Rodar um container através de uma imagem: `docker run [nome imagem]`

  * Flag `-d` executa o container sem travar o terminal.
  * Flag `-p` mapeia as portas

* Baixar a imagem sem executar: `docker pull [nome imagem]`
  
* Constrói uma imagem através de um Dockerfile: `docker build`
  * Flag `-t` etiqueta a imagem.

## Quer testar?

![](https://turismo.praiagrande.sp.gov.br/wp-content/uploads/2021/07/construcao-845x321.png)
