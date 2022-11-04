import { useEffect } from "react";
import "./Age.css";

function Age() {
  useEffect(() => {
    let ageEl = document.getElementById("age");
    setInterval(() => {
      let time =
        (new Date() - new Date(998881445000)) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
      ageEl.innerText = ` I am a ${time.toString().substring(0, 12)} old programmer`;
    }, 50);
  }, []);

  return (
    <>
      <div className="age" id="age">
        21
      </div>
    </>
  );
}

export default Age;
