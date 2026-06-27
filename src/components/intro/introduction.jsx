import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail, SiLeetcode, SiMedium } from "react-icons/si";
import "./introduction.css";

const Intro = () => {
  return (
    <>
      <div className="main">
        <div className="main-left">
          <div className="Name-box">
            <p className="name-hello">Hello, I am</p>
            <h1 className="name">Ashish Kumar</h1>
            <h2 className="sr-only">Frontend Engineer</h2>
            <div className="title">
              <div className="title-wrapper">
                <h3 className="title-item">Web Development</h3>
                <h3 className="title-item">Software Development</h3>
                <h3 className="title-item">Frontend Engineering</h3>
                <h3 className="title-item">Problem Solving</h3>
                <h3 className="title-item">Programming</h3>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <span className="icons">
              <a
                href="https://www.linkedin.com/in/ashish-kumar-4566211a3"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#000000" }}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/DeveloperAshish8"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#000000" }}
              >
                <FaGithub />
              </a>
              <a
                href="https://medium.com/@ashish-4"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#000000" }}
              >
                <SiMedium />
              </a>
              <a
                href="mailto:augashish4@gmail.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#000000" }}
              >
                <SiGmail />
              </a>
            </span>
          </div>
        </div>
        <div className="main-right">
          <img
            draggable="false"
            src="/heroImage.webp"
            alt="Developer Image"
            className="right-image"
          />
        </div>
      </div>
    </>
  );
};
export default Intro;
