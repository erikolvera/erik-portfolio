import { ArrowDown, ArrowUpRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { site } from '@/lib/site';
import { projects } from '@/lib/projects';
import { ProjectCard } from '@/components/portfolio/project-card';
import { Formation } from '@/components/portfolio/formation';
import { Footer } from '@/components/portfolio/footer';
import { CopyEmail } from '@/components/portfolio/copy-email';

export default function Home() {
  return (
    <>
      <main id="main">
        <section className="shell hero">
          <div className="programme-masthead" aria-hidden="true">
            <span>Engineering portfolio</span>
            <span className="programme-title">The matchday edition</span>
            <span>Class of 2026</span>
          </div>
          <div className="sheet">
            <div className="sheet-head">
              <span className="label label-strike">Team sheet</span>
              <span className="sheet-status">
                <span className="live-dot" aria-hidden="true" />
                Available
              </span>
            </div>
            <div className="sheet-body">
              <p className="squad-no" aria-hidden="true">
                26
              </p>
              <div>
                <h1 className="player-name">
                  Erik <span>Olvera</span>
                </h1>
                <p className="player-pos">
                  Backend · Python · Financial systems
                </p>
              </div>
            </div>
            <dl className="sheet-rows">
              <div>
                <dt>Club</dt>
                <dd>Texas State University</dd>
              </div>
              <div>
                <dt>Position</dt>
                <dd>Software engineer, backend</dd>
              </div>
              <div>
                <dt>Season</dt>
                <dd>
                  B.S. Computer Science ’26 · Cum Laude · Minor in Data
                  Analytics
                </dd>
              </div>
              <div>
                <dt>Speciality</dt>
                <dd>Python APIs · simulation engines · applied AI</dd>
              </div>
            </dl>
            <p className="sheet-intro">
              I build Python APIs, financial simulation engines, and AI
              applications—with a close eye on the logic that makes them work.
            </p>
            <div className="sheet-actions">
              <a href="#work" className="button">
                Explore my work <ArrowDown size={15} aria-hidden="true" />
              </a>
              <a href={site.github} className="link">
                GitHub <ArrowUpRight size={13} aria-hidden="true" />
              </a>
              <a href={site.resume} className="link">
                Résumé <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
          <figure className="player-card">
            <div className="player-photo">
              <Image
                src="/erik-olvera.jpg"
                alt="Erik Olvera at Texas State University wearing his First Generation graduate stole"
                fill
                unoptimized
                sizes="(max-width: 760px) calc(100vw - 80px), (max-width: 1000px) 380px, 420px"
              />
              <span className="portrait-number" aria-hidden="true">
                26
              </span>
            </div>
            <figcaption>
              <div className="player-nameplate">
                <span className="label">Software engineer</span>
                <strong>Erik Olvera</strong>
                <span className="player-nameplate-mark" aria-hidden="true">
                  EO / 26
                </span>
              </div>
              <p className="player-caption">
                First-generation graduate. Texas State University, class of
                2026.
              </p>
            </figcaption>
          </figure>
        </section>

        <div className="shell ticker">
          <span className="ticker-lead">Python first</span>
          <span>Backend systems</span>
          <span>Financial software</span>
          <span>Applied AI &amp; data</span>
        </div>

        <section id="work" className="shell work-section">
          <div className="section-head">
            <div>
              <span className="label label-strike">Selected work</span>
              <h2>The engineering behind it</h2>
            </div>
            <p className="section-aside">
              Practical problems. Deliberate technical decisions.
            </p>
          </div>
          <div className="fixture-list">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="support-head">
            <span className="label label-strike">Also in the file</span>
            <h3>From data to decisions</h3>
            <p>Two more projects that show how I think.</p>
          </div>
          <div className="support-grid">
            <article className="support-card">
              <span className="label">Machine learning foundations</span>
              <h3>Image classification</h3>
              <p className="support-body">
                A Naive Bayes classifier implemented in Python, with
                log-probability scoring, smoothing, and feature extraction for
                handwritten digits and faces.
              </p>
              <div className="stat-pair">
                <div>
                  <strong>
                    82.1<span>%</span>
                  </strong>
                  <span>Digits · 1,000 validation images</span>
                </div>
                <div>
                  <strong>
                    87.7<span>%</span>
                  </strong>
                  <span>Faces · 301 validation images</span>
                </div>
              </div>
              <p className="stat-note">
                Reproduced on September 7, 2026. Validation accuracy; not
                held-out test accuracy.
              </p>
              <div className="tags">
                <span>Python</span>
                <span>Naive Bayes</span>
                <span>Feature engineering</span>
              </div>
              <a
                className="link"
                href="https://github.com/erikolvera/image_classification"
              >
                Explore the implementation{' '}
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </article>
            <article className="support-card">
              <span className="label">Data analysis</span>
              <h3>Housing affordability</h3>
              <p className="support-body">
                A Python and Streamlit exploration combining Redfin, Zillow, and
                City of Austin data to compare home values, income requirements,
                and affordable-housing locations.
              </p>
              <div className="flow-line">
                <span>Regional data</span>
                <ArrowRight size={15} aria-hidden="true" />
                <span>Analysis</span>
                <ArrowRight size={15} aria-hidden="true" />
                <span>Explore</span>
              </div>
              <p className="support-detail">
                Cached data loaders clean numeric fields, reshape time series,
                and prepare coordinates for an interactive housing map.
              </p>
              <div className="tags">
                <span>Python</span>
                <span>Pandas</span>
                <span>Streamlit</span>
              </div>
              <a
                className="link"
                href="https://github.com/erikolvera/austin-sanmarcos-housing-affordability"
              >
                Explore the analysis{' '}
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </article>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="shell about-grid">
            <div>
              <span className="label label-strike">About</span>
              <h2>
                Curious about the product.{' '}
                <span>Particular about the details.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                I’m a Computer Science graduate from Texas State University,
                with a minor in Data Analytics. Python is my strongest language,
                and I’m most interested in the point where a useful idea becomes
                a working system.
              </p>
              <p>
                That has taken me from debt simulations and typed APIs to AI
                workflows and classification algorithms. I like understanding
                what happens underneath: how data moves, where assumptions
                break, and how to make the result easier to trust.
              </p>
              <p>
                I’m looking for an early-career software or backend engineering
                role, especially on a team working with financial software,
                data, or practical AI applications.
              </p>
              <p>
                Outside of engineering, I’m a soccer fan. This portfolio takes a
                little inspiration from the beautiful game.
              </p>
              <a href={site.resume} className="link">
                View my résumé <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="shell record-grid">
            <div className="record-item">
              <span className="label">Education</span>
              <h3>Texas State University</h3>
              <p className="record-body">
                B.S. Computer Science · Minor in Data Analytics
              </p>
              <span className="record-meta">Cum Laude · May 2026</span>
            </div>
            <div className="record-item">
              <span className="label">Experience beyond the code</span>
              <h3>Ownership under pressure</h3>
              <p className="record-body">
                As an interim team lead and fulfillment pace setter at Target,
                I’ve coordinated teams, communicated across functions, and taken
                responsibility for day-to-day execution.
              </p>
              <span className="record-meta">Target · August 2022–present</span>
            </div>
          </div>
        </section>

        <section className="shell formation-section">
          <div className="section-head">
            <div>
              <span className="label label-strike">Toolkit</span>
              <h2>Tools I’ve put to work</h2>
            </div>
            <p className="section-aside">Grounded in the projects above.</p>
          </div>
          <Formation />
        </section>

        <section id="contact" className="contact-section">
          <div className="shell contact-inner">
            <div>
              <span className="label label-strike">
                <span className="live-dot" aria-hidden="true" />
                Open to engineering opportunities
              </span>
              <h2>Let’s build something useful</h2>
              <p className="contact-note">
                Software engineering · Backend · Python
              </p>
            </div>
            <div>
              <a className="email-link" href={`mailto:${site.email}`}>
                {site.email}
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
              <CopyEmail />
              <div className="contact-links">
                <a className="link" href={site.linkedin}>
                  LinkedIn <ArrowUpRight size={13} aria-hidden="true" />
                </a>
                <a className="link" href={site.github}>
                  GitHub <ArrowUpRight size={13} aria-hidden="true" />
                </a>
                <a className="link" href={site.resume} download>
                  Download résumé <ArrowDown size={13} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
