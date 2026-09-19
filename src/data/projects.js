export const projectsData = [
  {
    id: "quote-my-blinds",
    slug: "quote-my-blinds",
    title: "Quote My Blinds",
    client: "Window Blinds NZ Ltd",
    industry: "Manufacturing & Retail (New Zealand)",
    category: "Custom Web Application",
    filterCategory: "web-apps",
    featured: true,
    thumbnail: "/assets/projects/quote-my-blinds.webp",
    year: "2024",
    description: "Multi-tenant quote and lead management platform for a New Zealand custom window blinds enterprise, featuring a real-time dimension pricing calculator and automated PDF quote generation.",
    shortChallenge: "Manual dimension calculations and custom motorization kit quotes were taking up to 45 minutes per lead, leading to pricing errors and lost inquiries.",
    shortSolution: "Engineered an automated step-by-step calculator that validates window measurements in real time, computes fabrication margins, and sends branded PDF estimates instantly.",
    result: "Quote creation time dropped by 60%, monthly inbound inquiries tripled, and zero pricing calculation errors across 12,000+ generated quotes.",
    role: "Full Stack Architecture & Development",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    metrics: [
      { value: "60%", label: "Faster Quote Creation" },
      { value: "3x", label: "Inbound Lead Inquiries" },
      { value: "12,000+", label: "Accurate Quotes Generated" }
    ],
    challenge: "Customers and sales representatives experienced heavy friction calculating quotes for non-standard window dimensions, fabric classifications, and motorized hardware. Preparing each formal quote took up to 45 minutes of manual estimation, leading to frequent calculation mistakes and lost prospects.",
    solution: "Designed and built a full-stack web application with an automated visual dimension configurator. The system validates measurements, checks fabric stock rules dynamically, computes fabrication margins, and generates a downloadable branded PDF quote while instantly notifying the regional sales agent.",
    architecture: "Built on Laravel with normalized MySQL relational models for fabric grades, labor multipliers, and branch territories. Reactive JavaScript frontend components ensure instant recalculation without page refreshes.",
    results: "Quote calculation time dropped by 60%, inbound inquiries increased three-fold within the first 90 days, and over 12,000 automated quotations have been generated with zero pricing errors.",
    keyFeatures: [
      "Dynamic measurement calculator with real-time margin and fabric tier adjustments",
      "Multi-tenant branch management with custom local pricing tiers",
      "Instant branded PDF quotation generation with digital approval workflow",
      "Automated email and SMS notification triggers dispatched to regional sales reps",
      "Centralized administrative dashboard tracking lead conversions and deal velocity"
    ]
  },
  {
    id: "custom-crm",
    slug: "custom-crm-system",
    title: "Custom CRM & Operations System",
    client: "Apex Enterprise Services",
    industry: "Professional Services & Agency",
    category: "CRM & Business Automation",
    filterCategory: "custom-solutions",
    featured: true,
    thumbnail: "/assets/projects/custom-crm.webp",
    year: "2024",
    description: "Bespoke operations CRM consolidating client communications, project sprints, staff time tracking, and automated invoice dispatch under one unified system.",
    shortChallenge: "Fragmented spreadsheets and separate SaaS subscriptions caused lost follow-ups, billing confusion, and excessive manual administrative overhead.",
    shortSolution: "Architected a custom CRM featuring drag-and-drop Kanban deal pipelines, one-click PDF invoicing, automated payment reconciliations, and role permissions.",
    result: "Reduced team administration time by 50%, recovered over $40,000 in unbilled hours in Q1, and eliminated 3 third-party tool subscriptions.",
    role: "Lead Full Stack Developer",
    technologies: ["Laravel", "Livewire", "MySQL", "Tailwind CSS", "REST APIs"],
    metrics: [
      { value: "50%", label: "Less Admin Overhead" },
      { value: "$40k+", label: "Unbilled Hours Recovered" },
      { value: "3", label: "Paid Subscriptions Replaced" }
    ],
    challenge: "Managing client workflows across disconnected spreadsheets and multiple third-party tools resulted in missed customer follow-ups, unbilled team hours, and zero unified visibility into monthly business revenue.",
    solution: "Engineered a bespoke internal CRM platform customized around the company's precise intake procedures. Features interactive pipeline tracking, automated client follow-up sequences, time tracking tied directly to billing milestones, and automated payment receipts.",
    architecture: "Laravel backend leveraging Livewire for reactive state management, integrated with MySQL database indexing, PDF generation micro-utilities, and webhook notifications.",
    results: "Reduced weekly administrative overhead by 50%, recovered $40,000+ in previously missed billable hours during the first quarter, and completely replaced three costly monthly subscriptions.",
    keyFeatures: [
      "Kanban deal pipeline with automated stage progression triggers",
      "One-click professional PDF invoice generation with payment link integration",
      "Granular role-based access control (Super Admin, Project Manager, Staff, Client)",
      "Centralized client communication timeline and activity audit logs",
      "Financial health forecasting and automated monthly executive reports"
    ]
  },
  {
    id: "real-estate",
    slug: "real-estate-listing-platform",
    title: "Real Estate Listing Platform",
    client: "Prime Realty Group",
    industry: "Real Estate & Property Management",
    category: "Custom Web Application",
    filterCategory: "web-apps",
    featured: true,
    thumbnail: "/assets/projects/real-estate.webp",
    year: "2023 - 2024",
    description: "High-performance property directory with instant faceted multi-filter search, property management portals, and automated agent inquiry routing.",
    shortChallenge: "Slow database queries and broken mobile viewports caused high bounce rates and lost property buyer inquiries.",
    shortSolution: "Built a fast React frontend with indexed MySQL query optimization, interactive property maps, and instant WhatsApp inquiry dispatch.",
    result: "Search query response times reduced by 70%, mobile user engagement rose by 180%, and active listings exceeded 1,000+ properties.",
    role: "Full Stack Engineer",
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS", "REST APIs"],
    metrics: [
      { value: "70%", label: "Faster Search Speeds" },
      { value: "180%", label: "Mobile Engagement Growth" },
      { value: "1,000+", label: "Managed Properties" }
    ],
    challenge: "The client's previous property portal suffered from sluggish multi-second search queries, poor mobile responsiveness, and lacked automated lead routing to local agents.",
    solution: "Developed an ultra-responsive React single-page frontend powered by optimized Laravel backend APIs with indexed MySQL spatial queries, instant WhatsApp dispatch, and automated agent lead assignment.",
    architecture: "React SPA with client-side state caching communicating with Laravel REST APIs. Optimized image delivery pipelines and cached query structures ensure immediate search responses.",
    results: "Search latency fell by 70%, mobile buyer sessions grew by 180%, and the portal successfully scales across 1,000+ active property listings.",
    keyFeatures: [
      "Faceted instant search by price, bedrooms, property type, and neighborhood",
      "Interactive map search with radius filtering and pin clustering",
      "User accounts with bookmarking, price-drop alerts, and saved search queries",
      "Dedicated agent dashboard for direct property uploads and inquiry tracking",
      "Automated lead assignment routed by geographic territory"
    ]
  },
  {
    id: "ivc-valves",
    slug: "ivc-valves-client-project",
    title: "IVC Valves Corporate Presence",
    client: "IVC Valves Manufacturing Pvt Ltd",
    industry: "Industrial Valves & Manufacturing",
    category: "High-Performance Business Website",
    filterCategory: "business-websites",
    featured: false,
    thumbnail: "/assets/projects/ivc-valves.webp",
    year: "2023",
    description: "Corporate digital presence for an industrial valve manufacturer featuring a technical product catalog, CAD datasheet downloads, and multi-item RFQ cart.",
    shortChallenge: "International procurement engineers struggled to find technical specs and pressure ratings on an outdated, slow legacy website.",
    shortSolution: "Engineered a custom WordPress theme with technical product taxonomies, downloadable spec sheets, and an enquiry cart for multi-item quotes.",
    result: "Global B2B inquiries increased by 40% in 4 months, and page views per session tripled.",
    role: "WordPress & Frontend Specialist",
    technologies: ["WordPress", "PHP", "JavaScript", "Tailwind CSS", "ACF Pro"],
    metrics: [
      { value: "+40%", label: "B2B Quote Inquiries" },
      { value: "3x", label: "Page Views Per User" },
      { value: "200+", label: "Catalog Products" }
    ],
    challenge: "Procurement specialists worldwide had difficulty finding engineering specifications and pressure classes from an outdated, non-responsive catalog.",
    solution: "Designed and coded a clean, lightweight custom WordPress architecture with structured taxonomies, downloadable CAD drawings, and a B2B quotation cart.",
    architecture: "Custom WordPress theme utilizing Advanced Custom Fields Pro without third-party page builder bloat, delivering fast Core Web Vitals.",
    results: "International B2B inquiries grew by 40% within four months of launch, and site performance metrics reached top tier ratings.",
    keyFeatures: [
      "Custom product taxonomy with engineering pressure and material attributes",
      "Multi-item Request For Quotation (RFQ) inquiry cart",
      "Technical PDF datasheet and CAD specification download center",
      "Mobile-optimized responsive technical comparison tables"
    ]
  },
  {
    id: "learning-management",
    slug: "learning-management",
    title: "SkillHub Learning Management Platform",
    client: "SkillHub Academy",
    industry: "Education & E-Learning",
    category: "Custom Web Application",
    filterCategory: "web-apps",
    featured: false,
    thumbnail: "/assets/projects/learning-management.webp",
    year: "2023",
    description: "Online learning platform with video curriculum progression, interactive multiple-choice quizzes, and verifiable PDF certificate generation.",
    shortChallenge: "Standard LMS software was slow on mobile bandwidth and lacked customized certificate verification workflows.",
    shortSolution: "Built a lean Laravel web application with adaptive media playback, milestone tracking, and automated certificate QR verification.",
    result: "15,000+ students enrolled in the first year with a 92% course completion rate on foundational modules.",
    role: "Full Stack Developer",
    technologies: ["Laravel", "MySQL", "Vue.js", "AWS S3", "Tailwind CSS"],
    metrics: [
      { value: "15,000+", label: "Enrolled Students" },
      { value: "92%", label: "Course Completion Rate" }
    ],
    challenge: "Instructors were frustrated with clumsy off-the-shelf LMS software and poor video delivery performance across lower bandwidth connections.",
    solution: "Developed an intuitive, lightweight e-learning platform with adaptive video streaming, progress milestones, and instant cryptographic certificate generation.",
    architecture: "Laravel API backend with AWS S3 asset delivery, relational student progress tables, and secure certificate verification hashes.",
    results: "Over 15,000 students enrolled with consistently high platform uptime and positive instructor feedback.",
    keyFeatures: [
      "Adaptive video player with playback resume state tracking",
      "Automated multiple-choice quiz engine with immediate grading",
      "Verifiable digital completion certificates with secure verification links",
      "Instructor analytics dashboard tracking student drop-off milestones"
    ]
  },
  {
    id: "online-store",
    slug: "online-store",
    title: "Luxe Decor Boutique Store",
    client: "Luxe Decor Co",
    industry: "E-commerce & Furnishings",
    category: "High-Performance Business Website",
    filterCategory: "ecommerce",
    featured: false,
    thumbnail: "/assets/projects/online-store.webp",
    year: "2023",
    description: "Fast boutique e-commerce platform featuring streamlined single-page checkout, dynamic shipping rate rules, and payment gateway integrations.",
    shortChallenge: "Slow checkout load times and confusing shipping tiers were causing high cart abandonment rates on mobile devices.",
    shortSolution: "Created a frictionless single-page AJAX checkout, optimized image delivery, and connected Stripe & PayPal payment gateways.",
    result: "Cart abandonment dropped by 34% and mobile purchase transactions doubled within six months.",
    role: "E-Commerce Developer",
    technologies: ["WooCommerce", "WordPress", "PHP", "Tailwind CSS", "Stripe API"],
    metrics: [
      { value: "-34%", label: "Cart Abandonment" },
      { value: "2x", label: "Mobile Transactions" }
    ],
    challenge: "Complex shipping calculators and multi-step checkout pages created high cart drop-off rates on mobile screens.",
    solution: "Refactored the checkout flow into an optimized single-page interface with real-time postal code validation and instant payment settlement.",
    architecture: "Customized WooCommerce core with headless checkout endpoints and optimized asset delivery pipelines.",
    results: "Mobile checkout conversions doubled and average transaction completion time was halved.",
    keyFeatures: [
      "Single-page AJAX checkout with address auto-validation",
      "Dynamic shipping tier calculation based on postal code",
      "Secure Stripe and PayPal payment processing",
      "Automated abandoned cart notification recovery sequences"
    ]
  },
  {
    id: "restaurant-website",
    slug: "restaurant-website",
    title: "Flavors Bistro Digital Booking",
    client: "Flavors Bistro & Lounge",
    industry: "Hospitality & Dining",
    category: "High-Performance Business Website",
    filterCategory: "business-websites",
    featured: false,
    thumbnail: "/assets/projects/restaurant.webp",
    year: "2023",
    description: "Modern restaurant web application with interactive table reservation scheduling, dietary menu filtering, and automated SMS confirmations.",
    shortChallenge: "Phone reservation lines were perpetually busy during dinner rush hours, causing missed bookings.",
    shortSolution: "Built a responsive online booking calendar with dietary menu badges and automated SMS reservation updates.",
    result: "Over 65% of table reservations shifted to online self-service within the first 30 days.",
    role: "Frontend Developer",
    technologies: ["React", "Tailwind CSS", "Node.js", "Twilio API"],
    metrics: [
      { value: "65%", label: "Online Booking Adoption" },
      { value: "100%", label: "Mobile Responsive" }
    ],
    challenge: "Dinner reservations were handled manually via phone calls, leading to double bookings during busy shifts and frustrated patrons.",
    solution: "Built a modern React web application with real-time slot selection, calendar confirmation, and automated reminder SMS texts.",
    architecture: "React frontend integrated with lightweight Node.js booking endpoints and Twilio SMS verification triggers.",
    results: "Over 65% of weekend bookings shifted to self-service online reservations, freeing up front-of-house staff.",
    keyFeatures: [
      "Real-time table reservation calendar with instant availability feedback",
      "Interactive digital menu with dietary badges (Vegan, Gluten-Free)",
      "Automated SMS booking confirmation and 24-hour reminder texts",
      "Direct Google Maps and local navigation integration"
    ]
  },
  {
    id: "healthcare-website",
    slug: "healthcare-website",
    title: "CareFirst Clinic Portal",
    client: "CareFirst Multi-Speciality Clinic",
    industry: "Healthcare & Clinical Services",
    category: "High-Performance Business Website",
    filterCategory: "business-websites",
    featured: false,
    thumbnail: "/assets/projects/healthcare.webp",
    year: "2024",
    description: "Medical clinic website featuring physician department directory, online appointment intake, and emergency contact guidance.",
    shortChallenge: "Patients waited in long telephone queues to schedule doctor consultations, causing high no-show rates.",
    shortSolution: "Engineered an accessible self-service appointment scheduling workflow with doctor time-slot management.",
    result: "Reduced telephone wait times and over 800 monthly appointments booked self-service.",
    role: "Web Developer",
    technologies: ["WordPress", "PHP", "Tailwind CSS", "MySQL"],
    metrics: [
      { value: "800+", label: "Monthly Online Bookings" },
      { value: "-40%", label: "Phone Queue Volume" }
    ],
    challenge: "Clinic reception desks were overwhelmed by appointment calls, causing long wait times and missed appointments.",
    solution: "Designed and developed a clear, accessible appointment booking workflow with physician department filtering and patient intake validation.",
    architecture: "Custom WordPress build adhering to accessibility standards, fast mobile response times, and automated email notifications.",
    results: "Over 800 patient appointments are booked online each month, significantly lowering reception workload.",
    keyFeatures: [
      "Physician directory with specialty filtering and available consulting hours",
      "Intuitive patient appointment intake form with validation",
      "Automated booking confirmation and reminder notifications",
      "Direct one-tap emergency call and geolocation driving directions"
    ]
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "web-apps", label: "Web Applications" },
  { id: "custom-solutions", label: "CRM & Automation" },
  { id: "business-websites", label: "Business Websites" },
  { id: "ecommerce", label: "E-commerce" }
];

export const projectImpactStats = [
  { value: "500+", label: "Projects Completed" },
  { value: "100+", label: "Happy Clients" },
  { value: "7+", label: "Years Experience" },
  { value: "5.0", label: "Google Review Rating" }
];

export default projectsData;
