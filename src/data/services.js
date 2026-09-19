export const coreServices = [
  {
    id: "custom-web-apps",
    number: "01",
    title: "Custom Web Applications",
    shortDesc: "Tailored web applications that solve specific operational workflows, portals, booking systems, and internal tools.",
    problem: "Off-the-shelf SaaS tools are often rigid, charge steep monthly per-user fees, or fail to support your specific business processes.",
    whatIBuild: "Bespoke full-stack web applications with intuitive user portals, admin control centers, role-based permissions, and custom database architectures.",
    businessBenefit: "Eliminates workarounds, accelerates staff workflows, and gives your business full software ownership without monthly per-seat license costs.",
    typicalFunctionality: [
      "Client portals & self-service account dashboards",
      "Interactive booking & dimension calculation engines",
      "Internal management tools & data dashboards",
      "Multi-tenant architectures with role permissions"
    ],
    capabilities: [
      "Client & Admin Portals",
      "Interactive Calculators & Bookings",
      "Internal Business Tools & Dashboards"
    ],
    technologies: ["React", "Laravel", "PHP", "MySQL", "Tailwind CSS"],
    relatedCaseStudy: {
      title: "Industrial PLT Cutting File Generator",
      slug: "plt-file-generator",
      result: "Cut coordinate file preparation from 15 minutes to under 20 seconds"
    },
    icon: "code"
  },
  {
    id: "crm-business-automation",
    number: "02",
    title: "CRM & Business Automation",
    shortDesc: "Custom CRM systems and automated workflows designed to replace spreadsheets and eliminate repetitive manual tasks.",
    problem: "Tracking leads and customer jobs across fragmented spreadsheets causes lost inquiries, delayed follow-ups, and billing mistakes.",
    whatIBuild: "Tailored CRM platforms that track deals through your exact pipeline, automate follow-up emails and SMS, and generate one-click quotes and invoices.",
    businessBenefit: "Saves dozens of admin hours weekly, prevents missed customer inquiries, and gives leadership real-time visibility into operations.",
    typicalFunctionality: [
      "Kanban lead and deal pipeline tracking",
      "Automated email & SMS notification triggers",
      "One-click PDF quote and invoice generation",
      "Client communications history and activity audit logs"
    ],
    capabilities: [
      "Pipeline & Lead Management",
      "Automated Invoicing & Quotes",
      "Repetitive Admin Workflow Automation"
    ],
    technologies: ["Laravel", "MySQL", "Livewire", "React", "REST APIs"],
    relatedCaseStudy: {
      title: "Quote My Blinds SaaS Operations & CRM Platform",
      slug: "quote-my-blinds",
      result: "65% faster quote-to-invoice cycles and unified booking schedules"
    },
    icon: "database"
  },
  {
    id: "high-performance-websites",
    number: "03",
    title: "High-Performance Business Websites",
    shortDesc: "Modern, conversion-focused websites engineered for speed, search visibility, mobile responsiveness, and easy content management.",
    problem: "Slow, outdated websites with poor mobile experiences frustrate potential buyers and rank poorly on Google search results.",
    whatIBuild: "Fast, custom-coded websites built with clean markup, modern responsive UI, structured schema for SEO, and streamlined CMS controls.",
    businessBenefit: "Improves your first impression, delivers sub-second load times that keep visitors engaged, and converts more visitors into inquiries.",
    typicalFunctionality: [
      "Mobile-first responsive design across all screen sizes",
      "Fast Core Web Vitals (LCP < 2.5s, clean layouts)",
      "Technical SEO markup and structured data",
      "Lightweight custom WordPress or React content setups"
    ],
    capabilities: [
      "Conversion-Focused Web Architecture",
      "Core Web Vitals & Speed Optimization",
      "Technical SEO & Structured Schema"
    ],
    technologies: ["React", "WordPress (Custom)", "Tailwind CSS", "PHP", "Vite"],
    relatedCaseStudy: {
      title: "SSPR Valve Manufacturing Industrial Catalog",
      slug: "sspr-valve-manufacturing",
      result: "45% increase in domestic and export valve inquiries"
    },
    icon: "layout"
  },
  {
    id: "api-integrations",
    number: "04",
    title: "API & Third-Party Integrations",
    shortDesc: "Reliable connections between your web software, payment gateways, external CRMs, and third-party cloud services.",
    problem: "Operating separate software tools for billing, CRM, messaging, and fulfillment creates tedious double-data entry and human errors.",
    whatIBuild: "Secure RESTful API integrations and webhook pipelines that automatically synchronize data across your external platforms in real time.",
    businessBenefit: "Eliminates double entry, keeps your financial and customer records automatically synchronized, and ensures bank-grade transaction reliability.",
    typicalFunctionality: [
      "Payment gateway integration (Stripe, PayPal, Razorpay)",
      "Automated transactional SMS and email delivery (Twilio, SendGrid)",
      "CRM & ERP bi-directional data synchronization",
      "Webhook listeners with automated retry and error logging"
    ],
    capabilities: [
      "Payment Gateways (Stripe, PayPal)",
      "CRM & Cloud Database Synchronization",
      "Webhook Event & Messaging Pipelines"
    ],
    technologies: ["REST APIs", "Webhooks", "Laravel", "Node.js", "MySQL"],
    relatedCaseStudy: {
      title: "Purge Electrical Solutions & Invoicing System",
      slug: "purge-electrical",
      result: "75% faster invoice creation with automated payment tracking"
    },
    icon: "link"
  }
];

