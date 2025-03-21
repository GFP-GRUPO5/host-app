# Stage 1: Build and export the Next.js app
FROM node:20 AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Serve the exported site using Nginx
FROM nginx:stable-alpine


RUN rm -rf /usr/share/nginx/html/*

# Copy the exported static files from the builder stage to Nginx's web directory
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]