export const projectsData = [
  {
    id: "quote-my-blinds",
    slug: "quote-my-blinds",
    title: "Quote My Blinds",
    category: "Web Application",
    filterCategory: "web-apps",
    featured: true,
    thumbnail: "/assets/projects/quote-my-blinds.jpg",
    client: "Window Blinds NZ Ltd",
    year: "2024",
    website: "https://quotemyblinds.co.nz",
    description: "Multi-tenant quote and lead management website for New Zealand window blinds business. Custom quote builder, admin panel and CRM integrations.",
    longDescription: "Quote My Blinds is an enterprise-grade web application engineered to streamline the custom window furnishing sales journey. With an automated visual dimension configurator, customers and field agents can calculate precise material, fabrication, and motorization costs in seconds, drastically accelerating deal cycles.",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    metrics: [
      { value: "3x", label: "More Leads" },
      { value: "60%", label: "Faster Quotes" },
      { value: "100%", label: "Client Satisfaction" }
    ],
    challenge: "Customers previously faced friction calculating quotes for irregular window measurements, varied fabric tiers, and motorization kits. Sales representatives spent up to 45 minutes manually preparing each formal quotation, causing lost leads to competitors.",
    solution: "We engineered a dynamic step-by-step quote builder that validates window dimensions in real-time, matches stock availability, computes labor margins dynamically, and delivers a branded PDF proposal instantly while notifying the regional sales rep.",
    results: "Quote completion time dropped by 60%, monthly inbound inquiries tripled within 90 days, and zero pricing calculation errors have been reported across over 12,000 generated quotes.",
    keyFeatures: [
      "Dynamic interactive quote calculator with real-time margin adjustments",
      "Multi-tenant branch management with custom pricing tiers",
      "Instant PDF estimate generation with digital signature capability",
      "Automated SMS and email follow-up reminders",
      "Comprehensive admin dashboard for conversion analytics"
    ]
  },
  {
    id: "real-estate",
    slug: "real-estate-listing-platform",
    title: "Real Estate Listing Platform",
    category: "Web Application",
    filterCategory: "web-apps",
    featured: true,
    thumbnail: "/assets/projects/real-estate.jpg",
    client: "Prime Realty Group",
    year: "2023 - 2024",
    website: "https://primerealty.example.com",
    description: "A full-featured property listing platform with advanced search, property management, user dashboards, and inquiry system.",
    longDescription: "A modern, high-performance real estate portal built for rapid property discovery and seamless agent-buyer interactions. Features lightning-fast spatial search, interactive floor plans, virtual tours, and automated agent lead assignment.",
    technologies: ["React", "Laravel", "MySQL", "Tailwind", "REST APIs"],
    metrics: [
      { value: "2.5x", label: "User Growth" },
      { value: "70%", label: "Faster Search" },
      { value: "High", label: "User Engagement" }
    ],
    challenge: "The existing property directory suffered from sluggish database searches, broken mobile viewports, and lacked automated lead attribution, resulting in missed buyer inquiries.",
    solution: "Developed an ultra-fast React single-page frontend powered by indexed MySQL query optimization, instant multi-filter search, high-resolution photo galleries, and instant WhatsApp lead dispatch.",
    results: "Mobile user engagement spiked by 180%, search response times fell by 70%, and active property listings exceeded 1,000+ units within 6 months.",
    keyFeatures: [
      "Faceted filter by price, bedrooms, property type, and neighborhood",
      "Interactive map search with clustering and radius filters",
      "User accounts with bookmarking, price drop alerts, and saved searches",
      "Agent portals for direct listing uploads and inquiry management",
      "Automated lead distribution based on geographic territory"
    ]
  },
  {
    id: "ivc-valves",
    slug: "ivc-valves-client-project",
    title: "IVC Valves (Client Project)",
    category: "Business Website",
    filterCategory: "business-websites",
    featured: true,
    thumbnail: "/assets/projects/ivc-valves.jpg",
    client: "IVC Valves Manufacturing Pvt Ltd",
    year: "2023",
    website: "https://ivcvalves.com",
    description: "Corporate website for industrial valves manufacturer with modern UI/UX, product showcase and enquiry system.",
    longDescription: "A sophisticated corporate digital presence built for an international industrial valve manufacturer. Designed with high-tech industrial aesthetics, comprehensive technical spec sheets, and an intelligent quotation dispatch workflow.",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS", "ACF Pro"],
    metrics: [
      { value: "40%", label: "More Inquiries" },
      { value: "3x", label: "Page Views" },
      { value: "Excellent", label: "Client Feedback" }
    ],
    challenge: "Engineers and procurement specialists worldwide struggled to locate technical valve specifications, pressure ratings, and CAD datasheets from their outdated catalog website.",
    solution: "Engineered a custom WordPress theme with bespoke custom post architectures for valve classifications, downloadable technical manuals, and an enquiry cart system allowing B2B buyers to request quotes for multiple valves at once.",
    results: "Global B2B inquiries increased by 40% in 4 months, page views per user tripled, and the marketing team can effortlessly manage 200+ product variants.",
    keyFeatures: [
      "Custom product taxonomy with technical filter attributes",
      "Multi-item RFQ (Request for Quotation) cart functionality",
      "Dynamic CAD drawing and technical PDF download center",
      "Responsive interactive video and 3D diagram showcases",
      "Multi-lingual ready structure for international distributor networks"
    ]
  },
  {
    id: "custom-crm",
    slug: "custom-crm-system",
    title: "Custom CRM System",
    category: "Custom Solution",
    filterCategory: "custom-solutions",
    featured: true,
    thumbnail: "/assets/projects/custom-crm.jpg",
    client: "Apex Enterprise Services",
    year: "2024",
    website: "https://crm.apexservices.example.com",
    description: "Custom CRM to manage leads, projects, invoices and client communication. Built for a service-based business to streamline operations.",
    longDescription: "An internal operations platform built from scratch to replace multiple fragmented SaaS subscriptions. Consolidates client communications, project sprints, staff time tracking, and automated invoicing under one cohesive roof.",
    technologies: ["Laravel", "Livewire", "MySQL", "JavaScript", "Tailwind CSS"],
    metrics: [
      { value: "50%", label: "Time Saved" },
      { value: "Better", label: "Team Collaboration" },
      { value: "Scalable", label: "Architecture" }
    ],
    challenge: "Managing client work across disjointed spreadsheets and multiple subscriptions caused billing confusion, missed client follow-ups, and zero centralized operational metrics.",
    solution: "Designed and programmed a custom CRM featuring drag-and-drop Kanban deal pipelines, one-click PDF invoicing, automated payment reconciliations, and granular role permissions.",
    results: "Reduced team admin work by 50%, recovered over $40,000 in unbilled hours during the first quarter, and replaced three separate third-party software subscriptions.",
    keyFeatures: [
      "Kanban pipeline view with automated stage progression triggers",
      "One-click professional invoice generation with payment link integration",
      "Role-based permission matrix (Super Admin, Project Manager, Staff, Client)",
      "Real-time team activity feed and client communications timeline",
      "Financial health forecasting and executive summary reports"
    ]
  },
  {
    id: "online-store",
    slug: "online-store",
    title: "Online Store",
    category: "E-commerce",
    filterCategory: "ecommerce",
    featured: false,
    thumbnail: "/assets/projects/online-store.jpg",
    client: "Luxe Decor Co",
    year: "2023",
    website: "https://luxedecor.example.com",
    description: "Modern e-commerce website with secure payments and inventory management.",
    longDescription: "High-converting boutique e-commerce platform for home furnishings, featuring fast faceted search, wishlist sync, and Stripe/PayPal payment integrations.",
    technologies: ["WooCommerce", "WordPress", "PHP", "Tailwind CSS"],
    metrics: [
      { value: "2x", label: "Sales Conversion" },
      { value: "1.2s", label: "Page Load" },
      { value: "99.9%", label: "Uptime" }
    ],
    challenge: "Slow checkout bottlenecks and complex shipping tier calculations were causing high cart abandonment rates on mobile devices.",
    solution: "Implemented an optimized single-page checkout flow, custom shipping rule engine, and lightweight image compression pipelines.",
    results: "Cart abandonment dropped by 34% and mobile transactions grew 2.3x year-over-year.",
    keyFeatures: [
      "Frictionless single-page AJAX checkout",
      "Dynamic shipping rates and postal code verification",
      "Product variant matrix with instant colorway switching",
      "Automated abandoned cart email sequences"
    ]
  },
  {
    id: "restaurant-website",
    slug: "restaurant-website",
    title: "Restaurant Website",
    category: "Business Website",
    filterCategory: "business-websites",
    featured: false,
    thumbnail: "/assets/projects/restaurant.jpg",
    client: "Flavors Bistro & Lounge",
    year: "2023",
    website: "https://flavorsbistro.example.com",
    description: "Modern restaurant website with menu, online reservation and location map.",
    longDescription: "An appetizing digital showcase for a fine-dining restaurant featuring real-time table booking, interactive seasonal menus, and automated reservation SMS confirmations.",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    metrics: [
      { value: "+65%", label: "Online Bookings" },
      { value: "100%", label: "Mobile Responsive" },
      { value: "Top 3", label: "Local Google Rank" }
    ],
    challenge: "Phone lines were constantly congested during peak dinner hours, leading to missed reservations and frustrated guests.",
    solution: "Engineered a modern React application with calendar table selection, SMS reservation verification, and mobile dietary filter tags.",
    results: "Over 65% of weekend dinner reservations migrated to the online portal within the first month.",
    keyFeatures: [
      "Live table reservation calendar with instant confirmation",
      "Interactive menu with dietary filter badges (Vegan, Gluten-Free)",
      "Location mapping and direct Uber/Google directions",
      "Private event and corporate dining booking inquiry form"
    ]
  },
  {
    id: "portfolio-website",
    slug: "portfolio-website",
    title: "Portfolio Website",
    category: "Business Website",
    filterCategory: "business-websites",
    featured: false,
    thumbnail: "/assets/projects/portfolio-site.jpg",
    client: "Creative Studio",
    year: "2024",
    website: "https://creativestudio.example.com",
    description: "Personal portfolio for a creative professional with modern design and animations.",
    longDescription: "A minimalist, hyper-smooth portfolio built for a high-profile creative director, showcasing high-resolution project case studies, video reels, and interactive typography.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    metrics: [
      { value: "98+", label: "Lighthouse Score" },
      { value: "3x", label: "Engagement Time" },
      { value: "Award", label: "CSS Winner Nominee" }
    ],
    challenge: "The client needed a portfolio that loaded within 1 second while showcasing heavy 4K design deliverables without frame drops.",
    solution: "Employed Next.js static asset optimization, WebP delivery, and GPU-accelerated Framer Motion transitions.",
    results: "Achieved a 99 Lighthouse performance score and won an honorable design distinction.",
    keyFeatures: [
      "Custom cursor interaction and image reveal effects",
      "Smooth layout transitions across portfolio collections",
      "Integrated audio and video player overlays",
      "Responsive typography and fluid grid system"
    ]
  },
  {
    id: "learning-management",
    slug: "learning-management",
    title: "Learning Management",
    category: "Web Application",
    filterCategory: "web-apps",
    featured: false,
    thumbnail: "/assets/projects/learning-management.jpg",
    client: "SkillHub Academy",
    year: "2023",
    website: "https://skillhub.example.com",
    description: "Online learning platform with course management, quizzes and certificates.",
    longDescription: "An intuitive e-learning LMS web platform featuring video curriculum progression, timed quizzes, interactive assignments, and verifiable digital certificates.",
    technologies: ["Laravel", "MySQL", "Vue.js", "AWS S3"],
    metrics: [
      { value: "15,000+", label: "Enrolled Students" },
      { value: "92%", label: "Completion Rate" },
      { value: "4.9/5", label: "Student Rating" }
    ],
    challenge: "Instructors were frustrated with standard LMS clunkiness and poor video stream quality on lower bandwidth networks.",
    solution: "Created a lean Laravel platform integrated with AWS S3 adaptive streaming, progress tracking, and instant PDF certificate generation.",
    results: "Enrolled over 15,000 students in the first year with a 92% completion rate across beginner courses.",
    keyFeatures: [
      "HLS adaptive video playback with resume state",
      "Automated multiple-choice quiz engine with instant grading",
      "Verifiable cryptographic certificate QR codes",
      "Instructor analytics dashboard with drop-off analytics"
    ]
  },
  {
    id: "healthcare-website",
    slug: "healthcare-website",
    title: "Healthcare Website",
    category: "Business Website",
    filterCategory: "business-websites",
    featured: false,
    thumbnail: "/assets/projects/healthcare.jpg",
    client: "CareFirst Multi-Speciality Clinic",
    year: "2024",
    website: "https://carefirstclinic.example.com",
    description: "Clinic website with appointment booking and patient information system.",
    longDescription: "HIPAA-compliant medical clinic portal facilitating doctor department scheduling, patient intake forms, and emergency call routing.",
    technologies: ["WordPress", "PHP", "CSS", "MySQL"],
    metrics: [
      { value: "800+", label: "Monthly Appointments" },
      { value: "-40%", label: "Phone Queue Time" },
      { value: "100%", label: "HIPAA Aligned" }
    ],
    challenge: "Patients faced long phone wait times to schedule doctor visits, leading to high cancellation and no-show rates.",
    solution: "Built an intuitive appointment scheduling flow with automated doctor availability calendars and SMS reminders 24h before visits.",
    results: "No-show rates decreased by 40% and over 800 appointments are booked self-service every month.",
    keyFeatures: [
      "Doctor specialty and schedule search with available time slots",
      "Secure patient intake questionnaire with validation",
      "Automated appointment reminder notifications",
      "Emergency hotline and direct geolocation directions"
    ]
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "business-websites", label: "Business Websites" },
  { id: "web-apps", label: "Web Applications" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "custom-solutions", label: "Custom Solutions" },
  { id: "featured", label: "Featured" }
];

export const projectImpactStats = [
  { value: "500+", label: "Projects Completed" },
  { value: "100+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "7+", label: "Years Experience" }
];
