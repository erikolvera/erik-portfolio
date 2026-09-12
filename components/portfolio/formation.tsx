const squad = [
  {
    slot: 'pos-spine',
    line: 'The spine',
    title: 'Languages & foundations',
    tools: 'Python · TypeScript · JavaScript',
    note: 'Data structures, algorithms, and numerical modeling.',
  },
  {
    slot: 'pos-forward',
    line: 'Front line',
    title: 'Web applications',
    tools: 'React · Next.js · HTML · CSS',
    note: 'Accessible interfaces connected to the systems behind them.',
  },
  {
    slot: 'pos-wide-left',
    line: 'Left',
    title: 'Data & AI',
    tools: 'Pandas · Plotly · CrewAI · Gemini',
    note: 'Data analysis, classification, and structured AI workflows.',
  },
  {
    slot: 'pos-wide-right',
    line: 'Right',
    title: 'Databases & state',
    tools: 'PostgreSQL · Supabase · Redis',
    note: 'User state, authentication integrations, and application caching.',
  },
  {
    slot: 'pos-deep',
    line: 'Deep',
    title: 'Backend & contracts',
    tools: 'FastAPI · Pydantic · REST APIs',
    note: 'Input validation, typed responses, and clear service boundaries.',
  },
  {
    slot: 'pos-keeper',
    line: 'Last line',
    title: 'Testing & delivery',
    tools: 'pytest · Hypothesis · GitHub Actions',
    note: 'Property-based tests, Git workflows, Docker, and deployments.',
  },
];

export function Formation() {
  return (
    <>
      <div className="pitch">
        <svg
          className="pitch-markings"
          viewBox="0 0 1000 1200"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <rect x="20" y="20" width="960" height="1160" />
          <path d="M20 600h960M280 20v180h440V20M390 20v70h220V20M280 1180v-180h440v180M390 1180v-70h220v70" />
          <ellipse cx="500" cy="600" rx="130" ry="120" />
          <path d="M405 200a110 110 0 0 0 190 0M405 1000a110 110 0 0 1 190 0" />
          <g className="pitch-spots">
            <circle cx="500" cy="600" r="4" />
            <circle cx="500" cy="145" r="4" />
            <circle cx="500" cy="1055" r="4" />
          </g>
        </svg>
        {squad.map((s) => (
          <article className={`pos ${s.slot}`} key={s.title}>
            <span className="pos-line">{s.line}</span>
            <h3>{s.title}</h3>
            <p className="pos-tools">{s.tools}</p>
            <span className="pos-note">{s.note}</span>
          </article>
        ))}
      </div>
      <p className="pitch-key">
        <span>Position shows how central a tool is to how I work.</span>
        <span>Python holds the middle. Tests are the last line.</span>
      </p>
    </>
  );
}
