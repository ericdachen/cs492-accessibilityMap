# DEVELOPMENT ONLY

# Start from the official Golang image
FROM golang:1.19.7-alpine3.17

# Set the working directory
WORKDIR /app

# Install necessary dependencies
RUN apk add --no-cache git

# Copy the necessary files
COPY . .

# Download stuff
RUN go mod download

# Install air for hot reloading
RUN go install github.com/cosmtrek/air@v1.27.3

# Install Delve for debugging
RUN go install github.com/go-delve/delve/cmd/dlv@latest

# Expose port 8080 and Delve port 2345
EXPOSE 8080 2345

# Run the air command and Delve debugger by default
CMD ["sh", "-c", "dlv --listen=:2345 --headless=true --api-version=2 --accept-multiclient exec ./tmp/main -- air"]
