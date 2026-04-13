FROM node:20-alpine AS build

WORKDIR /app

RUN corepack enable

COPY package.json prisma.config.ts ./
COPY prisma ./prisma
RUN pnpm install --no-frozen-lockfile
RUN pnpm prisma:generate

COPY src ./src
COPY tsconfig.json tsconfig.build.json nest-cli.json ./
RUN pnpm build

FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/generated ./generated
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/prisma.config.ts ./prisma.config.ts

EXPOSE 3000

CMD ["node", "dist/src/main.js"]
