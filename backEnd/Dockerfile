FROM node

WORKDIR /api

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "run", "dev"]