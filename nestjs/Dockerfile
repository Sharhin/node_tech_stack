FROM node:18
WORKDIR /usr/src/app
COPY ["./package.json","./package-lock.json" ,"./nest-cli.json","./tsconfig.json", "./tsconfig.build.json","./.env", "./"]
COPY ./src ./src
COPY ./test ./test
RUN npm install
CMD npm run start:dev
EXPOSE 3000