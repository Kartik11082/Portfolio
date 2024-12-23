import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Project 1",
            description: "A brief description of Project 1",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vespa_PX_150.jpg/1280px-Vespa_PX_150.jpg",
            link: "google.com",
        },
        {
            id: 2,
            title: "Project 2",
            description: "A brief description of Project 2",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vespa_PX_150.jpg/1280px-Vespa_PX_150.jpg",
            link: "https://example.com/project2",
        },
        {
            id: 3,
            title: "Project 3",
            description: "A brief description of Project 3",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vespa_PX_150.jpg/1280px-Vespa_PX_150.jpg",
            link: "https://example.com/project3",
        },
        {
            id: 4,
            title: "Project 4",
            description: "A brief description of Project 4",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vespa_PX_150.jpg/1280px-Vespa_PX_150.jpg",
            link: "https://example.com/project4",
        },
        {
            id: 5,
            title: "Project 4",
            description: "A brief description of Project 4",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vespa_PX_150.jpg/1280px-Vespa_PX_150.jpg",
            link: "https://example.com/project4",
        },
        {
            id: 6,
            title: "Project 4",
            description: "A brief description of Project 4",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vespa_PX_150.jpg/1280px-Vespa_PX_150.jpg",
            link: "https://example.com/project4",
        },
    ];

    return (
        <>
            <div className="projects">
                <h1>Projects</h1>
                <div className="grid-container">
                    {projects.map((project) => (
                        <div key={project.id} className="grid-item">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                <div
                                    className="thumbnail"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                            </a>
                            <div className="grid-item-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;
