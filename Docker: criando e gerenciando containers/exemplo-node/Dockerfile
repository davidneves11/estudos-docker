#Criação da imagem do node na versão 14
FROM node:14
#Escolha do diretório padrão
WORKDIR /app-node
#Cópia de todos os arquivos da pasta onde o Dockerfile (.) está para o diretório escolhido (.)
COPY . .
#instalação do npm para rodar a aplicação
RUN npm install
#Definição do comando que será executado após todos os procedimentos serem realizados
ENTRYPOINT npm start