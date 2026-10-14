import { useEffect, useState } from "react";

const BIRTH_TIMESTAMP = 998881445000;
const MILLISECONDS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.25;

function getAge() {
    return ((Date.now() - BIRTH_TIMESTAMP) / MILLISECONDS_PER_YEAR).toFixed(9);
}

function Age() {
    const [age, setAge] = useState(getAge);

    useEffect(() => {
        const updateAge = () => {
            setAge(getAge());
        };

        updateAge();
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const timer = setInterval(updateAge, reducedMotion ? 1000 : 100);
        return () => clearInterval(timer);
    }, []);

    return (
        <span className="t-age" title="My live age in years">
            <span aria-hidden="true">{age}</span>
            <span className="t-age-readable">{Math.floor(Number(age))}</span>
        </span>
    );
}

export default Age;
