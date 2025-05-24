FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install express mysql2 path url dotenv

COPY . .

EXPOSE 5001

CMD ["node", "index.js"]