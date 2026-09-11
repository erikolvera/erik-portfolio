import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/projects';
import { ProjectPreview } from './project-showcase';
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="fixture">
      <div className="fixture-bar">
        <span className="fixture-no">{project.number}</span>
        <span className="fixture-cat">{project.category}</span>
        <span className="fixture-result">
          <span className="result-label">{project.result.label}</span>
          <span className="result-value">{project.result.value}</span>
        </span>
      </div>
      <div className="fixture-body">
        <div className="fixture-copy">
          <h3>
            <a href={`/work/${project.slug}/`}>{project.name}</a>
          </h3>
          <p className="fixture-line">{project.headline}</p>
          <p className="fixture-sum">{project.summary}</p>
          <div className="tags">
            {project.stack.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="fixture-actions">
            <a className="link" href={`/work/${project.slug}/`}>
              Read case study <ArrowRight size={14} aria-hidden="true" />
            </a>
            <a
              className="link"
              href={project.repository}
              aria-label={`View ${project.name} source on GitHub`}
            >
              Code <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            {project.demo && (
              <a
                className="link"
                href={project.demo}
                aria-label={`Open ${project.name} live application${project.demoNote ? `, ${project.demoNote.toLowerCase()}` : ''}`}
              >
                Live app <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            )}
          </div>
          {project.demoNote && (
            <p className="demo-note">Live app requires an account.</p>
          )}
        </div>
        <ProjectPreview project={project} />
      </div>
    </article>
  );
}
