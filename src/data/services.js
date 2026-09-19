export const coreServices = [
  {
    id: "custom-web-apps",
    number: "01",
    title: "Custom Web Applications",
    shortDesc: "Bespoke full-stack web applications built around your exact operational workflows, portals, and internal tools.",
    problem: "Generic SaaS tools are either too rigid, miss the specific features your workflow needs, or charge punishing per-user monthly fees that eat into your profit margins.",
    whatIBuild: "Tailor-made web applications featuring intuitive customer portals, admin back-offices, role-based access, automated calculation tools, and high-performance databases.",
    businessBenefit: "Eliminates messy workarounds, speeds up your team's daily output, and gives your company 100% software ownership with zero recurring per-user licensing costs.",
    typicalFunctionality: [
      "Customer portals & self-service account dashboards",
      "Interactive quoting, pricing & dimension calculation engines",
      "Internal back-office tools & operational dashboards",
      "Multi-tenant architectures with role-based security"
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
      result: "Reduced CNC cutting file preparation time from 15 minutes to under 20 seconds"
    },
    icon: "code"
  },
  {
    id: "crm-business-automation",
    number: "02",
    title: "Bespoke CRM & Business Automation",
    shortDesc: "Custom CRM systems and automated workflows designed to replace cluttered spreadsheets and eliminate manual admin busywork.",
    problem: "Tracking sales leads, customer jobs, and invoices across disconnected spreadsheets leads to lost inquiries, missed follow-ups, and billing headaches.",
    whatIBuild: "Custom CRM platforms that follow your company's exact sales pipeline, trigger automatic email and SMS notifications, and generate professional quotes and invoices with one click.",
    businessBenefit: "Saves dozens of administrative hours every week, prevents missed customer inquiries, and gives company leadership real-time visibility into operations.",
    typicalFunctionality: [
      "Visual Kanban deal and project pipelines",
      "Automated client email and SMS notifications",
      "One-click branded PDF quote and invoice generation",
      "Client communication timelines and audit records"
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
      result: "65% faster quote-to-invoice cycles with unified booking schedules"
    },
    icon: "database"
  },
  {
    id: "high-performance-websites",
    number: "03",
    title: "High-Performance Business Websites",
    shortDesc: "Modern, conversion-focused websites engineered for lightning speed, Google SEO visibility, and smooth mobile experiences.",
    problem: "Slow, clunky websites with bloated themes frustrate potential buyers, drop conversion rates, and get penalized on Google search results.",
    whatIBuild: "Clean, custom-engineered websites with sub-second load times, mobile-first responsive interfaces, structured SEO schema, and intuitive content management controls.",
    businessBenefit: "Creates an immediate impression of trust and authority, keeps bounce rates near zero, and converts casual visitors into paying customers.",
    typicalFunctionality: [
      "Mobile-first responsive design across phones, tablets, and desktops",
      "Blazing Core Web Vitals (sub-second LCP and zero layout shifts)",
      "Technical SEO markup, OpenGraph metadata, and structured schema",
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
    shortDesc: "Seamless, secure connections linking your web software with payment gateways, external CRMs, and third-party cloud tools.",
    problem: "Juggling disconnected tools for billing, messaging, customer records, and fulfillment forces manual copy-pasting and introduces costly human mistakes.",
    whatIBuild: "Robust RESTful API connections and webhook pipelines that automatically synchronize data across your external tools in real time.",
    businessBenefit: "Eliminates repetitive data entry, keeps accounting and customer records completely synced, and ensures reliable, bank-grade transaction handling.",
    typicalFunctionality: [
      "Payment gateway integrations (Stripe, PayPal, Razorpay)",
      "Automated transactional SMS and email delivery (Twilio, SendGrid)",
      "Two-way CRM and cloud database synchronization",
      "Resilient webhook listeners with automated retries and error alerts"
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
    subtitle: "Understand Bottlenecks",
    desc: "We analyze your existing workflows, identify time-consuming pain points, and define clear business goals."
  },
  {
    step: "02",
    title: "Planning",
    subtitle: "Architecture & UX",
    desc: "We map out database architecture, user flows, and wireframes with clear deliverables and sprint milestones."
  },
  {
    step: "03",
    title: "Build & Test",
    subtitle: "Development & QA",
    desc: "I write clean, maintainable code across frontend and backend, rigorously test every feature, and share weekly progress demos."
  },
  {
    step: "04",
    title: "Launch & Support",
    subtitle: "Deployment & Warranty",
    desc: "Smooth production deployment to your cloud servers, team walkthroughs, and a 30-day post-launch warranty."
  }
];

export const faqList = [
  // SECTION 1: Technical & Capabilities
  {
    id: "tech-projects",
    category: "tech",
    q: "What types of web development projects do you build?",
    a: "I specialize in custom full-stack web applications, bespoke CRM systems, business automation tools, and high-performance commercial websites. The majority of my work involves helping business owners replace clunky spreadsheets, eliminate recurring SaaS subscription fees, and build fast, reliable web software using React, Laravel, and MySQL."
  },
  {
    id: "tech-crm-vs-saas",
    category: "tech",
    q: "Why should I build a custom CRM instead of subscribing to tools like HubSpot or Zoho?",
    a: "Commercial CRM subscriptions quickly become expensive as your team expands—often costing thousands of dollars annually in per-seat fees—while forcing you to adapt your business to their rigid structures. A custom CRM is designed exclusively around your specific pipeline and quoting formulas. You own the code 100%, pay zero ongoing user licensing fees, and can modify features whenever your business evolves."
  },
  {
    id: "tech-stack",
    category: "tech",
    q: "What technologies do you use most frequently?",
    a: "My primary production stack is modern React with TypeScript and Tailwind CSS on the frontend, combined with Laravel (PHP) and MySQL or PostgreSQL on the backend. When a project calls for a content-managed website, I build lightweight, custom WordPress themes and plugins without using sluggish visual page builders."
  },
  {
    id: "tech-refactoring",
    category: "tech",
    q: "Can you modernize or speed up an existing application?",
    a: "Yes. I frequently help clients refactor legacy PHP or WordPress platforms, upgrade sluggish user interfaces into fast React components, optimize bottlenecked database queries, and build clean REST APIs to connect older systems with modern cloud services."
  },
  {
    id: "tech-integrations",
    category: "tech",
    q: "Can you integrate with third-party APIs, payment gateways, and messaging services?",
    a: "Yes. I routinely connect applications with major payment gateways (Stripe, PayPal, Razorpay), messaging APIs (Twilio SMS, WhatsApp Business API, SendGrid), third-party CRMs, and custom webhooks with automatic retries and error logging."
  },
  {
    id: "tech-devops",
    category: "tech",
    q: "Do you handle server setup, cloud hosting, and deployments?",
    a: "Yes. I manage end-to-end production hosting and deployments across Cloudflare Workers, AWS, DigitalOcean, Hetzner, Vercel, and Linux VPS environments. I configure automated CI/CD deployment pipelines, SSL certificates, automated daily database backups, and caching layers so your application runs at peak speed."
  },

  // SECTION 2: Process, Pricing & Collaboration
  {
    id: "process-pricing",
    category: "process",
    q: "How do you structure project pricing and payments?",
    a: "I work with transparent, milestone-based fixed pricing for defined project scopes, and monthly retainers for ongoing development sprints. Projects are typically split into clear milestones (e.g., 30% kickoff, 40% functional beta demo, 30% production launch). You will never encounter unexpected fees."
  },
  {
    id: "process-turnaround",
    category: "process",
    q: "What is your typical project delivery turnaround time?",
    a: "Turnaround depends on the technical complexity of the build. Focused business utilities and marketing sites typically take 1 to 2 weeks. Custom CRM portals, multi-role web apps, and full business operations systems generally take 3 to 6 weeks. You receive staging preview links and milestone updates every week."
  },
  {
    id: "process-ownership",
    category: "process",
    q: "Who owns the code and intellectual property once the project is finished?",
    a: "You own 100% of the intellectual property, source code, database architecture, and deployment configurations from day one. When the final milestone is signed off, full repository access and documentation are handed over to your team with zero vendor lock-in."
  },
  {
    id: "process-warranty",
    category: "process",
    q: "Do you provide a warranty or ongoing support after the site goes live?",
    a: "Yes. Every custom build includes a complimentary 30-day post-launch warranty covering bug fixes, performance monitoring, and handover adjustments. For long-term peace of mind, I also offer monthly support retainers covering security updates, database backups, and new feature development."
  },
  {
    id: "process-international",
    category: "process",
    q: "Do you work with international clients across different time zones?",
    a: "Yes. Over the past 7+ years, I have worked with business owners and agencies across India, New Zealand, the United States, the UK, and Europe. I maintain fast asynchronous communication, provide detailed progress reports, and schedule overlap video calls that fit your working hours."
  },
  {
    id: "process-contact",
    category: "process",
    q: "How can I discuss my project and get an estimate?",
    a: "You can submit an inquiry through the Contact page, message me directly on WhatsApp at +91 90389 09382, or email saikatpatraoffice@gmail.com. I review your requirements and respond within 24 hours with honest feedback and preliminary scope estimates."
  }
];

export default coreServices;
