import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/projects';
import { Architecture } from './architecture';
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`feature-card project-${project.slug}`}>
      <div className="project-copy">
        <p className="eyebrow">
          <span className="project-number">{project.number}</span>{' '}
          {project.category}
        </p>
        <h3>
          <a href={`/work/${project.slug}/`}>
            {project.name}
            <span className="accent">.</span>
          </a>
        </h3>
        <p className="project-lead">{project.headline}</p>
        <p>{project.summary}</p>
        <div className="tags">
          {project.stack.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="project-actions">
          <a className="text-link case-link" href={`/work/${project.slug}/`}>
            Read case study <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a
            className="text-link"
            href={project.repository}
            aria-label={`View ${project.name} source on GitHub`}
          >
            Code <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          {project.demo && (
            <a
              className="text-link"
              href={project.demo}
              aria-label={`Open ${project.name} live application${project.demoNote ? `, ${project.demoNote.toLowerCase()}` : ''}`}
            >
              Live app <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
        </div>
        {project.demoNote && (
          <p className="demo-note">Live app requires an account.</p>
        )}
      </div>
      <Architecture project={project.slug} />
    </article>
  );
}
