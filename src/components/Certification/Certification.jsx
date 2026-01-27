import DEAAWSBadge from "../../assets/AWSDEACO1Badge.png";
import SAAAWSBadge from "../../assets/AWSSAABadge.png";
import DatabricksSparkBadge from "../../assets/DatabricksBadge.png";
import "./Certification.css"


const certifications = [
    {
        title: "AWS Certified Solutions Architect - Associate",
        issuer: "Amazon Web Services",
        badgeUrl: SAAAWSBadge,
        credlyLink: "https://www.credly.com/badges/b15fddf3-6766-433e-b48c-aaceff853a53/public_url"
    },
    {
        title: "AWS Certified Data Engineer - Associate",
        issuer: "Amazon Web Services",
        badgeUrl: DEAAWSBadge,
        credlyLink: "https://www.credly.com/badges/8adf2868-1640-4895-95ec-7a0e9704d1d1/public_url"
    },
    {
        title: "Databricks Certified Associate Developer for Apache Spark",
        issuer: "Databricks",
        badgeUrl: DatabricksSparkBadge,
        credlyLink: "https://credentials.databricks.com/75f367a3-cf8c-45ce-b39d-c3384487bf9d#acc.JibSoBl7"
    }
];

const Certifications = () => {
    return (
        <>
            <div className="certs-container">
                <hr />
                <h2 className="section-title">Certifications</h2>
                <div className="cert-card-container">
                    {certifications.map((cert, index) => (
                        <div className="cert-card" key={index}>
                            <a
                                href={cert.credlyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cert-card-image"
                            >
                                <img src={cert.badgeUrl} alt={cert.title} />
                            </a>
                            <div className="cert-card-title">
                                <h3>{cert.title}</h3>
                                <p>{cert.issuer}</p>
                                <a
                                    href={cert.credlyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-btn"
                                >
                                    View Credly
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Certifications;
