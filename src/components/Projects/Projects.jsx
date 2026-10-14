import "./Projects.css";
import potionwatchImage from "../../assets/potionwatch.png";
import ThreeLCxAWS from "../../assets/3LCxAWShackathon.png";
import tidalhackImage from "../../assets/tidalHackImage.png";

const PROJECTS = [
    {
        title: "Traceline",
        summary: "Built an ingestion and alignment pipeline for 15+ years of RCP Inc. inspection records to track corrosion across inspection runs. Designed a matching algorithm that uses fixed hardware anchors to correct odometer drift and align anomalies. Built a React-based 3D dashboard to visualize anomalies and their progression.",
        tech: ["Python", "Flask", "Pandas", "NumPy", "React"],
        link: "http://tidalfrontend.s3-website-us-east-1.amazonaws.com/",
        status: "hackathon",
        awardLabel: "1st Place",
        eventLabel: "TidalHack @ TAMU",
        image: tidalhackImage,
    },
    {
        title: "Chihuahua vs Muffin",
        summary: "Achieved 94% validation accuracy on a ResNet-18 classifier by improving the training data. Used the 3LC Dashboard and embedding analysis to relabel low-confidence samples, rebalance classes, and adjust per-sample training weights. Kept the architecture unchanged and used no external data or pretrained weights.",
        tech: ["Python", "ResNet-18", "3LC", "AWS"],
        link: "https://github.com/Kartik11082/3LCxAWSHackathon#images---accuracy935",
        status: "hackathon",
        awardLabel: "3rd Place",
        eventLabel: "3LC × AWS Club Hackathon",
        image: ThreeLCxAWS,
    },
    {
        title: "PotionWatch",
        summary: "Built a real-time anomaly detection application for oil and gas transaction records in 24 hours at HackUTD 2025. Combined Python and Pandas data processing with a Flask backend and React interface to surface anomalous transactions for review.",
        tech: ["Python", "Flask", "React", "Pandas"],
        link: "http://18.220.118.210/",
        status: "hackathon",
        eventLabel: "HackUTD 2025",
        image: potionwatchImage,
    },
    {
        title: "Waypoint",
        summary: "Built a daily geography game that turns real news stories into map-based challenges with three progressive AI clues. Developed a React interface and a serverless FastAPI backend on AWS Lambda, using DynamoDB for game data and Amazon Bedrock for clue generation.",
        tech: ["FastAPI", "React", "AWS Lambda", "DynamoDB", "Bedrock"],
        link: "https://waypoint.madebykartik.us/",
        status: "standard",
    },
    {
        title: "Midnight Commits",
        summary: "Developing a streaming analytics platform for global developer activity. The pipeline ingests commit events with Kafka and exposes PostgreSQL-backed analytics through FastAPI, with a React map and city-level leaderboards for exploring activity by location.",
        tech: ["Kafka", "FastAPI", "PostgreSQL", "React", "AWS"],
        link: "https://github.com/Kartik11082/MidnightCommits",
        status: "in-progress",
    },
    {
        title: "Noisy to Nice",
        summary: "Built a CSV profiling tool that identifies data quality issues and generates cleanup recommendations with Amazon Bedrock. Uses S3 and DynamoDB alongside Python processing to support data preparation for machine learning.",
        tech: ["Python", "AWS Bedrock", "DynamoDB", "S3"],
        link: "https://github.com/Kartik11082/Noisy-to-Nice---Data-Centric",
        status: "standard",
    },
    {
        title: "TF-IDF Search Engine",
        summary: "Implemented a movie search engine in PySpark using TF-IDF text representations and cosine similarity to rank results by relevance. Applied distributed text processing to turn movie metadata into searchable features.",
        tech: ["Python", "PySpark", "NLP"],
        link: "https://github.com/Kartik11082/Big-Data-Management/blob/main/MovieSearch.ipynb",
        status: "standard",
    },
    {
        title: "Mushroom Classifier",
        summary: "Built a classification pipeline to predict mushroom edibility from structured features. Benchmarked decision trees, k-nearest neighbors, and random forests on 50,000+ records to compare model performance.",
        tech: ["Python", "scikit-learn", "Pandas"],
        link: "https://github.com/Kartik11082/Machine-Learning",
        status: "standard",
    },
    {
        title: "FlixTime",
        summary: "Built a movie recommendation application that combines collaborative filtering with content-based recommendations. Connected the Python and Flask recommendation backend to a React interface for browsing suggested titles.",
        tech: ["Python", "Flask", "React"],
        link: "https://flix-time-three.vercel.app/",
        status: "standard",
    },
    {
        title: "TermiStack",
        summary: "Built a Python command-line tool for searching Stack Overflow from the terminal. Uses a lightweight local Llama model to interpret queries and web scraping to retrieve relevant results.",
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
            <span className="craft-fallback-prompt">{p.title}</span>
            <span className="craft-fallback-sub">Interactive web application</span>
        </div>
    );
}

export const FeaturedCraft = () => (
    <div className="craft-shell">
        <h2 className="craft-heading">Projects</h2>
        <p className="craft-sub">Selected work in backend systems, data engineering, and applied machine learning.</p>
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
                        {p.eventLabel && <p className="craft-event">{p.eventLabel}</p>}
                        <p className="craft-summary">{p.summary}</p>
                        <div className="hack-tech">
                            {p.tech.map((t) => (
                                <span key={t} className="tech-pill">{t}</span>
                            ))}
                        </div>
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="craft-link">
                            {p.link.includes("github.com") ? "View source" : "View project"} <span aria-hidden="true">↗</span>
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
                            {p.tech.map(t => (
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
                        {p.tech.map(t => (
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
