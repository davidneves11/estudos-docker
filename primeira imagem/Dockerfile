#imagem do node na versão 14
FROM node:14
#nome do diretório que será criado dentro do container
WORKDIR /app-node
#tempo de criação de imagem
ARG PORT_BUILD=6000
#variável de ambiente dentro do container
ENV PORT=$PORT_BUILD
#indica qual porta a aplicação estará exposta
EXPOSE $PORT_BUILD
#copia os arquivos que estão no diretório atual para o diretório do container informado no WORKDIR
COPY . .
#instala as dependências da aplicação
RUN npm install
#inicia a aplicação
ENTRYPOINT npm start