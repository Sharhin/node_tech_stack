FROM node:18
WORKDIR /var/www/nestjs
COPY "./**" ./
CMD ls -la /var/www/nestjs
RUN npm install
CMD npm run start:dev
EXPOSE 3000