# Use the official Node.js image with version >= 18.17.0
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./


# To strict-ssl false
RUN npm config set strict-ssl false


# Clean npm cache and install dependencies
RUN  npm install --force


# Copy the .env file
COPY .env .env


# Copy the rest of your application code
COPY . .


# Build the Next.js application
RUN npx next build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
