FROM node:12.18-alpine

WORKDIR /app

COPY . .

RUN npm install && npm install -g pm2

CMD ["pm2-runtime", "ecosystem.config.js"]
