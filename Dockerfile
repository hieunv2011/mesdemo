### Build Front-End
### E.g.: $ docker build -t ecotel_frontend_img:latest .
# $ docker run -d -p 3000:80 ecotel_frontend_img:latest

## Create an image based on the official Node image from dockerhub
FROM node:18 AS development

## Create app directory
WORKDIR /usr/src/app

## A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
## Clean & install app dependencies
RUN npm i

## Bundle app source
## Get all the code needed to run the app
COPY . .

## React buid for production environment (smaller size)
RUN npm run build

## Create an HTTP web server based on nginx image;
## default nginx server's port is 80
### E.g.: $ docker run -d -p 3000:80 frontend:latest
FROM nginx:alpine

### Reference for connecting Frontend to Backend
# 1. https://github.com/kubernetes/website/blob/main/content/en/examples/service/access/Dockerfile
# 2. https://kubernetes.io/docs/tasks/access-application-cluster/connecting-frontend-backend/

COPY nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=development /usr/src/app/server/build /usr/share/nginx/html
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
