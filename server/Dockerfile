# DEVELOPMENT ONLY

# Start from the official Golang image
FROM golang:1.17-alpine3.14

# Set the working directory
WORKDIR /app

# Copy the necessary files
COPY . .

# Download stuff
RUN go mod download

# Expose port 8080
EXPOSE 8080
