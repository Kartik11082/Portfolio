import { useEffect, useRef, useState } from "react";
import "./Timeline.css";

const TIMELINE_GROUPS = [
    {
        entry: {
            type: "education",
            title: "Master of Science in Computer Science",
            org: "University of Texas at Dallas",
            date: "Aug 2024 - Present",
            isCurrent: true,
            summary: "Pursuing MSCS (graduating May 2026), focused on databases, algorithms, and web systems.",
        },
        branches: [
            {
                type: "work",
                title: "Grader - Computer Architecture",
                org: "Prof. Alice Wang · UTD",
                date: "Jan 2025 - Present",
                isCurrent: true,
            },
            {
                type: "work",
                title: "Technical Officer (Backend)",
                org: "AWS Club at UTD",
                date: "Oct 2024 - Present",
                isCurrent: true,
            },
        ],
    },
    {
        entry: {
            type: "work",
            title: "Software Developer",
            org: "PyCray Technologies · Noida, India",
            date: "Aug 2023 - Jun 2024",
            isCurrent: false,
            summary: "Designed secure high-performance APIs for an algorithmic trading product and integrated real-time market data pipelines on AWS.",
        },
    },
    {
        entry: {
            type: "work",
            title: "Software Developer Intern",
            org: "PyCray Technologies · Noida, India",
            date: "May 2023 - Jul 2023",
            isCurrent: false,
            summary: "Improved production search quality with Elasticsearch and automated operational messaging workflows.",
        },
    },
    {
        entry: {
            type: "education",
            title: "Bachelor of Engineering in Computer Science",
            org: "University of Mumbai",
            date: "Aug 2019 - May 2023",
            isCurrent: false,
            summary: "Built and deployed course and capstone projects including recommendation and computer vision systems.",
        },
    },
];

function renderMeta(entry, compact = false) {
    return (
        <div className={`tl-meta ${compact ? "tl-meta-compact" : ""}`}>
            <span className={`tl-tag tl-tag-${entry.type}`}>
                {entry.type === "work" ? "Work" : "Education"}
            </span>
            {entry.isCurrent && <span className="tl-now">Now</span>}
            <span className="tl-date">{entry.date}</span>
        </div>
    );
}

function renderEntry(entry) {
    return (
        <>
            {renderMeta(entry)}
            <h3 className="tl-title">{entry.title}</h3>
            <p className="tl-org">{entry.org}</p>
            <p className="tl-summary">{entry.summary}</p>
        </>
    );
}

function renderBranch(entry, key) {
    return (
        <article className={`tl-branch-card ${entry.isCurrent ? "tl-branch-card-current" : ""}`} key={key}>
            <span className="tl-branch-anchor" aria-hidden="true" />
            {renderMeta(entry, true)}
            <h4 className="tl-branch-title">{entry.title}</h4>
            <p className="tl-branch-org">{entry.org}</p>
        </article>
    );
}

function renderBranchNetwork(layout) {
    return (
        <svg
            className="tl-group-network"
            viewBox={`0 0 ${layout.width} ${layout.height}`}
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="tl-branch-stroke" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(159, 196, 163, 0.18)" />
                    <stop offset="45%" stopColor="rgba(159, 196, 163, 0.34)" />
                    <stop offset="100%" stopColor="rgba(184, 203, 185, 0.24)" />
                </linearGradient>
            </defs>
            {layout.targets.map((target, index) => {
                const deltaX = target.x - layout.start.x;
                const deltaY = layout.start.y - target.y;
                const controlLift = Math.max(34, deltaY * 0.58);
                const controlSpread = Math.max(26, deltaX * 0.34);
                const controlX1 = layout.start.x;
                const controlY1 = layout.start.y - controlLift;
                const controlX2 = target.x - controlSpread;
                const controlY2 = target.y + Math.max(14, controlLift * 0.26);

                return (
                    <path
                        key={`curve-${index}`}
                        d={`M ${layout.start.x} ${layout.start.y} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${target.x} ${target.y}`}
                    />
                );
            })}
        </svg>
    );
}

function Timeline() {
    const groupRefs = useRef([]);
    const frameRef = useRef(null);
    const [branchLayouts, setBranchLayouts] = useState({});

    useEffect(() => {
        const measureBranches = () => {
            const nextLayouts = {};

            groupRefs.current.forEach((groupElement, index) => {
                if (!groupElement) {
                    return;
                }

                const mainDot = groupElement.querySelector(".tl-main-dot");
                const branchAnchors = Array.from(groupElement.querySelectorAll(".tl-branch-anchor"));

                if (!mainDot || branchAnchors.length === 0) {
                    return;
                }

                const groupRect = groupElement.getBoundingClientRect();
                const dotRect = mainDot.getBoundingClientRect();

                nextLayouts[index] = {
                    width: groupRect.width,
                    height: groupRect.height,
                    start: {
                        x: dotRect.left - groupRect.left + dotRect.width / 2,
                        y: dotRect.top - groupRect.top + dotRect.height / 2,
                    },
                    targets: branchAnchors.map((anchor) => {
                        const anchorRect = anchor.getBoundingClientRect();

                        return {
                            x: anchorRect.left - groupRect.left + anchorRect.width / 2,
                            y: anchorRect.top - groupRect.top + anchorRect.height / 2,
                        };
                    }),
                };
            });

            setBranchLayouts(nextLayouts);
        };

        const scheduleMeasure = () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }

            frameRef.current = requestAnimationFrame(measureBranches);
        };

        scheduleMeasure();

        const resizeObserver = typeof ResizeObserver !== "undefined"
            ? new ResizeObserver(scheduleMeasure)
            : null;

        groupRefs.current.forEach((groupElement) => {
            if (groupElement && resizeObserver) {
                resizeObserver.observe(groupElement);
            }
        });

        window.addEventListener("resize", scheduleMeasure);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }

            window.removeEventListener("resize", scheduleMeasure);

            if (resizeObserver) {
                resizeObserver.disconnect();
            }
        };
    }, []);

    return (
        <div className="tl-shell">
            <h2 className="tl-heading">Experience &amp; Education</h2>
            <div className="tl-list">
                {TIMELINE_GROUPS.map((group, index) => {
                    const hasBranches = Array.isArray(group.branches) && group.branches.length > 0;
                    const isLast = index === TIMELINE_GROUPS.length - 1;

                    return (
                        <section
                            key={group.entry.title}
                            className={`tl-group ${hasBranches ? "tl-group-branched" : ""}`}
                            ref={(element) => {
                                groupRefs.current[index] = element;
                            }}
                        >
                            {hasBranches && branchLayouts[index] && renderBranchNetwork(branchLayouts[index])}

                            {hasBranches && (
                                <div className="tl-branch-row">
                                    <div className="tl-branch-gutter">
                                        <span className="tl-branch-gutter-line" />
                                    </div>
                                    <div
                                        className="tl-branch-grid"
                                        style={{ "--branch-count": group.branches.length }}
                                    >
                                        {group.branches.map((branch) => renderBranch(branch, branch.title))}
                                    </div>
                                </div>
                            )}

                            <div className="tl-entry">
                                <div className={`tl-gutter ${hasBranches ? "tl-gutter-joined" : ""}`}>
                                    <span className={`tl-dot tl-main-dot ${group.entry.isCurrent ? "tl-dot-active" : ""}`} />
                                    {!isLast && <span className="tl-connector" />}
                                </div>
                                <div className={`tl-body ${!isLast ? "tl-body-spaced" : ""}`}>
                                    {renderEntry(group.entry)}
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}

export default Timeline;
