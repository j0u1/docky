# 🐳 Docky

🇷🇺 [Русская документация](docs/README_ru.md)

**Docky** is a lightweight search engine for production-ready Docker configurations across any stack. Stop copying broken AI-generated configs and start using battle-tested templates.

<img width="1920" height="949" alt="изображение" src="https://github.com/user-attachments/assets/dcc546e4-0c5c-4152-8258-37e8dae07378" />

---


## Quick Start (Development)

### Install dependencies:

```bash
bun install
```

### Start local development server:

``` bash
bun run dev
```

### Lint for errors:

``` bash
bunx lint
```

### Apply lint fixes:

``` bash
bun lint:fix
```

### Format files:

``` bash
bun fmt
```

### Check formatting without changes:

``` bash
bun fmt:check
```
---

## Features

* **Smart Search**: Find configurations by language, runtime, or framework
* **One-Click Copy**: Get your Dockerfile into the clipboard instantly


## Tech Stack

Built with a modern stack for maximum performance and developer experience:
* **Framework**: [Nuxt 4](https://nuxt.com/)
* **Runtime**: [Bun](https://bun.sh/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Highlighting**: [Shiki](https://shiki.style/) (VS Code engine)
* **Linting & Formatting**: [Oxc](https://oxc.rs/)
