# for base
FROM node:22.6.0-alpine as base

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

COPY .env .env

RUN npm install --omit=dev

COPY . .

CMD [ "npm", "run", "start" ]