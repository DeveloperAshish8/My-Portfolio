import "./about.css";

import StageImage from "./../../Image/StageImage.jpeg";
import ExpImage from "./../../Image/experience.png";
import EduImage from "./../../Image/education.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="about" id="about">
      <h2 className="heading-about">
        About <span>Me</span>
      </h2>

      <div className="row">
        <div className="image" data-aos="fade-zoom-out">
          <img src={StageImage} alt="Image" />
        </div>
        <div className="content">
          <h3 className="MyName">I'm Ashish</h3>
          <span className="tag">
            Passionate Frontend Developer | Programming Geek
          </span>

          <div className="about-container" data-aos="fade-zoom-out">
            <div className="detail-container">
              <img src={ExpImage} alt="Experience Image" />
              <h3>College</h3>
              <p>BCE Patna</p>
            </div>
            <div className="detail-container">
              <img src={EduImage} alt="Education Image" />
              <h3>Education</h3>
              <p>B.Tech Computer Science </p>
            </div>
          </div>
          <p>
            A computer science student who embodies the spirit of exploration,
            the hunger for knowledge, and the unwavering passion for the
            limitless possibilities of the digital frontier.
            <br />
            Lead a technical community of 2,500+ developers named{" "}
            <a href="https://codechampcommunity.vercel.app/">CodeChamp</a>.
            <br />
            <br />
            With an innate passion for both design and code, I transform
            imagination into captivating reality, forging seamless user
            interfaces and immersive experiences that leave visitors spellbound
            <br />I am a self-taught developer with a passion for web
            development, problem solving and have solved <b>400+</b> problems
            (LeetCode).
            <br />
            <b>
              Get my{" "}
              <a href="Ashish_Resume.pdf" target="_blank" download>
                Resume
              </a>{" "}
              here.
            </b>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
