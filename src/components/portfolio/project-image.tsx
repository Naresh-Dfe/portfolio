import { useState } from "react";
import type { Project } from "@/data/portfolio";
import { ProjectPreview } from "./project-preview";

export function ProjectImage({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  return project.screenshot && !failed ? (
    <img
      className="project-screenshot"
      src={project.screenshot.src}
      alt={project.screenshot.alt}
      width={project.screenshot.width}
      height={project.screenshot.height}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  ) : (
    <ProjectPreview
      type={project.preview}
      label={
        project.status === "concept"
          ? "CONCEPT PREVIEW · PLACEHOLDER"
          : "ILLUSTRATION · SCREENSHOT NOT PROVIDED"
      }
    />
  );
}