export const servicesData = coreServices;

export const developmentProcess = [
  {
    step: "01",
    title: "Discovery",
    subtitle: "Understand Goals",
    desc: "We analyze your business workflows, current operational friction, user requirements, and technical constraints."
  },
  {
    step: "02",
    title: "Planning",
    subtitle: "Architecture & UX",
    desc: "We map out system architecture, database relationships, interface wireframes, and sprint milestone deliverables."
  },
  {
    step: "03",
    title: "Build & Test",
    subtitle: "Development & QA",
    desc: "We build your solution using modern, tested technologies, running cross-device testing and milestone reviews."
  },
  {
    step: "04",
    title: "Launch & Support",
    subtitle: "Deployment & Warranty",
    desc: "We deploy to your production server or cloud, configure domains and security, and provide dedicated post-launch support."
  }
];

export const faqList = [
  // SECTION 1: Technical & Capabilities
  {
    id: "tech-projects",
    category: "tech",
    q: "What types of projects do you build?",
    a: "I specialize in custom web applications, bespoke CRM platforms, business automation tools, and high-performance client portals. Most of my work involves solving operational bottlenecks, replacing unwieldy spreadsheets, and building scalable full-stack web software using React and Laravel."
  },
  {
    id: "tech-stack",
    category: "tech",
    q: "What technologies do you use most frequently?",
    a: "My core production stack centers on modern React, TypeScript, and Tailwind CSS on the frontend, and robust Laravel (PHP) with MySQL or PostgreSQL on the backend. For CMS needs, I develop lightweight, custom WordPress themes and plugins without bloated page builders."
  },
  {
    id: "tech-refactoring",
    category: "tech",
    q: "Can you improve, modernize, or refactor an existing application?",
    a: "Yes. I frequently help businesses modernize legacy PHP or WordPress platforms, refactor slow frontend code into high-speed React components, optimize sluggish database queries, and build custom RESTful APIs to bridge legacy databases with modern cloud tools."
  },
  {
    id: "tech-integrations",
    category: "tech",
    q: "Can you integrate with third-party APIs, CRMs, and payment gateways?",
    a: "Yes. I regularly integrate web platforms with third-party ecosystems including payment gateways (Stripe, PayPal, Razorpay), communication APIs (Twilio, SendGrid, WhatsApp Business API), external CRMs (HubSpot, Zoho, Salesforce), and custom webhooks with resilient error handling."
  },
  {
    id: "tech-devops",
    category: "tech",
    q: "Can you handle cloud deployment, server setup, and DevOps?",
    a: "Yes. I manage end-to-end production hosting and deployments across AWS, DigitalOcean, Hetzner, Vercel, and traditional Linux VPS environments. This includes setting up automated CI/CD deployment pipelines, SSL certificates, automated database backups, and Redis caching for peak performance."
  },
  {
    id: "tech-design",
    category: "tech",
    q: "Do I need ready-made UI/UX designs before we start?",
    a: "Not necessarily. If you already have Figma or Adobe XD designs, I will translate them into responsive, pixel-perfect code. If you only have an idea, wireframe, or business requirement document, I design clean, intuitive, and modern UI interfaces directly tailored to your end users."
  },

  // SECTION 2: Process, Pricing & Collaboration
  {
    id: "process-pricing",
    category: "process",
    q: "How do you structure project pricing and payments?",
    a: "I provide transparent, milestone-based fixed pricing for scoped projects, and hourly or monthly retainer arrangements for continuous feature sprints. Projects typically split into structured milestones (e.g., 30% kickoff, 40% functional beta demo, 30% final launch). There are zero hidden costs."
  },
  {
    id: "process-turnaround",
    category: "process",
    q: "What is your typical project turnaround time?",
    a: "Delivery depends on technical scope. Focused landing applications and business utilities typically take 1–2 weeks. Custom CRM portals, multi-role web apps, and complete business platforms typically take 3–6 weeks. You receive staging preview links and milestone demos every week."
  },
  {
    id: "process-ownership",
    category: "process",
    q: "Who owns the code and intellectual property after completion?",
    a: "You retain 100% full intellectual property and code ownership. Upon final milestone completion and sign-off, full source code repositories, deployment scripts, database schemas, and documentation are transferred to your accounts with zero vendor lock-in."
  },
  {
    id: "process-warranty",
    category: "process",
    q: "Do you offer post-launch warranty and ongoing maintenance?",
    a: "Yes. Every custom build includes a complimentary 30-day post-launch warranty covering bug fixes, performance monitoring, and handover adjustments. For long-term continuity, I also provide monthly maintenance retainers covering security patches, backups, and feature enhancements."
  },
  {
    id: "process-international",
    category: "process",
    q: "Do you work with international clients across different time zones?",
    a: "Yes. Over the past 7+ years, I have collaborated with founders, startups, and agencies across India, the United States, the UK, Europe, and New Zealand. I maintain prompt asynchronous communication, detailed sprint updates, and schedule crossover calls that fit your time zone."
  },
  {
    id: "process-contact",
    category: "process",
    q: "How can I discuss my project and get started?",
    a: "You can submit an inquiry through the Contact page, message me directly on WhatsApp at +91 90389 09382, or email saikatpatraoffice@gmail.com. I review your requirements and respond within 24 hours to arrange an introductory consultation or preliminary technical estimate."
  }
];

export default coreServices;
