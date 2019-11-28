FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /

ADD ./package*.json ./

RUN npm install --production

ADD vue.config.js vue.config.js
ADD babel.config.js babel.config.js
ADD ./public ./public
ADD ./src ./src

RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]