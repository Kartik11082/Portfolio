import "./Projects.css";
import flixtimeImage from "../../assets/flixtime.jpg";
import terminalImage from "../../assets/stacksearch.jpg";
import mushroomImage from "../../assets/mushroom.png";
import tfidfImage from "../../assets/tfidf.webp";
import potionwatchImage from "../../assets/potionwatch.png";
import ThreeLCxAWS from "../../assets/3LCxAWShackathon.png";
import noisytoniceImage from "../../assets/noisytoniceImage.png";
import tidalhackImage from "../../assets/tidalHackImage.png";
import midnightCommitsImage from "../../assets/midnightCommitsImage.png";
import waypointImage from "../../assets/waypoint.png";

const PROJECTS = [
    {
        title: "Traceline",
        summary: "Aligns pipeline inspection anomalies across years and corrects odometer drift in a 24-hour hackathon build.",
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
        tech: ["FastAPI", "React", "AWS Lambda", "DynamoDB", "Bedrock"],
        link: "https://waypoint.madebykartik.us/",
        status: "standard",
    },
    {
        title: "Midnight Commits",
        summary: "Real-time analytics for global developer activity — geospatial commit insights with city-level leaderboards.",
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

const imageMap = {
    Traceline: tidalhackImage,
    "Chihuahua vs Muffin": ThreeLCxAWS,
    PotionWatch: potionwatchImage,
};

const hackathons = PROJECTS.filter(p => p.status === "hackathon");
const others = PROJECTS.filter(p => p.status !== "hackathon");

const Projects = () => (
    <div className="projects-shell">
        {/* ── Hackathon Wins ── */}
        <h2 className="projects-heading">Hackathons</h2>
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
        <h2 className="projects-heading projects-heading-other">Projects</h2>
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

export default Projects;
