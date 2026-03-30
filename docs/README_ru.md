# 🐳 Docky (Доки)

**Docky** — это легковесный поисковик по готовым Docker-конфигурациям для любых стеков через поиск. Забудьте о копировании кривых конфигов из ИИ.

---
## Быстрый старт (Development)

### Установка зависимостей:

```bash
bun install
```

### Запуск локального сервера:

``` bash
bun run dev
```

### Проверить проект на ошибки:

``` bash
bunx lint
```

### Принять изменения ошибок:

``` bash
bun lint:fix
```

### Форматировать файлы:

``` bash
bun fmt
```

### Проверка форматирования без записи изменений:

``` bash
bun fmt:check
```
---

## Функционал

* **Поиск**: Поиск по языку или фреймворку
* **Копирование**: Один клик до копирования файла


## Стек проекта

Проект построен на современном стеке для максимальной скорости:
* **Framework**: [Nuxt 4](https://nuxt.com/)
* **Runtime**: [Bun](https://bun.sh/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Nuxt UI](https://ui.nuxt.com/)
* **Highlighting**: [Shiki](https://shiki.style/) (VS Code engine)
* **Linting & Formatting**: [Oxc](https://oxc.rs/)
