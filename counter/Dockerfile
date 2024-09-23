FROM oven/bun:slim

WORKDIR /app

# Copy package.json and tsconfig.json
COPY package.json package.json
COPY tsconfig.json tsconfig.json

# Copy Stackr files
# if you have a deployment.json file, copy it here
COPY deployment.json* ./
COPY genesis-state.json genesis-state.json
COPY stackr.config.ts stackr.config.ts

# Copy source code
COPY src src

# Install dependencies
RUN bun install

# Command to run the application
CMD ["bun", "start"]
