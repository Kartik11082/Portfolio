import DEAAWSBadge from "../../assets/AWSDEACO1Badge.png";
import SAAAWSBadge from "../../assets/AWSSAABadge.png";
import DatabricksSparkBadge from "../../assets/DatabricksSparkBadge.png";
import "./Certification.css";

const certifications = [
    {
        title: "AWS Certified Solutions Architect - Associate",
        issuer: "Amazon Web Services",
        badgeUrl: SAAAWSBadge,
        issued: "2025",
        level: "Associate",
        track: "Architecture",
        skills: ["AWS", "Cloud Design", "Security"],
        credlyLink: "https://www.credly.com/badges/b15fddf3-6766-433e-b48c-aaceff853a53/public_url",
    },
    {
        title: "AWS Certified Data Engineer - Associate",
        issuer: "Amazon Web Services",
        badgeUrl: DEAAWSBadge,
        issued: "2025",
        level: "Associate",
        track: "Data Engineering",
        skills: ["AWS", "ETL", "Analytics"],
        credlyLink: "https://www.credly.com/badges/8adf2868-1640-4895-95ec-7a0e9704d1d1/public_url",
    },
    {
        title: "Databricks Certified Associate Developer for Apache Spark",
        issuer: "Databricks",
        badgeUrl: DatabricksSparkBadge,
        issued: "2024",
        level: "Associate",
        track: "Spark",
        skills: ["Databricks", "PySpark", "Distributed Data"],
        credlyLink: "https://credentials.databricks.com/75f367a3-cf8c-45ce-b39d-c3384487bf9d#acc.JibSoBl7",
    },
];

function renderPill(label, variant = "default") {
    return <span className={`cert-pill cert-pill-${variant}`}>{label}</span>;
}

const Certifications = () => {
    return (
        <section className="cert-shell">
            <div className="cert-header">
                <h2 className="cert-heading">Certifications</h2>
                <p className="cert-summary-line">{certifications.length} verified credentials across cloud and data systems.</p>
            </div>

            <div className="cert-list">
                {certifications.map((cert, index) => (
                    <article className={`cert-row glass-panel reveal reveal-delay-${(index % 3) + 1} is-visible`} key={cert.title}>
                        <a
                            href={cert.credlyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-badge-frame"
                            aria-label={`Open credential for ${cert.title}`}
                        >
                            <img loading="lazy" src={cert.badgeUrl} alt={cert.title} className="cert-badge-image" />
                        </a>

                        <div className="cert-body">
                            <div className="cert-row-top">
                                <div className="cert-copy">
                                    <div className="cert-meta">
                                        {renderPill(cert.issuer, "issuer")}
                                        {renderPill(cert.level)}
                                        {renderPill(cert.track)}
                                        <span className="cert-issued">Issued {cert.issued}</span>
                                    </div>
                                    <h3 className="cert-title">{cert.title}</h3>
                                </div>

                                <a
                                    href={cert.credlyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-link"
                                >
                                    Verify
                                    <span className="cert-link-arrow" aria-hidden="true">{"->"}</span>
                                </a>
                            </div>

                            <div className="cert-skills">
                                {cert.skills.map((skill) => (
                                    <span key={skill} className="cert-skill-pill">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
