FROM node

WORKDIR /web

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

ENTRYPOINT [ "npm", "run", "dev" ]