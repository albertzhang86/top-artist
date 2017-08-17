FROM node:latest

# Prepare app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/

# Install dependencies
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
RUN npm install --silent
ADD . /usr/src/app/

EXPOSE 3002
CMD [ "npm", "start" ]
