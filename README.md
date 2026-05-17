# 🐳 Docky

**Docky** is a lightweight search engine for production-ready Docker configurations across any stack. Stop copying broken AI-generated configs and start using battle-tested templates.

<img alt="preview" src="https://github.com/user-attachments/assets/8b03b18e-82bf-4cde-9ec8-7aa40e3d3f96" />

🇷🇺 [Русская документация](docs/README_ru.md)

## How to Add Your Dockerfile

1. Open `/app/data/files.ts`
2. Add the package manager
3. Add relevant tags (e.g. `Elysia`, `Prisma`)
4. Add your Dockerfile code inside a template literal and format it with `bun fmt`

## Quick Start (Development)

### Install dependencies:

```bash
bun install
```

### Start local development server:

```bash
bun dev
```

### Lint for errors:

```bash
bun lint
```

### Apply lint fixes:

```bash
bun lint:fix
```

### Format files:

```bash
bun fmt
```

### Check formatting without changes:

```bash
bun fmt:check
```

---

## Features

- **Smart Search**: Find configurations by language, runtime, or framework
- **One-Click Copy**: Get your Dockerfile into the clipboard instantly

## Tech Stack

Built with a modern stack for maximum performance and developer experience:

`TypeScript`, `Nuxt`, `Bun`, `TailwindCSS`, `Shiki`, `Oxc`

![stack](https://skills.syvixor.com/api/icons?perline=15&i=ts,nuxt,bun,tailwindcss,shiki,oxc)
