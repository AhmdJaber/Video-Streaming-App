FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install express mysql2 dotenv path url

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]