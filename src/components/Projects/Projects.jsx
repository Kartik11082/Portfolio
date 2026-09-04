import "./Projects.css";
import potionwatchImage from "../../assets/potionwatch.png";
import ThreeLCxAWS from "../../assets/3LCxAWShackathon.png";
import tidalhackImage from "../../assets/tidalHackImage.png";

const PROJECTS = [
    {
        title: "Traceline",
        summary: "Aligns pipeline inspection anomalies across years and corrects odometer drift in a 24-hour hackathon build.",
        problem: "Pipeline anomaly reports drift year over year, making repeats hard to match.",
        built: "Year-over-year alignment + drift correction with visual QA in Streamlit/Plotly.",
        tech: ["Python", "Pandas", "Scikit-learn", "Plotly", "Streamlit"],
        link: "http://tidalfrontend.s3-website-us-east-1.amazonaws.com/",
        status: "hackathon",
        awardLabel: "1st Place",
        eventLabel: "TidalHack @ TAMU",
        image: tidalhackImage,
    },
    {
        title: "Chihuahua vs Muffin",
        summary: "Data-centric AI challenge — improved classifier accuracy to ~93.5% through dataset curation, not model changes.",
        problem: "Model was stuck because the dataset had bad labels and weak classes.",
        built: "Curated and rebalanced the dataset, kept test set clean, versioned every change.",
        tech: ["Python", "Machine Learning", "3LC"],
        link: "https://github.com/Kartik11082/3LCxAWSHackathon#images---accuracy935",
        status: "hackathon",
        awardLabel: "3rd Place",
        eventLabel: "3LC × AWS Club Hackathon",
        image: ThreeLCxAWS,
    },
    {
        title: "PotionWatch",
        summary: "Real-time anomaly detection for oil & gas transaction records — built in 24 hours at HackUTD.",
        tech: ["Python", "Flask", "React", "Pandas"],
        link: "http://18.220.118.210/",
        status: "hackathon",
        eventLabel: "HackUTD 2025",
        image: potionwatchImage,
    },
    {
        title: "Waypoint",
        summary: "Daily geography news guessing game. Players locate real stories on a world map using three AI clues.",
        problem: "News games are either trivial or stale after one play.",
        built: "Daily seed + 3 progressive AI clues on a map, serverless API on Lambda + DynamoDB.",
        tech: ["FastAPI", "React", "AWS Lambda", "DynamoDB", "Bedrock"],
        link: "https://waypoint.madebykartik.us/",
        status: "standard",
    },
    {
        title: "Midnight Commits",
        summary: "Real-time analytics for global developer activity — geospatial commit insights with city-level leaderboards.",
        problem: "Global dev activity is noisy and hard to explore by place and time.",
        built: "Streaming ingest (Kafka) → FastAPI + Postgres → map + leaderboards UI.",
        tech: ["Kafka", "FastAPI", "PostgreSQL", "React", "AWS"],
        link: "https://github.com/Kartik11082/MidnightCommits",
        status: "in-progress",
    },
    {
        title: "Noisy to Nice",
        summary: "Profiles CSV quality and generates AI-guided cleanup actions for ML readiness.",
        tech: ["Python", "AWS Bedrock", "DynamoDB", "S3"],
        link: "https://github.com/Kartik11082/Noisy-to-Nice---Data-Centric",
        status: "standard",
    },
    {
        title: "TF-IDF Search Engine",
        summary: "Movie search engine ranking results with TF-IDF and cosine similarity over PySpark.",
        tech: ["Python", "PySpark", "NLP"],
        link: "https://github.com/Kartik11082/Big-Data-Management/blob/main/MovieSearch.ipynb",
        status: "standard",
    },
    {
        title: "Mushroom Classifier",
        summary: "Predicts mushroom edibility from structured features. Benchmarked DT, k-NN, and Random Forest on 50k+ records.",
        tech: ["Python", "scikit-learn", "Pandas"],
        link: "https://github.com/Kartik11082/Machine-Learning",
        status: "standard",
    },
    {
        title: "FlixTime",
        summary: "Movie recommendation platform combining collaborative and content-based filtering with a React front end.",
        tech: ["Python", "Flask", "React"],
        link: "https://flix-time-three.vercel.app/",
        status: "standard",
    },
    {
        title: "TermiStack",
        summary: "CLI tool for searching StackOverflow with lightweight local-model query interpretation.",
        tech: ["Python", "Llama", "Web Scraping"],
        link: "https://github.com/Kartik11082/TermiStack",
        status: "standard",
    },
];

