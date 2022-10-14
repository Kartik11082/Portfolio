import "./Projects.css";

function Projects() {
  const projectList = [
    {
      title: "Attendance Manager",
      description:
        "Attendance Manager is a simple Python-powered application which helps teachers in managing online lecture attendance in a easier way. ",
      image: "../../img/attendanceManager.jpg",
      url: "https://github.com/Kartik11082/Attendance-Manager",
    },
    {
      title: "Stacksearch",
      description: "CLI tool for searching in Stack Exchange ",
      image: "https://picsum.photos/200",
      url: "https://github.com/Kartik11082/Stacksearch",
    },
    {
      title: "Student Management",
      description: "Project on Student Management System",
      image: "https://picsum.photos/200",
      url: "https://github.com/Kartik11082/Student-Management",
    },
    {
      title: "Noting",
      description:
        "Noting is a Web Application with User authentication for maintaining Notes/Tasks ",
      image: "https://picsum.photos/200",
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
          {projectList.map((project) => {
            return (
              <li className="project" key={project.title}>
                <a href={project.url} target={"_blank"} rel="noreferrer">
                  <h2>{project.title}</h2>
                  {/* <p>{project.description}</p> */}
                  <img
                    src={require("../../img/attendanceManager.png")}
                    alt={project.title}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Projects;
