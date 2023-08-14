FROM node

WORKDIR /application

COPY . .

RUN npm ci

EXPOSE 3000

CMD ["node", "app.js"]