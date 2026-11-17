import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="section-content footer-content glass-panel">
                <h2>Let&apos;s Connect</h2>
                <p className="footer-description">
                    Always happy to talk about backend systems, data pipelines, and AI agents.
                </p>
                <a href="mailto:karkerakartik27@gmail.com" className="footer-link" data-umami-event="email-click" data-umami-event-from="footer">
                    karkerakartik27@gmail.com
                </a>
                <p className="footer-credit">Designed and built by Kartik Karkera</p>
            </div>
        </footer>
    );
};

export default Footer;
