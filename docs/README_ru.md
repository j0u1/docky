# 🐳 Docky (Доки)

**Docky** - лёгкий поисковик по готовым Docker-конфигурациям для любых стеков через поиск. Забудьте о копировании кривых конфигов из ИИ.

<img alt="preview" src="https://github.com/user-attachments/assets/bca2e505-3dd6-4f1c-8ba5-d3d6bae685cc" />

🇬🇧 [English documentation](../README.md)

## Как добавить свой Dockerfile
 
1. Открой `/app/data/files.ts`
2. Укажи пакетный менеджер
3. Добавь нужные теги (например, `Elysia`, `Prisma`)
4. Вставь код Dockerfile внутрь шаблонной строки и отформатируй его командой `bun fmt`

## Быстрый старт (Development)

### Установка зависимостей:

```bash
bun install
```

### Запуск локального сервера:

```bash
bun run dev
```

### Проверить проект на ошибки:

```bash
bunx lint
```

### Принять изменения ошибок:

```bash
bun lint:fix
```

### Форматировать файлы:

```bash
bun fmt
```

### Проверка форматирования без записи изменений:

```bash
bun fmt:check
```

---

## Функционал

- **Поиск**: Поиск по языку или фреймворку
- **Копирование**: Один клик до копирования файла

## Стек проекта

Проект построен на современном стеке для максимальной скорости:

`TypeScript`, `Nuxt`, `Bun`, `TailwindCSS`, `Shiki`, `Oxc`

![stack](https://skills.syvixor.com/api/icons?perline=15&i=ts,nuxt,bun,tailwindcss,shiki,oxc)
