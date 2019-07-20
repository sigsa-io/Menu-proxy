FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm ci

EXPOSE 3006

CMD npm run start-server