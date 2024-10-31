# Backend Dockerfile

# Base image
FROM node:20
    
# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the backend code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose port
EXPOSE 5000

# Pass environment variables
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

# Start the backend
CMD ["npm", "run", "dev"]
