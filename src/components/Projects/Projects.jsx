import "./Projects.css";
import flixtimeImage from "../../assets/3.png"
import telegramImage from "../../assets/2.png"
import handImage from "../../assets/4.png"
import terminalImage from "../../assets/5.png"

const Projects = () => {
    const PROJECTS = {
        "projects": [
            {
                "title": "FlixTime",
                "description": "A movie recommendation system designed to enhance user experience by suggesting films based on individual preferences.",
                "details": {
                    "technologies": ["Python", "Flask"],
                    "features": [
                        "Collaborative and content-based filtering techniques for recommendations.",
                        "Integrated IMDb dataset for accurate predictions.",
                        "Interactive UI for seamless navigation."
                    ],
                    "outcome": "Improved user engagement by tailoring movie suggestions."
                },
                "image": flixtimeImage,
                "link": "https://example.com/flixTime"
            },
            {
                "title": "Hand Sign Recognition",
                "description": "A web application capable of detecting and interpreting hand signs using AI.",
                "details": {
                    "technologies": ["Python", "Flask"],
                    "features": [
                        "Real-time detection of ASL hand signs.",
                        "Machine learning algorithms for recognition.",
                        "User-friendly interface for accessibility."
                    ],
                    "outcome": "Facilitated communication for the hearing-impaired community."
                },
                "image": handImage,
                "link": "https://example.com/handSignRecognition"
            },
            {
                "title": "Automated Telegram Broadcasting",
                "description": "A tool to automate group broadcasting in Telegram using Selenium.",
                "details": {
                    "technologies": ["Python", "Selenium"],
                    "features": [
                        "Automated messaging for multiple groups.",
                        "Reduced manual intervention through browser automation.",
                        "Improved scalability for group communication."
                    ],
                    "outcome": "Enhanced efficiency in managing large-scale Telegram communications."
                },
                "image": telegramImage,
                "link": "https://example.com/telegramBroadcasting"
            },
            {
                "title": "Terminal-based StackOverflow Searcher",
                "description": "A CLI tool to search and parse StackOverflow queries using a local LLM.",
                "details": {
                    "technologies": ["Python", "Llama 3.2", "Web Scraping"],
                    "features": [
                        "Terminal-based search functionality.",
                        "Local LLM for intelligent query parsing.",
                        "Simplified solution retrieval process for developers."
                    ],
                    "outcome": "Streamlined access to StackOverflow solutions."
                },
                "image": terminalImage,
                "link": "https://example.com/stackOverflowSearcher"
            }
        ]
    };

    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="grid-container">
                {PROJECTS.projects.map((project, index) => (
                    <div key={index} className="grid-item">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            <div
                                className="thumbnail"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />
                        </a>
                        <div className="grid-item-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="details">
                                <h4>Technologies:</h4>
                                <ul>
                                    {project.details.technologies.map((tech, idx) => (
                                        <li key={idx}>{tech}</li>
                                    ))}
                                </ul>
                                <h4>Features:</h4>
                                <ul>
                                    {project.details.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                                <h4>Outcome:</h4>
                                <p>{project.details.outcome}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
