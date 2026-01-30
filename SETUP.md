# Setup Guide: Build Your Own Resume Site

This repository is designed to be a "White-Label" resume engine. You can fork it and create your own professional resume website without touching the complex React code.

## 📂 Understanding the Folder Structure

This project uses a **Hybrid Architecture** to balance performance with convenience. It's important to know where to put your files.

### 1. `src/data/resume.ts` (The Content)
*   **What goes here:** All text content (Name, Experience, Skills, Contact Info).
*   **Why here?** This data is **compiled** directly into the application code. This ensures your site loads instantly (no "loading..." spinners) and is fully optimized for SEO.
*   **Workflow:** Because this is code, **you must rebuild the app** after changing this file.

### 2. `user-data/` (The Personal Assets)
*   **What goes here:** Binary files like `resume.pdf` and `avatar.jpg`.
*   **Why here?** These are external assets mounted to the server.
*   **Workflow:** You can **hot-swap** these files on your server (drag-and-drop) without needing to rebuild or restart anything. The site updates instantly.

### 3. `public/images/` (The Project Assets)
*   **What goes here:** Certification badges, Appreciation screenshots, and other static images.
*   **Why here?** These are standard project assets that are bundled with the app.
*   **How to use:**
    1.  Place your image files in `public/images/` (e.g., `my-badge.png`).
    2.  Reference them in `src/data/resume.ts` like this: `"/images/my-badge.png"`.

---

## 🚀 Quick Start

### 1. Fork & Clone
Clone this repository to your local machine.

### 2. Add Your Data
1.  **Text Data (`src/data/`):**
    *   Rename `src/data/resume.example.ts` to `src/data/resume.ts`.
    *   Fill in your details (Name, Experience, Skills, etc.) in the JSON structure.

2.  **Images & PDF (`user-data/`):**
    *   Navigate to the `user-data` folder in the project root.
    *   Replace `avatar.jpg` with your profile photo.
    *   Replace `resume.pdf` with your actual PDF resume.
    *   *Tip:* Keep the filenames exactly as `avatar.jpg` and `resume.pdf` for the easiest setup.

3.  **Badges & Appreciations (`public/images/`):**
    *   Copy your badge/certificate images and appreciation screenshots into `public/images/`.
    *   Update the paths in your `resume.ts` to point to these files.

### 3. Configuration (Optional)
Open `src/config.ts` to tweak settings:
*   `pdfDownloadName`: Set to `'auto'` to automatically generate a filename like `Your_Name_Resume.pdf`, or type a specific string.
*   `ui.defaultTheme`: Choose 'light' or 'dark'.

---

## 🐳 Docker Deployment

The app is pre-configured for Docker.

1.  **Build & Run:**
    ```bash
    docker compose up -d --build
    ```
2.  **Visit:** `http://localhost:8080`

### Updating Content on Server
*   **Text & Project Assets:** Pull latest git changes and run `docker compose up -d --build`.
*   **Personal Assets (PDF/Photo):** Just replace the files in the `user-data` folder on your server. No rebuild needed.
