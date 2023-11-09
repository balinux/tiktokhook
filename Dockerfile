# Use the official Node.js runtime as a parent image
# FROM node:14
FROM node:20.9.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application's dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the application will run
EXPOSE 3000

# Define the command to start the application
CMD ["npm", "start"]
