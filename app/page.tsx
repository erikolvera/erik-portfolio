import { ArrowDown, ArrowUpRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Formation } from "@/components/portfolio/formation";
import { Footer } from "@/components/portfolio/footer";
import { CopyEmail } from "@/components/portfolio/copy-email";

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
                Free Agent
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
                  Full-stack · Python &amp; TypeScript · Product-minded
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
                <dd>Software engineer, full-stack</dd>
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
                <dd>Careful backends · user-first interfaces · applied AI</dd>
              </div>
            </dl>
            <p className="sheet-intro">
              I build complete products: Python APIs and engines underneath,
              TypeScript interfaces on top, and every decision checked from the
              user’s side of the screen.
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
          <span className="ticker-lead">User first</span>
          <span>Python backends</span>
          <span>TypeScript interfaces</span>
          <span>Fintech &amp; applied AI</span>
        </div>

        <section id="work" className="shell work-section">
          <div className="section-head">
            <div>
              <span className="label label-strike">Selected work</span>
              <h2>The engineering behind it</h2>
            </div>
            <p className="section-aside">
              Real users. Deliberate decisions on both sides of the API.
            </p>
          </div>
          <div className="fixture-list">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="support-head">
            <span className="label label-strike">Also in the file</span>
            <h3>For real people, from real data</h3>
            <p>Three more projects that show how I think.</p>
          </div>
          <div className="support-grid">
            <article className="support-card support-card-wide">
              <span className="label">Client work · User experience</span>
              <h3>JMS – The Garage Door Men</h3>
              <p className="support-body">
                A bilingual marketing site for a Houston garage door business.
                The customer is usually standing in front of a broken door, on a
                phone, so the site is built to get them to a call or a text
                fast.
              </p>
              <ul className="support-list">
                <li>
                  A quote planner turns a few taps into a ready-to-send text
                  message, using the right SMS link format for iOS or Android.
                </li>
                <li>
                  Spanish-preferring browsers open in Spanish, the choice is
                  remembered, and the drafted message follows the language.
                </li>
                <li>
                  A keyboard-accessible gallery returns focus where you left it,
                  and the service map loads only when it scrolls into view.
                </li>
              </ul>
              <div className="tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Vite</span>
              </div>
              <div className="fixture-actions">
                <a
                  className="link"
                  href="https://erikolvera.github.io/jms-the-garage-door-men/"
                >
                  Visit the live site{" "}
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
                <a
                  className="link"
                  href="https://github.com/erikolvera/jms-the-garage-door-men"
                  aria-label="View JMS – The Garage Door Men source on GitHub"
                >
                  Code <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </div>
            </article>
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
                Explore the implementation{" "}
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
                Explore the analysis{" "}
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </article>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="shell about-grid">
            <div>
              <h2>About Me</h2>
            </div>
            <div className="about-copy">
              <p>
                I’m a Computer Science graduate from Texas State University,
                with a minor in Data Analytics. I like building things end to
                end, and I tend to see them from the user’s side first: if I
                were using this, where would I expect to click, and what is the
                most convenient way to find what I need?
              </p>
              <p>
                That habit shapes the backend too. Python is my strongest
                language, and I care about what happens underneath: how data
                moves, where assumptions break, and how to make a result easier
                to trust. A precise debt engine is only useful if the screen in
                front of it tells someone what to do next.
              </p>
              <p>
                I also have experience using AI-assisted development tools,
                including OpenAI Codex and Claude Code, to explore ideas,
                iterate on implementations, and move from a clear specification
                to working software.
              </p>
              <p>
                I’m looking for an early-career full-stack or software
                engineering role, especially on a product team working with
                financial software, data, or practical AI applications.
              </p>
              <p>
                Outside of engineering, I’m a soccer fan, with my favorite team
                being Manchester United. This portfolio takes a little
                inspiration from it. I also enjoy staying fit through regular
                workouts, and in my free time, I love Pokémon and watching
                anime.
              </p>
              <div className="about-education">
                <span className="label">Education</span>
                <h3>Texas State University</h3>
                <p className="education-degree">
                  B.S. Computer Science · Minor in Data Analytics
                </p>
                <span className="education-meta">Cum Laude · May 2026</span>
              </div>
              <a href={site.resume} className="link">
                View my résumé <ArrowUpRight size={13} aria-hidden="true" />
              </a>
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
                Full-stack · Python &amp; TypeScript · Product-minded
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
