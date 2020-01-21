FROM node:12

MAINTAINER Akira Shinohara <k017c1067@it-neec.jp>

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn

COPY . .
RUN yarn build

EXPOSE 80

CMD ["yarn", "start"]
