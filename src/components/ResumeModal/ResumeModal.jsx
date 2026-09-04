import { useEffect } from "react";
import "./ResumeModal.css";

const ResumeModal = ({ isOpen, onClose }) => {
    // Prevent background body scrolling when the modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Handle pressing the escape key to close the modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="resume-modal-overlay" onClick={onClose} aria-modal="true" role="dialog">
            <div className="resume-modal-container glass-panel" onClick={(e) => e.stopPropagation()}>
                <div className="resume-modal-header">
                    <div className="terminal-dots">
                        <span className="dot dot-red" onClick={onClose} title="Close window"></span>
                        <span className="dot dot-yellow" onClick={onClose} title="Minimize window"></span>
                        <span className="dot dot-green" title="Interactive viewing"></span>
                    </div>
                    <div className="resume-modal-title">
                        Resume Viewer
                    </div>
                    <div className="resume-modal-actions">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="modal-action-btn open-btn"
                            title="Open in new tab (best on mobile)"
                        >
                            Open
                        </a>
                        <a
                            href="/resume.pdf"
                            download="Kartik_Karkera_Resume.pdf"
                            className="modal-action-btn download-btn"
                            title="Download PDF directly"
                        >
                            Download
                        </a>
                        <button className="modal-action-btn close-btn" onClick={onClose} aria-label="Close window">
                            Esc
                        </button>
                    </div>
                </div>
                <div className="resume-modal-body">
                    <div className="resume-fallback">
                        <p>Preview not supported on this device? <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Open resume in new tab</a> or tap Download.</p>
                    </div>
                    <iframe
                        src="/resume.pdf#toolbar=0"
                        title="Kartik Karkera Resume"
                        className="resume-iframe"
                    />
                </div>
            </div>
        </div>
    );
};

export default ResumeModal;
