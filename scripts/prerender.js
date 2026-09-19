import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");

if (!fs.existsSync(distDir)) {
  console.error("dist directory does not exist. Run vite build first.");
  process.exit(1);
}

const templatePath = path.join(distDir, "index.html");
const template = fs.readFileSync(templatePath, "utf-8");

const sharedFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of web development projects do you build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I specialize in custom full-stack web applications, bespoke CRM systems, business automation tools, and high-performance commercial websites using React, Laravel, and MySQL."
      }
    },
    {
      "@type": "Question",
      "name": "Why should I build a custom CRM instead of subscribing to tools like HubSpot or Zoho?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Commercial CRMs charge expensive recurring per-user fees and force you to adapt to rigid workflows. A custom CRM matches your exact sales pipeline and quoting logic, gives you 100% code and database ownership, and has zero recurring user license fees."
      }
    },
    {
      "@type": "Question",
      "name": "What technologies do you use most frequently?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "My core production stack is modern React with TypeScript and Tailwind CSS on the frontend, combined with Laravel (PHP) and MySQL or PostgreSQL on the backend, deployed on Cloudflare Workers or Linux VPS environments."
      }
    },
    {
      "@type": "Question",
      "name": "Who owns the code and intellectual property once the project is finished?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You retain 100% full intellectual property, source code, and database ownership with zero vendor lock-in. Full repository access and deployment documentation are handed over upon milestone sign-off."
      }
    },
    {
      "@type": "Question",
      "name": "What is your typical project delivery turnaround time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Focused business tools and web utilities typically take 1 to 2 weeks. Custom CRM portals, multi-role web apps, and full operational platforms take 3 to 6 weeks with weekly milestone demos."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with international clients across different time zones?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Over the past 7+ years, I have worked with business owners and agencies across India, New Zealand, the United States, the UK, and Europe with prompt asynchronous updates and overlap calls."
      }
    }
  ]
};

