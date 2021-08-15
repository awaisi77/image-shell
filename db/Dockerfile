# Use an official Python runtime as a parent image
FROM mysql:8.0

# Set the working directory to /app
#WORKDIR /GS-Integrator/pdh-adapter

# Copy db dump to docker-entrypoint-initdb.d
COPY db.sql /docker-entrypoint-initdb.d
COPY 1.sql /docker-entrypoint-initdb.d

# Install any needed packages specified in requirements.txt
#RUN npm install

# Make port 80 available to the world outside this container
EXPOSE 3306

# Define environment variable
ENV MYSQL_DATABASE="nft" MYSQL_USER="NFT@Market" MYSQL_PASSWORD="NFT@Market" MYSQL_ROOT_PASSWORD="NFT@Market"

# Run app.py when the container launches
#CMD ["npm", "start"]