import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Timeline.css";

function Timeline() {
    return (
        <div className="timeline">
            <hr style={{ borderColor: '#666' }}></hr>
            <h1 style={{ color: '#e0e0e0' }}>Timeline</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(45, 45, 45)', color: 'rgb(255, 255, 255)' }}
                    date="May 2026 - Present"
                    iconStyle={{ background: 'rgb(45, 45, 45)', color: '#ffffff' }}
                >
                    <h3 className="vertical-timeline-element-title">Master of Science in Computer Science</h3>
                    <h4 className="vertical-timeline-element-subtitle">University of Texas at Dallas</h4>
                    <p>
                        Relevant Coursework: Database Design, Algorithms, Web Programming
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(45, 45, 45)', color: 'rgb(255, 255, 255)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(30, 30, 30)' }}
                    date="Aug 2023 - Jun 2024"
                    iconStyle={{ background: 'rgb(45, 45, 45)', color: '#ffffff' }}
                >
                    <h3 className="vertical-timeline-element-title">Software Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">PyCray Technologies, Noida, India</h4>
                    <p>
                        Led a team to design secure, high-performance APIs for an algorithmic trading platform and integrated real-time stock data streaming using Python and AWS services.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(45, 45, 45)', color: 'rgb(255, 255, 255)' }}
                    date="May 2023 - Aug 2023"
                    iconStyle={{ background: 'rgb(45, 45, 45)', color: '#ffffff' }}
                >
                    <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">PyCray Technologies, Noida, India</h4>
                    <p>
                        Enhanced search features for a carpooling app using Elasticsearch and automated Telegram group management with Selenium.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(45, 45, 45)', color: 'rgb(255, 255, 255)' }}
                    date="August 2019 - August 2023"
                    iconStyle={{ background: 'rgb(45, 45, 45)', color: '#ffffff' }}
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
