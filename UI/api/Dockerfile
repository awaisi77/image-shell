# Use an official Python runtime as a parent image
FROM node:11.14.0-alpine


# Set the working directory to /app
WORKDIR /NFT/UI/api

# Copy the current directory contents into the container at /app
COPY . /NFT/UI/api


# Install any needed packages specified in requirements.txt
RUN npm install

# Make port 80 available to the world outside this container
EXPOSE 3894

# Define environment variable
ENV NODE_ENV=docker-dev PORT=3894

# Run app.py when the container launches
CMD ["npm", "start"]