const routes = [
  {
    path: "/",
    title: "Saikat Patra | Full Stack Web Developer – React, Laravel & Custom CRM",
    description: "Independent Full Stack Web Developer with 7+ years experience specializing in custom React and Laravel web applications, bespoke CRM platforms, and business automation.",
    schema: sharedFaqSchema,
    bodyContent: `
      <main>
        <header>
          <h1>I Build Custom Web Apps & CRM Systems That Make Businesses Run Better.</h1>
          <p>I am Saikat Patra, an independent Full Stack Web Developer with 7+ years of experience. I design and build fast, reliable web applications, custom CRM platforms, and automated business workflows that help companies eliminate manual busywork and run smoothly.</p>
          <nav>
            <a href="/contact">Discuss Your Project</a>
            <a href="/projects">View Case Studies</a>
            <a href="/services">Explore Services</a>
            <a href="/about">About My Background</a>
          </nav>
        </header>

        <section>
          <h2>Core Services</h2>
          <article>
            <h3>Custom Web Applications</h3>
            <p>Bespoke full-stack web applications built around your exact operational workflows, portals, and internal tools using React and Laravel.</p>
          </article>
          <article>
            <h3>Bespoke CRM & Business Automation</h3>
            <p>Custom CRM systems and automated workflows designed to replace cluttered spreadsheets and eliminate manual admin busywork with zero recurring per-user licensing fees.</p>
          </article>
          <article>
            <h3>High-Performance Business Websites</h3>
            <p>Modern, conversion-focused websites engineered for lightning speed, Google SEO rankings, sub-second load times, and smooth mobile experiences.</p>
          </article>
          <p><a href="/services">Explore All 7 Specialized Services (AI Automation, Mobile Apps, SEO/GEO &amp; more) &rarr;</a></p>
        </section>

        <section>
          <h2>Featured Case Studies</h2>
          <article>
            <h3>Industrial PLT Cutting File Generator</h3>
            <p>Calculates CNC table coordinates and hem allowances, cutting cutting file prep time from 15 minutes to under 20 seconds.</p>
            <a href="/projects/plt-file-generator">Read PLT Generator Case Study</a>
          </article>
          <article>
            <h3>Quote My Blinds SaaS Operations & CRM Platform</h3>
            <p>Consolidated 5 separate business tools into one unified workspace, speeding up quote-to-invoice cycles by 65%.</p>
            <a href="/projects/quote-my-blinds">Read Quote My Blinds Case Study</a>
          </article>
          <article>
            <h3>The Drapery Cupboard E-Commerce & Consultation Platform</h3>
            <p>High-performance web store and in-home consultation engine, boosting online bookings by 45%.</p>
            <a href="/projects/the-drapery-cupboard">Read Case Study</a>
          </article>
        </section>

        <section>
          <h2>Verified Track Record</h2>
          <ul>
            <li><strong>7+ Years Experience</strong> delivering production web software</li>
            <li><strong>80+ Projects Completed</strong> for clients globally</li>
            <li><strong>50+ Satisfied Clients</strong> across India, New Zealand, USA, and Europe</li>
            <li><strong>4.9 Google Review Rating (51 Verified Reviews)</strong></li>
          </ul>
        </section>

        <section>
          <h2>Client Feedback & Verified Google Reviews (4.9 Rating, 51 Reviews)</h2>
          <article>
            <h3>Christoph Gawenda</h3>
            <p>Outstanding development service! The custom CRM is packed with useful features, and the admin panel is clean, fast, and easy to navigate. Highly recommended for businesses looking for a tailored solution.</p>
          </article>
          <article>
            <h3>Dream Big Group</h3>
            <p>We're very satisfied with the website developed by Saikat Patra. The project was completed on time, every requirement was handled professionally, and the final website gives our business a strong online presence. Five stars!</p>
          </article>
          <article>
            <h3>Michael Carter</h3>
            <p>Saikat delivered a reliable, custom web application for our blinds business. The automated quote calculator works seamlessly and has brought us consistent new inbound leads.</p>
          </article>
          <article>
            <h3>Ayan Das</h3>
            <p>Saikat Patra is a skilled and dedicated web developer who delivers clean, responsive, and user-friendly websites. He has strong technical knowledge and pays great attention to detail. His problem-solving skills and commitment to meeting deadlines make him reliable and professional. Highly recommended for quality web development work.</p>
          </article>
        </section>

        <section>
          <h2>Contact & Consultation</h2>
          <p>Email: saikatpatraoffice@gmail.com | Phone & WhatsApp: +91 90389 09382 | Location: Howrah, West Bengal, India.</p>
          <p>Usually responds within 24 hours. No-obligation technical consultation.</p>
        </section>
      </main>
    `
  },
  {
    path: "/services",
    title: "Web, Mobile, AI & SEO Engineering Services | Saikat Patra",
    description: "Full-stack web applications, custom CRM platforms, AI tool implementation, cross-platform iOS & Android mobile apps, and SEO/GEO search optimization.",
    schema: sharedFaqSchema,
    bodyContent: `
      <main>
        <header>
          <h1>Custom Web & Mobile Software Built to Accelerate Your Business.</h1>
          <p>I help businesses replace manual spreadsheets, fragmented SaaS subscriptions, and slow websites with fast, dependable custom software built on React, Laravel, AI, and mobile frameworks.</p>
        </header>

        <section>
          <h2>Detailed Service Offerings</h2>
          <article>
            <h3>01. Custom Web Applications</h3>
            <p>Bespoke full-stack web applications featuring customer portals, interactive dimension calculators, internal dashboards, and role-based permissions.</p>
            <p><strong>Business ROI:</strong> Eliminates manual workarounds and gives your business 100% software ownership without recurring user license fees.</p>
          </article>
          <article>
            <h3>02. Bespoke CRM & Business Automation</h3>
            <p>Custom CRM platforms tailored to your sales pipeline, with automated email/SMS notifications, one-click PDF quoting, and activity audit logs.</p>
            <p><strong>Business ROI:</strong> Saves dozens of admin hours weekly and prevents missed sales inquiries.</p>
          </article>
          <article>
            <h3>03. High-Performance Business Websites</h3>
            <p>Fast, custom-coded web architectures scoring top Core Web Vitals, with mobile-first UI and clean structured SEO schema.</p>
            <p><strong>Business ROI:</strong> Creates authority, drops bounce rates, and ranks higher on Google search results.</p>
          </article>
          <article>
            <h3>04. API & Third-Party Integrations</h3>
            <p>Direct integrations with payment gateways (Stripe, PayPal), messaging endpoints, and two-way CRM/ERP database sync.</p>
            <p><strong>Business ROI:</strong> Eliminates duplicate data entry and prevents human accounting errors.</p>
          </article>
          <article>
            <h3>05. AI Tool Implementation & Smart Automation</h3>
            <p>Production-ready LLM integrations, private RAG knowledge bases, and autonomous workflow agents embedded into your software.</p>
            <p><strong>Business ROI:</strong> Automates 60–80% of routine manual triage, speeds up operational response times, and protects internal company data.</p>
          </article>
          <article>
            <h3>06. Cross-Platform Mobile Apps (iOS & Android)</h3>
            <p>Cross-platform mobile applications engineered with React Native and Expo, featuring offline caching and native device access.</p>
            <p><strong>Business ROI:</strong> Reduces mobile app development time and costs by 50% while delivering consistent native user experiences.</p>
          </article>
          <article>
            <h3>07. SEO & GEO (Generative Engine Optimization)</h3>
            <p>Technical on-page SEO, rich JSON-LD schema graphs, and Generative Engine Optimization for ChatGPT, Perplexity, and AI search visibility.</p>
            <p><strong>Business ROI:</strong> Captures high-intent organic Google traffic while securing early-mover visibility in AI-generated answers.</p>
          </article>
        </section>
      </main>
    `
  },
  {
    path: "/projects",
    title: "Case Study Library & Web Projects | Saikat Patra",
    description: "Explore real-world case studies of custom web applications, bespoke CRM platforms, and high-performance business websites engineered by Saikat Patra.",
    bodyContent: `
      <main>
        <header>
          <h1>Selected Projects & Commercial Solutions</h1>
          <p>A library of production web applications, custom CRM platforms, and high-performance business systems. Each case study details the client's operational problem, technical architecture, and verified business results.</p>
        </header>

        <section>
          <h2>All Case Studies</h2>
          <article>
            <h3>Industrial PLT Cutting File Generator</h3>
            <p>CNC fabric table vector calculation tool reducing preparation time from 15 minutes to under 20 seconds.</p>
            <a href="/projects/plt-file-generator">View Case Study</a>
          </article>
          <article>
            <h3>Quote My Blinds SaaS Operations & CRM Platform</h3>
            <p>All-in-one operations hub cutting quote-to-invoice cycles by 65%.</p>
            <a href="/projects/quote-my-blinds">View Case Study</a>
          </article>
          <article>
            <h3>The Drapery Cupboard E-Commerce & Consultation Platform</h3>
            <p>Online store and in-home consultation engine with 45% booking growth.</p>
            <a href="/projects/the-drapery-cupboard">View Case Study</a>
          </article>
          <article>
            <h3>Purge Window Shades & Blinds</h3>
            <p>High-conversion commercial manufacturer web platform with 2.5x quote growth.</p>
            <a href="/projects/purge-window-shades-blinds">View Case Study</a>
          </article>
          <article>
            <h3>SSPR Valve Manufacturing Industrial Catalog</h3>
            <p>Industrial valve web catalog on Cloudflare Workers edge, driving 45% more inquiries.</p>
            <a href="/projects/sspr-valve-manufacturing">View Case Study</a>
          </article>
          <article>
            <h3>Dream Big Group Real Estate Platform</h3>
            <p>Cinematic property showcase achieving 180% inquiry surge and top local search ranking.</p>
            <a href="/projects/dream-big-group">View Case Study</a>
          </article>
          <article>
            <h3>Purge Electrical Solutions & Invoicing System</h3>
            <p>Commercial electrical trade platform with proprietary digital invoicing plugin cutting billing time by 75%.</p>
            <a href="/projects/purge-electrical">View Case Study</a>
          </article>
          <article>
            <h3>Purge Cleaning Services Platform</h3>
            <p>Transparent cleaning package booking portal doubling online conversions.</p>
            <a href="/projects/purge-cleaning">View Case Study</a>
          </article>
        </section>
      </main>
    `
  },
  {
    path: "/projects/plt-file-generator",
    title: "Industrial PLT Cutting File Generator Case Study | Saikat Patra",
    description: "Industrial web application calculating CNC table cutting coordinates, blade offsets, and hem allowances into machine-executable .plt vector files in seconds.",
    bodyContent: `
      <main>
        <article>
          <h1>Industrial PLT Cutting File Generator Case Study</h1>
          <p>Client: Purge Window Shades & Industrial Automation (New Zealand) | Role: Lead Full Stack Developer & Algorithm Engineer</p>
          <p>Technologies: React, JavaScript, Cloudflare Workers, HPGL/PLT Vector Engine, Tailwind CSS, CNC Automation</p>
          <section>
            <h2>The Challenge</h2>
            <p>Factory operators spent up to 15 minutes per order manually calculating coordinates and hem allowances for automated CNC fabric cutting tables, leading to human calculation errors, machine aborts, and costly fabric scrap.</p>
          </section>
          <section>
            <h2>The Engineering Solution</h2>
            <p>Engineered an edge-hosted web application deployed on Cloudflare Workers. Operators input blind dimensions and tube specs; the custom algorithm generates valid HPGL/PLT coordinates and outputs instantaneous .plt files ready for direct CNC table execution.</p>
          </section>
          <section>
            <h2>Results & Metrics</h2>
            <ul>
              <li>File preparation time reduced from 15 minutes to under 20 seconds per order</li>
              <li>100% elimination of operator coordinate calculation errors</li>
              <li>Zero CNC machine aborts caused by malformed vectors</li>
            </ul>
          </section>
        </article>
      </main>
    `
  },
  {
    path: "/projects/quote-my-blinds",
    title: "Quote My Blinds SaaS Operations & CRM Case Study | Saikat Patra",
    description: "SaaS operations workspace for window treatment businesses managing customer inquiries, calendar bookings, measurements, quotes, and instant invoices.",
    bodyContent: `
      <main>
        <article>
          <h1>Quote My Blinds SaaS Operations & CRM Case Study</h1>
          <p>Client: Quote My Blinds | Role: Lead Full Stack Architect & Developer</p>
          <p>Technologies: React, Laravel, Node.js, MySQL, Tailwind CSS, REST APIs, SaaS Architecture</p>
          <section>
            <h2>The Challenge</h2>
            <p>Window treatment businesses juggled disconnected tools for intake, measurement bookings, complex fabric calculations, and paper invoicing, causing lost leads and delayed cash flow.</p>
          </section>
          <section>
            <h2>The Solution</h2>
            <p>Built an all-in-one SaaS operations platform with Kanban inquiry boards, appointment calendars, dynamic dimension-based pricing engines, and one-click PDF quote and invoice generation.</p>
          </section>
          <section>
            <h2>Results</h2>
            <ul>
              <li>65% faster quote-to-invoice cycles</li>
              <li>Replaced 5 disconnected tools with 1 unified workspace</li>
              <li>Quoting time slashed from 45 minutes to under 5 minutes</li>
            </ul>
          </section>
        </article>
      </main>
    `
  },
  {
    path: "/projects/the-drapery-cupboard",
    title: "The Drapery Cupboard E-Commerce Case Study | Saikat Patra",
    description: "Modern e-commerce and consultation booking platform for custom window furnishings with online parts store and lead scheduling.",
    bodyContent: `
      <main>
        <article>
          <h1>The Drapery Cupboard E-Commerce & Consultation Case Study</h1>
          <p>Client: The Drapery Cupboard Ltd (New Zealand) | Role: Lead Full Stack Developer & UI/UX Designer</p>
          <p>Technologies: React, Cloudflare Workers, Tailwind CSS, JavaScript, E-Commerce, REST APIs</p>
          <section>
            <h2>The Challenge</h2>
            <p>Selling custom drapery, curtains, and roman blinds online required a platform that combined hardware parts e-commerce with a smooth booking funnel for in-home consultations.</p>
          </section>
          <section>
            <h2>The Solution</h2>
            <p>Engineered an edge-deployed React application on Cloudflare Workers featuring interactive product showcases and a streamlined free consultation booking flow.</p>
          </section>
          <section>
            <h2>Results</h2>
            <p>45% increase in online consultation bookings and sub-0.8s page loads across New Zealand.</p>
          </section>
        </article>
      </main>
    `
  },
  {
    path: "/projects/purge-window-shades-blinds",
    title: "Purge Window Shades & Blinds Case Study | Saikat Patra",
    description: "High-conversion digital platform for Auckland custom blinds manufacturer highlighting 5-day manufacturing turnaround and free measure and quote intake.",
    bodyContent: `
      <main>
        <article>
          <h1>Purge Window Shades & Blinds Case Study</h1>
          <p>Client: Purge Ltd (Auckland, New Zealand) | Role: Lead Web Developer & SEO Specialist</p>
          <p>Technologies: WordPress, PHP, Tailwind CSS, JavaScript, SEO Architecture</p>
          <section>
            <h2>The Challenge</h2>
            <p>Differentiating from drop-shipped retail franchises by highlighting local Auckland manufacturing and capturing residential and commercial architect inquiries.</p>
          </section>
          <section>
            <h2>The Solution</h2>
            <p>Developed a high-converting, lightweight commercial website emphasizing the 5-day turnaround guarantee, comprehensive product galleries, and instant measure-and-quote scheduling.</p>
          </section>
          <section>
            <h2>Results</h2>
            <p>2.5x increase in monthly quote inquiries from Auckland property owners and 98+ Google Lighthouse performance.</p>
          </section>
        </article>
      </main>
    `
  },
  {
    path: "/projects/sspr-valve-manufacturing",
    title: "SSPR Valve Manufacturing Industrial Catalog Case Study | Saikat Patra",
    description: "Industrial engineering digital platform and product catalog for SSPR Valve Manufacturing Pvt Ltd (SR Valve) highlighting 15+ years of flow control manufacturing.",
    bodyContent: `
      <main>
        <article>
          <h1>SSPR Valve Manufacturing Industrial Catalog Case Study</h1>
          <p>Client: SSPR Valve Manufacturing Private Limited (Howrah, India) | Role: Lead Full Stack Developer & Edge Deployment Engineer</p>
          <p>Technologies: React, Cloudflare Workers, Tailwind CSS, JavaScript, Industrial Web Architecture</p>
          <section>
            <h2>The Challenge</h2>
            <p>Government tender authorities and engineering procurement teams needed instant access to valve technical specifications, ISO credentials, and plant capabilities without cumbersome PDF downloads.</p>
          </section>
          <section>
            <h2>The Solution</h2>
            <p>Engineered an edge-deployed web catalog on Cloudflare Workers with structured product classifications, ISO/NSIC compliance verification, and direct quotation workflows.</p>
          </section>
          <section>
            <h2>Results</h2>
            <p>45% increase in valve and penstock inquiries across infrastructure projects with sub-0.7s delivery speed.</p>
          </section>
        </article>
      </main>
    `
  },
  {
    path: "/projects/dream-big-group",
    title: "Dream Big Group Real Estate Platform Case Study | Saikat Patra",
    description: "Cinematic digital presence and residential property showcase for Dream Big Group, premier real estate developer in Howrah.",
    bodyContent: `
      <main>
        <article>
          <h1>Dream Big Group Real Estate Platform Case Study</h1>
          <p>Client: Dream Big Group (Howrah, India) | Role: Frontend Developer & SEO Specialist</p>
          <p>Technologies: React, Tailwind CSS, JavaScript, Local SEO, Mobile-First UX</p>
          <section>
            <h2>The Challenge</h2>
            <p>Showcasing architectural floor plans and amenities on a slow legacy site caused high mobile bounce rates and lost homebuyer inquiries.</p>
          </section>
          <section>
            <h2>The Solution</h2>
            <p>Built a high-performance web platform featuring dark cinematic visuals, architectural floor plan showcases, buyer review integration, and immediate WhatsApp booking.</p>
          </section>
          <section>
            <h2>Results</h2>
            <p>180% surge in qualified buyer inquiries, sub-second mobile page loads, and top local search rankings across Howrah.</p>
          </section>
        </article>
      </main>
    `
  },
  {
    path: "/projects/purge-electrical",
    title: "Purge Electrical Solutions & Invoicing Case Study | Saikat Patra",
    description: "Commercial electrical contractor web platform integrated with a proprietary custom WordPress invoicing system (purge-invoice-system).",
    bodyContent: `
      <main>
        <article>
          <h1>Purge Electrical Solutions & Invoicing Case Study</h1>
          <p>Client: Purge Electrical NZ | Role: Full Stack Developer & Systems Integrator</p>
          <p>Technologies: WordPress, PHP, Custom Invoicing Plugin, MySQL, JavaScript, Tailwind CSS</p>
          <section>
            <h2>The Challenge</h2>
            <p>Contractors lost billable hours drafting manual paper invoices and tracking variable materials across job sites, causing payment delays.</p>
          </section>
          <section>
            <h2>The Solution</h2>
            <p>Engineered a commercial website and built a custom back-office plugin ('purge-invoice-system') allowing electricians to generate branded PDF invoices directly from the field.</p>
          </section>
          <section>
            <h2>Results</h2>
            <p>75% reduction in invoice preparation time and 3x faster client payment turnaround.</p>
          </section>
        </article>
      </main>
    `
  },
  {
    path: "/projects/purge-cleaning",
    title: "Purge Cleaning Services Platform Case Study | Saikat Patra",
    description: "Service booking platform for residential, commercial, and post-construction cleaning services across New Zealand with transparent pricing tiers.",
    bodyContent: `
      <main>
        <article>
          <h1>Purge Cleaning Services Platform Case Study</h1>
          <p>Client: Purge Cleaning NZ | Role: Frontend & WordPress Developer</p>
          <p>Technologies: WordPress, PHP, JavaScript, Tailwind CSS, Lead Generation Engine</p>
          <section>
            <h2>The Challenge</h2>
            <p>Customers experienced friction booking cleaning services due to ambiguous pricing and unclear service inclusions.</p>
          </section>
          <section>
            <h2>The Solution</h2>
            <p>Built a modern service portal with clear itemized checklists for Standard, Deep Cleaning, End of Tenancy, and Commercial contracts backed by an intuitive quote form.</p>
          </section>
          <section>
            <h2>Results</h2>
            <p>Doubled online booking conversion rates with lead response times under 1 hour.</p>
          </section>
        </article>
      </main>
    `
  },
  {
    path: "/about",
    title: "About Saikat Patra | Full Stack Web Developer",
    description: "Learn about Saikat Patra, an independent Full Stack Web Developer with 7+ years of experience engineering custom web applications, bespoke CRM platforms, and business automation workflows.",
    bodyContent: `
      <main>
        <article>
          <h1>About Saikat Patra - Full Stack Developer</h1>
          <p>I am Saikat Patra, an independent Full Stack Web Developer with over 7 years of professional experience building custom web software, bespoke CRM systems, and business automation workflows. I help founders and growing businesses ditch messy spreadsheets and expensive off-the-shelf software in favor of tailor-made web tools built with React and Laravel.</p>
          
          <section>
            <h2>My Background & Philosophy</h2>
            <p>I started coding over 7 years ago driven by curiosity about how clean software can power business operations. Over the years, I have worked with founders, manufacturing directors, and growing teams across India, New Zealand, the US, and Europe.</p>
            <p>My philosophy is simple: code should solve human friction and accelerate business operations. Clean architecture and modular components exist to ensure the software remains fast, dependable, and straightforward for non-technical teams to use.</p>
          </section>

          <section>
            <h2>Why Clients Work With Me</h2>
            <ul>
              <li><strong>Business-First Engineering:</strong> Focus on your operational bottlenecks, customer journey, and ROI.</li>
              <li><strong>End-to-End Senior Ownership:</strong> One experienced engineer handling database modeling, backend API logic, responsive frontend UI, and deployment.</li>
              <li><strong>Clear, Jargon-Free Communication:</strong> Direct sprint updates, weekly milestone demos, and predictable delivery.</li>
              <li><strong>Zero Lock-In & Full Ownership:</strong> You own 100% of the source code and databases with no monthly per-user license fees.</li>
            </ul>
          </section>

          <section>
            <h2>Verified Google Reviews & Client Feedback (4.9 Rating, 51 Reviews)</h2>
            <article>
              <h3>Christoph Gawenda</h3>
              <p>Outstanding development service! The custom CRM is packed with useful features, and the admin panel is clean, fast, and easy to navigate. Highly recommended for businesses looking for a tailored solution.</p>
            </article>
            <article>
              <h3>Dream Big Group</h3>
              <p>We're very satisfied with the website developed by Saikat Patra. The project was completed on time, every requirement was handled professionally, and the final website gives our business a strong online presence. Five stars!</p>
            </article>
            <article>
              <h3>Subrata Bhowmik</h3>
              <p>His professionalism, responsiveness, and commitment to delivering high-quality work on time make him a pleasure to work with. I highly recommend Saikat to anyone looking for a skilled and reliable web designer who combines creativity with technical expertise.</p>
            </article>
          </section>

          <section>
            <h2>Contact Saikat Patra</h2>
            <p>Email: saikatpatraoffice@gmail.com | WhatsApp: +91 90389 09382 | Location: Howrah, West Bengal, India.</p>
          </section>
        </article>
      </main>
    `
  },
  {
    path: "/skills",
    title: "Technical Skills & Architecture Patterns | Saikat Patra",
    description: "Full stack technical skills and engineering frameworks mastered by Saikat Patra: React, Next.js, Laravel, PHP, MySQL, Tailwind CSS, REST APIs, and Cloudflare Workers.",
    bodyContent: `
      <main>
        <article>
          <h1>Technical Skills & Production Frameworks</h1>
          <p>I believe in deep practical mastery over arbitrary percentages. Every framework and tool in my stack has been proven across hundreds of real-world production deployments.</p>

          <section>
            <h2>Core Technical Clusters</h2>
            <ul>
              <li><strong>Frontend Development:</strong> React, Next.js, JavaScript (ES6+), Tailwind CSS, HTML5, semantic markup, and responsive UI design.</li>
              <li><strong>Backend Architecture:</strong> Laravel (PHP), object-oriented programming, Eloquent ORM, secure RESTful APIs, Node.js utilities, and queued background tasks.</li>
              <li><strong>Database Modeling:</strong> MySQL, PostgreSQL, schema normalization, query optimization, and transaction safety.</li>
              <li><strong>APIs & Business Automation:</strong> Stripe, PayPal, Razorpay, Twilio SMS, SendGrid email, WhatsApp Business API, and resilient webhook event listeners.</li>
              <li><strong>Infrastructure & Deployment:</strong> Cloudflare Workers & Pages, Linux VPS, DigitalOcean, AWS, CI/CD automation, and Redis caching.</li>
              <li><strong>Custom CMS:</strong> Lightweight WordPress development, custom plugins, and Advanced Custom Fields without bloated visual builders.</li>
            </ul>
          </section>
        </article>
      </main>
    `
  },
  {
    path: "/contact",
    title: "Get in Touch Directly | Saikat Patra - Full Stack Web Developer",
    description: "Skip the long forms. Reach out directly to Saikat Patra via WhatsApp, direct phone, or email for web development, custom CRMs, and business automation.",
    bodyContent: `
      <main>
        <header>
          <p>DIRECT CHANNELS</p>
          <h1>Get in Touch Directly</h1>
          <p>Skip the long forms. Reach out directly through any of my verified communication channels.</p>
        </header>

        <section>
          <h2>Direct Communication Channels</h2>
          <ul>
            <li><strong>Instant Chat (Primary):</strong> +91 90389 09382 (WhatsApp & Direct Call)</li>
            <li><strong>Instant Chat (Secondary):</strong> +91 89022 73136 (WhatsApp & Direct Call)</li>
            <li><strong>Business Enquiries:</strong> saikatpatraoffice@gmail.com</li>
            <li><strong>Direct Email:</strong> saikatpatra300@gmail.com</li>
          </ul>
        </section>

        <section>
          <h2>Availability & Location</h2>
          <p>Location: Howrah, West Bengal, India (Remote worldwide)</p>
          <p>Response Time: Usually within 24 hours</p>
        </section>

        <section>
          <h2>Project Inquiry Types</h2>
          <ul>
            <li>Custom Website Development</li>
            <li>Business / Portfolio Website</li>
            <li>E-commerce Solutions</li>
            <li>Web Application (React, Laravel, etc.)</li>
            <li>API Integration & Automation</li>
            <li>Website Redesign & Optimization</li>
            <li>Other (Let's Discuss)</li>
          </ul>
        </section>

        <section>
          <h2>Why Work With Me?</h2>
          <ul>
            <li><strong>Clear Communication:</strong> Regular updates and transparent process.</li>
            <li><strong>Client Focused:</strong> Your goals are my priority.</li>
            <li><strong>Reliable Support:</strong> On-time delivery and post-launch support.</li>
            <li><strong>Long-Term Partnership:</strong> Not just a project, but a lasting relationship.</li>
          </ul>
        </section>
      </main>
    `
  }
];

