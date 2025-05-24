FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install express cors mysql2 node-fetch path url dotenv

COPY . .

EXPOSE 5002

CMD ["node", "index.js"]