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

const routes = [
  {
    path: "/",
    title: "Saikat Patra | Full Stack Web Developer – React, Laravel & Custom CRM",
    description: "Full Stack Web Developer specializing in React, Laravel, custom CRM systems, business automation and high-performance web applications.",
    h1: "I Build Custom Web Apps & CRM Systems That Make Businesses Run Better.",
    bodyContent: `
      <main>
        <section>
          <h1>I Build Custom Web Apps & CRM Systems That Make Businesses Run Better.</h1>
          <p>Full Stack Developer specializing in Custom Web Applications, CRM Systems & Business Automation with React and Laravel.</p>
          <a href="/contact">Discuss Your Project</a>
          <a href="/projects">View My Work</a>
        </section>
        <section>
          <h2>Core Services</h2>
          <ul>
            <li><strong>Custom Web Applications</strong>: Workflows, portals, booking engines, and internal management tools.</li>
            <li><strong>CRM & Business Automation</strong>: Replace spreadsheets and automate repetitive administrative workflows.</li>
            <li><strong>High-Performance Business Websites</strong>: Responsive, conversion-focused websites engineered for speed and SEO.</li>
            <li><strong>API & Third-Party Integrations</strong>: Payments, CRM synchronization, and webhook data pipelines.</li>
          </ul>
        </section>
      </main>
    `
  },
  {
    path: "/services",
    title: "Web Development & Custom CRM Services | Saikat Patra",
    description: "Commercial web application development, custom CRM systems, business automation, and high-performance websites built using React and Laravel.",
    h1: "Custom Web Software Built to Accelerate Your Business.",
    bodyContent: `
      <main>
        <section>
          <h1>Custom Web Software Built to Accelerate Your Business.</h1>
          <p>I build bespoke full-stack applications, operations CRMs, high-speed business websites, and payment/API integrations.</p>
        </section>
        <section>
          <h2>Services Offered</h2>
          <article>
            <h3>Custom Web Applications</h3>
            <p>Tailored web applications solving specific operational bottlenecks, portals, and dashboards.</p>
          </article>
          <article>
            <h3>CRM & Business Automation</h3>
            <p>Custom CRM systems and automated workflows designed to replace spreadsheets and eliminate manual tasks.</p>
          </article>
          <article>
            <h3>High-Performance Business Websites</h3>
            <p>Conversion-focused websites engineered for speed, search visibility, and mobile responsiveness.</p>
          </article>
          <article>
            <h3>API & Third-Party Integrations</h3>
            <p>Reliable connections between your software, payment gateways, and cloud endpoints.</p>
          </article>
        </section>
      </main>
    `
  },
  {
    path: "/projects",
    title: "Case Study Library & Web Projects | Saikat Patra",
    description: "Explore full-stack case studies, custom CRM systems, e-commerce platforms, and high-performance business applications built by Saikat Patra.",
    h1: "Selected Projects & Commercial Solutions",
    bodyContent: `
      <main>
        <section>
          <h1>Selected Projects & Commercial Solutions</h1>
          <p>Case studies detailing client challenges, technical architectures, and verified business outcomes.</p>
        </section>
        <section>
          <h2>Featured Case Studies</h2>
          <article>
            <h3>Quote My Blinds</h3>
            <p>Multi-tenant quote and lead management platform. 60% faster quote generation and 3x inbound leads.</p>
          </article>
          <article>
            <h3>Custom CRM System</h3>
            <p>Consolidated internal operations platform. 50% admin time savings and $40,000+ recovered in billable hours.</p>
          </article>
          <article>
            <h3>Real Estate Listing Platform</h3>
            <p>Fast property search directory with 70% faster query response and automated WhatsApp dispatch.</p>
          </article>
        </section>
      </main>
    `
  },
  {
    path: "/projects/plt-file-generator",
    title: "Industrial PLT Cutting File Generator Case Study | Saikat Patra",
    description: "Industrial web application translating blind dimensions into machine-executable HPGL/PLT cutting files for automated CNC fabric cutting tables.",
    h1: "Industrial PLT Cutting File Generator Case Study",
    bodyContent: `
      <main>
        <article>
          <h1>Industrial PLT Cutting File Generator Case Study</h1>
          <p>Client: Purge Window Shades & Industrial Automation | Technologies: React, JavaScript, Cloudflare Workers, HPGL/PLT Vector Engine, Tailwind CSS</p>
          <p>Challenge: Factory operators manually drafted coordinates and hem allowances for CNC cutting tables, causing fabric waste and machine downtime.</p>
          <p>Solution: Engineered an edge-hosted PLT vector generator that computes cutting coordinates, offsets, and allowances into CNC-ready .plt files.</p>
          <p>Results: Eliminated operator errors, cut file preparation from 15 minutes to under 20 seconds, and improved fabric yield.</p>
        </article>
      </main>
    `
  },
  {
    path: "/projects/quote-my-blinds",
    title: "Quote My Blinds SaaS Operations & CRM Case Study | Saikat Patra",
    description: "SaaS operations workspace for window treatment businesses managing customer inquiries, calendar bookings, measurements, quotes, and instant invoices.",
    h1: "Quote My Blinds SaaS Operations & CRM Case Study",
    bodyContent: `
      <main>
        <article>
          <h1>Quote My Blinds SaaS Operations & CRM Case Study</h1>
          <p>Client: Quote My Blinds | Technologies: React, Node.js, MySQL, Tailwind CSS, REST APIs, SaaS Architecture</p>
          <p>Challenge: Window treatment contractors struggled with fragmented tools—losing hours managing bookings, manual fabric calculations, and delayed paper invoices.</p>
          <p>Solution: Built an all-in-one SaaS platform featuring customer enquiry intake, booking schedules, dynamic pricing formulas, one-click PDF quoting, instant invoices, and payment tracking.</p>
          <p>Results: Accelerated quote-to-invoice turnaround by 65%, eliminated measurement calculation errors, and unified bookings under a single dashboard.</p>
        </article>
      </main>
    `
  },
  {
    path: "/projects/the-drapery-cupboard",
    title: "The Drapery Cupboard E-Commerce Case Study | Saikat Patra",
    description: "E-commerce and consultation platform for custom curtains, blinds, and shutters with online parts store and lead scheduling.",
    h1: "The Drapery Cupboard E-Commerce & Consultation Case Study",
    bodyContent: `
      <main>
        <article>
          <h1>The Drapery Cupboard E-Commerce & Consultation Case Study</h1>
          <p>Client: The Drapery Cupboard Ltd | Technologies: React, Cloudflare Workers, Tailwind CSS, JavaScript, E-Commerce</p>
          <p>Challenge: Selling bespoke window coverings online was hindered by complex sizing options and disconnected consultation booking.</p>
          <p>Solution: Engineered a high-performance modern web application deployed on Cloudflare Workers with product category filtering and in-home consultation booking.</p>
          <p>Results: 45% increase in online consultation bookings and rapid sub-second page loads across New Zealand.</p>
        </article>
      </main>
    `
  },
  {
    path: "/projects/purge-window-shades-blinds",
    title: "Purge Window Shades & Blinds Case Study | Saikat Patra",
    description: "High-conversion digital platform for Auckland custom blinds and shades manufacturer offering rapid 5-day turnaround.",
    h1: "Purge Window Shades & Blinds Case Study",
    bodyContent: `
      <main>
        <article>
          <h1>Purge Window Shades & Blinds Case Study</h1>
          <p>Client: Purge Ltd | Technologies: WordPress, PHP, Tailwind CSS, JavaScript, SEO</p>
          <p>Challenge: Differentiating from drop-shipped imports by promoting local Auckland 5-day manufacturing turnaround.</p>
          <p>Solution: Built a high-converting commercial website with measure-and-quote scheduling, product galleries, and Auckland SEO.</p>
          <p>Results: 2.5x more monthly quote inquiries and 98+ Google Lighthouse performance score.</p>
        </article>
      </main>
    `
  },
  {
    path: "/projects/purge-electrical",
    title: "Purge Electrical Solutions & Invoicing Case Study | Saikat Patra",
    description: "Commercial electrical services platform integrated with a bespoke custom invoicing and billing management system (purge-invoice-system).",
    h1: "Purge Electrical Solutions & Invoicing Case Study",
    bodyContent: `
      <main>
        <article>
          <h1>Purge Electrical Solutions & Invoicing Case Study</h1>
          <p>Client: Purge Electrical NZ | Technologies: WordPress, PHP, Custom Invoicing Plugin, MySQL, JavaScript</p>
          <p>Challenge: Managing job quotes, material costs, and paper invoicing caused billing delays and administrative backlogs.</p>
          <p>Solution: Commercial web platform with proprietary custom WordPress invoicing system (purge-invoice-system) for rapid digital invoice generation.</p>
          <p>Results: 75% reduction in invoice preparation time and 3x faster payment collection cycles.</p>
        </article>
      </main>
    `
  },
  {
    path: "/projects/purge-cleaning",
    title: "Purge Cleaning Services Platform Case Study | Saikat Patra",
    description: "Service platform for residential, commercial, and post-construction cleaning services across New Zealand with transparent pricing packages.",
    h1: "Purge Cleaning Services Platform Case Study",
    bodyContent: `
      <main>
        <article>
          <h1>Purge Cleaning Services Platform Case Study</h1>
          <p>Client: Purge Cleaning NZ | Technologies: WordPress, PHP, JavaScript, Tailwind CSS, Lead Generation</p>
          <p>Challenge: Customers experienced booking friction due to opaque service tiers and ambiguous pricing.</p>
          <p>Solution: Transparent service package breakdowns with comprehensive cleaning checklists and instant quote request workflow.</p>
          <p>Results: Doubled online booking conversion rates and cut lead response times to under 1 hour.</p>
        </article>
      </main>
    `
  },
  {
    path: "/projects/sspr-valve-manufacturing",
    title: "SSPR Valve Manufacturing Industrial Web Presence Case Study | Saikat Patra",
    description: "High-speed industrial digital platform and engineering product catalog for SSPR Valve Manufacturing Pvt Ltd (SR Valve).",
    h1: "SSPR Valve Manufacturing Industrial Web Presence Case Study",
    bodyContent: `
      <main>
        <article>
          <h1>SSPR Valve Manufacturing Industrial Web Presence Case Study</h1>
          <p>Client: SSPR Valve Manufacturing Private Limited (SR Valve) | Technologies: React, Cloudflare Workers, Tailwind CSS, JavaScript</p>
          <p>Challenge: Industrial procurement teams needed instant access to valve specifications, ISO compliance credentials, and project references without heavy catalog downloads.</p>
          <p>Solution: Engineered an edge-deployed, mobile-responsive web catalog showcasing industrial valves, penstocks, ISO/NSIC/MSME certifications, and direct RFQ workflows.</p>
          <p>Results: Expanded domestic and export valve inquiries by 45%, with sub-second edge loading on Cloudflare Workers.</p>
        </article>
      </main>
    `
  },
  {
    path: "/projects/dream-big-group",
    title: "Dream Big Group Real Estate Platform Case Study | Saikat Patra",
    description: "Cinematic digital presence and residential property showcase for Dream Big Group, premier real estate developer in Howrah.",
    h1: "Dream Big Group Real Estate Platform Case Study",
    bodyContent: `
      <main>
        <article>
          <h1>Dream Big Group Real Estate Platform Case Study</h1>
          <p>Client: Dream Big Group | Technologies: React, Tailwind CSS, JavaScript, Local SEO</p>
          <p>Challenge: Outdated legacy website resulted in high mobile bounce rates and low inquiry conversion for residential real estate developments.</p>
          <p>Solution: Engineered a high-performance web platform with dark cinematic visuals, interactive project showcases, buyer reviews, and immediate contact booking.</p>
          <p>Results: Boosted qualified property inquiries by 180%, achieved sub-second mobile page loads, and secured top local search visibility across Howrah.</p>
        </article>
      </main>
    `
  },
  {
    path: "/about",
    title: "About Saikat Patra | Full Stack Web Developer",
    description: "Learn about Saikat Patra, a Full Stack Web Developer with 7+ years of experience engineering custom web applications, bespoke CRM platforms, and business automation.",
    h1: "About Saikat Patra - Full Stack Developer",
    bodyContent: `
      <main>
        <section>
          <h1>About Saikat Patra - Full Stack Developer</h1>
          <p>Based in Howrah, West Bengal, India. 7+ years of experience engineering custom business systems using React and Laravel.</p>
        </section>
        <section>
          <h2>Core Strengths</h2>
          <ul>
            <li>Business-First Development</li>
            <li>Full-Stack Ownership</li>
            <li>Clear Communication</li>
            <li>Ongoing Support & Maintenance</li>
          </ul>
        </section>
      </main>
    `
  },
  {
    path: "/skills",
    title: "Technical Skills & Architecture | Saikat Patra",
    description: "Full stack technical skills, engineering frameworks, and architecture specializations mastered by Saikat Patra: React, Next.js, Laravel, PHP, MySQL, and Tailwind CSS.",
    h1: "Technical Skills & Architecture Patterns",
    bodyContent: `
      <main>
        <section>
          <h1>Technical Skills & Architecture Patterns</h1>
          <p>Deep practical mastery across React, Next.js, Laravel, PHP, MySQL, Tailwind CSS, REST APIs, and Cloudflare deployment tooling.</p>
        </section>
      </main>
    `
  },
  {
    path: "/contact",
    title: "Contact Saikat Patra | Full Stack Web Developer",
    description: "Let's discuss your project. Contact Saikat Patra for custom web applications, bespoke CRM software, business automation, or technical consulting.",
    h1: "Let's Discuss Your Project",
    bodyContent: `
      <main>
        <section>
          <h1>Let's Discuss Your Project</h1>
          <p>Email: saikatpatraoffice@gmail.com | WhatsApp: +91 90389 09382 | Response time: Within 24 hours.</p>
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

  // Inject semantic fallback content into #root for crawlers (hydrated on client side)
  html = html.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${route.bodyContent}</div>`
  );

  // Determine output location
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

console.log(`Successfully prerendered ${routes.length} static marketing routes!`);
