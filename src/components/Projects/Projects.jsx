import "./Projects.css";
import flixtimeImage from "../../assets/flixtime.jpg"
// import telegramImage from "../../assets/2.png"
// import handImage from "../../assets/hsr.jpg"
import terminalImage from "../../assets/stacksearch.jpg"
import mushroomImage from "../../assets/mushroom.png"
import tfidfImage from "../../assets/tfidf.webp"

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
        // add the new class names like pyspark scikitlearn and nlp
        "PySpark": "PySpark",
        "NLP": "nlp",
        "scikit-learn": "sklearn",
        "Pandas": "pandas",
        "NumPy": "numpy",
    }

    const cards = [
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
                "outcome": "Improved search accuracy and relevance using NLP techniques."
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
                "outcome": "Accurate and efficient mushroom classification using machine learning."
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
                "outcome": "Enhanced movie suggestions, improving user engagement."
            },
            "image": flixtimeImage,
            "link": "https://flix-time-three.vercel.app/"
        },
        // {
        //     "title": "Hand Sign Recognition",
        //     "description": "A web app for detecting and interpreting hand signs",
        //     "details": {
        //         "technologies": ["Python", "TensorFlow", "ReactJS"],
        //         "features": [
        //             "Real-time detection of ASL hand signs.",
        //             "Custom dataset of hand signs for model fine-tuning.",
        //             "Web interface for camera-based detection."
        //         ],
        //         "outcome": "Improved communication for the hearing-impaired community."
        //     },
        //     "image": handImage,
        //     "link": "https://github.com/Kartik11082/TFODApp"
        // },
        // {
        //     "title": "Automated Telegram Broadcasting",
        //     "description": "Tool to automate Telegram group broadcasting",
        //     "details": {
        //         "technologies": ["Python", "Selenium"],
        //         "features": [
        //             "Automates messaging for multiple groups.",
        //             "Browser automation for reduced manual intervention.",
        //             "Scalable solution for large group communication."
        //         ],
        //         "outcome": "Increased efficiency in managing large-scale communications."
        //     },
        //     "image": telegramImage,
        //     "link": ""
        // },
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
            <hr></hr>
            <h1>Projects</h1>
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
