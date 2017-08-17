FROM node:latest

# Prepare app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/

# Install dependencies
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
RUN npm install --silent
ADD . /usr/src/app/
RUN npm run build

EXPOSE 8080
CMD [ "npm", "run", "serve-build" ]
