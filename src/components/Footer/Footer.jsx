import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Connect with me:</p>
                <ul className="footer-links">
                    <li>
                        <a
                            href="mailto:kartik.karkera@utdallas.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            Email
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/kartik-karkera/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://example.com/resume.pdf"
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
