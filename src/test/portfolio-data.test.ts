import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { portfolio } from "../data/portfolio";
import { safeExternalUrl } from "../lib/site";

describe("resume-backed portfolio content", () => {
  it("uses the supplied identity, experience, contact and education", () => {
    expect(portfolio.name).toBe("Naresh Kumar G");
    expect(portfolio.role).toBe("Full Stack Developer");
    expect(portfolio.experience).toBe("3+");
    expect(portfolio.email).toBe("nareshkumarg984@gmail.com");
    expect(portfolio.linkedin).toBe("https://www.linkedin.com/in/nareshkumar48");
    expect(portfolio.education.map((entry) => entry.period)).toEqual([
      "2021 – 2023",
      "2018 – 2021",
    ]);
  });
  it("lists supported skills while preserving excluded claims", () => {
    const skills = portfolio.skills.flatMap((group) => group.items).join(" ");
    for (const skill of ["React", "Next.js", "Node.js", "PostgreSQL", "MCP"])
      expect(skills).toContain(skill);
    expect(skills).not.toMatch(/MongoDB|Salesforce/i);
    expect(portfolio.skills).toHaveLength(5);
  });
  it("replaces drafts with real work and keeps unavailable project destinations null", () => {
    expect(portfolio.draftProjects).toEqual([]);
    expect(portfolio.projects.length).toBeGreaterThan(0);
    expect(new Set(portfolio.projects.map((project) => project.id)).size).toBe(
      portfolio.projects.length,
    );
    for (const project of portfolio.projects) {
      expect(project.status).not.toBe("concept");
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.url === null || safeExternalUrl(project.url)).toBeTruthy();
      expect(project.githubUrl === null || safeExternalUrl(project.githubUrl)).toBeTruthy();
    }
    expect(portfolio.projects.find((project) => project.title === "Starlight Shop")?.status).toBe(
      "in-progress",
    );
    expect(portfolio.github).toBe("https://github.com/Naresh-Dfe");
  });
  it("preserves the employment dates and supported contributions", () => {
    expect(
      portfolio.experienceEntries.map((entry) => [entry.company, entry.startDate, entry.endDate]),
    ).toEqual([
      ["Webnexs", "2024-01", "2026-09"],
      ["Webnexs", "2023-06", "2023-12"],
    ]);
    expect(portfolio.experienceEntries[0]?.achievements.join(" ")).toContain("10 payment gateway");
    expect(portfolio.experienceEntries[1]?.achievements).toEqual([]);
  });
  it("links to the supplied hosted resume and retains the original local PDF", () => {
    expect(portfolio.resumeUrl).toBe(
      "https://pub-cd02c25bf25a476d9698eae9ef7d371e.r2.dev/NareshKumar_G_Resume.pdf",
    );
    const pdf = readFileSync(resolve(process.cwd(), "public/resume/NareshKumar_G_Resume.pdf"));
    expect(pdf.subarray(0, 5).toString()).toBe("%PDF-");
  });
  it("groups Wcart as one flagship and connects evidence to real case studies", () => {
    expect(portfolio.projects.filter((project) => project.title.startsWith("Wcart"))).toHaveLength(
      1,
    );
    expect(portfolio.projects).toHaveLength(5);
    for (const highlight of portfolio.highlights)
      expect(portfolio.projects.some((project) => project.id === highlight.projectId)).toBe(true);
    for (const project of portfolio.projects) {
      expect(project.caseStudy.ownership.length).toBeGreaterThan(0);
      expect(project.caseStudy.decisions.length).toBeGreaterThan(0);
    }
  });
});
