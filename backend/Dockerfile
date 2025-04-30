# ---- Base image ----
FROM node:20-alpine

# ---- App directory ----
WORKDIR /app

# ---- Copy package.json + lockfile first (layer cache) ----
COPY package*.json ./

# ---- Install only production deps ----
RUN npm install --production

# ---- Copy the rest of the app ----
COPY . .

# ---- Expose backend port ----
EXPOSE 3001

# ---- Start the server using tsx ----
CMD ["npx", "tsx", "watch", "server.ts"]
