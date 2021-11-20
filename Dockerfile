FROM node:16
WORKDIR /usr/srcapp
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
