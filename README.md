# Modern Resume & Portfolio - White Label Engine

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)

A high-performance, responsive resume website engine. Designed to be a **White-Label** solution: you provide the data, it builds the site.

## 🌟 Features

*   **Hybrid Architecture:** Blazing fast text content (compiled) + Hot-swappable assets (runtime).
*   **Dynamic PDF Generation:** Automatically renames your resume download based on your name.
*   **Responsive & Themed:** Mobile-first design with Dark/Light mode support.
*   **Dockerized:** Ready for production with Nginx.

## 🚀 Getting Started

> **Detailed Setup Guide:** Please read **[SETUP.md](SETUP.md)** for step-by-step instructions on how to customize this repo with your own data.

### Quick Summary
1.  **Clone** the repo.
2.  **Edit** `src/data/resume.ts` with your details.
3.  **Drop** your photo and PDF into the `user-data/` folder.
4.  **Run** with Docker.

## 🐳 Docker Deployment

### Local / Standard Usage
```bash
docker compose -f docker-compose.local.yml up -d --build
```
Access at `http://localhost:8080`.

### Production (Vivek's Setup)
The main `docker-compose.yml` is configured for a specific proxy environment.
```bash
docker compose up -d --build
```

## 🔒 Security

*   **Read-Only Volumes:** The `user-data` directory is mounted as read-only (`:ro`).
*   **Permissions:** If you get "Permission Denied" errors on a remote server, ensure you own the folder:
    ```bash
    sudo chown -R $USER:$USER ./user-data
    ```

## 📜 License

[MIT](LICENSE)
