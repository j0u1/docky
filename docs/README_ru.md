# 🐳 Docky (Доки)

**Docky** — легковесный поисковик по готовым Docker-конфигурациям для любых стеков через поиск. Забудьте о копировании кривых конфигов из ИИ.

<img width="1920" height="949" alt="изображение" src="//github.com/user-attachments/assets/dcc546e4-0c5c-4152-8258-37e8dae07378" />

---

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

- **Framework**: [Nuxt 4](https://nuxt.com/)
- **Runtime**: [Bun](https://bun.sh/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Nuxt UI](https://ui.nuxt.com/)
- **Highlighting**: [Shiki](https://shiki.style/) (VS Code engine)
- **Linting & Formatting**: [Oxc](https://oxc.rs/)
