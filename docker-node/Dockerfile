FROM node:18-alpine
WORKDIR /app    
# mkdir /app && cd /app
COPY . .
RUN npm install
CMD ["npm", "start"]

# build cli: docker build -t node-project:v1 .    // -t <name>:<tag>; if not: default <id>:latest