export const skillsData = {
  heroStats: [
    { value: "7+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "100+", label: "Happy Clients" },
    { value: "5.0", label: "Google Review Rating" }
  ],
  clusters: [
    {
      id: "frontend",
      title: "Frontend Development",
      description: "Building responsive, accessible, and fast client interfaces with modern JavaScript and component architectures.",
      icon: "monitor",
      technologies: [
        { name: "React", description: "Stateful SPAs, custom hooks, reusable design systems" },
        { name: "Next.js", description: "Server components, static generation, SEO routing" },
        { name: "JavaScript (ES6+)", description: "Async data handling, DOM manipulation, clean logic" },
        { name: "Tailwind CSS", description: "Modern utility-first styling, design token consistency" },
        { name: "HTML5 & CSS3", description: "Semantic markup, modern flex/grid layouts, accessibility" },
        { name: "Bootstrap", description: "Legacy refactoring, responsive grids, UI styling" }
      ]
    },
    {
      id: "backend",
      title: "Backend Architecture",
      description: "Developing secure, performant server logic, authenticated REST APIs, and dependable business workflows.",
      icon: "server",
      technologies: [
        { name: "Laravel", description: "Robust MVC architecture, Eloquent ORM, queues, events" },
        { name: "PHP", description: "Object-oriented architecture, secure scripting, custom engines" },
        { name: "Node.js", description: "Lightweight microservices, asynchronous utilities, scripts" },
        { name: "REST APIs", description: "Clean API contract design, authentication, JSON schemas" }
      ]
    },
    {
      id: "database",
      title: "Database & Data Modeling",
      description: "Designing efficient schemas, indexing critical queries, and ensuring data integrity.",
      icon: "database",
      technologies: [
        { name: "MySQL", description: "Relational modeling, transaction safety, query indexing" },
        { name: "Database Design", description: "Normalized schemas, foreign keys, relationship integrity" },
        { name: "Query Optimization", description: "Eliminating N+1 queries, slow query profiling, indexing" },
        { name: "Data Migration", description: "Structured ETL pipelines and historical data migrations" }
      ]
    },
    {
      id: "tools-infrastructure",
      title: "Tools & Infrastructure",
      description: "Automating deployments, version control, and delivering web assets across global edge networks.",
      icon: "settings",
      technologies: [
        { name: "Git & GitHub", description: "Branching strategies, pull requests, semantic versioning" },
        { name: "Cloudflare", description: "Workers, Pages, DNS configuration, CDN edge caching" },
        { name: "Deployment Tools", description: "Linux servers, cPanel, Vercel, DigitalOcean provisioning" },
        { name: "Build Tooling", description: "Vite, npm package optimization, code-splitting" }
      ]
    },
    {
      id: "cms",
      title: "CMS & E-Commerce",
      description: "Developing custom, lightweight content systems without relying on bloated page builder plugins.",
      icon: "globe",
      technologies: [
        { name: "WordPress", description: "Custom theme creation, child themes, template hierarchy" },
        { name: "Custom Plugins & ACF", description: "Bespoke post types, custom fields, clean client editing" },
        { name: "WooCommerce", description: "Store architecture, custom checkouts, payment hooks" }
      ]
    },
    {
      id: "integrations",
      title: "APIs & Business Automation",
      description: "Eliminating manual data transfer by connecting applications to third-party tools and gateways.",
      icon: "link",
      technologies: [
        { name: "Payment Gateways", description: "Stripe, PayPal, Razorpay payment intents & webhooks" },
        { name: "Third-Party APIs", description: "Twilio SMS, SendGrid email, Google Maps, CRM endpoints" },
        { name: "Business Automation", description: "Automated PDF generation, email triggers, webhook listeners" }
      ]
    }
  ],
  coreStack: [
    { name: "React", role: "Frontend SPAs" },
    { name: "Laravel", role: "Backend Framework" },
    { name: "PHP", role: "Server Programming" },
    { name: "MySQL", role: "Relational Database" },
    { name: "Tailwind CSS", role: "UI Styling" },
    { name: "JavaScript", role: "Core Language" },
    { name: "WordPress", role: "Custom CMS" },
    { name: "Cloudflare", role: "Edge & Deployment" }
  ]
};

export default skillsData;
