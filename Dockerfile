FROM node:carbon

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY prodServer.js .
COPY index.html .
COPY build/ build/
COPY assets/ assets/

EXPOSE 3000

CMD [ "npm", "run", "start-prod" ]