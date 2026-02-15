import { useState } from "react";
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

const PREVIEW_FEATURE_COUNT = 4;

const PROJECTS = [

    {
        title: "Traceline - Pipeline Anomaly Alignment",
        summary:
            "A 24-hour hackathon build that aligns anomalies across inspection years and corrects odometer drift in pipeline runs.",
        impact: "Delivered a scalable anomaly alignment workflow for multi-year pipeline inspection analysis.",
        tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Plotly", "Streamlit"],
        details: [
            "Used fixed hardware points as anchors to correct relative distances.",
            "Matched anomalies across 2007, 2015, and 2022 runs.",
            "Built confidence scoring for large-scale anomaly alignment.",
            "Visualized corrosion growth in a 3D digital twin dashboard."
        ],
        link: "http://tidalfrontend.s3-website-us-east-1.amazonaws.com/",
        status: "hackathon",
        awardLabel: "Won 1st Place",
        eventLabel: "TidalHack @ TAMU",
        image: tidalhackImage
    },
    {
        title: "Chihuahua vs Muffin - Data-Centric AI Challenge",
        summary:
            "A 50-hour hackathon project focused on improving model performance through dataset quality improvements.",
        impact: "Achieved ~93.5% classifier accuracy through data-centric optimization.",
        tech: ["Python", "Machine Learning", "3LC"],
        details: [
            "Built a high-performing image classifier for noisy visual classes.",
            "Used embedding-based data selection and revision workflows.",
            "Applied bulk relabeling and dataset curation in 3LC.",
            "Improved accuracy without changing base model architecture."
        ],
        link: "https://github.com/Kartik11082/3LCxAWSHackathon#images---accuracy935",
        status: "hackathon",
        awardLabel: "Won 3rd Place",
        eventLabel: "3LC x AWS Club Hackathon",
        image: ThreeLCxAWS
    },
    {
        title: "Midnight Commits - Global Developer Activity Analytics",
        summary:
            "A real-time analytics platform for exploring where and when developers code, with emphasis on night-time activity patterns.",
        impact: "Live geospatial commit insights with city-level and leaderboard views.",
        tech: ["Python", "Kafka", "FastAPI", "PostgreSQL", "React", "AWS"],
        details: [
            "Streaming GitHub event ingestion with topic-based pipelines.",
            "Real-time globe visualization with day and night shading.",
            "Temporal enrichment for hourly and regional commit trends.",
            "Leaderboard analytics for high-activity cities and countries.",
            "Forecasting experiments on commit activity seasonality."
        ],
        link: "https://github.com/Kartik11082/MidnightCommits",
        status: "in-progress",
        image: midnightCommitsImage
    },
    {
        title: "PotionWatch - Real-time Ticket Discrepancy Detection",
        summary:
            "A 24-hour HackUTD build for monitoring transaction inconsistencies in oil and gas operation records.",
        impact: "Delivered anomaly detection APIs for faster operational investigations.",
        tech: ["Python", "Flask", "React", "Pandas", "NumPy"],
        details: [
            "Created outlier detection logic for suspicious ticket behavior.",
            "Built ticket-matching APIs to detect missing record pairs.",
            "Enabled near real-time checks to reduce manual audit effort."
        ],
        link: "http://18.220.118.210/",
        status: "hackathon",
        eventLabel: "HackUTD 2025",
        image: potionwatchImage
    },
    {
        title: "Noisy to Nice - Data Quality Copilot",
        summary:
            "A web app that profiles CSV quality and recommends targeted cleaning actions for machine learning readiness.",
        impact: "Automated profiling and AI-guided cleanup suggestions for faster data prep.",
        tech: ["Python", "AWS Bedrock", "DynamoDB", "S3"],
        details: [
            "Implemented authenticated upload flow for CSV datasets.",
            "Stored files in S3 and metadata in DynamoDB.",
            "Generated profile reports for missing values and duplicates.",
            "Used Bedrock to produce actionable cleanup guidance."
        ],
        link: "https://github.com/Kartik11082/Noisy-to-Nice---Data-Centric",
        status: "standard",
        image: noisytoniceImage
    },
    {
        title: "TF-IDF Search Engine with PySpark",
        summary: "A movie search engine that ranks results using TF-IDF and cosine similarity.",
        impact: "Improved query relevance using scalable text ranking pipelines.",
        tech: ["Python", "PySpark", "NLP"],
        details: [
            "Implemented tokenization, stopword removal, and weighting.",
            "Built ranking for single-term and multi-term queries.",
            "Integrated metadata retrieval for richer result pages."
        ],
        link: "https://github.com/Kartik11082/Big-Data-Management/blob/main/MovieSearch.ipynb",
        status: "standard",
        image: tfidfImage
    },
    {
        title: "Mushroom Classification with Machine Learning",
        summary: "A classification project that predicts mushroom edibility from structured features.",
        impact: "Trained high-accuracy classifiers on 50,000+ records.",
        tech: ["Python", "scikit-learn", "Pandas", "NumPy"],
        details: [
            "Benchmarked Decision Tree, k-NN, and Random Forest models.",
            "Handled feature preprocessing and missing data treatment.",
            "Used GridSearchCV and cross-validation for tuning."
        ],
        link: "https://github.com/Kartik11082/Machine-Learning",
        status: "standard",
        image: mushroomImage
    },
    {
        title: "FlixTime",
        summary: "A movie recommendation platform combining collaborative and content-based filtering.",
        impact: "Delivered a full-stack recommendation experience with responsive UI.",
        tech: ["Python", "Flask", "React"],
        details: [
            "Built REST APIs for recommendation delivery.",
            "Combined collaborative and content-based recommendation logic.",
            "Deployed a responsive React front end for browsing results."
        ],
        link: "https://flix-time-three.vercel.app/",
        status: "standard",
        image: flixtimeImage
    },
    {
        title: "TermiStack - Terminal StackOverflow Searcher",
        summary: "A CLI experience for searching StackOverflow with lightweight query interpretation.",
        impact: "Reduced context switching by bringing search directly into terminal workflows.",
        tech: ["Python", "Llama", "Web Scraping"],
        details: [
            "Parsed and summarized StackOverflow results in terminal view.",
            "Used a local model workflow for compact query interpretation.",
            "Optimized retrieval flow for developer troubleshooting speed."
        ],
        link: "https://github.com/Kartik11082/TermiStack",
        status: "standard",
        image: terminalImage
    }
];

