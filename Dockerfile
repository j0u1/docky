
FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile --ignore-scripts

COPY . .

RUN bun --bun run build

FROM oven/bun:1 AS production
WORKDIR /app

COPY --from=build /app/.output /app

RUN cd /app/server && \
    rm -rf node_modules && \
    bun install --ignore-scripts

EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "/app/server/index.mjs" ]
