import "./Card.css";
import flixtimeImage from "../../assets/3.png"
import telegramImage from "../../assets/2.png"
import handImage from "../../assets/4.png"
import terminalImage from "../../assets/5.png"


const Card = () => {
    const classNames = {
        "Python": "py",
        "Flask": "flk",
        "ReactJS": "react",
        "TensorFlow": "tf",
        "Selenium": "seln",
        "Llama 3.2": "llama",
        "Web Scraping": "ws",
        "SQL": "sql",
        "HTML": "html",
        "CSS": "css",
        "GraphQL": "graphql",
        "Django": "djn",
        "Django REST Framework": "drf",
        "AWS": "aws",
        "Firebase": "fb",
        "Git": "git",
        "MongoDB": "Mongo",
        "Elasticsearch": "ES",
        "DynamoDB": "dynamo",
        "JavaScript": "js",
        "Machine Learning": "ml",
        "Artificial Intelligence": "ai",
    }

    const cards = [
        {
            "title": "FlixTime",
            "description": "A movie recommendation system using content and collaborative based filtering",
            "details": {
                "technologies": ["Python", "Flask", "ReactJS"],
                "features": [
                    "Hybrid recommendation approach combining collaborative and content-based filtering.",
                    "RESTful APIs built with Flask.",
                    "Dynamic, responsive UI built with ReactJS."
                ],
                "outcome": "Enhanced movie suggestions, improving user engagement."
            },
            "image": flixtimeImage,
            "link": "https://github.com/PVPPBoolean/FlixTime"
        },
        {
            "title": "Hand Sign Recognition",
            "description": "A web app for detecting and interpreting hand signs",
            "details": {
                "technologies": ["Python", "TensorFlow", "ReactJS"],
                "features": [
                    "Real-time detection of ASL hand signs.",
                    "Custom dataset of hand signs for model fine-tuning.",
                    "Web interface for camera-based detection."
                ],
                "outcome": "Improved communication for the hearing-impaired community."
            },
            "image": handImage,
            "link": "https://github.com/Kartik11082/TFODApp"
        },
        {
            "title": "Automated Telegram Broadcasting",
            "description": "Tool to automate Telegram group broadcasting",
            "details": {
                "technologies": ["Python", "Selenium"],
                "features": [
                    "Automates messaging for multiple groups.",
                    "Browser automation for reduced manual intervention.",
                    "Scalable solution for large group communication."
                ],
                "outcome": "Increased efficiency in managing large-scale communications."
            },
            "image": telegramImage,
            "link": ""
        },
        {
            "title": "Terminal-based StackOverflow Searcher",
            "description": "CLI tool to search in StackOverflow",
            "details": {
                "technologies": ["Python", "Llama 3.2", "Web Scraping"],
                "features": [
                    "Search and parse StackOverflow queries in the terminal.",
                    "Local LLM for efficient query interpretation.",
                    "Simplified solution retrieval for developers."
                ],
                "outcome": "Streamlined access to StackOverflow solutions."
            },
            "image": terminalImage,
            "link": "https://github.com/Kartik11082/TermiStack"
        }
    ]


    return (
        <div className="app-container dark">
            <div className="card-container">
                {cards.map((card, index) => (
                    <a key={index} href={card.link} target="_blank" rel="noopener noreferrer">
                        <div className="card" key={index}>
                            <div className="card-image">
                                <img src={card.image} alt={`Card ${index + 1}`} />
                            </div>
                            <div className="card-title">
                                <h2>{card.title}</h2>
                            </div>
                            <div className="card-info">
                                <p>{card.description}</p>

                                {/* <h3>Technologies:</h3> */}
                                <div className="techs">
                                    {/* <span key={i} className={tech.replace(/ /g, '').replace(/\./g, "")}>{tech}</span> */}
                                    {card.details.technologies.map((tech, i) => (
                                        < span key={i} className={classNames[tech]} > {tech}</span>
                                    ))}
                                </div>

                                <h3>Features:</h3>
                                <ul>
                                    {card.details.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>

                                {/* <h3>Outcome:</h3>
                            <p>{card.details.outcome}</p> */}

                                {/* <a href={card.link} target="_blank" rel="noopener noreferrer">
                                    Learn More
                                </a> */}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Card;
