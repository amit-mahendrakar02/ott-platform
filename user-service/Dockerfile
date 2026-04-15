FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 3003
CMD ["node", "index.js"]