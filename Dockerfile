# Using Node.js official image as base image
FROM node:latest

# Seting the working directory inside the container
WORKDIR /TskBook

# Copying the application code
COPY . .

# Installing dependencies using Yarn
RUN yarn install

# Exposing the port that the app will run on
EXPOSE 3000

# Running the application
CMD ["yarn", "dev"]