import "./Projects.css";
import flixtimeImage from "../../assets/flixtime.jpg"
import terminalImage from "../../assets/stacksearch.jpg"
import mushroomImage from "../../assets/mushroom.png"
import tfidfImage from "../../assets/tfidf.webp"
import potionwatchImage from "../../assets/potionwatch.png"
import ThreeLCxAWS from "../../assets/3LCxAWShackathon.png"
import noisytoniceImage from "../../assets/noisytoniceImage.png"


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
        "3LC dashboard": "3lc",
    }

    const cards = [
        {
            title: "Chihuahua vs Muffin: Data-Centric AI Challenge",
            description:
                "A 50-hour, on-campus hackathon where participants build a high-performing image classifier under real-world constraints.",
            hackathon: true,
            hackathonName: "3LC x AWS Club Hackathon",
            award: "🏆 3rd Place",
            company: "3LC",
            details: {
                technologies: ["Python", "Machine Learning", "3LC dashboard"],
                features: [
                    "Built a high-performing image classifier for the \"Chihuahua vs Muffin\" task",
                    "Utilized data-centric techniques: labeling, curation, revisioning, and embedding-based selection",
                    "Used 3LC dashboard for embedding analysis and bulk labeling",
                    "Achieved ~93.5% accuracy by improving dataset quality without changing the model"
                ],
            },
            image: ThreeLCxAWS,
            link: "https://github.com/Kartik11082/3LCxAWSHackathon",
        },
        {
            title: "🧙‍♂️PotionWatch",
            description:
                "A 24 hour hackathon where I built a Real-time discrepancy detection system for monitoring potion flow data in the oil and gas industry.",
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
            "title": "Noisy to Nice – Data Quality Copilot",
            "description": "A web app that uploads CSVs, profiles data quality, and uses AI to recommend cleaning steps for better ML readiness.",
            "details": {
                "technologies": [
                    "Python",
                    "AWS Bedrock",
                    "ydata-profiling",
                ],
                "features": [
                    "Simple email + password auth with JWT.",
                    "CSV uploaded straight to S3 and metadata stored in DynamoDB.",
                    "Auto-generated profiling report with basic stats and distributions.",
                    "AWS Bedrock-powered tips on what's wrong with your data and how to fix it.",
                    "Flags common issues like missing values, duplicates, and tiny datasets.",
                    "Clear suggestions to make the dataset more ML-ready."
                ]
            },
            "image": noisytoniceImage,
            "link": "https://github.com/Kartik11082/Noisy-to-Nice---Data-Centric"
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
            "link": "https://github.com/Kartik11082/Machine-Learning"
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
                                    {card.award && (
                                        <div className="award-section">
                                            <span className="award-text">{card.award}</span>
                                        </div>
                                    )}
                                    <div className="hackathon-info">
                                        <span className="hackathon-name">{card.hackathonName}</span>
                                        <span className="company-text">for {card.company}</span>
                                    </div>
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