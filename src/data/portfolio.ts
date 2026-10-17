export type Project = {
  id: string;
  title: string;
  category: string;
  role: string;
  requiresLogin: boolean;
  description: string;
  preview: "storefront" | "console" | "platform" | "crm" | "ai";
  status: "verified" | "in-progress" | "concept";
  technologies: string[];
  screenshot: { src: string; alt: string; width: number; height: number } | null;
  url: string | null;
  githubUrl: string | null;
  details: string | null;
  featured: boolean;
};
export interface Experience {
  role: string;
  company: string;
  startDate: string;
  endDate: string | null;
  employmentType: string | null;
  location: string | null;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}
export interface PortfolioData {
  name: string;
  initials: string;
  role: string;
  experience: string;
  headline: string;
  introduction: string;
  about: string;
  resumeUrl: string | null;
  email: string | null;
  linkedin: string | null;
  github: string | null;
  phone: string | null;
  location: string;
  relocation: string;
  education: { degree: string; institution: string; location: string; period: string }[];
  navigation: string[];
  skills: { name: string; subtitle: string; items: string[] }[];
  projects: Project[];
  draftProjects: Project[];
  experienceEntries: Experience[];
  seo: { title: string; description: string };
  copy: {
    skillsDescription: string;
    projectsDescription: string;
    aboutLead: string;
    aboutClosing: string;
    heroTagline: string;
    experienceDescription: string;
    contactIntroduction: string;
  };
}
export const portfolio: PortfolioData = {
  name: "Naresh Kumar G",
  initials: "NG",
  role: "Full Stack Developer",
  experience: "3+",
  headline: "Full Stack Developer building scalable web applications",
  introduction:
    "I’m Naresh Kumar G, a Full Stack Developer with 3+ years of experience shipping production React and Node.js features. I build SaaS applications, microservices, and AI-powered product experiences end to end.",
  about:
    "Previously at Webnexs, I built and maintained large Next.js applications backed by Express microservices, owning both the interfaces and their REST APIs. My work spanned multi-tenant ecommerce, CRM and deployment automation, payment integrations, and internal developer platforms.",
  resumeUrl: "https://pub-cd02c25bf25a476d9698eae9ef7d371e.r2.dev/NareshKumar_G_Resume.pdf",
  email: "nareshkumarg984@gmail.com",
  linkedin: "https://www.linkedin.com/in/nareshkumar48",
  github: null,
  phone: "+91 80569 72467",
  location: "Arakkonam, Tamil Nadu, India",
  relocation: "Open to relocation: anywhere",
  education: [
    {
      degree: "M.Sc. Computer Science",
      institution: "St. Peter’s Institute of Higher Education and Research",
      location: "Chennai",
      period: "2021 – 2023",
    },
    {
      degree: "Bachelor of Computer Applications (B.C.A.)",
      institution: "St. Peter’s Institute of Higher Education and Research",
      location: "Chennai",
      period: "2018 – 2021",
    },
  ],
  navigation: ["About", "Skills", "Projects", "Experience", "Contact"],
  skills: [
    {
      name: "Frontend",
      subtitle: "Interfaces & application state",
      items: [
        "React 18 & 19",
        "Next.js App Router · SSR / ISR",
        "JavaScript (ES6+)",
        "TypeScript",
        "React Hooks",
        "Redux Toolkit",
        "Zustand",
        "TanStack Query",
        "Tailwind CSS",
        "HTML5 & CSS3",
        "Recharts",
        "Responsive UI",
        "Reusable component libraries",
      ],
    },
    {
      name: "Backend",
      subtitle: "Services, security & contracts",
      items: [
        "Node.js",
        "Express.js",
        "REST API design",
        "Microservices",
        "Asynchronous programming",
        "JWT / RS256 SSO",
        "RBAC · CASL",
        "Zod validation",
        "Webhooks",
        "Cron & background jobs",
        "NATS messaging",
        "Unit & integration tests",
      ],
    },
    {
      name: "Databases",
      subtitle: "Multi-tenant persistence",
      items: [
        "PostgreSQL",
        "MySQL",
        "Prisma",
        "Sequelize",
        "Schema migrations",
        "Multi-tenant data modeling",
        "Indexing & query optimization",
      ],
    },
    {
      name: "APIs & Integrations",
      subtitle: "Commerce, automation & AI",
      items: [
        "Generative AI · Groq / Llama 3.1",
        "Agentic tool calling",
        "Model Context Protocol (MCP)",
        "Prompt design & usage metering",
        "Stripe · PayPal · Razorpay",
        "Cashfree · PayU · Adyen",
        "Paystack · Checkout.com",
        "PayHere · Pesapal",
        "Zapier · HubSpot · Zoho CRM",
        "SendGrid · Postmark",
        "Dropbox Sign · Basecamp",
        "Shiprocket",
        "Google Ads · Meta · Trustpilot",
        "WordPress · Shopify · Webflow",
        "Cloudflare R2 · AWS S3 SDK",
      ],
    },
    {
      name: "Tools & Platforms",
      subtitle: "Delivery & infrastructure",
      items: [
        "Git · Bitbucket",
        "Jenkins",
        "Docker · Kubernetes",
        "Turborepo · pnpm",
        "Postman",
        "ESLint · Prettier",
        "Linux administration",
        "Nginx · Apache",
        "cPanel · CWP",
        "Cloudflare DNS & custom domains",
        "Claude Code",
        "Debugging & performance profiling",
      ],
    },
  ],
  projects: [
    {
      id: "01",
      title: "Wcart Admin Console",
      role: "Full-stack product developer",
      requiresLogin: true,
      category: "Multi-tenant ecommerce",
      preview: "console",
      description:
        "A Next.js admin console spanning 300+ screens for catalog, orders, payments, customers, and page building.",
      technologies: ["Next.js 14", "React 18", "Redux Toolkit", "Tailwind CSS", "Recharts"],
      details:
        "Built and maintained the admin application, including drag-and-drop page, header, and footer builders and 40+ analytics reports. Shared components, hooks, and utilities support consistent delivery across screens and paid plugins.",
      status: "verified",
      screenshot: null,
      url: null,
      githubUrl: null,
      featured: true,
    },
    {
      id: "02",
      title: "Wcart Storefront",
      role: "Full-stack product developer",
      requiresLogin: false,
      category: "Customer-facing commerce",
      preview: "storefront",
      description:
        "A server-rendered ecommerce storefront with live updates, video commerce, and 3D/AR product viewing.",
      technologies: ["Next.js", "React", "Socket.IO", "HLS"],
      details:
        "Shipped the customer-facing storefront with server rendering for SEO. Used route-level code splitting, image optimization, and render profiling to manage first-load payloads.",
      status: "verified",
      screenshot: null,
      url: null,
      githubUrl: null,
      featured: false,
    },
    {
      id: "03",
      title: "Wcart Commerce Services",
      role: "Core backend developer",
      requiresLogin: true,
      category: "Microservices, payments & AI",
      preview: "platform",
      description:
        "Backend development across 30+ Express microservices, 10 payment gateways, 15+ paid plugins, and Wcart’s Cartana AI assistant with MCP access.",
      technologies: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "RS256 JWT",
        "RBAC",
        "Groq",
        "Llama 3.1",
        "MCP",
        "AES-256-GCM",
      ],
      details:
        "Worked across catalog, cart, orders, payments, shipping, subscriptions, CMS, media, and notifications. Implemented tenant-scoped reads, request contracts and validation, JWKS key rotation, and a shared payment-provider interface. Plugins include abandoned-cart recovery, multi-currency, multi-language, rewards, and product recommendations. Built Cartana as Wcart’s in-product AI assistant, summarizing live store data through platform APIs using the caller’s bearer token. Added encrypted per-tenant key management, provider validation, default-key fallback, an AI credit ledger, and a Streamable HTTP MCP server with scoped API-token authentication and a shared capability registry.",
      status: "verified",
      screenshot: null,
      url: null,
      githubUrl: null,
      featured: false,
    },
    {
      id: "04",
      title: "Webnexs Baseapp",
      role: "Primary developer",
      requiresLogin: true,
      category: "CRM & deployment automation",
      preview: "crm",
      description:
        "An internal platform connecting leads, clients, subscriptions, payments, and deployments across Webnexs products.",
      technologies: ["Node.js", "Express.js", "Next.js", "React", "MySQL", "PostgreSQL"],
      details:
        "Primary developer of the original Node, Express, and MySQL application and its rebuild onto PostgreSQL microservices with a Next.js admin. Automated payment capture, provisioning, DNS, plan entitlements, and notifications. Connected Wcart and Flicknexs through payment APIs and webhooks.",
      status: "verified",
      screenshot: null,
      url: null,
      githubUrl: null,
      featured: true,
    },
    {
      id: "05",
      title: "Internal DevOps & Work Management",
      role: "Full-stack developer",
      requiresLogin: true,
      category: "Developer platform",
      preview: "console",
      description:
        "A cloud-native internal platform of 16 TypeScript services for work tracking, OKRs, meetings, reporting, and deployments.",
      technologies: [
        "TypeScript",
        "Next.js",
        "React",
        "Express.js",
        "Prisma",
        "PostgreSQL",
        "NATS",
        "Docker",
        "TanStack Query",
        "CASL",
      ],
      details:
        "Built a PWA front end with cache invalidation and optimistic updates, a gateway with JWT verification and Zod validation, shared authorization definitions, logging, health checks, and lifecycle handling. Integrated Bitbucket and server connections, and built ticketing used across Webnexs products.",
      status: "verified",
      screenshot: null,
      url: null,
      githubUrl: null,
      featured: false,
    },
    {
      id: "06",
      title: "Whisky Cask Client Platform",
      role: "Sole developer and direct client contact",
      requiresLogin: true,
      category: "Investment & retail operations",
      preview: "crm",
      description:
        "A shared platform for Braeburn Whisky, Cask88, and Dekanta with staff administration and investor dashboards.",
      technologies: [
        "Express.js",
        "MySQL",
        "Handlebars",
        "Stripe",
        "Dropbox Sign",
        "HubSpot",
        "Zapier",
      ],
      details:
        "Sole developer and direct client contact for three brands sharing one codebase. Implemented cask ownership workflows, multi-currency valuation, PDF and XLSX documents, payments, and agreement and enquiry filing through Dropbox Sign, HubSpot, Zapier, and IMAP email integrations.",
      status: "verified",
      screenshot: null,
      url: null,
      githubUrl: null,
      featured: false,
    },
    {
      id: "07",
      title: "Starlight Shop",
      role: "Personal project",
      requiresLogin: false,
      category: "Personal project · in progress",
      preview: "storefront",
      description:
        "A full-stack ecommerce storefront and admin console being built as a typed Turborepo monorepo.",
      technologies: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Zustand",
        "Zod",
        "Turborepo",
      ],
      details:
        "In progress. Uses shared UI and Zod contract packages, App Router routes and REST handlers for products, categories, orders, authentication, and payment webhooks. Includes JWT access/refresh authentication with bcrypt and S3-compatible media storage.",
      status: "in-progress",
      screenshot: null,
      url: null,
      githubUrl: null,
      featured: false,
    },
  ],
  draftProjects: [],
  experienceEntries: [
    {
      role: "Product Developer – Full Stack (React / Node.js)",
      company: "Webnexs",
      startDate: "2024-01",
      endDate: "2026-09",
      employmentType: null,
      location: "Chennai, India",
      description:
        "End-to-end product development across ecommerce SaaS, AI features, CRM automation, client platforms, and internal developer tools.",
      responsibilities: [
        "Built and maintained Wcart’s Next.js admin console and customer-facing storefront, with reusable components, shared utilities, and performance profiling.",
        "Developed tenant-scoped Express services with REST contracts, validation, RS256 JWT single sign-on, JWKS rotation, and server-side role-based access control.",
        "Built Cartana’s tool-calling AI assistant, encrypted tenant-key management, usage ledger, and scoped MCP server.",
        "Developed Baseapp’s CRM, payment, provisioning, DNS, and deployment automation across Wcart and Flicknexs.",
        "Collaborated with designers and QA, wrote unit and integration tests, reviewed code, and troubleshot cross-service production defects.",
        "Managed cPanel and CWP deployments and contributed to the move toward containerized, Kubernetes-orchestrated infrastructure.",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MySQL",
        "Docker",
        "Kubernetes",
      ],
      achievements: [
        "Built and maintained 10 payment gateway integrations behind one provider interface.",
        "Developed 15+ commerce plugins offered as paid add-ons.",
        "Built an internal platform of 16 TypeScript services.",
        "Automated Baseapp’s customer journey from lead submission through deployment handover.",
      ],
    },
    {
      role: "Node.js Developer Intern",
      company: "Webnexs",
      startDate: "2023-06",
      endDate: "2023-12",
      employmentType: "Internship",
      location: "Chennai, India",
      description:
        "Node.js development internship preceding the full-stack product developer role.",
      responsibilities: [],
      technologies: ["Node.js"],
      achievements: [],
    },
  ],
  seo: {
    title: "Naresh Kumar G — Full Stack Developer",
    description:
      "Full Stack Developer with 3+ years building React and Next.js applications, Node.js microservices, ecommerce platforms, and AI integrations at Webnexs.",
  },
  copy: {
    skillsDescription:
      "Technologies used across production SaaS products, client platforms, and personal projects.",
    projectsDescription:
      "Case studies of my contributions to professional products, plus an ongoing personal project. Some applications require sign-in; explore the work here without needing product access. Visuals are illustrations.",
    aboutLead: "I build products from interface to infrastructure.",
    aboutClosing:
      "I also build agentic AI features and MCP integrations, with tenant-aware authorization, encrypted credentials, and usage controls.",
    heroTagline: "REACT. NODE.JS. SAAS. APPLIED AI.",
    experienceDescription:
      "June 2023 to September 2026 at Webnexs, progressing from a Node.js internship to full-stack product development across SaaS products and internal platforms.",
    contactIntroduction:
      "Have a product to build or a full-stack opportunity to discuss? Get in touch by email, phone, or LinkedIn.",
  },
};
