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
        <span className="pitch-box pitch-box-top" aria-hidden="true" />
        <span className="pitch-box pitch-box-bottom" aria-hidden="true" />
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
