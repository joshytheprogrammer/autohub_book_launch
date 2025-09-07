# Use Node.js LTS as base
FROM node:20-alpine

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
