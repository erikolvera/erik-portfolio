import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/projects';
import { Architecture } from '@/components/portfolio/architecture';
import { Footer } from '@/components/portfolio/footer';
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) return { title: 'Project not found' };
  return {
    title: `${p.name} — ${p.focus.split(' · ')[0]}`,
    description: p.summary,
    alternates: { canonical: `/work/${slug}/` },
    openGraph: {
      title: `${p.name} — Erik Olvera`,
      description: p.summary,
      url: `/work/${slug}/`,
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: `${p.name} — Erik Olvera`,
      description: p.summary,
    },
  };
}
export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <>
      <main id="main">
        <section className="shell case-hero">
          <a className="text-link back-link" href="/#work">
            <ArrowLeft size={16} aria-hidden="true" /> All selected work
          </a>
          <p className="eyebrow">
            CASE STUDY {p.number} / {p.category}
          </p>
          <h1>
            {p.name}
            <span className="accent">.</span>
          </h1>
          <p className="case-deck">{p.headline}</p>
          <p className="case-summary">{p.summary}</p>
          <div className="case-top-links">
            <a className="button button-primary" href={p.repository}>
              View source <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            {p.demo && (
              <a className="text-link" href={p.demo}>
                Live application <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
            {p.demoNote && <span className="muted-note">{p.demoNote}</span>}
          </div>
          <dl className="case-facts">
            <div>
              <dt>CONTRIBUTION</dt>
              <dd>{p.role}</dd>
            </div>
            <div>
              <dt>ENGINEERING FOCUS</dt>
              <dd>{p.focus}</dd>
            </div>
            <div>
              <dt>TECHNOLOGY</dt>
              <dd>{p.stack.join(' · ')}</dd>
            </div>
          </dl>
        </section>
        <div className="shell case-diagram">
          <Architecture project={p.slug} />
          <div className="diagram-note">
            <p className="eyebrow">ARCHITECTURE AT A GLANCE</p>
            <h2>
              {p.slug === 'debtpilot'
                ? 'Correctness lives in the core.'
                : p.slug === 'golazo'
                  ? 'Keep the stages explicit.'
                  : 'Make the boundary deliberate.'}
            </h2>
            <p>
              {p.slug === 'debtpilot'
                ? 'Financial inputs are validated before cash-flow analysis and simulation. The API wraps the engine; the engine stays independent.'
                : p.slug === 'golazo'
                  ? 'The API checks the cache before coordinating an agent run. Explicit contexts connect the stages, and a typed contract gates the final output.'
                  : 'A signed-in request passes through server-side validation before reaching Gemini. The browser receives the response without receiving the provider key.'}
            </p>
          </div>
        </div>
        <div className="shell case-body">
          <aside className="case-nav">
            <p className="eyebrow">IN THIS CASE STUDY</p>
            <nav aria-label="Case study sections">
              {p.sections.map((s, i) => (
                <a href={`#decision-${i + 1}`} key={s.title}>
                  <span>0{i + 1}</span>
                  {s.title}
                </a>
              ))}
              <a href="#source-notes">
                <span>↗</span>Implementation references
              </a>
            </nav>
          </aside>
          <div className="case-prose">
            {p.sections.map((s, i) => (
              <section id={`decision-${i + 1}`} key={s.title}>
                <p className="eyebrow">DECISION 0{i + 1}</p>
                <h2>{s.title}</h2>
                {s.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
            <section className="outcome-section">
              <p className="eyebrow">OUTCOME</p>
              <h2>What the work demonstrates.</h2>
              <p>{p.outcome}</p>
            </section>
            <section id="source-notes" className="source-notes">
              <p className="eyebrow">GO ONE LEVEL DEEPER</p>
              <h2>Implementation references.</h2>
              <p>
                The details behind this case study, linked to the code reviewed
                for the portfolio.
              </p>
              <ul>
                {p.evidence.map((e) => (
                  <li key={e.url}>
                    <a href={e.url}>
                      {e.label}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="audit-date">Source reviewed September 7, 2026.</p>
            </section>
          </div>
        </div>
        <div className="shell next-project">
          <div>
            <p className="eyebrow">NEXT CASE STUDY</p>
            <h2>{next.name}</h2>
          </div>
          <a className="text-link" href={`/work/${next.slug}/`}>
            Explore the project <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
