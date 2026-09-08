import { ArrowDown, ArrowUpRight, Code, ArrowRight } from 'lucide-react';
import { site } from '@/lib/site';
import { projects } from '@/lib/projects';
import { ProjectCard } from '@/components/portfolio/project-card';
import { Footer } from '@/components/portfolio/footer';
import { CopyEmail } from '@/components/portfolio/copy-email';
export default function Home() {
  return (
    <>
      <main id="main">
        <section className="shell hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> SOFTWARE ENGINEER · PYTHON &
              BACKEND
            </p>
            <h1>
              Built from the
              <br />
              <span>backend up.</span>
            </h1>
            <p className="hero-intro">
              I’m Erik Olvera. I build Python APIs, financial simulation
              engines, and AI applications—with a close eye on the logic that
              makes them work.
            </p>
            <div className="hero-actions">
              <a href="#work" className="button button-primary">
                Explore my work <ArrowDown size={17} />
              </a>
              <a href={site.github} className="text-link">
                <Code size={17} /> GitHub <ArrowUpRight size={14} />
              </a>
              <a href={site.resume} className="text-link">
                Résumé <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <aside className="hero-note">
            <p className="eyebrow">A LITTLE CONTEXT</p>
            <p className="note-title">
              CS foundations.
              <br />
              Practical applications.
            </p>
            <p>
              Texas State University
              <br />
              B.S. Computer Science, 2026
              <br />
              Minor in Data Analytics
            </p>
            <div className="availability">
              <span className="status-dot" /> Open to engineering roles
            </div>
            <a className="text-link" href="#contact">
              Let’s talk <ArrowUpRight size={15} />
            </a>
          </aside>
        </section>
        <div className="shell focus-strip">
          <span>PYTHON FIRST</span>
          <span>Backend systems</span>
          <span>Financial software</span>
          <span>Applied AI & data</span>
        </div>
        <section id="work" className="shell work-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2>The engineering behind it.</h2>
            </div>
            <p>
              Practical problems.
              <br />
              Deliberate technical decisions.
            </p>
          </div>
          <div className="featured-list">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="supporting-heading">
            <h3>From data to decisions.</h3>
            <p>Two more projects that show how I think.</p>
          </div>
          <div className="supporting-grid">
            <article className="supporting-card">
              <p className="eyebrow">04 / MACHINE LEARNING FOUNDATIONS</p>
              <h3>Image classification</h3>
              <p>
                A Naive Bayes classifier implemented in Python, with
                log-probability scoring, smoothing, and feature extraction for
                handwritten digits and faces.
              </p>
              <div className="metric-pair">
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
              <p className="metric-note">
                Reproduced on September 7, 2026. Validation accuracy; not
                held-out test accuracy.
              </p>
              <div className="tags">
                <span>Python</span>
                <span>Naive Bayes</span>
                <span>Feature engineering</span>
              </div>
              <a
                className="text-link"
                href="https://github.com/erikolvera/image_classification"
              >
                Explore the implementation{' '}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </article>
            <article className="supporting-card">
              <p className="eyebrow">05 / DATA ANALYSIS</p>
              <h3>Housing affordability</h3>
              <p>
                A Python and Streamlit exploration combining Redfin, Zillow, and
                City of Austin data to compare home values, income requirements,
                and affordable-housing locations.
              </p>
              <div className="data-story">
                <span>Regional data</span>
                <ArrowRight size={16} aria-hidden="true" />
                <span>Analysis</span>
                <ArrowRight size={16} aria-hidden="true" />
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
                className="text-link"
                href="https://github.com/erikolvera/austin-sanmarcos-housing-affordability"
              >
                Explore the analysis{' '}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </article>
          </div>
        </section>
        <section id="about" className="about-section">
          <div className="shell about-grid">
            <div>
              <p className="eyebrow">02 / ABOUT</p>
              <h2>
                Curious about the product.
                <br />
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
              <a href={site.resume} className="text-link">
                View my résumé <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="shell background-grid">
            <div className="background-item">
              <p className="eyebrow">EDUCATION</p>
              <h3>Texas State University</h3>
              <p>B.S. Computer Science · Minor in Data Analytics</p>
              <span>Cum Laude · May 2026</span>
            </div>
            <div className="background-item">
              <p className="eyebrow">EXPERIENCE BEYOND THE CODE</p>
              <h3>Ownership under pressure.</h3>
              <p>
                As an interim team lead and fulfillment pace setter at Target,
                I’ve coordinated teams, communicated across functions, and taken
                responsibility for day-to-day execution.
              </p>
              <span>Target · August 2022–present</span>
            </div>
          </div>
        </section>
        <section className="shell skills-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / TOOLKIT</p>
              <h2>Tools I’ve put to work.</h2>
            </div>
            <p>Grounded in the projects above.</p>
          </div>
          <div className="skills-grid">
            {[
              [
                'Languages & foundations',
                'Python · TypeScript · JavaScript',
                'Data structures, algorithms, and numerical modeling.',
              ],
              [
                'Backend & contracts',
                'FastAPI · Pydantic · REST APIs',
                'Input validation, typed responses, and clear service boundaries.',
              ],
              [
                'Data & AI',
                'Pandas · Plotly · CrewAI · Gemini',
                'Data analysis, classification, and structured AI workflows.',
              ],
              [
                'Databases & state',
                'PostgreSQL · Supabase · Redis',
                'User state, authentication integrations, and application caching.',
              ],
              [
                'Web applications',
                'React · Next.js · HTML · CSS',
                'Accessible interfaces connected to the systems behind them.',
              ],
              [
                'Testing & delivery',
                'pytest · Hypothesis · GitHub Actions',
                'Property-based tests, Git workflows, Docker, and deployments.',
              ],
            ].map(([title, tools, description]) => (
              <div className="skill-group" key={title}>
                <h3>{title}</h3>
                <p>{tools}</p>
                <span>{description}</span>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="shell contact-inner">
            <div>
              <p className="eyebrow">
                <span className="status-dot" /> OPEN TO ENGINEERING
                OPPORTUNITIES
              </p>
              <h2>
                Let’s build
                <br />
                something useful.
              </h2>
              <p>Software engineering · Backend · Python</p>
            </div>
            <div className="contact-details">
              <a className="email-link" href={`mailto:${site.email}`}>
                {site.email}
                <ArrowUpRight size={23} aria-hidden="true" />
              </a>
              <CopyEmail />
              <div className="contact-links">
                <a className="text-link" href={site.linkedin}>
                  LinkedIn <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                <a className="text-link" href={site.github}>
                  GitHub <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                <a className="text-link" href={site.resume} download>
                  Download résumé <ArrowDown size={15} aria-hidden="true" />
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
