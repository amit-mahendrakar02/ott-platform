# =========================
# 1️⃣ Build Stage
# =========================
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# =========================
# 2️⃣ Production Stage (Nginx)
# =========================
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]