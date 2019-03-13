FROM node:10

WORKDIR /usr/local/src/rigel

COPY ./package* /usr/src/src/rigel/

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "start-dev" ]