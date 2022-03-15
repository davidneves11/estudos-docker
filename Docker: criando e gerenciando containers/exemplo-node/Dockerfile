#Criação da imagem do node na versão 14
FROM node:14
#Escolha do diretório padrão
WORKDIR /app-node
#Definição de uma variável explícita no momento de construção da imagem (Build)
ARG PORT=6000
#Definição de uma variavel de ambiente dentro do container
ENV PORT=$PORT
#Exposição da porta em que a aplicação está sendo executada
EXPOSE $PORT
#Cópia de todos os arquivos da pasta onde o Dockerfile (.) está para o diretório escolhido (.)
COPY . .
#Instalação do npm para rodar a aplicação
RUN npm install
#Definição do comando que será executado após todos os procedimentos serem realizados
ENTRYPOINT npm start