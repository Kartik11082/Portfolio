import "./Projects.css";

function Projects() {
  const pythonProjectList = [
    {
      title: "Attendance Manager",
      description: "Python application for managing online lecture attendance",
      url: "https://github.com/Kartik11082/Attendance-Manager",
    },
    {
      title: "Stacksearch",
      description: "CLI tool for searching in Stack Exchange ",
      url: "https://github.com/Kartik11082/Stacksearch",
    },
    {
      title: "Student Management",
      description: "Project on Student Management System",
      url: "https://github.com/Kartik11082/Student-Management",
    },
    {
      title: "Noting",
      description:
        "Web Application with User authentication for maintaining notes",
      url: "https://kartik110.pythonanywhere.com/",
    },
  ];

  const projectList = [
    {
      title: "Attendance Manager",
      description: "Python application for managing online lecture attendance",
      url: "https://github.com/Kartik11082/Attendance-Manager",
    },
    {
      title: "Stacksearch",
      description: "CLI tool for searching in Stack Exchange ",
      url: "https://github.com/Kartik11082/Stacksearch",
    },
    {
      title: "Student Management",
      description: "Project on Student Management System",
      url: "https://github.com/Kartik11082/Student-Management",
    },
    {
      title: "Noting",
      description:
        "Web Application with User authentication for maintaining notes",
      url: "https://kartik110.pythonanywhere.com/",
    },
  ];

  return (
    <>
      <div className="projects">
        I have made projects in Python and javascript.
      </div>
      <div>
        <ul className="projectList">
          {pythonProjectList.map((project) => {
            return (
              <a
                href={project.url}
                target={"_blank"}
                rel="noreferrer"
                key={project.title}
              >
                <li className="project">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Projects;
