# Use Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Copy your server file
COPY server.js .

# Expose port 5000
EXPOSE 5000

# Run the server
CMD ["node", "server.js"]
