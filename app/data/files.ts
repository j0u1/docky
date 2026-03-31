export const files = [
  {
    tags: ["React 19.2.3", "Next.js 16.1.6", "bun"],
    code: `
      FROM oven/bun:1.1-alpine AS deps
      WORKDIR /app

      RUN bun install --frozen-lockfile

      FROM oven/bun:1.1-alpine AS builder
      WORKDIR /app

      COPY --from=deps /app/node_modules ./node_modules
      COPY . .

      ENV NEXT_TELEMETRY_DISABLED 1

      RUN bun run build

      FROM oven/bun:1.1-alpine AS runner
      WORKDIR /app

      ENV NODE_ENV production
      ENV NEXT_TELEMETRY_DISABLED 1

      RUN addgroup --system --gid 1001 nodejs
      RUN adduser --system --uid 1001 nextjs

      COPY --from=builder /app/public ./public
      COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
      COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

      USER nextjs

      EXPOSE 3000

      ENV PORT 3000

      ENV HOSTNAME "0.0.0.0"

      CMD ["bun", "server.js"]
    `,
  },
  {
    tags: ["Vue", "Nuxt 4.4.2", "bun"],
    code: `
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
    `,
  },
  {
    tags: ["React 19.2.0", "Vite 7.3.1", "bun"],
    code: `
    FROM oven/bun:1.1-alpine AS build

    WORKDIR /app

    COPY package.json bun.lock ./

    RUN bun install

    COPY . .

    RUN bun run build

    FROM nginx:stable-alpine

    COPY --from=build /app/dist /usr/share/nginx/html

    EXPOSE 80

    CMD ["nginx", "-g", "daemon off;"]
    `,
  },
  {
    tags: ["Vue", "Nuxt 3.14", "pnpm"],
    code: `
    FROM node:20-alpine AS base
    WORKDIR /app

    ENV PNPM_HOME="/pnpm"
    ENV PATH="$PNPM_HOME:$PATH"
    RUN corepack prepare pnpm@10.0.0 --activate
    RUN corepack enable

    FROM base AS devdeps
    COPY ./package.json ./pnpm-lock.yaml ./
    RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

    RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install -D oxc-parser

    FROM devdeps AS build
    COPY . .
    RUN pnpm build

    FROM base AS deps
    COPY ./package.json ./pnpm-lock.yaml ./
    RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --production

    FROM deps AS deploy
    COPY --from=build /app/.output ./

    EXPOSE 3000
    CMD node ./server/index.mjs
    `,
  },
];
