FROM node:latest

# Prepare app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/

# Install dependencies
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
RUN npm i --silent --prefix top-artist-ui
RUN npm i --silent --prefix top-artist-api
RUN npm i --silent
ADD . /usr/src/app/
RUN npm run build --prefix top-artist-ui

EXPOSE 8080
