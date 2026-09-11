import { ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/projects';

export function ProjectPreview({ project }: { project: Project }) {
  const screenshot = project.screenshots[0];

  return (
    <a
      className="project-preview"
      href={`/work/${project.slug}/#product-gallery`}
      aria-label={`See ${project.name} product screens`}
    >
      <span className="project-preview-frame">
        {/* oxlint-disable-next-line next/no-img-element -- Vinext dev cannot load next/image's runtime export. */}
        <img
          src={screenshot.src}
          alt={screenshot.alt}
          width={1800}
          height={1008}
          loading="lazy"
          decoding="async"
        />
      </span>
      <span className="project-preview-caption">
        <span>
          <span className="eyebrow">PRODUCT PREVIEW</span>
          {screenshot.caption}
        </span>
        <ArrowRight size={18} aria-hidden="true" />
      </span>
    </a>
  );
}

export function ProjectGallery({ project }: { project: Project }) {
  return (
    <section className="shell project-gallery" id="product-gallery">
      <div className="project-gallery-heading">
        <div>
          <p className="eyebrow">THE WORKING PRODUCT</p>
          <h2>From system to screen.</h2>
        </div>
        <p>Real screens from the finished application.</p>
      </div>
      <div
        className={`project-gallery-grid gallery-count-${project.screenshots.length}`}
      >
        {project.screenshots.map((screenshot, index) => (
          <figure key={screenshot.src} className={index === 0 ? 'lead' : ''}>
            <div className="gallery-image-frame">
              {/* oxlint-disable-next-line next/no-img-element -- These are pre-optimized static WebP assets. */}
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                width={1800}
                height={1008}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </div>
            <figcaption>
              <span>0{index + 1}</span>
              {screenshot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
