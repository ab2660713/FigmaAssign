# Step 1: Use Node base image
FROM node:20-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy project files
COPY . .

# Step 6: Build the app
RUN npm run build

# Step 7: Install serve to run build
RUN npm install -g serve

# Step 8: Expose port
EXPOSE 5173
RUN apk add --no-cache xsel
# Step 9: Run the app
CMD ["serve", "-s", "dist", "-l", "5173"]