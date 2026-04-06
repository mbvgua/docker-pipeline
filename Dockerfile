FROM node:24

EXPOSE 8080
WORKDIR /usr/src/app

COPY . .

RUN npm i

CMD ["npm", "start"]
