import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
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

function Timeline() {
    return (
        <div className="timeline">
            <hr className="divider" />
            <h1 className="timeline-header">Timeline</h1>
            <VerticalTimeline lineColor="rgba(255,255,255,0.1)">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Oct 1, 2024 - Present"
                    iconStyle={{ background: '#FFD700', color: '#1a1a1a' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Technical Officer (Backend)</h3>
                    <h4 className="vertical-timeline-element-subtitle">AWS Club at UTD</h4>
                    <p>
                        Worked on backend systems for projects used in AWS Club events at UTD as an active club member.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Aug 2024 - Present (Expected Graduation: May 2026)"
                    iconStyle={{ background: '#FFD700', color: '#1a1a1a' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Master of Science in Computer Science</h3>
                    <h4 className="vertical-timeline-element-subtitle">University of Texas at Dallas</h4>
                    <p>
                        Currently pursuing MSCS. Relevant Coursework: Database Design, Algorithms, Web Programming.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Aug 2023 - Jun 2024"
                    iconStyle={{ background: '#FFD700', color: '#1a1a1a' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Software Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">PyCray Technologies, Noida, India</h4>
                    <p>
                        Led a team to design secure, high-performance APIs for an algorithmic trading platform and integrated real-time stock data streaming using Python and AWS services.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May 2023 - July 2023"
                    iconStyle={{ background: '#FFD700', color: '#1a1a1a' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">PyCray Technologies, Noida, India</h4>
                    <p>
                        Enhanced search features for a carpooling app using Elasticsearch and automated Telegram message broadcasting with Selenium.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="August 2019 - May 2023"
                    iconStyle={{ background: '#FFD700', color: '#1a1a1a' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Engineering in Computer Science</h3>
                    <h4 className="vertical-timeline-element-subtitle">University of Mumbai</h4>
                    <p>
                        Developed key projects like FlixTime and Hand Sign Recognition.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Timeline;
