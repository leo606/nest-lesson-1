FROM node:16.16.0-alpine

RUN apk add --no-cache bash

RUN npm install --location=global @nestjs/cli

USER node

WORKDIR /home/node/app