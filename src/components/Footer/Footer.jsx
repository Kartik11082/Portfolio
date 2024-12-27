import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Connect with me:</p>
                <ul className="footer-links">
                    <li>
                        <a
                            href="mailto:karkerakartik27@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            Email
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/kartikkarkera/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://drive.google.com/file/d/1_awVUCxj8ac7hGFUDARxwIXIl6NkbPpF/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
