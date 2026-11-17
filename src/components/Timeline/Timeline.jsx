import "./Timeline.css";

const TIMELINE_ENTRIES = [
  {
    type: "work",
    title: "Machine Learning Engineer Intern",
    org: "Kapi Advisors · Dallas, TX",
    date: "Oct 2026 - Present",
    isCurrent: true,
    highlights: [
      "Developing a sourcing optimization engine using Google OR-Tools CP-SAT to recommend supplier allocations that minimize costs or maximize supplier scores while satisfying demand, budget, minimum order quantity, and supplier-count constraints.",
      "Built deterministic quotation scoring microservices to normalize currencies, pack sizes, discounts, taxes, and freight, enabling consistent cost comparisons across supplier bids.",
      "Implemented a data integration adapter to transform supplier quotes, pricing tiers, and eligibility records into optimization inputs and return allocation recommendations for buyer review.",
      "Designed APIs and PostgreSQL data models for buyer and supplier workflows, supporting quotation submissions, clarification rounds, approvals, and auditable decision histories.",
    ],
  },
  {
    type: "work",
    title: "Parallel roles at UTD",
    roles: [
      {
        type: "work",
        title: "Grader - Computer Architecture",
        org: "Prof. Alice Wang · University of Texas at Dallas",
        date: "Jan 2025 - May 2026",
      },
      {
        type: "work",
        title: "Technical Officer (Backend)",
        org: "AWS Club · University of Texas at Dallas",
        date: "Oct 2024 - May 2026",
      },
    ],
  },
  {
    type: "education",
    title: "Master of Science in Computer Science",
    org: "University of Texas at Dallas · Richardson, TX",
    date: "Aug 2024 - May 2026",
    summary:
      "Completed a master's degree in Computer Science with a GPA of 3.67/4.0, focused on databases, algorithms, and web systems.",
  },
  {
    type: "work",
    title: "SDE",
    org: "PyCray Technologies · Noida, India",
    date: "May 2023 - Jun 2024",
    summary:
      "Data engineering for an algorithmic trading product, alongside geospatial search development for a carpooling application.",
    highlights: [
      "Engineered an event-driven pipeline with DynamoDB Streams and AppSync subscriptions that delivered trading position updates with under 50 ms end-to-end latency.",
      "Designed a hot-cold data architecture with DynamoDB for active trades and PostgreSQL for historical analytics, separating operational queries from reporting workloads.",
      "Built Lambda ETL jobs triggered by EventBridge to move trading records into PostgreSQL, handling schema evolution and consistency between data stores.",
      "Implemented Elasticsearch geospatial indexing to optimize location-based ride searches.",
      "Developed analytics pipelines that aggregated active users, open positions, and profit-and-loss metrics for daily business reporting.",
    ],
  },
  {
    type: "education",
    title: "Bachelor of Engineering in Computer Science",
    org: "University of Mumbai",
    date: "Aug 2019 - May 2023",
    summary:
      "Built and deployed course and capstone projects including recommendation and computer vision systems.",
  },
];

function renderEntry(entry) {
  return (
    <>
      <div className="tl-meta">
        <span className={`tl-tag tl-tag-${entry.type}`}>
          {entry.type === "work" ? "Work" : "Education"}
        </span>
        {entry.isCurrent && <span className="tl-now">Current</span>}
        <span className="tl-date">{entry.date}</span>
      </div>
      <h3 className="tl-title">{entry.title}</h3>
      <p className="tl-org">{entry.org}</p>
      {entry.summary && <p className="tl-summary">{entry.summary}</p>}
      {entry.highlights && (
        <ul className="tl-highlights">
          {entry.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}
    </>
  );
}

const TIMELINE_GROUPS = [
  { label: "Experience", entries: TIMELINE_ENTRIES.filter((entry) => entry.type === "work") },
  { label: "Education", entries: TIMELINE_ENTRIES.filter((entry) => entry.type === "education") },
];

function Timeline() {
  return (
    <div className="tl-shell">
      <h2 className="tl-heading">Experience &amp; Education</h2>
      {TIMELINE_GROUPS.map((group) => (
        <div className="tl-group" key={group.label}>
          <h3 className="tl-group-label">{group.label}</h3>
          <ol className="tl-list" aria-label={`${group.label}, most recent first`}>
            {group.entries.map((entry) => (
              <li className="tl-entry" key={entry.title}>
                <span
                  className={`tl-dot ${entry.isCurrent ? "tl-dot-active" : ""}`}
                  aria-hidden="true"
                />
                {entry.roles ? (
                  <div className="tl-body">
                    <div
                      className="tl-parallel-grid"
                      aria-label="Concurrent roles at University of Texas at Dallas"
                    >
                      {entry.roles.map((role) => (
                        <article className="tl-parallel-role" key={role.title}>
                          {renderEntry(role)}
                        </article>
                      ))}
                    </div>
                  </div>
                ) : (
                  <article className="tl-body">{renderEntry(entry)}</article>
                )}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
