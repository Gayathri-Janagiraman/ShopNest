# Use official Node.js image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json if any
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all files
COPY . .

# Expose port your server listens on (default: 5000 or what you use)
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
