import { useEffect, useState } from "react";
import "./Age.css";

const BIRTH_TIMESTAMP = 998881445000;

function Age() {
    const [age, setAge] = useState("0.0000000000");

    useEffect(() => {
        const updateAge = () => {
            const now = Date.now();
            const years = (now - BIRTH_TIMESTAMP) / (1000 * 60 * 60 * 24 * 365.25);
            setAge(years.toFixed(10));
        };

        updateAge();
        const timer = setInterval(updateAge, 100);
        return () => clearInterval(timer);
    }, []);

    return (
        <p className="age-line">
            I am a <span className="age-number">{age}</span> year old developer with experience in
            <span className="skill-highlight python"> Python</span>,
            <span className="skill-highlight sql"> SQL</span>,
            <span className="skill-highlight pyspark"> PySpark</span>,
            <span className="skill-highlight aws"> AWS</span>,
            <span className="skill-highlight react"> React</span>, and
            <span className="skill-highlight fastapi"> FastAPI</span>.
        </p>
    );
}

export default Age;
