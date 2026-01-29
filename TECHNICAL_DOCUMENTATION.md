# Technical Documentation - Resume Website

## Overview
This is a high-performance, responsive personal portfolio website built with React and TypeScript. It is designed to be purely static for maximum security and ease of hosting.

## Architecture
- **Frontend:** React 18 (Vite)
- **Styling:** Tailwind CSS (Utility-first)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Hosting:** Docker (Nginx Alpine)

## Features
1.  **Dark/Light Mode:** Automatically respects system preferences or user toggle.
2.  **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop.
3.  **Dynamic Experience Timeline:** Fetches company logos using the Clearbit API.
4.  **Gallery:** Displays professional appreciations and badges in a responsive masonry layout.
5.  **Security:** Static build with no backend/database interaction, preventing common web exploits.

## Project Structure
```
/src
  /components     # Modular UI components
  /data           # Single source of truth for resume content
  App.tsx         # Main application logic
  index.css       # Global styles and Tailwind directives
/public
  /images         # Profile photos, badges, and appreciations
```

## Deployment
The app is containerized using Docker.

### Local Build & Run
1.  **Build:** `docker build -t resume-app .`
2.  **Run:** `docker run -p 8080:80 resume-app`

### Using Docker Compose
1.  **Run:** `docker compose up -d`
2.  **Stop:** `docker compose down`

### Access
- **URL:** `http://localhost:8080`

## Customization
To update content, modify `src/data/resume.ts`. Images should be placed in `public/images`.
