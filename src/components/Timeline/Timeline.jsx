import "./Timeline.css";

const TIMELINE_ENTRIES = [
    {
        type: "work",
        title: "SDE Intern",
        org: "Kapi Advisors · Dallas, TX",
        date: "Jul 2026 - Present",
        isCurrent: true,
        summary: "Backend engineering for a procurement platform, covering quotation evaluation, award optimization, and buyer and supplier workflows.",
        highlights: [
            "Developed deterministic scoring microservices that normalize currencies, pack sizes, discounts, taxes, and freight, giving buyers a consistent basis for item-level quotation comparisons.",
            "Built an award optimization engine with Google OR-Tools CP-SAT to minimize sourcing costs or maximize supplier scores while enforcing demand, budget, minimum-order, and supplier-count constraints.",
            "Implemented a data adapter that maps supplier quotes, pricing tiers, and eligibility into solver inputs and returns allocation recommendations for buyer review.",
            "Designed APIs and PostgreSQL models for quotation submissions, clarification rounds, and approvals, with auditable histories of buyer and supplier decisions.",
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
        summary: "Completed a master's degree in Computer Science with a GPA of 3.67/4.0, focused on databases, algorithms, and web systems.",
    },
    {
        type: "work",
        title: "Data Engineer",
        org: "PyCray Technologies · Noida, India",
        date: "May 2023 - Jun 2024",
        summary: "Data engineering for an algorithmic trading product, alongside geospatial search development for a carpooling application.",
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
        summary: "Built and deployed course and capstone projects including recommendation and computer vision systems.",
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
                    {entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
            )}
        </>
    );
}

function Timeline() {
    return (
        <div className="tl-shell">
            <h2 className="tl-heading">Experience &amp; Education</h2>
            <ol className="tl-list" aria-label="Experience and education, most recent start date first">
                {TIMELINE_ENTRIES.map((entry) => (
                    <li className="tl-entry" key={entry.title}>
                        <span className={`tl-dot ${entry.isCurrent ? "tl-dot-active" : ""}`} aria-hidden="true" />
                        {entry.roles ? (
                            <div className="tl-body">
                                <div className="tl-parallel-grid" aria-label="Concurrent roles at University of Texas at Dallas">
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
    );
}

export default Timeline;
