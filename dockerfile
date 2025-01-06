# Use the Node.js image
FROM node:22.12.0

RUN npm install -g nodemon

# Set the working directory in the container
WORKDIR /node-learn-app

# Copy only package.json 
COPY package.json package-lock.json ./

# Install dependencies inside the container
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your application uses
EXPOSE 8000

# Start the application
CMD [ "npm", "run", "dev" ]