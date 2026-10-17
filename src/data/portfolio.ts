export interface CaseStudy {
  context: string;
  ownership: string[];
  decisions: { title: string; explanation: string }[];
  reliability: string[];
  outcomes: string[];
  architecture: {
    title: string;
    layers: { title: string; description: string }[];
    note: string;
  } | null;
}
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
  caseStudy: CaseStudy;
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
  sourceUrl: string | null;
  phone: string | null;
  location: string;
  relocation: string;
  education: { degree: string; institution: string; location: string; period: string }[];
  navigation: string[];
  highlights: { value: string; label: string; detail: string; projectId: string }[];
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
    "I build React and Next.js products backed by Node.js services. Over 3+ years at Webnexs, I worked across multi-tenant SaaS, payment integrations, deployment automation, and AI assistants, owning features from interface to API.",
  about:
    "Previously at Webnexs, I built and maintained large Next.js applications backed by Express microservices, owning both the interfaces and their REST APIs. My work spanned multi-tenant ecommerce, CRM and deployment automation, payment integrations, and internal developer platforms.",
  resumeUrl: "https://pub-cd02c25bf25a476d9698eae9ef7d371e.r2.dev/NareshKumar_G_Resume.pdf",
  email: "nareshkumarg984@gmail.com",
  linkedin: "https://www.linkedin.com/in/nareshkumar48",
  github: "https://github.com/Naresh-Dfe",
  sourceUrl: "https://github.com/Naresh-Dfe/portfolio",
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
      title: "Wcart Commerce Platform",
      role: "Full-stack product developer and core backend contributor",
      requiresLogin: true,
      category: "Flagship case study · Multi-tenant SaaS",
      preview: "platform",
      description:
        "One commerce platform: a 300+ screen admin, customer storefront, 30+ Express services, payments, paid plugins, and the Cartana AI assistant.",
      technologies: [
        "Next.js 14",
        "React 18",
        "Redux Toolkit",
        "Tailwind CSS",
        "Recharts",
        "Next.js",
        "React",
        "Socket.IO",
        "HLS",
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
        "Built and maintained the admin application, including drag-and-drop page, header, and footer builders and 40+ analytics reports. Shared components, hooks, and utilities support consistent delivery across screens and paid plugins. Shipped the customer-facing storefront with server rendering for SEO. Used route-level code splitting, image optimization, and render profiling to manage first-load payloads. Worked across catalog, cart, orders, payments, shipping, subscriptions, CMS, media, and notifications. Implemented tenant-scoped reads, request contracts and validation, JWKS key rotation, and a shared payment-provider interface. Plugins include abandoned-cart recovery, multi-currency, multi-language, rewards, and product recommendations. Built Cartana as Wcart’s in-product AI assistant, summarizing live store data through platform APIs using the caller’s bearer token. Added encrypted per-tenant key management, provider validation, default-key fallback, an AI credit ledger, and a Streamable HTTP MCP server with scoped API-token authentication and a shared capability registry.",
      status: "verified",
      screenshot: null,
      url: null,
      githubUrl: null,
      featured: true,
      caseStudy: {
        context:
          "A multi-tenant ecommerce SaaS needed merchant administration, customer storefronts, commerce services, payments, and subscription-based plugins to work together.",
        ownership: [
          "Built and maintained admin workflows across catalog, orders, payments, customers, page building, and analytics.",
          "Shipped storefront features including live updates, HLS video commerce, and 3D/AR product viewing.",
          "Contributed core backend work across commerce services and implemented payment integrations and paid plugins.",
          "Built Cartana and its tenant-key management, usage ledger, and MCP capabilities.",
        ],
        decisions: [
          {
            title: "Shared payment-provider interface",
            explanation:
              "Integrated ten gateways behind one interface so another gateway could be added without changing checkout or order code.",
          },
          {
            title: "Reusable UI and shared state",
            explanation:
              "Used shared components, hooks, Tailwind tokens, and Redux Toolkit to assemble admin and plugin screens consistently.",
          },
          {
            title: "Server rendering and focused loading",
            explanation:
              "Used Next.js server rendering for storefront SEO, with route-level code splitting, image optimization, and render profiling to manage first-load payloads.",
          },
          {
            title: "AI through existing platform permissions",
            explanation:
              "Cartana called store APIs using the caller’s bearer token, keeping tenant scope and role checks in the same downstream services used by the admin.",
          },
        ],
        reliability: [
          "Tenant-scoped reads, request validation, explicit API contracts, and consistent error handling across services.",
          "RS256 JWT single sign-on, JWKS key rotation, and server-side role-based authorization.",
          "AES-256-GCM encryption for tenant LLM keys, provider validation, a fallback key, and usage accounting.",
          "Unit and integration tests, query/index optimization, and production troubleshooting, including currency and configuration-write defects.",
        ],
        outcomes: [
          "Admin capabilities spanning 300+ screens and 40+ analytics reports.",
          "Ten payment integrations and 15+ paid commerce plugins.",
          "An in-product AI assistant and a scoped Streamable HTTP MCP server.",
        ],
        architecture: {
          title: "Wcart: simplified capability map",
          layers: [
            {
              title: "Merchant admin + customer storefront",
              description: "Next.js / React interfaces; catalog, checkout, operations, analytics.",
            },
            {
              title: "Authenticated commerce APIs",
              description:
                "Express services; tenant scope, request validation, RS256 JWT and RBAC.",
            },
            {
              title: "Data + connected capabilities",
              description:
                "Service-owned databases; payment providers, notifications, and commerce plugins.",
            },
            {
              title: "Cartana + external AI clients",
              description:
                "Tool calls reach platform APIs with scoped credentials; encrypted keys and usage ledger.",
            },
          ],
          note: "Simplified illustration based on documented contributions. Groups show capabilities, not an exact network topology or private infrastructure.",
        },
      },
    },
    {
      id: "02",
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
      caseStudy: {
        context:
          "An internal platform coordinated leads, clients, subscriptions, payments, and deployments across Webnexs products.",
        ownership: [
          "Built the original Node.js, Express, and MySQL application as the primary developer.",
          "Drove its rebuild onto PostgreSQL microservices with a Next.js admin.",
          "Connected Wcart and Flicknexs billing and deployment workflows.",
        ],
        decisions: [
          {
            title: "Configuration-driven entitlements",
            explanation:
              "Read plan entitlements from configuration so new offers could be introduced without code changes.",
          },
          {
            title: "Automated customer handover",
            explanation:
              "Connected payment capture, provisioning, DNS, and notifications into an end-to-end customer journey.",
          },
        ],
        reliability: [
          "Used payment APIs and webhooks to coordinate subscription initialization, upgrades, and deployment lifecycle across products.",
        ],
        outcomes: [
          "Automated the path from lead submission to live deployment handover, removing the engineer previously needed for every signup.",
          "Coordinated cross-product subscriptions and billing from one system.",
        ],
        architecture: null,
      },
    },
    {
      id: "03",
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
      caseStudy: {
        context:
          "Internal work tracking, reporting, server connections, and deployments needed a connected platform.",
        ownership: [
          "Built 16 TypeScript services and a Next.js / React PWA.",
          "Implemented gateway request validation, shared authorization, and common service utilities.",
          "Integrated Bitbucket, server connections, deployments, and an in-house ticketing system.",
        ],
        decisions: [
          {
            title: "Shared service foundations",
            explanation:
              "Standardized logging, health checks, and lifecycle handling in shared workspace packages.",
          },
          {
            title: "Responsive server state",
            explanation:
              "Used TanStack Query cache invalidation and optimistic updates in the PWA.",
          },
        ],
        reliability: [
          "Gateway JWT verification and Zod request validation.",
          "CASL ability definitions shared across services to keep authorization consistent.",
        ],
        outcomes: [
          "Delivered a 16-service platform covering work tracking, OKRs, meetings, reporting, and deployment workflows.",
          "Built ticketing used across Webnexs products.",
        ],
        architecture: null,
      },
    },
    {
      id: "04",
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
      caseStudy: {
        context:
          "A client operated Braeburn Whisky, Cask88, and Dekanta with staff and investor workflows across the cask ownership lifecycle.",
        ownership: [
          "Served as sole developer and direct client contact.",
          "Built staff administration and investor dashboards across three brands.",
          "Implemented payments, multi-currency valuation, document generation, and external integrations.",
        ],
        decisions: [
          {
            title: "One codebase across three brands",
            explanation:
              "Used a shared Express, MySQL, and Handlebars application for the brand-specific administration and investor experiences.",
          },
          {
            title: "Connected documents and enquiries",
            explanation:
              "Integrated Dropbox Sign, HubSpot, Zapier, and IMAP email so agreements and enquiries were filed against the right lead automatically.",
          },
        ],
        reliability: [
          "Kept staff and investor workflows organized around the cask ownership lifecycle; implemented Stripe payments and generated PDF/XLSX documents.",
        ],
        outcomes: [
          "Delivered the shared application for three brands with administration and investor dashboards.",
          "Automated agreement and enquiry filing through the connected systems.",
        ],
        architecture: null,
      },
    },
    {
      id: "05",
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
      caseStudy: {
        context:
          "An ongoing personal ecommerce project with a storefront, admin console, and typed API contracts.",
        ownership: [
          "Building the Next.js 15 / React 19 application in a Turborepo monorepo.",
          "Developing product, category, order, authentication, and payment-webhook routes.",
        ],
        decisions: [
          {
            title: "Shared client/server contracts",
            explanation:
              "Uses a shared Zod contract package so request and response shapes stay aligned across the client and server.",
          },
          {
            title: "Shared UI package",
            explanation:
              "Organizes reusable interface components alongside the storefront and admin in the monorepo.",
          },
        ],
        reliability: [
          "JWT access/refresh authentication with bcrypt; Prisma/PostgreSQL persistence and S3-compatible media storage.",
        ],
        outcomes: ["In progress. No public demo or completed-release outcome is claimed."],
        architecture: null,
      },
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
      "Four professional case studies and one ongoing personal project. Explore my ownership, engineering decisions, and delivered capabilities without needing access to the applications.",
    aboutLead: "I build products from interface to infrastructure.",
    aboutClosing:
      "I also build agentic AI features and MCP integrations, with tenant-aware authorization, encrypted credentials, and usage controls.",
    heroTagline: "REACT. NODE.JS. SAAS. APPLIED AI.",
    experienceDescription:
      "June 2023 to September 2026 at Webnexs, progressing from a Node.js internship to full-stack product development across SaaS products and internal platforms.",
    contactIntroduction:
      "Have a product to build or a full-stack opportunity to discuss? Get in touch by email, phone, or LinkedIn.",
  },
  highlights: [
    {
      value: "300+",
      label: "Admin screens",
      detail: "Built and maintained Wcart admin workflows and shared UI.",
      projectId: "01",
    },
    {
      value: "10",
      label: "Payment integrations",
      detail: "Maintained gateways behind a shared provider interface.",
      projectId: "01",
    },
    {
      value: "30+",
      label: "Commerce services",
      detail: "Core backend contributions across the Wcart platform.",
      projectId: "01",
    },
    {
      value: "16",
      label: "Internal services",
      detail: "Built a TypeScript platform for work and deployments.",
      projectId: "03",
    },
  ],
};
