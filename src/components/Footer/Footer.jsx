import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Let's Connect:</p>
                <ul className="footer-links">
                    <li>
                        <a
                            href="mailto:karkerakartik27@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link email"
                        >
                            Email
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/kartikkarkera/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link linkedin"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://drive.google.com/file/d/1_awVUCxj8ac7hGFUDARxwIXIl6NkbPpF/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link resume"
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
