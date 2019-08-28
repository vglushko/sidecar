FROM node:10.16.3-alpine AS builder

WORKDIR /usr/build/app
COPY ./package*.json ./
RUN npm install --only=production
COPY ./*.js ./

FROM node:10.16.3-alpine
WORKDIR /usr/app
COPY --from=builder /usr/build/app .
CMD ["npm", "run", "start"]