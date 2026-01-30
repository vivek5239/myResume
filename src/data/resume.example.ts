export const resumeData = {
  name: "John Doe",
  title: "Full Stack Developer",
  avatarUrl: "/user-data/avatar.jpg",
  contact: {
    email: "john.doe@example.com",
    phone: "+1-555-0123",
    location: "San Francisco, CA",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
  },
  stats: [
    { 
      label: "Experience", 
      value: "5+ Yrs", 
      icon: "Clock", 
      color: "text-blue-500",
      description: "Building scalable web applications and cloud infrastructure."
    },
    { 
      label: "Projects", 
      value: "50+", 
      icon: "CheckCircle", 
      color: "text-green-500",
      description: "Delivered successful projects for startups and enterprise clients."
    }
  ],
  summary: [
    "Passionate Full Stack Developer with 5+ years of experience in React, Node.js, and Cloud technologies.",
    "Proven track record of delivering high-performance web applications.",
    "Strong advocate for clean code and test-driven development."
  ],
  skills: {
    "Frontend": ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    "Backend": ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    "DevOps": ["Docker", "AWS", "CI/CD", "Git"]
  },
  experience: [
    {
      company: "Tech Corp Inc.",
      domain: "google.com", // Used for fetching logo
      title: "Senior Developer",
      period: "2020 - Present",
      responsibilities: [
        "Led a team of 5 developers in building the core product.",
        "Improved application performance by 40%."
      ]
    }
  ],
  certifications: [
    "AWS Certified Solutions Architect",
    "Meta Frontend Developer Certificate"
  ],
  // Leave empty if you don't have badges
  badges: [], 
  // Leave empty if you don't have appreciations
  appreciations: [] 
};
