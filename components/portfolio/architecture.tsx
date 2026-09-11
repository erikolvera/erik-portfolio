import type { ProjectSlug } from '@/lib/projects';
export function Architecture({ project }: { project: ProjectSlug }) {
  if (project === 'debtpilot')
    return (
      <figure
        className="plate debt-plate"
        aria-label="DebtPilot data flow: validated financial inputs pass through one Decimal simulator configured for Snowball, Avalanche, and minimum-only payoff strategies."
      >
        <p className="plate-label">INSIDE THE ENGINE</p>
        <div className="flow-node">
          <span>01</span>
          <div>
            <strong>Validate & check affordability</strong>
            <small>Pydantic contracts · monthly cash flow</small>
          </div>
        </div>
        <div className="flow-connector" />
        <div className="flow-node highlighted">
          <span>02</span>
          <div>
            <strong>One simulation engine</strong>
            <small>Decimal arithmetic · month by month</small>
          </div>
        </div>
        <div className="flow-connector" />
        <div className="flow-branches">
          <span>Snowball</span>
          <span>Avalanche</span>
          <span>Baseline</span>
        </div>
        <figcaption className="plate-foot">
          Same calculation rules. Three strategies.
        </figcaption>
      </figure>
    );
  if (project === 'golazo')
    return (
      <figure
        className="plate ai-plate"
        aria-label="GOLAZO data flow: FastAPI checks memory and Redis caches, then serializes generation through Scout, Analyst, and Journalist agents. Pydantic validates the final briefing."
      >
        <p className="plate-label">THE AGENT RELAY</p>
        <div className="cache-strip">
          <span>FastAPI</span>
          <span className="cache-rule" />
          <span>Memory + Redis</span>
        </div>
        <div className="flow-connector" />
        <div className="relay">
          <div>
            <span className="relay-number">01</span>
            <strong>Scout</strong>
            <small>Research</small>
          </div>
          <span className="relay-arrow" aria-hidden="true">
            →
          </span>
          <div>
            <span className="relay-number">02</span>
            <strong>Analyst</strong>
            <small>Interpret</small>
          </div>
          <span className="relay-arrow" aria-hidden="true">
            →
          </span>
          <div>
            <span className="relay-number">03</span>
            <strong>Journalist</strong>
            <small>Write</small>
          </div>
        </div>
        <div className="flow-connector" />
        <div className="output-node">
          <span className="tiny-square" /> Typed briefing <span>Pydantic</span>
        </div>
        <figcaption className="plate-foot">
          Cache first. Coordinate on a miss.
        </figcaption>
      </figure>
    );
  return (
    <figure
      className="plate mood-plate"
      aria-label="AniMood's MoodBot boundary: an authenticated user message is validated by a server route before Gemini produces a response for the conversation."
    >
      <p className="plate-label">MY PART OF THE PIPELINE</p>
      <div className="mood-input">
        <span>USER INTENT</span>
        <p>A mood, a theme, a starting point.</p>
      </div>
      <div className="flow-connector" />
      <div className="flow-node highlighted">
        <span>API</span>
        <div>
          <strong>Authenticated server route</strong>
          <small>Validate message · keep API key server-side</small>
        </div>
      </div>
      <div className="flow-connector" />
      <div className="flow-branches">
        <span>Gemini response</span>
        <span>Discovery UI</span>
      </div>
      <figcaption className="plate-foot">
        A clear boundary between client and AI.
      </figcaption>
    </figure>
  );
}
