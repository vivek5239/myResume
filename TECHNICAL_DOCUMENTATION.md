# Technical Documentation - White-Label Resume Engine

## Overview
This is a high-performance, responsive portfolio website engine built with React and TypeScript. 
It utilizes a **Hybrid Architecture** that separates compiled content (code/text) from runtime assets (images/PDFs), making it efficiently deployable as a white-label solution.

## Architecture

### Tech Stack
- **Frontend:** React 18 (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Utility-first)
- **Animations:** Framer Motion
- **Hosting:** Docker (Nginx Alpine)

### Hybrid Data Strategy
The application manages data in two distinct ways to optimize for both performance and maintainability:

1.  **Compiled Data (`src/data/resume.ts`)**
    *   **Content:** Text-based data (Name, Experience, Skills, JSON structure).
    *   **Mechanism:** Imported directly into the TypeScript bundle at build time.
    *   **Benefit:** Zero-latency loading, type safety, and optimal SEO.
    *   **Update Process:** Requires a container rebuild (`npm run build` or `docker compose up --build`).

2.  **Runtime Assets (`/user-data/` Volume)**
    *   **Content:** Binary files (`resume.pdf`, `avatar.jpg`).
    *   **Mechanism:** Served via Nginx volume mount.
    *   **Benefit:** Allows "Hot-Swapping" of files on the server without rebuilding the application.
    *   **Security:** Mounted as Read-Only (`:ro`) to prevent container-based tampering.

## Configuration System
The application behavior is controlled by `src/config.ts`:
- **Dynamic Naming:** Can automatically generate PDF filenames based on the user's name (e.g., `John_Doe_Resume.pdf`).
- **Theming:** Toggles for default light/dark mode.
- **Feature Flags:** Ability to hide sections (Badges, Appreciations) if data is missing.

## Project Structure
```
/
├── src/
│   ├── config.ts       # Global app configuration
│   ├── components/     # Modular UI components
│   └── data/           # Content source (resume.ts)
├── user-data/          # External assets (PDF, Avatar) - Mounted Volume
├── public/             # Static assets
└── docker-compose.yml  # Production orchestration
```

## Security Model
1.  **Static Serving:** No backend database or server-side logic (PHP/Node) is exposed.
2.  **Read-Only Volumes:** The `user-data` folder is mounted `:ro`.
3.  **Permissions:** Detailed guide provided in README for securing server-side folder ownership.