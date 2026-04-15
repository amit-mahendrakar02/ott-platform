# =========================
# 1️⃣ BUILD STAGE
# =========================

FROM node:18 As builder
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .

# =========================
# 2️⃣ PRODUCTION STAGE
# =========================
FROM node:18-alpine

WORKDIR /app

# copy only required files from builder
COPY --from=builder /app /app

# remove unnecessary files (optional cleanup)
RUN rm -rf /root/.npm

EXPOSE 3001

CMD ["node", "index.js"]