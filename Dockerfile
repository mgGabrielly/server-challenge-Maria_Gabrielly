# Imagem oficial do Node.js como base
FROM node:18

# Definição do diretório de trabalho dentro do contêiner
WORKDIR /usr/appBackend

# Copiar os arquivos necessários para o contêiner (package.json e package-lock.json)
COPY package*.json ./
COPY prisma ./prisma/
COPY tsconfig.json ./

# Instalar as dependências do projeto
RUN npm install

# Instalar a CLI dotenv globalmente
RUN npm install -g dotenv-cli

# Copiar todos os arquivos do diretório atual para o diretório de trabalho do contêiner
COPY . .

# Executar as migrações do Prisma e gerar os artefatos necessários
RUN npx prisma migrate dev && npx prisma generate

# Expor a porta que a aplicação estará ouvindo
EXPOSE 8080

# Comando para executar a aplicação quando o contêiner for iniciado
CMD ["npm", "run", "dev"]