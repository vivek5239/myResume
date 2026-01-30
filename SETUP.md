# Setup Guide: Build Your Own Resume Site

This repository is designed to be a "White-Label" resume engine. You can fork it and create your own professional resume website without touching the complex React code.

## 🚀 Quick Start

### 1. Fork & Clone
Clone this repository to your local machine.

### 2. Add Your Data
1.  **Text Data:**
    *   Navigate to `src/data/`.
    *   Rename `resume.example.ts` to `resume.ts` (or just edit the existing `resume.ts`).
    *   Fill in your details (Name, Experience, Skills, etc.).

2.  **Images & PDF:**
    *   Navigate to the `user-data` folder in the project root.
    *   Replace `avatar.jpg` with your profile photo.
    *   Replace `resume.pdf` with your actual PDF resume.
    *   *Note:* Keep the filenames exactly as `avatar.jpg` and `resume.pdf` for the easiest setup.

### 3. Configuration (Optional)
Open `src/config.ts` to tweak settings:
*   `pdfDownloadName`: Set to `'auto'` to generate a filename like `Your_Name_Resume.pdf`, or type a specific string.
*   `ui.defaultTheme`: Choose 'light' or 'dark'.

## 🐳 Docker Deployment

The app is pre-configured for Docker.

1.  **Build & Run:**
    ```bash
    docker compose -f docker-compose.local.yml up -d --build
    ```
2.  **Visit:** `http://localhost:8080`

### Updating Content Later
You **do not** need to rebuild the container to update your Photo or PDF.
*   Just replace the files in the `user-data` folder on your server.
*   The site updates instantly.

## ⚠️ Rolling Back (For Admin)

If you are the repo owner and need to revert to the previous stable version (v1):

1.  Edit `docker-compose.yml`.
2.  Change `image: vivek5239/my-resume:latest` to `image: vivek5239/my-resume:v1.0.0`.
3.  Run `docker compose up -d`.
