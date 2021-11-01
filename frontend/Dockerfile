FROM node:16.13.0

RUN mkdir /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm install

CMD ["npm", "start"]