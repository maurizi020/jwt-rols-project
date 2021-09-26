FROM node:14.17-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

EXPOSE 3000

RUN npm i

CMD ["npm", "run", "start"]