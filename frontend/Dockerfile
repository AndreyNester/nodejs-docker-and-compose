FROM node:22-alpine
WORKDIR /app
COPY ./pakcage.json ./
RUN npm ci
COPY . .
CMD ["npm", "run", "start"]