for (const route of routes) {
  const cleanPath = route.path === "/" ? "" : route.path;
  const canonicalUrl = `https://portfolio.saikatpatraoffice.workers.dev${cleanPath}`;

  let html = template;

  // Replace Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${route.title}</title>`);

  // Replace Meta Description
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${route.description}" />`
  );

  // Replace Canonical Link
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // Replace Open Graph metadata
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  // Replace Twitter metadata
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:url" content="${canonicalUrl}" />`
  );

  // Inject route-specific schema if present
  if (route.schema) {
    const schemaTag = `\n    <!-- Route Structured Data -->\n    <script type="application/ld+json">\n    ${JSON.stringify(route.schema, null, 2)}\n    </script>\n  </head>`;
    html = html.replace("</head>", schemaTag);
  }

  // Inject semantic fallback content into #root for search bots & AI crawlers
  html = html.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${route.bodyContent}</div>`
  );

  // Output location
  if (route.path === "/") {
    fs.writeFileSync(path.join(distDir, "index.html"), html, "utf-8");
    console.log("Prerendered: / (dist/index.html)");
  } else {
    const routeDir = path.join(distDir, route.path.replace(/^\//, ""));
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.join(routeDir, "index.html"), html, "utf-8");
    console.log(`Prerendered: ${route.path} (${path.relative(distDir, path.join(routeDir, "index.html"))})`);
  }
}

console.log(`Successfully prerendered ${routes.length} static marketing routes with complete SEO & AI-search content!`);
