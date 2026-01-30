# Session History - Vivek's Resume App

## 29 January 2026

### Initial Request
- User requested a modern, secure, mobile-friendly resume website.
- Requirement for Dark/Light mode, multi-section layout (Skills, Experience, Certifications, Appreciations).
- Implementation in JavaScript (React/TypeScript used for better type safety and security).
- Hosting via Docker.

### Actions Taken
1.  **Project Initialization:** Scaffolded a Vite + React + TypeScript project.
2.  **Styling Setup:** Integrated Tailwind CSS with a custom theme (Shadcn-like variables for clean Dark/Light mode).
3.  **Asset Management:** Organized images and appreciation files into `public/images`.
4.  **Data Structuring:** Created `src/data/resume.ts` with comprehensive data extracted from the provided resume text and appreciation files.
5.  **Component Development:**
    *   `Navbar`: Responsive navigation with theme toggle.
    *   `Hero`: Dynamic intro with profile photo and social links.
    *   `Experience`: Vertical timeline with automatic logo fetching via Clearbit API.
    *   `Skills`: Categorized skill tags with interactive hover effects.
    *   `Gallery`: Masonry grid for appreciations and certification badges.
    *   `Footer`: Contact info and social links.
6.  **Security Measures:** Built as a 100% static site to eliminate backend vulnerabilities.
7.  **Containerization:** Created a multi-stage Dockerfile for optimized production hosting.
8.  **Documentation:** Created technical documentation and session history.

### Outcome
A fully functional, polished, and professional resume website ready for deployment.

## 30 January 2026

### v1.0.0 Release (Stable)
- **Dynamic Resume PDF:** Implemented a system to update the resume PDF without rebuilding the application.
- **Security Hardening:** Ensured volume mounts are read-only (`:ro`).
- **Tagging:** Published `v1.0.0` to Docker Hub and GitHub.

### v2.0.0 "White-Label" Transformation
- **Architecture Refactor:** Decoupled the "Engine" from the "Data".
- **Hybrid Data Model:**
    - `src/data/resume.ts`: Compiled text content.
    - `user-data/`: Runtime assets (PDF, Avatar).
- **Configuration:** Added `src/config.ts` for app-wide settings and dynamic PDF filename generation.
- **Documentation:** Created `SETUP.md` for new users.
- **Release:** Published `v2.0.0` to Docker Hub and GitHub.

### ⚠️ How to Revert to v1.0.0
If the v2 update causes issues, you can roll back to the stable v1 release using Docker.

1.  **Edit `docker-compose.yml`**:
    Change the image tag:
    ```yaml
    image: vivek5239/my-resume:v1.0.0
    ```
    *(Instead of `:latest`)*

2.  **Redeploy:**
    ```bash
    docker compose up -d
    ```