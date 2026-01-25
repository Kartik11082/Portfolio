import "./TopBar.css";

const TopBar = () => {
    return (
        <div className="top-bar">
            <a
                href="https://www.linkedin.com/in/kartikkarkera/"
                target="_blank"
                rel="noopener noreferrer"
                className="top-link"
            >
                LinkedIn
            </a>
            <a
                href="https://drive.google.com/file/d/1o7eaKsKGiQn15TxzYwixJGSW9sZ8o5bF/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="top-link"
            >
                Resume
            </a>
        </div>
    );
};

export default TopBar;
