export const skillsData = {
  heroStats: [
    { value: "7+", label: "Years Experience" },
    { value: "50+", label: "Technologies Used" },
    { value: "100+", label: "Projects Delivered" },
    { value: "Always", label: "Learning New Skills" }
  ],
  categories: [
    {
      id: "frontend",
      title: "Frontend Development",
      subtitle: "Crafting beautiful, responsive and interactive user experiences.",
      icon: "monitor",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 }
      ]
    },
    {
      id: "backend",
      title: "Backend Development",
      subtitle: "Building secure, scalable and high-performance applications.",
      icon: "server",
      skills: [
        { name: "Laravel", level: 90 },
        { name: "PHP", level: 85 },
        { name: "REST APIs", level: 88 },
        { name: "API Development", level: 85 },
        { name: "Custom Logic", level: 80 }
      ]
    },
    {
      id: "cms",
      title: "CMS & Website Platforms",
      subtitle: "Flexible and easy-to-manage web solutions for any business.",
      icon: "globe",
      skills: [
        { name: "WordPress", level: 90 },
        { name: "Custom Theme Dev", level: 85 },
        { name: "Plugin Development", level: 80 },
        { name: "Elementor", level: 85 },
        { name: "WooCommerce", level: 80 }
      ]
    },
    {
      id: "database",
      title: "Database Management",
      subtitle: "Designing efficient data structures for reliable performance.",
      icon: "database",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Database Design", level: 80 },
        { name: "Query Optimization", level: 80 },
        { name: "Data Migration", level: 75 },
        { name: "Backup & Security", level: 80 }
      ]
    },
    {
      id: "devops",
      title: "DevOps & Tools",
      subtitle: "Streamlining development and deployment for faster delivery.",
      icon: "settings",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 85 },
        { name: "AWS", level: 80 },
        { name: "VS Code", level: 95 },
        { name: "Deployment", level: 80 }
      ]
    },
    {
      id: "design",
      title: "UI/UX & Design",
      subtitle: "Designing modern and conversion-focused user interfaces.",
      icon: "palette",
      skills: [
        { name: "Figma", level: 85 },
        { name: "UI/UX Design", level: 80 },
        { name: "Responsive Design", level: 90 },
        { name: "Wireframing", level: 80 },
        { name: "Prototyping", level: 75 }
      ]
    },
    {
      id: "integrations",
      title: "Integrations & Automation",
      subtitle: "Connecting systems and automating business processes.",
      icon: "link",
      skills: [
        { name: "API Integration", level: 85 },
        { name: "Third-party APIs", level: 80 },
        { name: "Payment Gateways", level: 80 },
        { name: "Business Automation", level: 85 },
        { name: "CRM Integration", level: 80 }
      ]
    }
  ],
  coreStack: [
    { name: "React", category: "Frontend", icon: "react" },
    { name: "Laravel", category: "Backend", icon: "laravel" },
    { name: "PHP", category: "Backend", icon: "php" },
    { name: "JavaScript", category: "Language", icon: "js" },
    { name: "Tailwind CSS", category: "Styling", icon: "tailwind" },
    { name: "WordPress", category: "CMS", icon: "wordpress" },
    { name: "MySQL", category: "Database", icon: "mysql" },
    { name: "AWS", category: "Cloud", icon: "aws" }
  ],
  process: [
    {
      step: "01",
      title: "Planning",
      items: ["Understand Goals", "Plan Features", "Define Milestones"]
    },
    {
      step: "02",
      title: "Design",
      items: ["UI/UX Design", "Wireframes", "Client Feedback"]
    },
    {
      step: "03",
      title: "Development",
      items: ["Clean & Scalable Code", "Agile Workflow", "Regular Updates"]
    },
    {
      step: "04",
      title: "Testing",
      items: ["Cross-browser Testing", "Performance Check", "Bug Fixing"]
    },
    {
      step: "05",
      title: "Deployment",
      items: ["Server Setup", "Go Live", "Monitoring"]
    },
    {
      step: "06",
      title: "Support",
      items: ["Ongoing Maintenance", "Feature Updates", "Long-Term Support"]
    }
  ],
  certifications: [
    {
      id: "laravel-cert",
      title: "Laravel Essential Training",
      issuer: "LinkedIn Learning",
      year: "2023",
      status: "Completed",
      icon: "linkedin"
    },
    {
      id: "react-cert",
      title: "React - The Complete Guide",
      issuer: "Udemy",
      year: "2023",
      status: "Completed",
      icon: "udemy"
    },
    {
      id: "aws-cert",
      title: "AWS Cloud Fundamentals",
      issuer: "Amazon Web Services",
      year: "2024",
      status: "Completed",
      icon: "aws"
    },
    {
      id: "wordpress-cert",
      title: "WordPress Development",
      issuer: "Udemy",
      year: "2023",
      status: "Completed",
      icon: "udemy"
    }
  ],
  realWorldImpact: {
    title: "From Idea to a Scalable Real Estate Platform",
    category: "REAL ESTATE PLATFORM",
    description: "Built a custom WordPress platform with advanced search, property listing management, and CRM integration. Helped the client automate enquiries and grow business by 3x.",
    tags: ["WordPress", "Custom Plugin", "MySQL", "API Integration", "CRM"],
    image: "/assets/projects/real-estate.jpg",
    metrics: [
      { value: "3x", label: "Business Growth", icon: "trending-up" },
      { value: "80%", label: "Manual Work Reduced", icon: "file-text" },
      { value: "1000+", label: "Properties Managed", icon: "home" },
      { value: "Happier", label: "Clients Real Results", icon: "heart" }
    ]
  }
};
