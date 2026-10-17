import { cleanup, fireEvent, render, screen, within, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Portfolio } from "../components/portfolio/portfolio";
import { ProjectImage } from "../components/portfolio/project-image";
import { portfolio } from "../data/portfolio";

const originalResumeUrl = portfolio.resumeUrl;

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  portfolio.resumeUrl = originalResumeUrl;
});
describe("portfolio interactions", () => {
  it("links directly to the hosted PDF without a cross-origin fetch", () => {
    const request = vi.fn();
    vi.stubGlobal("fetch", request);
    render(<Portfolio />);
    const link = screen.getByRole("link", { name: /Download Resume PDF/ });
    expect(link).toHaveAttribute("href", originalResumeUrl);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(request).not.toHaveBeenCalled();
  });
  it("renders resume-backed work, education and in-progress project status", () => {
    render(<Portfolio />);
    expect(screen.getByText("Wcart Commerce Platform")).toBeInTheDocument();
    expect(screen.getByText("M.Sc. Computer Science")).toBeInTheDocument();
    expect(screen.getByText("Jan 2024 – Sep 2026")).toBeInTheDocument();
    expect(screen.getByText("Jun 2023 – Dec 2023")).toBeInTheDocument();
    expect(screen.getByText("In progress · Personal project")).toBeInTheDocument();
    expect(screen.queryByText("Work history details pending")).toBeNull();
  });

  it("opens mobile navigation, closes on selection and Escape", () => {
    vi.stubGlobal("matchMedia", () => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));
    render(<Portfolio />);
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    const nav = screen.getByRole("navigation", { name: "Mobile navigation" });
    fireEvent.click(within(nav).getByRole("link", { name: /About/ }));
    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.getByRole("button", { name: "Open menu" })).toHaveFocus();
  });
  it("explains missing resume without navigating to a broken download", () => {
    portfolio.resumeUrl = null;
    render(<Portfolio />);
    fireEvent.click(screen.getByRole("button", { name: /Download Resume/ }));
    expect(screen.getByRole("dialog")).toHaveTextContent("Resume coming soon");
  });
  it("rejects a configured resume path that serves an HTML fallback", async () => {
    portfolio.resumeUrl = "/resume/missing.pdf";
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: true, text: async () => "<html>fallback</html>" }),
    );
    render(<Portfolio />);
    fireEvent.click(screen.getByRole("button", { name: /Download Resume/ }));
    await waitFor(() => expect(screen.getByRole("dialog")).toHaveTextContent("Resume unavailable"));
  });
  it("falls back to a labeled illustration when a screenshot fails", () => {
    const project = portfolio.projects[0]!;
    render(
      <ProjectImage
        project={{
          ...project,
          screenshot: { src: "/missing.jpg", alt: "Project screenshot", width: 1200, height: 800 },
        }}
      />,
    );
    fireEvent.error(screen.getByRole("img", { name: "Project screenshot" }));
    expect(screen.queryByRole("img")).toBeNull();
    expect(screen.getByText(/ILLUSTRATION · SCREENSHOT NOT PROVIDED/)).toBeInTheDocument();
  });
  it("opens a professional case study without requiring a product login or missing external link", () => {
    render(<Portfolio />);
    fireEvent.click(
      screen.getByRole("button", { name: "View Wcart Commerce Platform case study" }),
    );
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveTextContent("Full-stack product developer");
    expect(dialog).toHaveTextContent("Engineering decisions");
    expect(dialog).toHaveTextContent("requires sign-in");
    expect(within(dialog).queryByRole("link", { name: /Visit product/ })).toBeNull();
    expect(within(dialog).queryByRole("button", { name: /Project link/ })).toBeNull();
  });
  it("opens the flagship case study from contribution evidence", () => {
    render(<Portfolio />);
    fireEvent.click(
      screen.getByRole("button", { name: "Explore my contributions: Payment integrations" }),
    );
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveTextContent("Shared payment-provider interface");
    expect(dialog).toHaveTextContent("Wcart: simplified capability map");
    expect(dialog).toHaveTextContent("not an exact network topology");
  });
});
