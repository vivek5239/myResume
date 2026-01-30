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

### Updates
- **Dynamic Resume PDF:** Implemented a system to update the resume PDF without rebuilding the application.
    - Created a `/data` directory to host `resume.pdf`.
    - Updated `docker-compose.yml` to mount `./data` to the container as a read-only volume.
    - Updated `Hero.tsx` to link to the external data file with a generic download name (`Vivek_Sattanatha_ServiceNow_Resume.pdf`).
- **Security Hardening:** Ensured the new volume mount is read-only to prevent container-based file modification.