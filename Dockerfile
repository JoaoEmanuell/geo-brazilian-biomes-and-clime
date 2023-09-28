FROM node:18.17.0-alpine

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node gbbc .

RUN npm install --force --omit=dev

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start"]