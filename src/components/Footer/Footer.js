import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <p>
          Check out my{" "}
          <a
            target={"_blank"}
            rel="noreferrer"
            href="#"
            // href="https://drive.google.com/file/d/1dunuKPYd7Ytf166pan8DRrFNqeEWKjaO/view?usp=drive_link"
          >
            Resume
          </a>{" "}
          and{" "}
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://github.com/Kartik11082"
          >
            GitHub
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;
