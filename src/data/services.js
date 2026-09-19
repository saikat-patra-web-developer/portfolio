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
  {
    q: "What types of projects do you build?",
    a: "I specialize in custom web applications, bespoke CRM platforms, business automation tools, and high-performance business websites. Most of my work involves solving operational bottlenecks, replacing complex spreadsheets, or building custom client and admin portals using React and Laravel."
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. Over the past 7+ years, I have collaborated with founders, businesses, and agency partners across India, New Zealand, the United States, the UK, and Europe. I maintain clear, asynchronous communication and coordinate sprint calls to accommodate different time zones."
  },
  {
    q: "Can you improve or refactor an existing application?",
    a: "Yes. I frequently help businesses modernize legacy PHP or WordPress platforms, refactor slow frontend code into fast React components, fix database query bottlenecks, and build custom APIs to connect older systems with modern cloud services."
  },
  {
    q: "Can you integrate with an existing CRM or third-party API?",
    a: "Yes. I regularly integrate web platforms with third-party services including payment gateways (Stripe, PayPal, Razorpay), communication APIs (Twilio, SendGrid, WhatsApp Business), external CRMs, and custom RESTful endpoints with secure webhook handlers."
  },
  {
    q: "What technologies do you use most frequently?",
    a: "My core production stack centers on modern React with Tailwind CSS on the frontend, and robust Laravel (PHP) with MySQL on the backend. For CMS projects, I build bespoke, lightweight WordPress themes and plugins without relying on bloated page builders."
  },
  {
    q: "How can I discuss a project with you?",
    a: "You can submit an inquiry through the Contact page form, message me directly on WhatsApp at +91 90389 09382, or email saikatpatraoffice@gmail.com. I will review your requirements and respond within 24 hours to schedule a brief consultation."
  }
];

export default coreServices;
