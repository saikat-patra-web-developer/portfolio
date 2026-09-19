export const projectsData = [
  {
    id: "plt-file-generator",
    slug: "plt-file-generator",
    title: "Industrial PLT Cutting File Generator",
    client: "Purge Window Shades & Industrial Automation",
    industry: "Manufacturing Automation & CAD/CAM (New Zealand)",
    category: "Custom Web Application",
    filterCategory: "web-apps",
    featured: true,
    thumbnail: "/assets/projects/plt-purge.webp",
    year: "2024",
    description: "Bespoke industrial web application translating window blind dimensions, hem styles, tube specifications, and bottom rail configurations into machine-executable HPGL/PLT vector cutting files for automated CNC fabric cutting tables.",
    shortChallenge: "Factory operators manually drafted coordinate calculations and hem allowances for CNC cutting tables, causing fabric wastage, machine downtime, and operator calculation errors.",
    shortSolution: "Engineered a responsive edge-hosted PLT vector generator that computes cutting coordinates, blade offsets, and hem allowances, exporting CNC-ready .plt files in seconds.",
    result: "Eliminated 100% of operator calculation errors, reduced cutting file preparation time from 15 minutes to under 20 seconds, and improved fabric yield.",
    role: "Lead Full Stack Developer & Algorithm Engineer",
    technologies: ["React", "JavaScript", "Cloudflare Workers", "HPGL/PLT Vector Engine", "Tailwind CSS", "CNC Automation"],
    metrics: [
      { value: "< 20s", label: "File Prep Time" },
      { value: "100%", label: "Coordinate Accuracy" },
      { value: "0", label: "Machine Tool Errors" }
    ],
    challenge: "In custom window blind manufacturing, automated CNC cutting tables require precise 2D vector plotter instructions (HPGL/.plt) specifying blade movements, plunge depths, roll width compensation, and bottom hem offsets. Operators previously spent up to 15 minutes manually determining coordinates per order or relying on cumbersome desktop CAD tools, creating severe factory bottlenecks and costly fabric scrap when errors occurred.",
    solution: "Architected a dedicated, lightweight web application deployed on Cloudflare Workers edge. Operators input window blind dimensions, fabric roll width, hem flap styles, and tube diameter allowances. The custom algorithm calculates exact 2D vector plotter coordinates, generates clean HPGL syntax with pen speed commands, and produces instantaneous, error-free .plt files ready for direct CNC table execution.",
    architecture: "High-performance React application leveraging a custom HPGL coordinate translation engine. Deployed globally with sub-50ms latency on Cloudflare Workers edge network with zero server-side latency or heavy desktop dependencies.",
    results: "File preparation time plummeted from 15 minutes to under 20 seconds per order, saving hours of operator labor daily and completely eliminating CNC machine aborts caused by malformed coordinate vectors.",
    keyFeatures: [
      "Instant HPGL/PLT machine vector generation for automated CNC fabric cutting tables",
      "Dynamic pocket, hem allowance, and tube diameter tolerance calculations",
      "Real-time coordinate validation preventing out-of-bounds blade strikes",
      "One-click .plt file download directly recognized by industrial cutting machine software",
      "Factory-floor friendly UI optimized for touch-screen tablets and quick numeric input"
    ]
  },
  {
    id: "quote-my-blinds",
    slug: "quote-my-blinds",
    title: "Quote My Blinds SaaS Operations & CRM Platform",
    client: "Quote My Blinds",
    industry: "SaaS & Window Treatment Manufacturing",
    category: "CRM & Business Automation",
    filterCategory: "custom-solutions",
    featured: true,
    thumbnail: "/assets/projects/quote-my-blinds.webp",
    year: "2024",
    description: "Connected SaaS operations workspace for window treatment businesses—managing customer inquiries, appointment bookings, dimension-based estimates, instant invoices, and customer logs in one platform.",
    shortChallenge: "Window treatment businesses struggled with disconnected tools—losing time juggling manual measurements, scheduling conflicts, delayed paper invoices, and untracked client emails.",
    shortSolution: "Built an all-in-one SaaS platform featuring visual Task Boards, booking calendars, instant pricing calculation, one-click PDF quoting, automated invoices, and CRM audit logs.",
    result: "Quote-to-invoice cycle time cut by 65%, eliminated manual measurement calculation mistakes, and unified bookings under a single dashboard.",
    role: "Lead Full Stack Architect & Developer",
    technologies: ["React", "Laravel / Node.js", "MySQL", "Tailwind CSS", "REST APIs", "SaaS Architecture"],
    metrics: [
      { value: "65%", label: "Faster Invoicing Cycles" },
      { value: "1 Platform", label: "Replaced 5 Separate Tools" },
      { value: "100%", label: "Real-time Booking Visibility" }
    ],
    challenge: "Window covering enterprises require coordinated touchpoints across customer intake, in-home measurement bookings, complex fabric and motorization pricing formulas, installation schedules, and field payment collection. Operating through disconnected calendar apps, spreadsheets, and manual accounting resulted in lost inquiries, double bookings, and slow cash flow.",
    solution: "Architected Quote My Blinds as a unified business operations hub. Key capabilities include a Customer Enquiry pipeline with Kanban Task Boards, appointment calendar with daily and upcoming booking views, automated dynamic price calculators, one-click PDF quote and invoice generation, and centralized customer interaction history.",
    architecture: "Full-stack cloud application featuring reactive state management, normalized relational data models for quotes, line items, and job schedules, and real-time webhook notification triggers.",
    results: "Enabled window treatment businesses to go completely paperless, reduced administrative quoting time from 45 minutes to under 5 minutes, and accelerated client payment turnaround.",
    keyFeatures: [
      "Interactive Customer Enquiry intake and Kanban Task Board pipeline",
      "Integrated Appointment Calendar (Today's Bookings, Upcoming, and Booking History)",
      "Financials suite: Automated Quotes, One-Click Invoicing, and Payment reconciliations",
      "Comprehensive Customer CRM profiles with email audit logs and interaction timelines",
      "Instant downloadable branded PDF quotes and digital invoice dispatch"
    ]
  },
  {
    id: "the-drapery-cupboard",
    slug: "the-drapery-cupboard",
    title: "The Drapery Cupboard E-Commerce & Consultation Platform",
    client: "The Drapery Cupboard Ltd",
    industry: "Custom Window Furnishings & Retail (New Zealand)",
    category: "Custom Web Application",
    filterCategory: "ecommerce",
    featured: true,
    thumbnail: "/assets/projects/thedraperycupboard.webp",
    year: "2024",
    description: "Modern e-commerce and consultation booking platform for New Zealand custom curtains, blinds, shutters, and outdoor living systems with online parts store and lead scheduling.",
    shortChallenge: "Selling custom window coverings online was hindered by complex sizing options, disparate fabric selections, and poor mobile booking rates for in-home consultations.",
    shortSolution: "Engineered a high-performance modern web application deployed on Cloudflare Workers with product category filtering, replacement parts store, and free in-home consultation booking.",
    result: "45% increase in online consultation bookings, rapid sub-second page loads across New Zealand, and streamlined sales for custom drapery and hardware.",
    role: "Lead Full Stack Developer & UI/UX Designer",
    technologies: ["React", "Cloudflare Workers", "Tailwind CSS", "JavaScript", "E-Commerce", "REST APIs"],
    metrics: [
      { value: "+45%", label: "Consultation Bookings" },
      { value: "< 0.8s", label: "Page Load Speeds" },
      { value: "100%", label: "Mobile Responsive" }
    ],
    challenge: "Custom drapery, roman blinds, shutters, and outdoor living products require extensive consultative selling and detailed variant selection. The client needed a platform that combined retail e-commerce for replacement parts and drapery hardware with a high-converting booking funnel for custom in-home design consultations.",
    solution: "Designed and engineered a high-performance modern web application. Features dedicated interactive showcases for custom curtains, blinds, thermal linings, and outdoor awnings, alongside an integrated booking engine for in-home consultations and an online parts catalog.",
    architecture: "Single Page Application built with React and Tailwind CSS, deployed on Cloudflare Workers edge architecture for blazing fast speed across New Zealand and Australia.",
    results: "Increased qualified in-home consultation inquiries by 45%, eliminated bounce rates on mobile devices, and provided customers with an intuitive product catalog.",
    keyFeatures: [
      "Comprehensive product showcase covering Curtains, Blinds, Shutters, and Outdoor Living",
      "Direct 'Book a Free In-Home Consultation' lead intake flow",
      "Online replacement parts store for brackets, chains, motors, and track hardware",
      "Edge-rendered on Cloudflare Workers for lightning-fast delivery and top Core Web Vitals",
      "Mobile-first conversion design tailored for homeowner and commercial trade inquiries"
    ]
  },
  {
    id: "purge-window-shades-blinds",
    slug: "purge-window-shades-blinds",
    title: "Purge Window Shades & Blinds",
    client: "Purge Ltd",
    industry: "Window Coverings & Commercial Shades (Auckland, New Zealand)",
    category: "High-Performance Business Website",
    filterCategory: "business-websites",
    featured: true,
    thumbnail: "/assets/projects/purge-blinds.webp",
    year: "2024",
    description: "High-conversion digital platform for Auckland's custom blinds and shades manufacturer offering rapid 5-day turnaround, measure-to-order consultation intake, product showcase, and commercial specification guides.",
    shortChallenge: "Competing with massive retail blind franchises required highlighting local Auckland manufacturing speed and capturing commercial architect and residential inquiries effectively.",
    shortSolution: "Built a high-converting, performance-optimized website focusing on the 5-day turnaround guarantee, comprehensive blinds range (Roller, Venetian, Honeycomb, Vertical), and free measure and quote scheduling.",
    result: "Generated 2.5x more monthly quote inquiries from Auckland homeowners and commercial fitout contractors, with 98+ Google Lighthouse performance.",
    role: "Lead Web Developer & SEO Specialist",
    technologies: ["WordPress", "PHP", "Tailwind CSS", "JavaScript", "Conversion Optimization", "SEO"],
    metrics: [
      { value: "2.5x", label: "Quote Inquiries" },
      { value: "5 Days", label: "Turnaround Highlight" },
      { value: "98+", label: "Lighthouse Performance" }
    ],
    challenge: "In the competitive Auckland window coverings market, Purge needed to differentiate from drop-shipped imports by promoting their local manufacturing facility, 5-day turnaround guarantee, and full measure-to-installation service.",
    solution: "Developed a modern, lightning-fast commercial website. Emphasized the '3 Simple Steps: Measure, Manufacture, Install' process, embedded trust signals and Google reviews, and created seamless quote request forms with instant staff notifications.",
    architecture: "Lightweight custom WordPress build engineered without heavy page builders, utilizing modern CSS grid/flexbox layouts and optimized image delivery for rapid mobile loading.",
    results: "Inbound quote requests rose by 150% within three months of launch, establishing Purge as one of Auckland's most responsive blind manufacturers.",
    keyFeatures: [
      "High-converting 'Book a Free Measure & Quote' modal and sticky mobile action bars",
      "Structured product galleries for Roller, Venetian, Vertical, Honeycomb, and Motorized Blinds",
      "Prominent trust badges highlighting 5-day fast-track turnaround and warranty",
      "Local Auckland SEO architecture targeting residential and commercial search queries",
      "Fast Core Web Vitals scoring 98+ on Google PageSpeed Insights"
    ]
  },
  {
    id: "sspr-valve",
    slug: "sspr-valve-manufacturing",
    title: "SSPR Valve Manufacturing Industrial Web Presence",
    client: "SSPR Valve Manufacturing Private Limited (SR Valve)",
    industry: "Industrial Valves, Penstocks & Flow Control (Howrah, India)",
    category: "High-Performance Business Website",
    filterCategory: "business-websites",
    featured: false,
    thumbnail: "/assets/projects/sspr-valve.webp",
    year: "2024",
    description: "High-speed industrial digital platform and engineering product catalog for SSPR Valve Manufacturing Pvt Ltd (SR Valve), highlighting 15+ years of flow-control manufacturing across water, infrastructure, and industrial projects.",
    shortChallenge: "Industrial procurement teams and government tender authorities needed instant access to technical valve specifications, ISO compliance credentials, and project references without cumbersome catalog downloads.",
    shortSolution: "Engineered an edge-deployed, mobile-responsive web catalog showcasing industrial valves, penstocks, ISO/NSIC/MSME certifications, and direct RFQ contact workflows.",
    result: "Expanded industrial valve and penstock inquiries across government and private sectors by 45%, with instant edge loading on Cloudflare Workers.",
    role: "Lead Full Stack Developer & Edge Deployment Engineer",
    technologies: ["React", "Cloudflare Workers", "Tailwind CSS", "JavaScript", "Industrial Web Architecture"],
    metrics: [
      { value: "15+ Yrs", label: "Manufacturing Heritage" },
      { value: "< 0.7s", label: "Edge Delivery Speed" },
      { value: "ISO 9001", label: "Certified Compliance" }
    ],
    challenge: "SSPR Valve Manufacturing (SR Valve) manufactures precision flow-control solutions, industrial penstocks, and heavy-duty valves for water infrastructure, irrigation, and municipal projects. Technical buyers required a fast, credible digital presence verifying their manufacturing credentials, facility capabilities, leadership, and ISO compliance.",
    solution: "Developed a modern, responsive web application hosted on Cloudflare Workers edge architecture. The site features dedicated industrial product classifications, plant facility showcases, compliance badges (ISO 9001:2015, ISO 14001:2015, OHSAS 45001:2018), and direct quotation touchpoints.",
    architecture: "Single Page Application engineered with React, Vite, and Tailwind CSS, deployed on Cloudflare Workers for sub-second page delivery across India and global procurement hubs.",
    results: "Inbound quote inquiries from public and private infrastructure contractors increased significantly, establishing SR Valve as a top-tier manufacturer online.",
    keyFeatures: [
      "Engineered product showcase for industrial valves, penstocks, and flow solutions",
      "Interactive compliance and credential verification section (ISO, NSIC, MSME)",
      "Fast edge delivery on Cloudflare Workers with zero origin latency",
      "Direct RFQ and consultation contact workflows for engineering procurement",
      "Responsive layout optimized for procurement officers on mobile and desktop"
    ]
  },
  {
    id: "dream-big-group",
    slug: "dream-big-group",
    title: "Dream Big Group Real Estate Platform",
    client: "Dream Big Group",
    industry: "Real Estate Development & Housing (Howrah, India)",
    category: "High-Performance Business Website",
    filterCategory: "business-websites",
    featured: false,
    thumbnail: "/assets/projects/dream-big-group.webp",
    year: "2024",
    description: "Cinematic digital presence and residential property showcase for Dream Big Group, a premier real estate developer in Howrah delivering modern residential apartments and housing projects.",
    shortChallenge: "Showcasing architectural elevation renders, floor plans, and residential amenities on an outdated website caused high mobile bounce rates and missed property buyer inquiries.",
    shortSolution: "Engineered a high-performance web platform with dark cinematic visuals, interactive project showcases, customer review integration, and immediate contact booking.",
    result: "Boosted qualified property inquiries by 180%, achieved sub-second mobile page loads, and secured top local search visibility across Howrah.",
    role: "Frontend Developer & SEO Specialist",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Local SEO", "Mobile-First UX"],
    metrics: [
      { value: "180%", label: "Inquiry Growth" },
      { value: "< 1s", label: "Mobile Page Load" },
      { value: "Top Tier", label: "Local Howrah Search Rank" }
    ],
    challenge: "Homebuyers evaluate premium real estate through visual credibility, construction quality details, floor plans, and verified buyer reviews. Dream Big Group needed a sophisticated corporate identity and project showcase that loaded instantly on mobile devices and converted casual visitors into site-visit appointments.",
    solution: "Developed a visually striking brand experience featuring high-resolution architectural showcases, project specification breakdowns, client testimonial reviews, and intuitive call-to-action touchpoints for instant phone and WhatsApp consultations.",
    architecture: "Modern frontend application built with React and Tailwind CSS, featuring optimized asset compression, smooth responsive layouts, and structured JSON-LD schema markup for local real estate SEO.",
    results: "Property inquiries surged by 180%, bounce rate dropped significantly on mobile devices, and local search rankings for Howrah residential projects reached top positions.",
    keyFeatures: [
      "Cinematic residential project gallery with architectural floor plan viewers",
      "Direct 'Contact Now' and WhatsApp consultation intake workflows",
      "Integrated buyer reviews and credibility credentials section",
      "Mobile-first responsive layout optimized for smartphone property discovery",
      "Local SEO metadata and OpenGraph social sharing optimization"
    ]
  },
  {
    id: "purge-electrical",
    slug: "purge-electrical",
    title: "Purge Electrical Solutions & Invoicing System",
    client: "Purge Electrical NZ",
    industry: "Electrical Contracting & Automation (New Zealand)",
    category: "CRM & Business Automation",
    filterCategory: "custom-solutions",
    featured: false,
    thumbnail: "/assets/projects/purge-electrical.webp",
    year: "2024",
    description: "Commercial electrical services platform integrated with a bespoke custom invoicing and billing management system (purge-invoice-system) for trade operations.",
    shortChallenge: "Managing electrical job quotes, material costs, and field invoicing across residential renovations and commercial projects caused billing delays and administrative backlogs.",
    shortSolution: "Built a commercial contractor web presence integrated with a proprietary custom WordPress invoicing system (purge-invoice-system) for rapid digital invoice generation and job tracking.",
    result: "Reduced invoice creation and dispatch time by 75%, accelerating payment cycles and eliminating manual paper work orders.",
    role: "Full Stack Developer & Systems Integrator",
    technologies: ["WordPress", "PHP", "Custom Invoicing Plugin", "MySQL", "JavaScript", "Tailwind CSS"],
    metrics: [
      { value: "-75%", label: "Invoice Prep Time" },
      { value: "3x", label: "Faster Payment Cycles" },
      { value: "100%", label: "Digital Job Records" }
    ],
    challenge: "Electrical contractors lose significant billable time creating manual paper invoices, tracking variable hardware costs, and following up on unpaid commercial job orders. The client needed both an authoritative web presence to win commercial fit-out contracts and an integrated invoicing tool.",
    solution: "Developed a high-authority commercial electrical contractor website and engineered a custom back-office invoicing plugin ('purge-invoice-system'). Electricians can log hours, add materials from a standardized pricing catalog, and generate instant branded PDF invoices directly from the field.",
    architecture: "Custom WordPress development incorporating a bespoke PHP/MySQL invoicing engine, role-based contractor access, and automated client billing workflows.",
    results: "Shortened payment turnaround from 30+ days to under 10 days by dispatching digital invoices immediately upon job sign-off.",
    keyFeatures: [
      "Bespoke 'purge-invoice-system' plugin for job cost estimation and invoice dispatch",
      "Dedicated service portals for Residential, Commercial Fitouts, and Heat Pump Installation",
      "Certified Master Electricians trust credentials and safety compliance badges",
      "Emergency dispatch and after-hours callout intake system"
    ]
  },
  {
    id: "purge-cleaning",
    slug: "purge-cleaning",
    title: "Purge Cleaning Services Platform",
    client: "Purge Cleaning NZ",
    industry: "Commercial & Residential Services (New Zealand)",
    category: "High-Performance Business Website",
    filterCategory: "business-websites",
    featured: false,
    thumbnail: "/assets/projects/purge-cleaning.webp",
    year: "2024",
    description: "Service platform for residential, commercial, and post-construction cleaning services across New Zealand with transparent pricing packages and direct quote booking.",
    shortChallenge: "Customers experienced friction booking cleaning services due to ambiguous pricing, opaque service tiers, and slow quotation follow-ups.",
    shortSolution: "Engineered a clear, conversion-focused service platform with structured packages (Standard, Deep Clean, Move In/Out, Commercial) and an instant booking request workflow.",
    result: "Doubled online booking conversion rates and cut lead-to-booking response time to under 1 hour.",
    role: "Frontend & WordPress Developer",
    technologies: ["WordPress", "PHP", "JavaScript", "Tailwind CSS", "Lead Generation Engine"],
    metrics: [
      { value: "2x", label: "Booking Conversion Rate" },
      { value: "< 1hr", label: "Lead Response Time" },
      { value: "100%", label: "Mobile Optimized" }
    ],
    challenge: "Cleaning service clients often abandon booking flows when pricing is hidden or service inclusions are vague. Purge Cleaning needed a transparent, credible platform where residential tenants, homeowners, and commercial facility managers could easily select their needed cleaning level and book immediately.",
    solution: "Created a structured, modern service portal with clear itemized checklists for Standard, Deep Cleaning, End of Tenancy, and Commercial office contracts, backed by an intuitive multi-step quote form.",
    architecture: "Custom responsive WordPress theme with clean semantic markup, fast CSS styling, and server-side form validation connected to team email and SMS dispatch.",
    results: "Conversion rate from site visitor to quote request doubled, with over 70% of inquiries arriving via mobile devices.",
    keyFeatures: [
      "Transparent service package breakdowns with comprehensive cleaning checklists",
      "Interactive quote request form with property size and frequency selection",
      "Clear satisfaction guarantee and insurance verification trust badges",
      "Mobile-optimized one-click calling and instant WhatsApp inquiry options"
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
  { value: "80+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "7+", label: "Years Experience" },
  { value: "5.0", label: "Google Review Rating" }
];

export default projectsData;
