import { useState, useEffect, useRef } from "react";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Database,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Server,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { portfolio, type Project } from "@/data/portfolio";
import { CaseStudyContent } from "./case-study-content";
import { ProjectImage } from "./project-image";
import { safeExternalUrl } from "@/lib/site";
import sculpture from "@/assets/developer-sculpture.jpg";

const displayMonth = (value: string) =>
  new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${value}-01T00:00:00Z`),
  );

const skillIcons = [Code2, Server, Database, Braces, Terminal];
function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> / {label}
        </p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-90px 0px -35% 0px", threshold: [0, 0.2, 0.5] },
    );
    portfolio.navigation.forEach((item) => {
      const element = document.getElementById(item.toLowerCase());
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width: 801px)");
    const resize = () => {
      if (media.matches) setMenuOpen(false);
    };
    document.addEventListener("keydown", close);
    media.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      media.removeEventListener("change", resize);
    };
  }, [menuOpen]);
  const [notice, setNotice] = useState<{ title: string; description: string } | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const missing = (title: string, description: string) => setNotice({ title, description });
  const openContact = (kind: "email" | "linkedin" | "github" | "phone") => {
    const value = portfolio[kind];
    if (!value) {
      missing(
        `${kind === "email" ? "Email" : kind === "linkedin" ? "LinkedIn" : kind === "phone" ? "Phone" : "GitHub"} coming soon`,
        "The verified contact link has not been added yet. Please check back soon.",
      );
      return;
    }
    if (kind === "email") window.location.href = `mailto:${encodeURIComponent(value)}`;
    else if (kind === "phone") window.location.href = `tel:${value.replace(/[^+0-9]/g, "")}`;
    else {
      const url = safeExternalUrl(value);
      if (url) window.open(url, "_blank", "noopener,noreferrer");
      else missing("Contact link unavailable", "A valid HTTPS destination must be supplied.");
    }
  };
  const downloadResume = async () => {
    if (!portfolio.resumeUrl) {
      missing(
        "Resume coming soon",
        "The resume file has not been added yet. A download will be available here once the resume is ready.",
      );
      return;
    }
    try {
      if (!portfolio.resumeUrl.startsWith("/") || portfolio.resumeUrl.startsWith("//"))
        throw new Error("Invalid resume path");
      const response = await fetch(portfolio.resumeUrl);
      if (!response.ok || !(await response.text()).startsWith("%PDF-"))
        throw new Error("Missing PDF");
    } catch {
      missing(
        "Resume unavailable",
        "The configured resume PDF could not be found. Please check back soon.",
      );
      return;
    }
    const link = document.createElement("a");
    link.href = portfolio.resumeUrl;
    link.download = `${portfolio.name.replaceAll(" ", "-")}-Resume.pdf`;
    link.click();
  };
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="site-container navbar">
          <a className="brand" href="#top" aria-label={`${portfolio.name} home`}>
            <span className="brand-mark">
              {portfolio.name[0]?.toLowerCase()}
              <span>.</span>
            </span>
            <span>
              {portfolio.name.split(" ")[0]}
              <span className="brand-dot">.</span>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {portfolio.navigation.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                aria-current={activeSection === item.toLowerCase() ? "location" : undefined}
              >
                {item}
              </a>
            ))}
          </nav>
          <Button variant="outline" className="nav-contact" asChild>
            <a href="#contact">
              Let’s talk <ArrowUpRight />
            </a>
          </Button>
          <Button
            ref={menuButton}
            className="menu-toggle"
            variant="ghost"
            size="icon"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
            {portfolio.navigation.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                aria-current={activeSection === item.toLowerCase() ? "location" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item}
                <ArrowUpRight size={15} />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="main" tabIndex={-1}>
        <section id="top" className="hero">
          <img
            className="hero-art"
            src={sculpture}
            alt=""
            width={1536}
            height={1024}
            fetchPriority="high"
          />
          <div className="hero-shade" />
          <div className="site-container hero-content">
            <p className="hero-intro">
              <span className="status-dot" /> HELLO, I’M {portfolio.name.toUpperCase()}
            </p>
            <h1>
              {portfolio.headline.split(" building ")[0]}
              <br />
              building <span>{portfolio.headline.split(" building ")[1]}</span>
            </h1>
            <p className="hero-description">{portfolio.introduction}</p>
            <div className="hero-actions">
              <Button size="lg" asChild>
                <a href="#projects">
                  View Projects <ArrowUpRight />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  Contact Me <ArrowRight />
                </a>
              </Button>
            </div>
            {safeExternalUrl(portfolio.resumeUrl) ? (
              <Button variant="link" className="resume-button" asChild>
                <a
                  href={safeExternalUrl(portfolio.resumeUrl)!}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Resume PDF (opens in a new tab)"
                >
                  <ArrowDownToLine /> Download Resume <span>PDF</span>
                </a>
              </Button>
            ) : (
              <Button variant="link" className="resume-button" onClick={downloadResume}>
                <ArrowDownToLine /> Download Resume <span>PDF</span>
              </Button>
            )}
            {safeExternalUrl(portfolio.sourceUrl) && (
              <Button variant="link" className="resume-button source-link" asChild>
                <a
                  href={safeExternalUrl(portfolio.sourceUrl)!}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github /> View source &amp; tests <ArrowUpRight />
                </a>
              </Button>
            )}
            <div className="hero-bottom">
              <a href="#about" className="scroll-link">
                <span>
                  <ArrowDown size={15} />
                </span>{" "}
                SCROLL TO EXPLORE
              </a>
              <span className="hero-coordinate">{portfolio.copy.heroTagline}</span>
            </div>
          </div>
        </section>
        <section className="contribution-section" aria-labelledby="contributions-title">
          <div className="site-container">
            <p className="eyebrow">SELECTED CONTRIBUTIONS</p>
            <h2 id="contributions-title">Production work, at a glance.</h2>
            <div className="contribution-grid">
              {portfolio.highlights.map((item) => (
                <button
                  key={item.label}
                  className="contribution-card"
                  onClick={() =>
                    setSelectedProject(
                      portfolio.projects.find((project) => project.id === item.projectId) ?? null,
                    )
                  }
                  aria-label={`Explore my contributions: ${item.label}`}
                >
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                  <p>{item.detail}</p>
                  <small>
                    Explore the case study <ArrowUpRight size={14} />
                  </small>
                </button>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="section about-section">
          <div className="site-container">
            <SectionHeading number="01" label="A LITTLE ABOUT ME" title="Built with purpose." />
            <div className="about-grid">
              <div className="about-copy">
                <p>{portfolio.copy.aboutLead}</p>
                <p>{portfolio.about}</p>
                <p>{portfolio.copy.aboutClosing}</p>
                <a className="text-link" href="#contact">
                  Let’s build something together <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="about-facts">
                <div className="profile-location">
                  <strong>{portfolio.location}</strong>
                  <p>{portfolio.relocation}</p>
                </div>
                <div className="experience-stat">
                  <strong>
                    {portfolio.experience}
                    <span>years</span>
                  </strong>
                  <p>Full-stack development experience</p>
                </div>
                <div className="approach-fact">
                  <Layers3 />
                  <div>
                    <strong>End-to-end thinking</strong>
                    <p>From interface to application.</p>
                  </div>
                </div>
                <div className="approach-fact">
                  <Sparkles />
                  <div>
                    <strong>Details make the difference</strong>
                    <p>Clarity. Craft. Consideration.</p>
                  </div>
                </div>
              </div>
            </div>
            {portfolio.education.length > 0 && (
              <div className="education-section">
                <h3>Education</h3>
                <div className="education-grid">
                  {portfolio.education.map((entry) => (
                    <article key={entry.degree}>
                      <p className="eyebrow">{entry.period}</p>
                      <h4>{entry.degree}</h4>
                      <p>{entry.institution}</p>
                      <p>{entry.location}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
        <section id="skills" className="section skills-section">
          <div className="site-container">
            <SectionHeading
              number="02"
              label="THE TOOLKIT"
              title="A full-stack perspective."
              description={portfolio.copy.skillsDescription}
            />
            <div className="skills-grid">
              {portfolio.skills.map((skill, i) => {
                const Icon = skillIcons[i] ?? Code2;
                return (
                  <article className="skill-group" key={skill.name}>
                    <Icon className="skill-icon" size={23} />
                    <h3>{skill.name}</h3>
                    <p>{skill.subtitle}</p>
                    <div className="skill-items">
                      {skill.items.length ? (
                        skill.items.map((item) => <span key={item}>{item}</span>)
                      ) : (
                        <span className="pending-skill">
                          To be confirmed <span>↗</span>
                        </span>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section id="projects" className="section projects-section">
          <div className="site-container">
            <SectionHeading
              number="03"
              label="PROJECT SPOTLIGHT"
              title="Ideas into implementation."
              description={portfolio.copy.projectsDescription}
            />
            <div className="projects-grid">
              {[...portfolio.projects, ...portfolio.draftProjects].map((project) => (
                <article
                  className={`project-card${project.featured ? " featured-project" : ""}`}
                  key={project.id}
                >
                  <Button
                    variant="ghost"
                    className="project-image-button"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`View ${project.title} details`}
                  >
                    <ProjectImage project={project} />
                  </Button>
                  <div className="project-info">
                    <div className="project-category">
                      <span>{project.category}</span>
                      <span>{project.id} /</span>
                    </div>
                    <h3>
                      <Button variant="link" onClick={() => setSelectedProject(project)}>
                        {project.title}
                        <ArrowUpRight size={19} />
                      </Button>
                    </h3>
                    <p>{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                    <div className="project-meta">
                      <span className="placeholder-dot" />{" "}
                      {project.status === "concept"
                        ? "Concept / Details Pending"
                        : project.status === "in-progress"
                          ? "In progress · Personal project"
                          : "Professional case study"}
                      <Button
                        variant="ghost"
                        aria-label={`View ${project.title} case study`}
                        onClick={() => setSelectedProject(project)}
                      >
                        View case study <ArrowUpRight />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
              <div className="next-project">
                <div className="next-icon">
                  <Code2 size={28} />
                </div>
                <p>THE NEXT CHAPTER</p>
                <h3>
                  Something worth
                  <br />
                  building together.
                </h3>
                <Button variant="outline" asChild>
                  <a href="#contact">
                    Let’s connect <ArrowUpRight />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="section experience-section">
          <div className="site-container">
            <SectionHeading
              number="04"
              label="THE JOURNEY"
              title="Experience that builds."
              description={portfolio.copy.experienceDescription}
            />
            <div className="experience-layout">
              <div className="experience-summary">
                <span className="large-number">{portfolio.experience}</span>
                <p>
                  Years of building
                  <br />
                  for the web.
                </p>
              </div>
              <div className="timeline">
                {portfolio.experienceEntries.length === 0 && (
                  <article className="timeline-entry">
                    <span className="timeline-dot" />
                    <h3>Work history details pending</h3>
                    <p>
                      Company names, dates, responsibilities, and verified achievements have not
                      been supplied.
                    </p>
                  </article>
                )}
                {portfolio.experienceEntries.map((entry) => (
                  <article className="timeline-entry" key={`${entry.company}-${entry.startDate}`}>
                    <span className="timeline-dot" />
                    <div className="timeline-top">
                      <span>{entry.employmentType ?? "PROFESSIONAL EXPERIENCE"}</span>
                      <span>
                        {displayMonth(entry.startDate)} –{" "}
                        {entry.endDate ? displayMonth(entry.endDate) : "Present"}
                      </span>
                    </div>
                    <h3>{entry.role}</h3>
                    <p className="company-name">{entry.company}</p>
                    <p>{entry.description}</p>
                    <p>{entry.location}</p>
                    {entry.responsibilities.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                    <p>{entry.technologies.join(" · ")}</p>
                    {entry.achievements.map((item) => (
                      <p key={item}>
                        <Check size={14} />
                        {item}
                      </p>
                    ))}
                    <span className="verification-note">
                      Experience and contributions documented in my resume.
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="section contact-section">
          <div className="site-container">
            <p className="eyebrow">
              <span>05</span> / WHAT’S NEXT?
            </p>
            <div className="contact-layout">
              <div>
                <h2>
                  Good work starts
                  <br />
                  with a <span>conversation.</span>
                </h2>
                <p>{portfolio.copy.contactIntroduction}</p>
                <Button size="lg" onClick={() => openContact("email")}>
                  Let’s talk <ArrowUpRight />
                </Button>
                <span className="contact-pending">
                  {portfolio.email ?? "Email address coming soon"}
                </span>
              </div>
              <div className="contact-links">
                {[
                  { name: "Email", kind: "email" as const, icon: Mail, caption: "Get in touch" },
                  {
                    name: "Phone",
                    kind: "phone" as const,
                    icon: Phone,
                    caption: portfolio.phone ?? "Phone pending",
                  },
                  {
                    name: "LinkedIn",
                    kind: "linkedin" as const,
                    icon: Linkedin,
                    caption: "Connect professionally",
                  },
                  {
                    name: "GitHub",
                    kind: "github" as const,
                    icon: Github,
                    caption: "Explore the code",
                  },
                ].map((item) => (
                  <Button key={item.kind} variant="ghost" onClick={() => openContact(item.kind)}>
                    <item.icon size={20} />
                    <span>
                      <strong>{item.name}</strong>
                      <small>
                        {item.caption}
                        {portfolio[item.kind] ? "" : " · Link pending"}
                      </small>
                    </span>
                    <ArrowUpRight />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="site-container footer-content">
          <a className="brand" href="#top">
            <span className="brand-mark">
              {portfolio.name[0]?.toLowerCase()}
              <span>.</span>
            </span>
            <span>
              {portfolio.name.split(" ")[0]}
              <span className="brand-dot">.</span>
            </span>
          </a>
          <p>
            © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
          </p>
          <div className="footer-socials">
            <Button
              variant="ghost"
              size="icon"
              aria-label="GitHub"
              onClick={() => openContact("github")}
            >
              <Github />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="LinkedIn"
              onClick={() => openContact("linkedin")}
            >
              <Linkedin />
            </Button>
            <a href="#top" className="back-to-top" aria-label="Back to top">
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </footer>
      <Dialog
        open={Boolean(notice)}
        onOpenChange={(open) => {
          if (!open) setNotice(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{notice?.title}</DialogTitle>
            <DialogDescription>{notice?.description}</DialogDescription>
          </DialogHeader>
          <Button onClick={() => setNotice(null)}>
            Got it <Check />
          </Button>
        </DialogContent>
      </Dialog>
      <Dialog
        open={Boolean(selectedProject)}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null);
        }}
      >
        <DialogContent className="project-dialog">
          <DialogHeader>
            <p className="eyebrow">
              {selectedProject?.status === "concept"
                ? "CONCEPT / DETAILS PENDING"
                : selectedProject?.status === "in-progress"
                  ? "PERSONAL PROJECT / IN PROGRESS"
                  : "PROFESSIONAL CASE STUDY"}
            </p>
            <DialogTitle>{selectedProject?.title}</DialogTitle>
            <DialogDescription>{selectedProject?.description}</DialogDescription>
          </DialogHeader>
          {selectedProject && <ProjectImage project={selectedProject} />}
          {selectedProject && <CaseStudyContent project={selectedProject} />}
          {selectedProject?.requiresLogin && (
            <p className="dialog-note">
              This application requires sign-in. This case study describes my contributions without
              requiring access to the product.
            </p>
          )}
          {safeExternalUrl(selectedProject?.githubUrl ?? null) && (
            <a
              href={safeExternalUrl(selectedProject?.githubUrl ?? null)!}
              target="_blank"
              rel="noopener noreferrer"
            >
              View repository
            </a>
          )}
          {safeExternalUrl(selectedProject?.url ?? null) && (
            <Button asChild>
              <a
                href={safeExternalUrl(selectedProject?.url ?? null)!}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedProject?.requiresLogin
                  ? "Visit product · Login required"
                  : "Visit product"}{" "}
                <ArrowUpRight />
              </a>
            </Button>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
