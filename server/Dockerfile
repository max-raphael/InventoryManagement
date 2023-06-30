# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the image
COPY package*.json ./

# Install the application dependencies inside the Docker image
RUN npm install

# Copy the rest of the application code into the image
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

# Make the application's port accessible from outside the Docker container
EXPOSE 3000

# Define the command to run the application
CMD [ "node", "dist/app.js" ]

