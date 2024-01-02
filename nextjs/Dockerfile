FROM node:18
WORKDIR /usr/src/app
COPY ["./next.config.js","./package-lock.json","./package.json","./tsconfig.json","./"]
COPY ./src ./src
RUN npm install
CMD npm run dev
EXPOSE 3000