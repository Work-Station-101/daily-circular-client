FROM node:16

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install react-scripts@latest

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]
