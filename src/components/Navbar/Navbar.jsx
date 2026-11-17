import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ isReady = true, onOpenResume }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = [
        { label: "Home", href: "#home" },
        { label: "Experience", href: "#timeline" },
        { label: "Projects", href: "#projects" },
        { label: "Certifications", href: "#certifications" },
        { label: "Contact", href: "#contact" }
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            element.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
            setMenuOpen(false);
        }
    };

    return (
        <nav
            className={`navbar ${scrolled ? "scrolled" : ""} ${isReady ? "nav-ready" : ""}`}
            aria-label="Primary"
        >
            <div className="navbar-container">
                <button
                    className={`menu-icon ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen}
                    aria-controls="nav-menu"
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul id="nav-menu" className={`nav-menu ${menuOpen ? "active" : ""}`}>
                    {navItems.map((item) => (
                        <li className="nav-item" key={item.href}>
                            <button className="nav-link" onClick={() => scrollToSection(item.href)}>
                                {item.label}
                            </button>
                        </li>
                    ))}
                    <li className="nav-item">
                        <button
                            className="nav-link resume-button"
                            data-umami-event="resume-open"
                            data-umami-event-from="nav"
                            onClick={() => {
                                if (onOpenResume) onOpenResume();
                                setMenuOpen(false);
                            }}
                        >
                            Resume
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
