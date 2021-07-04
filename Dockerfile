FROM node:14

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install --only=prod
RUN npm run build
EXPOSE 8000
CMD ["npm", "run", "prod"]
