# Modern Resume & Portfolio - Vivek Sattanatha

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

A high-performance, responsive, and visually engaging resume website built with modern web technologies. Designed for easy deployment, scalability, and seamless content updates.

## 🌟 Key Features

*   **Responsive Design:** Fully responsive layout that looks great on mobile, tablet, and desktop.
*   **Dark/Light Mode:** Built-in theme switcher with persistent preference.
*   **Interactive UI:** Smooth animations using Framer Motion.
*   **Dynamic Resume PDF:** Download the latest resume PDF without rebuilding the application.
*   **Data-Driven:** All content is managed via a single structured data file (`src/data/resume.ts`) for easy updates.
*   **Dockerized:** Optimized Nginx container for production-grade hosting.

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18+)
*   npm or yarn
*   Docker (optional, for containerization)

### Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/vivek5239/myResume.git
    cd myResume
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` in your browser.

## 🐳 Docker Deployment

This project includes Docker support for easy deployment.

### 1. Local Docker Testing (Recommended for others)

Use the local compose file which is configured for standalone execution without external proxy networks.

```bash
docker compose -f docker-compose.local.yml up -d --build
```
Access the site at `http://localhost:8080`.

### 2. Production Deployment (Custom Setup)

The main `docker-compose.yml` is configured for a specific production environment utilizing external networks (`cloudflare_net`, `t3_proxy`).

```bash
docker compose up -d --build
```

## 📄 Managing the Resume PDF

One of the key features of this setup is the ability to update the downloadable PDF **without modifying the code or rebuilding the Docker image**.

1.  **Location:** The app looks for a file named `resume.pdf` inside the `./data` directory in the project root.
2.  **How to Update:**
    *   Rename your new resume file to `resume.pdf`.
    *   Replace the existing file in the `./data` folder.
    *   The website will immediately serve the new file when users click "Download Resume".
    *   *Note:* The download filename is masked to a generic name (`Vivek_Sattanatha_ServiceNow_Resume.pdf`) so users always get a professional filename regardless of your internal file naming.

## 🛠️ Customization

To personalize this resume for your own use:

1.  **Content:** Edit `src/data/resume.ts`. This file contains the schema for:
    *   Profile info
    *   Experience history
    *   Skills & Tech stack
    *   Contact details
2.  **Images:** Place your profile photo and other assets in `public/images/`.
3.  **Themes:** Modify `tailwind.config.js` or `src/index.css` to change the color palette.

## 🔒 Security & Permissions

*   **Read-Only Volumes:** The data directory is mounted as read-only (`:ro`) in the Docker container, preventing any unauthorized modification of your resume files from within the web server.
*   **Static Serving:** The app is served via Nginx as static HTML/JS, minimizing the attack surface compared to dynamic backend servers.

### Troubleshooting: Permission Denied on Remote Servers

If you encounter a `Permission denied` error when trying to upload your `resume.pdf` to the data folder on a remote Linux server, it is likely because Docker created the folder as the `root` user.

To fix this securely, run the following commands on your server:

```bash
# 1. Take ownership of the data folder (replace 'vivek' with your username)
sudo chown -R vivek:vivek /path/to/your/appdata/resume/data/

# 2. Ensure the PDF file is readable by the web server
chmod 644 /path/to/your/appdata/resume/data/resume.pdf
```

## 📜 License

[MIT](LICENSE)