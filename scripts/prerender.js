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
    path: "/projects/quote-my-blinds",
    title: "Quote My Blinds Case Study | Saikat Patra",
    description: "Multi-tenant quote and lead management platform for New Zealand window blinds enterprise. 60% faster quotes and 3x lead growth.",
    h1: "Quote My Blinds - Custom Web Application Case Study",
    bodyContent: `
      <main>
        <article>
          <h1>Quote My Blinds - Custom Web Application Case Study</h1>
          <p>Client: Window Blinds NZ Ltd | Technologies: Laravel, PHP, MySQL, JavaScript, Tailwind CSS</p>
          <p>Challenge: Manual dimension calculations took up to 45 minutes, resulting in pricing errors and lost leads.</p>
          <p>Solution: Engineered an automated dimension configurator with real-time margins and PDF quotation dispatch.</p>
          <p>Results: 60% faster quote generation, monthly inquiries tripled, and 12,000+ quotes generated with zero errors.</p>
        </article>
      </main>
    `
  },
  {
    path: "/projects/custom-crm-system",
    title: "Custom CRM & Operations System Case Study | Saikat Patra",
    description: "Bespoke operations CRM consolidating client communications, project sprints, staff time tracking, and automated invoice dispatch.",
    h1: "Custom CRM System - Business Automation Case Study",
    bodyContent: `
      <main>
        <article>
          <h1>Custom CRM System - Business Automation Case Study</h1>
          <p>Client: Apex Enterprise Services | Technologies: Laravel, Livewire, MySQL, Tailwind CSS</p>
          <p>Challenge: Managing operations across disconnected spreadsheets led to lost follow-ups and unbilled client hours.</p>
          <p>Solution: Custom operations platform with Kanban pipeline tracking, automated invoicing, and role-based permissions.</p>
          <p>Results: 50% reduction in weekly admin time, $40,000+ recovered in unbilled hours, and 3 paid SaaS subscriptions replaced.</p>
        </article>
      </main>
    `
  },
  {
    path: "/projects/real-estate-listing-platform",
    title: "Real Estate Listing Platform Case Study | Saikat Patra",
    description: "Property directory portal featuring instant spatial multi-filter search, user bookmarks, and automated agent lead assignment.",
    h1: "Real Estate Listing Platform Case Study",
    bodyContent: `
      <main>
        <article>
          <h1>Real Estate Listing Platform Case Study</h1>
          <p>Client: Prime Realty Group | Technologies: React, Laravel, MySQL, REST APIs</p>
          <p>Challenge: Slow database queries and poor mobile responsiveness caused high buyer drop-off rates.</p>
          <p>Solution: React frontend backed by indexed MySQL queries, interactive maps, and automated lead dispatch.</p>
          <p>Results: 70% faster search response times and 180% growth in mobile buyer engagement.</p>
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
