FROM node:alpine
ARG port

# Updates and dependency installation
RUN apk add --update nodejs nodejs-npm
WORKDIR /app
COPY package*.json ./
RUN npm install --silent

COPY . .

# Accept port number as arg for app to run on
EXPOSE $port

# Write port value to .env for npm to pick up at runtime
RUN echo "PORT=$port" > .env

CMD ["npm", "start"]
