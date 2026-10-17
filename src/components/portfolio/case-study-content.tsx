import type { Project } from "@/data/portfolio";

export function CaseStudyContent({ project }: { project: Project }) {
  const study = project.caseStudy;
  return (
    <div className="case-study-content">
      <section>
        <h3>Product context</h3>
        <p>{study.context}</p>
      </section>
      <section>
        <h3>My role</h3>
        <p>{project.role}</p>
        <ul>
          {study.ownership.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Engineering decisions</h3>
        {study.decisions.map((item) => (
          <article className="engineering-decision" key={item.title}>
            <h4>{item.title}</h4>
            <p>{item.explanation}</p>
          </article>
        ))}
      </section>
      <section>
        <h3>Reliability & access</h3>
        <ul>
          {study.reliability.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>{project.status === "in-progress" ? "Current status" : "Delivered capabilities"}</h3>
        <ul>
          {study.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      {study.architecture && (
        <figure className="architecture-map">
          <figcaption>{study.architecture.title}</figcaption>
          <div className="architecture-layers">
            {study.architecture.layers.map((layer, index) => (
              <div key={layer.title}>
                <span aria-hidden="true">0{index + 1}</span>
                <h4>{layer.title}</h4>
                <p>{layer.description}</p>
              </div>
            ))}
          </div>
          <p>{study.architecture.note}</p>
        </figure>
      )}
      <section>
        <h3>Technologies</h3>
        <div className="project-technologies">
          {project.technologies.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