const Projects = () => {
    const [expanded, setExpanded] = useState({});

    const toggleExpanded = (title) => {
        setExpanded((previous) => ({
            ...previous,
            [title]: !previous[title]
        }));
    };

    return (
        <div className="projects-shell">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-grid">
                {PROJECTS.map((project) => {
                    const isExpanded = Boolean(expanded[project.title]);
                    const hasOverflowDetails = project.details.length > PREVIEW_FEATURE_COUNT;
                    const detailsToRender = isExpanded
                        ? project.details
                        : project.details.slice(0, PREVIEW_FEATURE_COUNT);

                    return (
                        <article
                            key={project.title}
                            className={`project-card glass-panel ${project.status === "in-progress" ? "project-card-in-progress" : ""}`}
                        >
                            <div className="project-media">
                                <img loading="lazy" src={project.image} alt={project.title} />
                                {project.status === "in-progress" && (
                                    <span className="project-badge">In Progress</span>
                                )}
                                {project.awardLabel ? (
                                    <span className="project-badge project-badge-win">
                                        {project.awardLabel}
                                    </span>
                                ) : project.status === "hackathon" && (
                                    <span className="project-badge project-badge-award">Hackathon Build</span>
                                )}
                            </div>

                            <div className="project-body">
                                <h3>{project.title}</h3>
                                <p className="project-summary">{project.summary}</p>
                                <p className="project-impact">
                                    <span>Outcome:</span> {project.impact}
                                </p>

                                <div className="project-tech" aria-label="Project technologies">
                                    {project.tech.map((tech) => (
                                        <span key={`${project.title}-${tech}`} className="tech-pill">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <h4>Highlights</h4>
                                <ul>
                                    {detailsToRender.map((detail, index) => (
                                        <li key={`${project.title}-${index}`}>{detail}</li>
                                    ))}
                                </ul>

                                {hasOverflowDetails && (
                                    <button
                                        type="button"
                                        className="project-expand"
                                        onClick={() => toggleExpanded(project.title)}
                                        aria-expanded={isExpanded}
                                    >
                                        {isExpanded ? "View less" : "View more"}
                                    </button>
                                )}

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    Open Project
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
