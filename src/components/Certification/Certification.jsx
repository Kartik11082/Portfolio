import AWSBadge from "../../assets/AWSSAABadge.png";
import "./Certification.css"


const certifications = [
    {
        title: "AWS Certified Solutions Architect – Associate",
        issuer: "Amazon Web Services",
        badgeUrl: AWSBadge,
        credlyLink: "https://www.credly.com/badges/b15fddf3-6766-433e-b48c-aaceff853a53/public_url"
    },
    // {
    //     title: "Databricks Certified Data Engineer Associate",
    //     issuer: "Databricks",
    //     badgeUrl: "https://images.credly.com/size/340x340/images/456.png",
    //     credlyLink: "https://www.credly.com/badges/your-databricks-link"
    // }
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Certifications;
