# Use Node.js LTS as base
FROM node:18-alpine@sha256:5e2e2e7b7e6e8b7e6e8b7e6e8b7e6e8b7e6e8b7e6e8b7e6e8b7e6e8b7e6e8b7e6

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install deps
RUN npm install --production

# Copy source
COPY . .

# Build app
RUN npm run build

# Expose port
EXPOSE 3000

# Run Nuxt in production
CMD ["npm", "run", "start"]
