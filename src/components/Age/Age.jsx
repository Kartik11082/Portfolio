import { useEffect, useState } from "react";

const BIRTH_TIMESTAMP = 998881445000;

function Age() {
    const [age, setAge] = useState("0.000000000");

    useEffect(() => {
        const updateAge = () => {
            const now = Date.now();
            const years = (now - BIRTH_TIMESTAMP) / (1000 * 60 * 60 * 24 * 365.25);
            setAge(years.toFixed(9));
        };

        updateAge();
        const timer = setInterval(updateAge, 100);
        return () => clearInterval(timer);
    }, []);

    return <span className="t-age">{age}</span>;
}

export default Age;
