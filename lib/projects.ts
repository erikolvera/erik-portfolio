export type ProjectSlug = 'debtpilot' | 'golazo' | 'animood';
export interface CaseSection {
  title: string;
  paragraphs: string[];
}
export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
}
export interface Project {
  slug: ProjectSlug;
  number: string;
  name: string;
  category: string;
  headline: string;
  summary: string;
  stack: string[];
  repository: string;
  demo?: string;
  demoNote?: string;
  role: string;
  focus: string;
  outcome: string;
  screenshots: ProjectScreenshot[];
  sections: CaseSection[];
  evidence: { label: string; url: string }[];
}
const repo = (name: string, sha: string, path: string) =>
  `https://github.com/erikolvera/${name}/blob/${sha}/${path}`;
export const projects: Project[] = [
  {
    slug: 'debtpilot',
    number: '01',
    name: 'DebtPilot',
    category: 'FINTECH / BACKEND ENGINEERING',
    headline: 'A debt payoff plan is only useful if the math holds up.',
    summary:
      'I built a deterministic Python engine that compares payoff strategies, checks affordability, and keeps money precise from the API boundary through the final payment.',
    stack: ['Python', 'FastAPI', 'Pydantic', 'Hypothesis', 'Next.js'],
    repository: 'https://github.com/erikolvera/DebtPilot',
    demo: 'https://debtpilot-lyart.vercel.app',
    role: 'Personal project · Python engine, API, and web application',
    focus: 'Financial modeling · API contracts · Property-based testing',
    outcome:
      'A working payoff planner with explainable calculations and a framework-independent engine. In a local verification on September 7, 2026, all 260 backend tests passed; total coverage was 98.72% with branch measurement enabled.',
    screenshots: [
      {
        src: '/projects/debtpilot/overview.webp',
        alt: 'DebtPilot overview showing monthly cash flow and an estimated debt-free date.',
        caption:
          'The overview turns monthly cash flow into a concrete payoff horizon.',
      },
      {
        src: '/projects/debtpilot/report.webp',
        alt: 'DebtPilot financial report showing cash flow, payment budget, and monthly check-ins.',
        caption:
          'The report keeps the budget, saved plan, and future check-ins connected.',
      },
      {
        src: '/projects/debtpilot/comparison.webp',
        alt: 'DebtPilot comparison of minimum-only, snowball, and avalanche payoff strategies.',
        caption:
          'Snowball and avalanche are compared with payoff dates and estimated interest.',
      },
    ],
    sections: [
      {
        title: 'Start with the payment someone can afford.',
        paragraphs: [
          'Debt repayment is a useful engineering problem because the edge cases matter. A recommendation can look sensible while ignoring cash flow, losing a final-payment remainder, or declaring a debt impossible to repay too early.',
          'I made affordability the first step. The API normalizes income frequencies, calculates monthly cash flow, and caps extra payments to the available amount. When the budget is in deficit, it withholds a payoff recommendation.',
        ],
      },
      {
        title: 'One engine, three strategies.',
        paragraphs: [
          'Snowball, Avalanche, and the minimum-only baseline share one month-stepping simulator. Ordering functions and minimum-payment rules change the strategy; the arithmetic stays in one place. The engine has no dependency on FastAPI or Pydantic.',
          'That separation keeps rounding, interest, and rollover behavior consistent. When a debt clears, unused payment budget can move to another debt in the same month, and freed minimums become available in later months.',
        ],
      },
      {
        title: 'Keep precision across the boundary.',
        paragraphs: [
          'Money travels across the JSON API as strings and becomes Decimal in Python. The request schema rejects numeric JSON values, and generated TypeScript types reflect the OpenAPI contract. This keeps a floating-point conversion from quietly entering the calculation.',
          'The simulator uses a local decimal context for extreme valid inputs. It does not change the global precision for other code running in the process.',
        ],
      },
      {
        title: 'Test the invariants, then challenge the assumptions.',
        paragraphs: [
          'I used Hypothesis to check conservation of money, nonnegative balances, cent precision, permutation invariance, and termination. Separate oracle tests compare the engine with an independently derived amortization formula; hand-calculated schedules cover known cases.',
          'A particularly useful regression test covers a portfolio whose total balance initially stalls but later clears. A flat total alone cannot prove that repayment is impossible. The early-exit rule therefore needs a stronger condition, with a 1,200-month limit as the final bound.',
        ],
      },
      {
        title: 'A deliberate scope.',
        paragraphs: [
          'The server processes requests without accounts or a database; the profile is stored in the current browser. That makes the product easy to try, with the tradeoff that it does not sync between devices.',
          'The result is a monthly-interest estimate based on user-entered figures. It does not claim to reproduce every lender’s billing rules. Backend CI enforces a 95% coverage gate, and the frontend workflow checks types, lint, tests, and a production build.',
        ],
      },
    ],
    evidence: [
      {
        label: 'Shared simulator and rollover logic',
        url: repo(
          'DebtPilot',
          '05cdcc9bc93249be722b4bcb57d6469227ce502c',
          'backend/app/engine/simulator.py',
        ),
      },
      {
        label: 'Property tests and independent oracle',
        url: repo(
          'DebtPilot',
          '05cdcc9bc93249be722b4bcb57d6469227ce502c',
          'backend/tests/engine/test_properties.py',
        ),
      },
      {
        label: 'Money and API validation contracts',
        url: repo(
          'DebtPilot',
          '05cdcc9bc93249be722b4bcb57d6469227ce502c',
          'backend/app/api/schemas.py',
        ),
      },
      {
        label: 'Backend CI and coverage gate',
        url: repo(
          'DebtPilot',
          '05cdcc9bc93249be722b4bcb57d6469227ce502c',
          'backend/pyproject.toml',
        ),
      },
    ],
  },
  {
    slug: 'golazo',
    number: '02',
    name: 'GOLAZO',
    category: 'APPLIED AI / PYTHON SYSTEMS',
    headline: 'Three AI agents. One structured match briefing.',
    summary:
      'I extended a CrewAI scaffold into a FastAPI application, adding typed outputs, model fallbacks, and two-tier caching around slow, quota-limited generation.',
    stack: ['Python', 'FastAPI', 'CrewAI', 'Gemini', 'Redis'],
    repository: 'https://github.com/erikolvera/gaffer-ai',
    role: 'Personal project · Extended scaffold, API, caching, and deployment',
    focus: 'AI orchestration · Concurrency · Failure handling',
    outcome:
      'A complete research-to-briefing application with explicit agent roles, validated output structure, and an operational cache-warming workflow. The repository retains its original name, gaffer-ai.',
    screenshots: [
      {
        src: '/projects/golazo/briefing.webp',
        alt: 'GOLAZO matchday briefing screen for Mexico versus South Africa.',
        caption:
          'A selected fixture becomes a structured, fan-first matchday briefing.',
      },
      {
        src: '/projects/golazo/agents.webp',
        alt: 'GOLAZO showing Scout, Analyst, and Journalist agents working in sequence.',
        caption:
          'Scout, Analyst, and Journalist stages stay visible while the crew runs.',
      },
    ],
    sections: [
      {
        title: 'Make a multi-step AI workflow usable as software.',
        paragraphs: [
          'The application takes two national teams and produces a match briefing. I extended a CrewAI learning scaffold into an API and browser experience, separating research, tactical analysis, and writing into three sequential agents.',
          'The Lead Scout uses a Gemini research tool. Its output passes to the Tactical Analyst, then to the Sports Journalist. Pydantic models constrain tool data and the final response so the application can work with structured fields.',
        ],
      },
      {
        title: 'Separate research from structured output.',
        paragraphs: [
          'The research tool first uses Google Search grounding to gather prose notes. A second call structures those notes against the team-data schema, followed by validation before the tool returns data to the agent.',
          'The final API boundary also checks that the crew produced the expected Pydantic object. Upstream generation failures become a service-unavailable response; an unvalidated final object is rejected.',
        ],
      },
      {
        title: 'Treat generation as an expensive shared operation.',
        paragraphs: [
          'A memory cache handles fast repeat lookups; optional Redis storage keeps entries across process restarts. The key normalizes the team pair and includes the Pacific-time date, aligned with the provider’s quota-reset day.',
          'On a miss, generation acquires a process-local lock and checks the cache again. Two visitors requesting the same fixture can therefore share the result instead of both starting a crew. The tradeoff is that different fixture generations are serialized too.',
        ],
      },
      {
        title: 'Build for quota and provider failures.',
        paragraphs: [
          'The service tries configured fallback models on transient errors and makes a second pass after backoff. Redis failures degrade to the memory cache. A scheduled GitHub Actions workflow calls the same API to pre-generate fixtures from the committed calendar.',
          'This is intentionally a single-process design. The lock is not distributed, and the application has no job queue. Scaling generation would require a different coordination mechanism.',
        ],
      },
      {
        title: 'Structure is not the same as factual accuracy.',
        paragraphs: [
          'Schemas make output easier to consume, but they do not verify the underlying sports facts. The current tool can estimate missing statistics and fall back to mock data when research fails.',
          'The next engineering step is explicit data provenance in the response, plus automated tests for fallback behavior, cache keys, and alert carry-through. That distinction is the main lesson I would take into another AI integration.',
        ],
      },
    ],
    evidence: [
      {
        label: 'Agent roles and sequential context flow',
        url: repo(
          'gaffer-ai',
          '28115921a5fd2562a21127514cbbbb8946623800',
          'briefing_engine/crew.py',
        ),
      },
      {
        label: 'Cache, lock, and model fallback implementation',
        url: repo(
          'gaffer-ai',
          '28115921a5fd2562a21127514cbbbb8946623800',
          'briefing_engine/api.py',
        ),
      },
      {
        label: 'Research tool and fallback behavior',
        url: repo(
          'gaffer-ai',
          '28115921a5fd2562a21127514cbbbb8946623800',
          'briefing_engine/tools.py',
        ),
      },
      {
        label: 'Scheduled cache-warming workflow',
        url: repo(
          'gaffer-ai',
          '28115921a5fd2562a21127514cbbbb8946623800',
          '.github/workflows/warm-cache.yml',
        ),
      },
    ],
  },
  {
    slug: 'animood',
    number: '03',
    name: 'AniMood',
    category: 'TEAM PROJECT / FULL-STACK ENGINEERING',
    headline: 'Turn a mood into a useful search.',
    summary:
      'On a four-person team, I built the MoodBot integration and search experience, contributed authentication and watchlist foundations, and led the migration to Next.js.',
    stack: ['Next.js', 'TypeScript', 'Gemini', 'Supabase', 'PostgreSQL'],
    repository: 'https://github.com/erikolvera/animood',
    demo: 'https://animood-eta.vercel.app/',
    demoNote: 'Account required',
    role: 'Four-person team · MoodBot, search, auth foundations, Next.js migration',
    focus: 'Server-side AI integration · Authentication · Team delivery',
    outcome:
      'A team-built anime discovery application with conversational search and saved user state. My commit history records the MoodBot implementation and tests, sequel filtering, server-side Gemini migration, cookie authentication, and server-rendered detail pages.',
    screenshots: [
      {
        src: '/projects/animood/home.webp',
        alt: 'AniMood home screen with a space-themed anime illustration and explore action.',
        caption:
          'The home experience gives the shared product a distinct visual identity.',
      },
      {
        src: '/projects/animood/explore.webp',
        alt: 'AniMood explore screen with genre filters and a grid of trending anime.',
        caption:
          'Explore combines genre shortcuts with a browsable anime catalog.',
      },
      {
        src: '/projects/animood/recommendations.webp',
        alt: 'AniMood personalized recommendations onboarding based on profile favorites.',
        caption:
          'Recommendations build on saved favorites and a lightweight onboarding flow.',
      },
    ],
    sections: [
      {
        title: 'Give an open-ended request a useful next step.',
        paragraphs: [
          'People often know the kind of show they want before they know a title. My part of AniMood was to connect that conversational intent to the application’s search and discovery experience.',
          'I worked on a four-person team. My contributions included MoodBot, search, watchlist and authentication foundations, and the Next.js migration. The recommendation-scoring engine was a teammate’s work.',
        ],
      },
      {
        title: 'Move the AI boundary to the server.',
        paragraphs: [
          'The current MoodBot route requires an authenticated user, checks the request body, and limits a message to 500 characters. Gemini is called server-side so its API key is not shipped to the browser.',
          'That migration gave the application an explicit place to handle validation and upstream failures, while keeping the client focused on the conversation and search interaction.',
        ],
      },
      {
        title: 'Bring authentication and rendering into the same architecture.',
        paragraphs: [
          'I added cookie-based Supabase authentication during the Next.js migration. Anime detail pages use server rendering, cache shared anime details for one hour, and read user-specific state in parallel.',
          'The distinction matters: anime details can be shared, but saved state belongs to the current user. The implementation keeps those reads separate.',
        ],
      },
      {
        title: 'Make the contribution visible in a shared codebase.',
        paragraphs: [
          'The project history includes my MoodBot tests and sequel filtering, alongside commits from teammates for recommendation scoring, caching, and onboarding.',
          'This project adds a different kind of evidence to my portfolio: integrating with shared features, working through a framework migration, and taking responsibility for a defined part of a larger product.',
        ],
      },
    ],
    evidence: [
      {
        label: 'My MoodBot implementation',
        url: 'https://github.com/erikolvera/animood/commit/aad352f',
      },
      {
        label: 'Moving Gemini calls server-side',
        url: 'https://github.com/erikolvera/animood/commit/2792826',
      },
      {
        label: 'Cookie-based authentication',
        url: 'https://github.com/erikolvera/animood/commit/a0daffc',
      },
      {
        label: 'Server-rendered anime details',
        url: 'https://github.com/erikolvera/animood/commit/1cd36e9',
      },
    ],
  },
];
