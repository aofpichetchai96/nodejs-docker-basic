FROM node:20.10.0-alpine

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install

COPY ./index.js ./

EXPOSE 8000

CMD ["node","index.js"]