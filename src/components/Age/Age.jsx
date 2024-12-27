import { useEffect, useState } from "react";
import "./Age.css";

function Age() {
    const [age, setAge] = useState(""); // State to store the calculated age

    useEffect(() => {
        const calculateAge = () => {
            const birthDate = new Date(998881445000); // Birthdate in milliseconds
            const currentDate = new Date();
            const timeDifference = currentDate - birthDate; // Time difference in milliseconds

            // Convert the time difference to years
            const years = timeDifference / (1000 * 60 * 60 * 24 * 365.25);
            const ageText = `I am a ${years.toFixed(10)} years old developer who has experience in `;

            setAge(ageText); // Set age text
        };

        calculateAge(); // Initial calculation

        const intervalId = setInterval(() => {
            calculateAge(); // Recalculate age every second
        }, 100); // Update age every second

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <div className="age" id="age">
                {age}
                <br></br>
                <span className="python">Python, </span>
                <span className="sql">SQL</span>, and
                <span className="aws"> AWS</span>
            </div>
        </div>
    );
}

export default Age;
