export const servicesData = [
  {
    id: "web-apps",
    number: "01",
    title: "Web Application Development",
    shortDesc: "Modern and scalable web applications using React, Laravel and modern technologies.",
    icon: "code",
    features: [
      "Custom web applications",
      "Scalable architecture",
      "Secure & high performance",
      "Interactive dashboards",
      "Role-based access control"
    ],
    detailedDescription: "End-to-end bespoke web application development tailored specifically to your company's operational bottlenecks. Utilizing modular frontend components in React and clean, robust backend APIs in Laravel, we guarantee blazingly fast load times and enterprise-grade security."
  },
  {
    id: "custom-crm",
    number: "02",
    title: "Custom CRM Solutions",
    shortDesc: "Tailored CRM software to manage leads, clients and business processes efficiently.",
    icon: "database",
    features: [
      "Lead & customer management",
      "Workflow automation",
      "Reports & analytics",
      "Invoice & quote generation",
      "Custom communication logs"
    ],
    detailedDescription: "Say goodbye to rigid, expensive off-the-shelf software with features you don't use. We build lean, intuitive CRM solutions customized around your exact sales pipeline, client intake procedures, and automatic notification triggers."
  },
  {
    id: "wordpress",
    number: "03",
    title: "WordPress Development",
    shortDesc: "Custom themes, plugins and fully responsive WordPress websites.",
    icon: "wordpress",
    features: [
      "Custom theme development",
      "Plugin customization",
      "SEO & speed optimization",
      "Elementor / ACF flexibility",
      "Clean, maintainable code"
    ],
    detailedDescription: "High-speed, SEO-optimized WordPress websites that don't rely on bloated plugins. We specialize in custom themes, tailored post types, WooCommerce stores, and headless architectures with effortless editing workflows."
  },
  {
    id: "api-integration",
    number: "04",
    title: "API Integration",
    shortDesc: "Connect third-party tools and services with seamless integrations.",
    icon: "link",
    features: [
      "RESTful API integration",
      "Payment gateway setup",
      "Third-party service integration",
      "Webhooks & real-time sync",
      "Data pipeline automation"
    ],
    detailedDescription: "Bridge the gap between your applications and external services like Stripe, PayPal, Razorpay, Twilio, Salesforce, Google APIs, and custom RESTful endpoints with bank-grade security and error recovery."
  },
  {
    id: "ecommerce",
    number: "05",
    title: "E-commerce Solutions",
    shortDesc: "Online stores that are fast, secure and easy to manage.",
    icon: "shopping-cart",
    features: [
      "Custom e-commerce stores",
      "Payment & shipping setup",
      "Inventory & order management",
      "Conversion rate optimization",
      "Customer checkout experience"
    ],
    detailedDescription: "Complete digital storefronts engineered for high conversions. From lightning-fast product filtering to friction-free checkouts, multi-currency processing, and automatic shipping calculation."
  },
  {
    id: "maintenance",
    number: "06",
    title: "Maintenance & Support",
    shortDesc: "Ongoing support, updates and performance optimization.",
    icon: "settings",
    features: [
      "Regular updates & monitoring",
      "Bug fixes & performance tuning",
      "Technical support & guidance",
      "Scheduled cloud backups",
      "Security patching"
    ],
    detailedDescription: "Peace of mind knowing your platform is monitored, updated, secured against vulnerabilities, and running with 99.9% uptime. Fast turnaround times for any sudden tweaks or questions."
  },
  {
    id: "business-automation",
    number: "07",
    title: "Business Automation",
    shortDesc: "Automate repetitive tasks and improve efficiency with smart solutions.",
    icon: "bot",
    features: [
      "Workflow automation",
      "Custom tools & scripts",
      "Save time & reduce manual work",
      "Automated email & SMS triggers",
      "Cross-platform syncing"
    ],
    detailedDescription: "Eliminate repetitive manual data entry, quote generation, and status syncing with bespoke scripts, cloud queues, and automated workflows designed to save your staff dozens of hours every week."
  },
  {
    id: "ui-ux",
    number: "08",
    title: "Responsive UI/UX Development",
    shortDesc: "Create beautiful, user-friendly interfaces that work perfectly on all devices.",
    icon: "layout",
    features: [
      "Modern & clean UI design",
      "Mobile-first responsive design",
      "Better user engagement",
      "Figma to code fidelity",
      "Micro-animations & transitions"
    ],
    detailedDescription: "Transforming design prototypes into pixel-perfect, accessible, and high-converting web applications. Clean typography, smooth CSS transitions, and deliberate visual hierarchy."
  }
];

