import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";

const WorkIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const SchoolIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 10V15C22.0016 16.3197 21.5796 17.6083 20.803 18.6534C20.0264 19.6985 18.9416 20.4382 17.7275 20.7513C16.5133 21.0644 15.242 20.9324 14.12 20.377" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 10L12 5L2 10L12 15L22 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 12V17C6 17.5304 6.21071 18.0391 6.58579 18.4142C6.96086 18.7893 7.46957 19 8 19H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const TIMELINE_ITEMS = [
    {
        type: "work",
        title: "Technical Officer (Backend)",
        org: "AWS Club at UTD",
        dateLabel: "Oct 1, 2024 - Present",
        isCurrent: true,
        summary: "Build backend systems for projects used in AWS Club event workflows and technical demonstrations at UTD."
    },
    {
        type: "education",
        title: "Master of Science in Computer Science",
        org: "University of Texas at Dallas",
        dateLabel: "Aug 2024 - Present",
        isCurrent: true,
        summary: "Currently pursuing MSCS with expected graduation in May 2026, focused on databases, algorithms, and web systems."
    },
    {
        type: "work",
        title: "Software Developer",
        org: "PyCray Technologies, Noida, India",
        dateLabel: "Aug 2023 - Jun 2024",
        isCurrent: false,
        summary: "Designed secure high-performance APIs for an algorithmic trading product and integrated real-time market data pipelines on AWS."
    },
    {
        type: "work",
        title: "Software Developer Intern",
        org: "PyCray Technologies, Noida, India",
        dateLabel: "May 2023 - Jul 2023",
        isCurrent: false,
        summary: "Improved production search quality with Elasticsearch and automated operational messaging workflows."
    },
    {
        type: "education",
        title: "Bachelor of Engineering in Computer Science",
        org: "University of Mumbai",
        dateLabel: "Aug 2019 - May 2023",
        isCurrent: false,
        summary: "Built and deployed course and capstone projects including recommendation and computer vision systems."
    }
];

function Timeline() {
    return (
        <div className="timeline">
            <h2 className="timeline-header">Timeline</h2>
            <VerticalTimeline lineColor="rgba(255,255,255,0.14)">
                {TIMELINE_ITEMS.map((item) => (
                    <VerticalTimelineElement
                        key={`${item.title}-${item.dateLabel}`}
                        className={`vertical-timeline-element--${item.type}`}
                        date={
                            <span className={`timeline-date-label ${item.isCurrent ? "is-current" : ""}`}>
                                {item.dateLabel}
                            </span>
                        }
                        iconStyle={{ background: "#F6C453", color: "#1a1a1a" }}
                        icon={item.type === "work" ? <WorkIcon /> : <SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{item.org}</h4>
                        <p>{item.summary}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}

export default Timeline;
