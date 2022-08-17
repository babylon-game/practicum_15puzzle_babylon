FROM node:16

LABEL version="1.0"
LABEL description="15puzzle"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npm start