export const pricingPlans = {
  projectBased: [
    {
      name: "Starter",
      popular: false,
      price: "$499+",
      period: "One-time project",
      subtitle: "Perfect for small projects & startups",
      features: [
        "Basic features & custom design",
        "Up to 2 revisions",
        "Standard delivery time (1-2 weeks)",
        "Email support",
        "Mobile responsive layout",
        "Basic SEO setup"
      ]
    },
    {
      name: "Growth",
      popular: true,
      price: "$999+",
      period: "One-time project",
      subtitle: "For growing businesses & scaling brands",
      features: [
        "Advanced features & custom logic",
        "Up to 4 revisions",
        "Faster delivery (2-4 weeks)",
        "Priority support",
        "API & database integration",
        "Performance optimization",
        "Analytics & conversion tracking"
      ]
    },
    {
      name: "Premium",
      popular: false,
      price: "$1,999+",
      period: "One-time project",
      subtitle: "For complex projects & enterprises",
      features: [
        "Full-featured custom solution",
        "Unlimited revisions during build",
        "Dedicated support",
        "Long-term support (3 months included)",
        "Custom CRM / automation logic",
        "High availability cloud architecture",
        "Complete technical documentation"
      ]
    }
  ],
  monthlyRetainer: [
    {
      name: "Maintenance Essential",
      popular: false,
      price: "$299",
      period: "Per month",
      subtitle: "Keep your website secure and updated",
      features: [
        "Up to 10 hours dedicated dev work",
        "Weekly security & plugin updates",
        "Cloud backups & uptime monitoring",
        "Speed optimization",
        "Email & chat support"
      ]
    },
    {
      name: "Dedicated Growth",
      popular: true,
      price: "$699",
      period: "Per month",
      subtitle: "Continuous feature development",
      features: [
        "Up to 30 hours dedicated dev work",
        "New feature development & UI tweaks",
        "Priority 4-hour response time",
        "Database maintenance & API health",
        "Dedicated Slack channel"
      ]
    },
    {
      name: "Full Partner",
      popular: false,
      price: "$1,399",
      period: "Per month",
      subtitle: "Your fractional lead engineer",
      features: [
        "Up to 60 hours dedicated dev work",
        "Architectural consulting & planning",
        "Immediate emergency hotfixes",
        "Full-stack web & CRM oversight",
        "Direct phone & video sprint calls"
      ]
    }
  ]
};

export const developmentProcess = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Understand Goals",
    desc: "Understand your goals, requirements, constraints, and target user persona in depth."
  },
  {
    step: "02",
    title: "Plan",
    subtitle: "Strategy & Architecture",
    desc: "Create a detailed strategy, database model, UI wireframe, and milestone roadmap."
  },
  {
    step: "03",
    title: "Develop",
    subtitle: "Build & Iterate",
    desc: "Build, test, and iterate with clean, scalable code and regular progress demonstrations."
  },
  {
    step: "04",
    title: "Review",
    subtitle: "Feedback & Tuning",
    desc: "Collect client feedback, refine micro-interactions, and perform thorough QA audits."
  },
  {
    step: "05",
    title: "Launch",
    subtitle: "Deploy & Support",
    desc: "Deploy to production, configure domain and cloud services, and provide continuous support."
  }
];

export const industriesServed = [
  { name: "Real Estate", icon: "home" },
  { name: "Healthcare", icon: "heart" },
  { name: "Education", icon: "graduation-cap" },
  { name: "E-commerce", icon: "shopping-bag" },
  { name: "Travel & Hospitality", icon: "plane" },
  { name: "Finance", icon: "trending-up" },
  { name: "Small Businesses", icon: "store" },
  { name: "Startups", icon: "rocket" },
  { name: "Manufacturing", icon: "cpu" },
  { name: "Professional Services", icon: "briefcase" }
];

export const faqList = [
  {
    q: "How long does a typical project take?",
    a: "Timelines depend on project complexity. A standard modern business or portfolio website typically takes 1 to 3 weeks, while comprehensive web applications or custom CRM platforms take between 4 to 8 weeks with sprint-based milestones."
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes! Every project includes a post-launch warranty period (typically 30 to 90 days depending on the plan) covering bug fixes and minor adjustments. I also offer monthly maintenance retainers for long-term security, updates, and feature additions."
  },
  {
    q: "Can you work with my existing website?",
    a: "Absolutely. I frequently modernize legacy PHP/WordPress systems, refactor messy codebases into clean React components, build custom APIs for existing databases, or migrate sites to high-performance cloud hosting."
  },
  {
    q: "What technologies do you use?",
    a: "My core expertise centers around modern React (with Next.js/Vite and Tailwind CSS) on the frontend, and robust Laravel (PHP), MySQL, REST APIs, and AWS on the backend. For CMS needs, I develop custom lightweight WordPress themes and plugins."
  },
  {
    q: "How do we get started?",
    a: "Simply reach out via the Contact page or email me at saikatpatraoffice@gmail.com. We will schedule a quick consultation call to understand your requirements, after which I will provide a detailed proposal, timeline, and quote."
  }
];
