# Docker Multistage construction 

### DEV Environmental Science  ###
FROM node:14.17.3 AS development

#  Navigate to the container working directory 
WORKDIR /usr/src/server
#  Copy package.json
COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=development
COPY . .
RUN npm run build


### PROD Environmental Science  ###
FROM node:14.17.3 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/server

COPY package*.json ./

RUN  npm install --only=production

COPY . .

COPY --from=development /usr/server/app/dist ./dist

CMD ["node", "dist/main"]