const FEATURED_TITLES = ["Traceline", "Chihuahua vs Muffin", "Waypoint"];

const featured = PROJECTS.filter((p) => FEATURED_TITLES.includes(p.title));
const rest = PROJECTS.filter((p) => !FEATURED_TITLES.includes(p.title));
const hackathons = rest.filter(p => p.status === "hackathon");
const others = rest.filter(p => p.status !== "hackathon");

function CraftMedia({ p }) {
    if (p.image) {
        return (
            <div className="craft-media">
                <img src={p.image} alt={p.title} loading="lazy" />
            </div>
        );
    }
    return (
        <div className="craft-media craft-media-fallback" aria-hidden="true">
            <span className="craft-fallback-prompt">$ ./run --craft {p.title.toLowerCase().replace(/\s+/g, "-")}</span>
            <span className="craft-fallback-sub">github ↗ · readme · notes</span>
        </div>
    );
}

export const FeaturedCraft = () => (
    <div className="craft-shell">
        <p className="craft-kicker">$ ls ./projects --featured</p>
        <h2 className="craft-heading">Projects</h2>
        <p className="craft-sub">Hackathon wins first — 1st + 3rd — plus Waypoint. GitHub only.</p>
        <div className="craft-grid">
            {featured.map((p) => (
                <article key={p.title} className="craft-card glass-panel">
                    <CraftMedia p={p} />
                    <div className="craft-body">
                        <div className="craft-top">
                            <h3 className="craft-title">{p.title}</h3>
                            {p.status === "in-progress" ? (
                                <span className="wip-badge">WIP</span>
                            ) : p.awardLabel ? (
                                <span className="hbadge hbadge-first">{p.awardLabel}</span>
                            ) : null}
                        </div>
                        {p.problem && <p className="craft-line"><span className="craft-label">Problem:</span> {p.problem}</p>}
                        {p.built && <p className="craft-line"><span className="craft-label">Built:</span> {p.built}</p>}
                        <p className="craft-summary">{p.summary}</p>
                        <div className="hack-tech">
                            {p.tech.slice(0, 4).map((t) => (
                                <span key={t} className="tech-pill">{t}</span>
                            ))}
                        </div>
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="craft-link">
                            {p.link.includes("github.com") ? "GitHub" : "Visit"} <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </article>
            ))}
        </div>
    </div>
);

export const ProjectsGrid = () => (
    <div className="projects-shell">
        {/* ── Remaining hackathon ── */}
        <h2 className="projects-heading projects-heading-other">More hackathons</h2>
        <div className="hack-grid">
            {hackathons.map(p => (
                <a
                    key={p.title}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hack-card glass-panel ${p.awardLabel?.includes("1st") ? "hack-first" : ""}`}
                >
                    <div className="hack-media">
                        <img src={p.image} alt={p.title} loading="lazy" />
                        <div className="hack-badges">
                            {p.awardLabel && (
                                <span className={`hbadge ${p.awardLabel.includes("1st") ? "hbadge-first" : "hbadge-win"}`}>
                                    {p.awardLabel}
                                </span>
                            )}
                            <span className="hbadge hbadge-event">{p.eventLabel}</span>
                        </div>
                    </div>
                    <div className="hack-body">
                        <h3 className="hack-title">{p.title}</h3>
                        <p className="hack-summary">{p.summary}</p>
                        <div className="hack-tech">
                            {p.tech.slice(0, 4).map(t => (
                                <span key={t} className="tech-pill">{t}</span>
                            ))}
                        </div>
                    </div>
                </a>
            ))}
        </div>

        {/* ── Other Projects ── */}
        <h2 className="projects-heading projects-heading-other">More projects</h2>
        <div className="other-grid">
            {others.map(p => (
                <a
                    key={p.title}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`other-card glass-panel ${p.status === "in-progress" ? "other-card-wip" : ""}`}
                >
                    <div className="other-header">
                        <span className="other-title">{p.title}</span>
                        {p.status === "in-progress" && <span className="wip-badge">WIP</span>}
                        <span className="other-arrow">↗</span>
                    </div>
                    <p className="other-summary">{p.summary}</p>
                    <div className="other-tech">
                        {p.tech.slice(0, 4).map(t => (
                            <span key={t} className="tech-pill">{t}</span>
                        ))}
                    </div>
                </a>
            ))}
        </div>
    </div>
);

const Projects = () => (
    <>
        <FeaturedCraft />
        <div style={{ height: "2.5rem" }} />
        <ProjectsGrid />
    </>
);

export default Projects;
