import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (id) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                <div className="navbar-logo" onClick={() => scrollToSection("#root")}>
                    KK
                </div>

                <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
                    {/* Assuming section IDs exist or will be added. 
                        If not, we'll map them to generic locations for now */}
                    <li className="nav-item">
                        <span className="nav-link" onClick={() => scrollToSection("#root")}>Home</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" onClick={() => scrollToSection(".age")}>About</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" onClick={() => scrollToSection(".certs-container")}>Certifications</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" onClick={() => scrollToSection(".footer")}>Contact</span>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
