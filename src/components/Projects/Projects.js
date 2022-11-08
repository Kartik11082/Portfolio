import "./Projects.css";
import uiPNG from "../../icons/ui.png";
import wwwPNG from "../../icons/www.png";
import terminalPNG from "../../icons/terminal.png";

function Projects() {
  const pythonProjectList = [
    {
      title: "Attendance Manager",
      description: "Python application for managing online lecture attendance",
      url: "https://github.com/Kartik11082/Attendance-Manager",
      icon: uiPNG,
    },
    {
      title: "Stacksearch",
      description: "CLI tool for searching in Stack Exchange ",
      url: "https://github.com/Kartik11082/Stacksearch",
      icon: terminalPNG,
    },
    {
      title: "Student Management",
      description: "Project on Student Management System",
      url: "https://github.com/Kartik11082/Student-Management",
      icon: uiPNG,
    },
    {
      title: "Noting",
      description:
        "Web Application with User authentication for maintaining notes",
      url: "https://kartik110.pythonanywhere.com/",
      icon: wwwPNG,
    },
  ];

  const JsProjectList = [
    {
      title: "Landing Page",
      description: "Website made in React ",
      url: "https://kcproject11.web.app/",
      icon: wwwPNG,
    },
    {
      title: "Qontests",
      description: "React project using Kontests Api",
      url: "https://kontestsapi.web.app/",
      icon: wwwPNG,
    },
  ];

  return (
    <>
      <div className="projects">
        I have made projects in Python and Javascript.
        <br />
        {/* downward arrow */}
        <div className="arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="60"
            fill="currentColor"
            className="bi bi-arrow-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 4.5a.5.5 0 0 1 .5.5v6.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 11.293V4.5a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        </div>
      </div>
      <div>
        <ul className="pythonProjectList">
          {pythonProjectList.map((project) => {
            return (
              <a
                href={project.url}
                target={"_blank"}
                rel="noreferrer"
                key={project.title}
              >
                <li className="project">
                  {/* <img src={project.icon} alt="icon" /> */}
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
      <div>
        <ul className="jsProjectList">
          {JsProjectList.map((project) => {
            return (
              <a
                href={project.url}
                target={"_blank"}
                rel="noreferrer"
                key={project.title}
              >
                <li className="project">
                  {/* <img src={project.icon} alt="icon" /> */}
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
