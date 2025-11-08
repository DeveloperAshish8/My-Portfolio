import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";
import "./introduction.css";

const Intro = () => {
  return (
    <>
      <div className="main">
        <div className="main-left">
          <div className="Name-box">
            <h2 className="name-hello">Hello, I am</h2>
            <h1 className="name">Ashish Kumar</h1>
            <div className="title">
              <div className="title-wrapper">
                <div className="title-item">Web Development</div>
                <div className="title-item">Software Development</div>
                <div className="title-item">Engineering</div>
                <div className="title-item">Problem Solving</div>
                <div className="title-item">Programming</div>
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
                href="https://leetcode.com/u/ash__ish/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#000000" }}
              >
                <SiLeetcode />
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
            src="/heroImage.png"
            alt="Image"
            className="right-image"
          />
        </div>
      </div>
    </>
  );
};
export default Intro;
