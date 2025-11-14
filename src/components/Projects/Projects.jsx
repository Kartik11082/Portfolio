import "./Projects.css";
import flixtimeImage from "../../assets/flixtime.jpg"
import terminalImage from "../../assets/stacksearch.jpg"
import mushroomImage from "../../assets/mushroom.png"
import tfidfImage from "../../assets/tfidf.webp"
import potionwatchImage from "../../assets/potionwatch.png"


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
        "PySpark": "PySpark",
        "NLP": "nlp",
        "scikit-learn": "sklearn",
        "Pandas": "pandas",
        "NumPy": "numpy",
    }

    const cards = [
        {
            title: "🧙‍♂️PotionWatch",
            description:
                "Real-time discrepancy detection system for monitoring potion flow data - Built at HackUTD XI 2025 (North America's largest hackathon)",
            hackathon: true,
            hackathonName: "HackUTD 2025",
            company: "EOG Resources",
            details: {
                technologies: ["Python", "Flask", "ReactJS", "Pandas", "NumPy"],
                features: [
                    "Developed automated fraud detection system for EOG Resources to identify suspicious tickets and missing records across transactions, preventing revenue loss",
                    "Built RESTful API with statistical outlier detection and real-time ticket-matching algorithms and enabling operations team to investigate anomalies"
                ],
            },
            image: potionwatchImage,
            link: "https://github.com/Kartik11082/EOG-HackUTD25",
        },
        {
            "title": "TF-IDF Search Engine using PySpark",
            "description": "A movie search engine using TF-IDF and cosine similarity ranking.",
            "details": {
                "technologies": ["Python", "PySpark", "NLP"],
                "features": [
                    "Implements Term Frequency-Inverse Document Frequency (TF-IDF) for movie search ranking.",
                    "Text preprocessing techniques including tokenization, stopword removal, and term weighting.",
                    "Efficient query handling for single-term and multi-term searches.",
                    "Integration with a metadata retrieval system to display relevant movie information."
                ],
            },
            "image": tfidfImage,
            "link": "https://github.com/Kartik11082/Big-Data-Management/blob/main/MovieSearch.ipynb"
        },
        {
            "title": "Mushroom Classification using Machine Learning",
            "description": "A machine learning model for predicting mushroom edibility.",
            "details": {
                "technologies": ["Python", "scikit-learn", "Pandas", "NumPy"],
                "features": [
                    "Built classification models using Decision Tree, k-NN, and Random Forest.",
                    "Processed a dataset of 50,000+ mushroom samples, handling missing values and feature selection.",
                    "Hyperparameter tuning with GridSearchCV and cross-validation.",
                    "Achieved high classification accuracy for determining mushroom edibility.",
                ],
            },
            "image": mushroomImage,
            "link": "https://github.com/Kartik11082/Machine-Learning/blob/main/Project_1/main.ipynb"
        },
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
            },
            "image": flixtimeImage,
            "link": "https://flix-time-three.vercel.app/"
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
            },
            "image": terminalImage,
            "link": "https://github.com/Kartik11082/TermiStack"
        }
    ]


    return (
        <div className="app-container dark">
            <hr></hr>
            <h1>Projects</h1>
            <div className="card-container">
                {cards.map((card, index) => (
                    <a key={index} href={card.link} target="_blank" rel="noopener noreferrer" className="card-link">
                        <div className="card">
                            {/* Hackathon Badge */}
                            {card.hackathon && (
                                <div className="hackathon-badge">
                                    <span className="badge-text">{card.hackathonName}</span>
                                    <span className="company-text">for {card.company}</span>
                                </div>
                            )}

                            <div className="card-image">
                                <img src={card.image} alt={card.title} />
                            </div>
                            <a href={card.link} target="_blank" rel="noopener noreferrer" className="card-title-link">
                                <div className="card-title">
                                    <h2>{card.title}</h2>
                                </div>
                            </a>
                            <div className="card-info">
                                <p>{card.description}</p>

                                <div className="techs">
                                    {card.details.technologies.map((tech, i) => (
                                        <span key={i} className={classNames[tech]}>{tech}</span>
                                    ))}
                                </div>

                                <h3>Features:</h3>
                                <ul>
                                    {card.details.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Card;