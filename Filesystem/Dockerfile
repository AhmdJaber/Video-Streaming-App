FROM node:18

WORKDIR /filesystem

COPY package*.json ./

RUN npm install express multer dotenv path fs

COPY . .

EXPOSE 5005

CMD ["node", "index.js"]